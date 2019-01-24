import React,{ Component } from 'react';
import { Container } from 'reactstrap';

import './css/resume.scss'
import Resume from './resume.jsx'

const keywords = require('../static/keywords.json');

class ResumePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input:'',
      autocomplete:'',
      iter:0,
      delay:0,
      start:0,
      intervalId:'',
      typewriterActive:true,
      inputBorderStyle
    };
    this.input = React.createRef();
    this.inputShadow = React.createRef();
    this.autocomplete = React.createRef();
    this.handleChange = this.handleChange.bind(this);
    this.typewriter = this.typewriter.bind(this);
    this.stopTypewriter = this.stopTypewriter.bind(this);
    this.calculateBorder = this.calculateBorder.bind(this);
    this.suggestAutocomplete = this.suggestAutocomplete.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
  }
  componentDidMount(){
    const intervalId = setInterval(this.typewriter,100);
    this.setState({intervalId});
  }
  typewriter(){
    if (this.state.start === 10){
      this.input.current.focus();
      const cur = this.state.input;
      const iter = this.state.iter;
      if (iter !== inputPlaceholders.length){
        const target = inputPlaceholders[iter];
        const diff = target.length - cur.length;
        if (diff !== 0){
          const next = target.substring(0,cur.length+1);
          this.handleChange({target:{value:next}});
        }
        else {
          this.setState({delay:this.state.delay+1});
          if (this.state.delay === 8){
            this.setState({
              delay:0,
              iter:this.state.iter+1
            });
            this.handleChange({target:{value:''}});
          }
        }
      }
      else {
        this.stopTypewriter();
      }
    }
    else {
      this.setState({start:this.state.start+1});
    }
  }
  stopTypewriter(){
    clearInterval(this.state.intervalId);
    this.setState({typewriterActive:false});
    setTimeout(this.calculateBorder,20);
    setTimeout(this.suggestAutocomplete,10);
  }
  handleChange(e){
    const val = e.target.value.toLowerCase();
    this.setState({input:val})
    setTimeout(this.calculateBorder,20);
    if (!this.state.typewriterActive){
      setTimeout(this.suggestAutocomplete,10);
    }
  }
  handleKeyUp(e){
    const complete = ['Tab','Enter']
    if (this.state.autocomplete !== 'type something'){
      if (complete.indexOf(e.key) !== -1){
        e.preventDefault();
        this.handleChange({target:{value:this.state.autocomplete}})
      }
      else if (e.key === 'ArrowRight' && this.input.current.selectionEnd === this.state.input.length){
          e.preventDefault();
          this.handleChange({target:{value:this.state.autocomplete}})
      }
    }
  }
  suggestAutocomplete(){
    const val = this.state.input;
    if (val === ''){
      this.setState({autocomplete:'type something'});
    }
    else {
      const res = keywords.filter(word => word.indexOf(val) === 0).shift();
      if (res) {
        this.setState({autocomplete:res});
      }
      else {
        this.setState({autocomplete:''});
      }
    }
  }
  calculateBorder(){
    let textWidth;
    if (!this.state.typewriterActive && textWidth === '0px'){
      textWidth = getComputedStyle(this.autocomplete.current)['width'];
    }
    else {
      textWidth = getComputedStyle(this.inputShadow.current)['width'];
    }
    this.setState({
      inputBorderStyle: Object.assign({},this.state.inputBorderStyle,{width:textWidth})
    })
  }
  render(){
    return(
      <div>
        <div className="header">
          <Container>
            <div className="hero">
              <p>HELLO</p>
              <h1>My name is Stephen Ng.</h1>
              <h1>I'm a Computer Science major</h1>
              <h1>in the Renaissance Engineering Programme.</h1>
              <div className="input-container">
                <span>I do&nbsp;</span>
                <div className="input-border">
                  <span
                    style={{opacity:'0',position:"absolute",zIndex:'-1'}}
                    ref={this.inputShadow}
                    >{this.state.input}</span>
                  <span
                    style={{opacity:'0.5',position:"absolute",zIndex:'-1'}}
                    ref={this.autocomplete}
                    >{this.state.autocomplete}</span>
                  <input
                    type="text"
                    value={this.state.input}
                    onKeyDown={this.handleKeyUp}
                    onChange={this.handleChange}
                    onClick={this.stopTypewriter}
                    ref={this.input}
                    />
                  <div style={this.state.inputBorderStyle}></div>
                </div>
              </div>
            </div>
          </Container>
        </div>
        <Container>
          <Resume filter={this.state.input}/>
        </Container>
      </div>
    )
  }
}

export default ResumePage;

const inputPlaceholders=[
  'apps',
  'blockchain',
  'consulting',
  'java'
]
const inputBorderStyle={
    content: "",
    position: 'absolute',
    bottom: '-2px',
    height: '2px',
    background: '#222',
}
