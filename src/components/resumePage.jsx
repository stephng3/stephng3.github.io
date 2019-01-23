import React,{ Component } from 'react';
import { Container } from 'reactstrap';

import './css/resume.scss'
import Resume from './resume.jsx'

class ResumePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input:inputBase,
      iter:0,
      delay:0,
      start:0,
      intervalId:''
    };
    this.input = React.createRef();
    this.handleChange = this.handleChange.bind(this);
    this.typewriter = this.typewriter.bind(this);
    this.stopTypewriter = this.stopTypewriter.bind(this);
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
        const target = inputBase + inputPlaceholders[iter];
        const diff = target.length - cur.length;
        if (diff !== 0){
          const next = target.substring(0,cur.length+1);
          this.setState({input:next});
        }
        else {
          this.setState({delay:this.state.delay+1});
          if (this.state.delay === 8){
            this.setState({
              delay:0,
              input:inputBase,
              iter:this.state.iter+1
            });
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
  }
  handleChange(e){
    const val = e.target.value;
    if (val.length >= inputBase.length){
      this.setState({input: e.target.value});
    }
    else {
      this.setState({input:inputBase})
    }
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
              <input
                type="text"
                value={this.state.input}
                onChange={this.handleChange}
                onClick={this.stopTypewriter}
                ref={this.input}
                />
            </div>
          </Container>
        </div>
        <Container>
          <Resume filter={this.state.input.substring(inputBase.length)}/>
        </Container>
      </div>
    )
  }
}

export default ResumePage;

const inputBase = 'I do ';
const inputPlaceholders=[
  'apps',
  'blockchain',
  'javascript',
  'consulting'
]
