(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{138:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),o=a(156),r=(a(36),a(7)),s=a.n(r),l=a(53),c=a.n(l),u=(a(173),a(175),a(52),a(91),a(177),a(182),a(183),a(80),a(194)),d=(a(186),a(187),a(195)),p=a(196),m=function(e){var t=e.item;return i.a.createElement("div",{className:"resume-item"},i.a.createElement(d.a,null,i.a.createElement(p.a,{sm:"4",className:"resume-left"},i.a.createElement("p",{className:"title"},t.title),i.a.createElement("p",{className:"subtitle"},t.subtitle),i.a.createElement("p",{className:"duration"},t.duration)),i.a.createElement(p.a,{sm:"8",className:"resume-right"},t.bullets.map(function(e,t){return i.a.createElement("p",{key:t},e)}))))},h=function(e){var t=e.category,a=e.items;return i.a.createElement("div",{className:"resume-section"},i.a.createElement(d.a,null,i.a.createElement("p",{className:"section-title"},t)),a.map(function(e,t){return i.a.createElement(m,{item:e,key:t})}))},g=a(155);var y=function(e){var t=function(e){return g.items.filter(function(t){return function(e,t){return 0!==[e.category].concat(e.keywords).filter(function(e){return 0===e.indexOf(t)}).length}(t,e)})}(e.filter);0===t.length&&(t=g.items);var a=Object.entries(t.reduce(function(e,t){return e[t.category]||(e[t.category]=[]),e[t.category].push(t),e},{}));return i.a.createElement("div",null,a.map(function(e,t){return i.a.createElement(h,{category:e[0],items:e[1],key:t})}))},f=a(155),b=a(190),v=f.items.map(function(e){return e.keywords}).reduce(function(e,t){var a=t,n=Array.isArray(a),i=0;for(a=n?a:a[Symbol.iterator]();;){var o;if(n){if(i>=a.length)break;o=a[i++]}else{if((i=a.next()).done)break;o=i.value}var r=o;e.add(r)}return e},new Set);v=Array.from(v).sort(function(e,t){return e.length-t.length});var w=function(e){return function(e){var t,a,n;for(n=e.length-1;n>0;n--)t=Math.floor(Math.random()*(n+1)),a=e[n],e[n]=e[t],e[t]=a;return e}(b).slice(0,e)},k=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={input:"",autocomplete:"",iter:0,delay:0,start:0,intervalId:"",typewriterActive:!0,inputBorderStyle:E},a.input=i.a.createRef(),a.inputShadow=i.a.createRef(),a.autocomplete=i.a.createRef(),a.handleChange=a.handleChange.bind(c()(c()(a))),a.typewriter=a.typewriter.bind(c()(c()(a))),a.stopTypewriter=a.stopTypewriter.bind(c()(c()(a))),a.calculateBorder=a.calculateBorder.bind(c()(c()(a))),a.suggestAutocomplete=a.suggestAutocomplete.bind(c()(c()(a))),a.handleKeyUp=a.handleKeyUp.bind(c()(c()(a))),a}s()(t,e);var a=t.prototype;return a.componentDidMount=function(){var e=setInterval(this.typewriter,100);this.setState({intervalId:e})},a.typewriter=function(){if(10===this.state.start){this.input.current.focus();var e=this.state.input,t=this.state.iter;if(t!==C.length){var a=C[t];if(0!==a.length-e.length){var n=a.substring(0,e.length+1);this.handleChange({target:{value:n}})}else this.setState({delay:this.state.delay+1}),8===this.state.delay&&(this.setState({delay:0,iter:this.state.iter+1}),this.handleChange({target:{value:""}}))}else this.stopTypewriter()}else this.setState({start:this.state.start+1})},a.stopTypewriter=function(){clearInterval(this.state.intervalId),this.setState({typewriterActive:!1}),setTimeout(this.calculateBorder,20),setTimeout(this.suggestAutocomplete,10)},a.handleChange=function(e){var t=e.target.value.toLowerCase();this.setState({input:t}),setTimeout(this.calculateBorder,20),this.state.typewriterActive||setTimeout(this.suggestAutocomplete,10)},a.handleKeyUp=function(e){"type something"!==this.state.autocomplete&&(-1!==["Tab","Enter"].indexOf(e.key)?(e.preventDefault(),this.handleChange({target:{value:this.state.autocomplete}})):"ArrowRight"===e.key&&this.input.current.selectionEnd===this.state.input.length&&(e.preventDefault(),this.handleChange({target:{value:this.state.autocomplete}})))},a.suggestAutocomplete=function(){var e=this.state.input;if(""===e)this.setState({autocomplete:w(5).join(", ")});else{var t=v.filter(function(t){return 0===t.indexOf(e)}).shift();t?this.setState({autocomplete:t}):this.setState({autocomplete:""})}},a.calculateBorder=function(){var e;e=this.state.typewriterActive||"0px"!==e?getComputedStyle(this.inputShadow.current).width:getComputedStyle(this.autocomplete.current).width,this.setState({inputBorderStyle:Object.assign({},this.state.inputBorderStyle,{width:e})})},a.render=function(){return i.a.createElement("div",null,i.a.createElement("div",{className:"header"},i.a.createElement(u.a,null,i.a.createElement("div",{className:"hero"},i.a.createElement("p",null,"HELLO"),i.a.createElement("h1",null,"My name is Stephen Ng."),i.a.createElement("h1",null,"I'm a Computer Science major"),i.a.createElement("h1",null,"in the Renaissance Engineering Programme."),i.a.createElement("div",{className:"input-container"},i.a.createElement("span",null,"I do "),i.a.createElement("div",{className:"input-border"},i.a.createElement("span",{style:{opacity:"0",position:"absolute",zIndex:"-1"},ref:this.inputShadow},this.state.input),i.a.createElement("span",{style:{opacity:"0.5",position:"absolute",zIndex:"-1"},ref:this.autocomplete},this.state.autocomplete),i.a.createElement("input",{type:"text",value:this.state.input,onKeyDown:this.handleKeyUp,onChange:this.handleChange,onClick:this.stopTypewriter,ref:this.input}),i.a.createElement("div",{style:this.state.inputBorderStyle})))))),i.a.createElement(u.a,null,i.a.createElement(y,{filter:this.state.input})))},t}(n.Component),C=["apps","machine learning","blockchain","consulting"],E={content:"",position:"absolute",bottom:"-2px",height:"2px",background:"#222"},S=a(148);t.default=function(){return i.a.createElement(o.a,null,i.a.createElement(S.a,{title:"Home",keywords:["gatsby","application","react","stephen","ng","singapore"]}),i.a.createElement(k,null))}},155:function(e){e.exports={items:[{title:"Yitu Technology",subtitle:"Algorithm Developer Intern (Computer Vision)",duration:"May 2019 - Aug 2019",bullets:["Improved large-angle facial detection scores by ~27% after creating a face recognition pipeline which generates frontal faces from side views by implementing and augmenting ideas from a CVPR 2019 paper","Reduced experiment run times and improved GPU utilisation rates by up to 50% by writing a python wrapper around an internal job-runner tool that automatically restarts low-priority jobs killed by scheduler","Streamlined researcher workflows, allowing direct demos of trained models by creating GUI toolkits for Jupyter"],category:"Work Experience",keywords:["machine learning","computer vision","python","jupyter","pytorch","pandas","numpy","keras","git","vim","unix","matplotlib"]},{title:"Kommerce",subtitle:"Software Developer Intern (Blockchain)",duration:"Dec 2018 - Feb 2019",bullets:["Developing trade finance solution on private Hyperledger Fabric chain with Composer, mirroring public Ethereum smart contract","Built flexible data pipelines extracting data from blockchain ledger enabling fast querying of business statistics"],category:"Work Experience",keywords:["blockchain","ethereum","hyperledger","fabric","composer","js"]},{title:"Nanyang Technological University",subtitle:"Renaissance Engineering Programme",duration:"Aug 2017 – Dec 2021 (Expected)",bullets:["Concurrent degree as Bachelor of Engineering Science (Computer Science) and Master of Science (Technology Management)","Current cGPA of 4.77/5.00 (1st Class Honours)","Awarded the Renaissance Engineering Programme Scholarship"],category:"Education",keywords:["nanyang technological university","school","computer science"]},{title:"University of California, Berkeley",subtitle:"Exchange Student",duration:"Aug 2019 – May 2020",bullets:["Concurrent Enrollment Student, Majoring in Computer Science"],category:"Education",keywords:["berkeley","school","computer science"]},{title:"MUNInc Webapp",subtitle:"Searchable directory of all MUNs in Asia (Freelance work)",duration:"Jun 2019 - Present",bullets:["MERN application allowing complex searching and filtering of all MUN events in Asia","Designed frictionless CMS for users of all technical abilities to use, by accepting and parsing excel files into MongoDB objects to update database"],category:"Projects",keywords:["web","js","mongo","express","react","node","passport","freelance"]},{title:"Mercury",subtitle:"Permissioned Blockchain in Java",duration:"Oct 2017",bullets:["Planned and wrote a permissioned blockchain protocol from scratch in Java to track airline inventory for the SIA App Challenge","Wrote API endpoints for front-end applications (Vue.js admin panel and Android app) to access and parse data","Coordinated team by planning out app components and delegating work according to skills and interests"],category:"Projects",keywords:["java","blockchain","computer science","backend","hackathon","android","websockets"]},{title:"Etch",subtitle:"Learning Application in Android Powered by Google Firebase",duration:"May 2017 – Aug 2017",bullets:["Developed an Android app for learning and retaining A level content through a special Spaced Repetition System","Designed a NoSQL schema for storing user state using denormalization principles to improve performance"],category:"Projects",keywords:["java","computer science","backend","frontend","firebase","android","apps"]},{title:"Change for Good Singapore",subtitle:"Pay-it-forward Vending Machine Social Project",duration:"Feb 2015 – May 2015",bullets:["Founded and managed a pay-it-forward social project with 6 teammates using a vending machine powered by Arduino ","Designed and deployed showcase website using materialize.css and Instagram API"],category:"Projects",keywords:["web","computer science","frontend","materialize","js"]},{title:"Business Solutions Case Club",subtitle:"Training Director",duration:"May 2018 – Present",bullets:["Developing training materials and mentoring 30 members in case consulting ","Improved the club selection process by consolidating opinions on desirable qualities and condensing them into a quantitative rubric"],category:"Extra Curricular Activities",keywords:["leadership","business case","consulting","mentoring"]},{title:"Dunman High Student Council",subtitle:"President",duration:"Apr 2013 – Apr 2014",bullets:["Created Project Collage, an annual workshop/accelerator for Student Councillors to pitch ideas, find teammates, and obtain funding ","Lead Coordinator for the 2014 Senior High Orientation (1,200 participants), enhancing work processes by introducing Matrix Management in a team of 80 organisers and managing project with a Gantt Chart"],category:"Extra Curricular Activities",keywords:["leadership","mentoring","event organisation","management"]},{title:"Hong Kong International Case Competition",subtitle:"International 2nd Runner Up",duration:"Oct 2018",bullets:["Clinched 2nd runner up against 15 other teams from universities like UC Berkeley, CBS (Denmark), and Queen’s University (Canada)","Devised a two-pronged digital strategy for a large HK department store targeting unique shopping habits of inbound mainland tourists and HK locals, with a projected NPV of 1,023 million HKD","Created value for all stakeholders in a green strategy awarding tiered labels to concessionaires practicing supply chain sustainability"],category:"Competitions",keywords:["business case","consulting"]},{title:"Singapore Business Case Competition",subtitle:"National Champion",duration:"Mar 2018",bullets:["Competed against 300 participants in Singapore’s biggest national case competition","Leveraged subject matter expertise from software engineering background to devise a recommendation on tailoring agile management techniques to a design studio ","Crafted a growth strategy for a SME based on a pivot from a B2B to B2C model"],category:"Competitions",keywords:["business case","consulting"]},{title:"Shell Mini Case Competition ",subtitle:"National 1st Runner Up",duration:"Sep 2017",bullets:["Competed against 100 other participants in Shell’s inaugural mini case competition","Deduced likely world energy landscape in 2060 through analysis of geopolitical trends and suggested Shell to enter renewables energy storage market","Planned key investment areas and milestones to achieve, producing a flexible roadmap for Shell to follow"],category:"Competitions",keywords:["business case","consulting"]}]}},186:function(e,t,a){},190:function(e){e.exports=["machine learning","blockchain","apps","python","js","java","web","android","consulting"]}}]);
//# sourceMappingURL=component---src-pages-index-js-870594ceb7be2cef89fd.js.map