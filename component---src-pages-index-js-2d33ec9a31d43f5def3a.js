(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{180:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=(n(186),n(191)),o=n(7),s=n.n(o),l=n(56),c=n.n(l),d=n(182),u=n(183),p=n(4),f=n.n(p),g=n(184),h=n.n(g),m=n(185),y={tag:m.c,fluid:f.a.bool,className:f.a.string,cssModule:f.a.object},v=function(e){var t=e.className,n=e.cssModule,a=e.fluid,r=e.tag,o=Object(u.a)(e,["className","cssModule","fluid","tag"]),s=Object(m.b)(h()(t,a?"container-fluid":"container"),n);return i.a.createElement(r,Object(d.a)({},o,{className:s}))};v.propTypes=y,v.defaultProps={tag:"div"};var w=v,E=(n(208),n(86),n(57),n(209),n(84),{tag:m.c,noGutters:f.a.bool,className:f.a.string,cssModule:f.a.object,form:f.a.bool}),j=function(e){var t=e.className,n=e.cssModule,a=e.noGutters,r=e.tag,o=e.form,s=Object(u.a)(e,["className","cssModule","noGutters","tag","form"]),l=Object(m.b)(h()(t,a?"no-gutters":null,o?"form-row":"row"),n);return i.a.createElement(r,Object(d.a)({},s,{className:l}))};j.propTypes=E,j.defaultProps={tag:"div"};var C=j,S=n(211),O=n.n(S),b=f.a.oneOfType([f.a.number,f.a.string]),M=f.a.oneOfType([f.a.bool,f.a.number,f.a.string,f.a.shape({size:f.a.oneOfType([f.a.bool,f.a.number,f.a.string]),push:Object(m.a)(b,'Please use the prop "order"'),pull:Object(m.a)(b,'Please use the prop "order"'),order:b,offset:b})]),A={tag:m.c,xs:M,sm:M,md:M,lg:M,xl:M,className:f.a.string,cssModule:f.a.object,widths:f.a.array},D={tag:"div",widths:["xs","sm","md","lg","xl"]},N=function(e,t,n){return!0===n||""===n?e?"col":"col-"+t:"auto"===n?e?"col-auto":"col-"+t+"-auto":e?"col-"+n:"col-"+t+"-"+n},T=function(e){var t=e.className,n=e.cssModule,a=e.widths,r=e.tag,o=Object(u.a)(e,["className","cssModule","widths","tag"]),s=[];a.forEach(function(t,a){var i=e[t];if(delete o[t],i||""===i){var r=!a;if(O()(i)){var l,c=r?"-":"-"+t+"-",d=N(r,t,i.size);s.push(Object(m.b)(h()(((l={})[d]=i.size||""===i.size,l["order"+c+i.order]=i.order||0===i.order,l["offset"+c+i.offset]=i.offset||0===i.offset,l)),n))}else{var u=N(r,t,i);s.push(u)}}}),s.length||s.push("col");var l=Object(m.b)(h()(t,s),n);return i.a.createElement(r,Object(d.a)({},o,{className:l}))};T.propTypes=A,T.defaultProps=D;var k=T,H=function(e){var t=e.item;return i.a.createElement("div",{className:"resume-item"},i.a.createElement(C,null,i.a.createElement(k,{sm:"4",className:"resume-left"},i.a.createElement("p",{className:"title"},t.title),i.a.createElement("p",{className:"subtitle"},t.subtitle),i.a.createElement("p",{className:"duration"},t.duration)),i.a.createElement(k,{sm:"8",className:"resume-right"},t.bullets.map(function(e,t){return i.a.createElement("p",{key:t},e)}))))},L=function(e){var t=e.category,n=e.items;return i.a.createElement("div",{className:"resume-section"},i.a.createElement(C,null,i.a.createElement("p",{className:"section-title"},t)),n.map(function(e,t){return i.a.createElement(H,{item:e,key:t})}))},P=n(212),I=n.n(P),R=n(213),q=(n(214),new I.a(R.items,["keywords","category"])),G=function(e){var t=e.filter,n=q.search(t);0===n.length&&(n=R.items);var a=Object.entries(n.reduce(function(e,t){return e[t.category]||(e[t.category]=[]),e[t.category].push(t),e},{}));return i.a.createElement("div",null,a.map(function(e,t){return i.a.createElement(L,{category:e[0],items:e[1],key:t})}))},U=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={input:K,iter:0,delay:0,start:0,intervalId:""},n.input=i.a.createRef(),n.handleChange=n.handleChange.bind(c()(c()(n))),n.typewriter=n.typewriter.bind(c()(c()(n))),n.stopTypewriter=n.stopTypewriter.bind(c()(c()(n))),n}s()(t,e);var n=t.prototype;return n.componentDidMount=function(){this.input.current.focus();var e=setInterval(this.typewriter,100);this.setState({intervalId:e})},n.typewriter=function(){if(10===this.state.start){var e=this.state.input,t=this.state.iter;if(t!==F.length){var n=K+F[t];if(0!==n.length-e.length){var a=n.substring(0,e.length+1);this.setState({input:a})}else this.setState({delay:this.state.delay+1}),8===this.state.delay&&this.setState({delay:0,input:K,iter:this.state.iter+1})}else this.stopTypewriter()}else this.setState({start:this.state.start+1})},n.stopTypewriter=function(){clearInterval(this.state.intervalId)},n.handleChange=function(e){e.target.value.length>=K.length?this.setState({input:e.target.value}):this.setState({input:K})},n.render=function(){return i.a.createElement("div",null,i.a.createElement("div",{className:"header"},i.a.createElement(w,null,i.a.createElement("div",{className:"hero"},i.a.createElement("p",null,"HELLO"),i.a.createElement("h1",null,"My name is Stephen Ng."),i.a.createElement("h1",null,"I'm a Computer Science major"),i.a.createElement("h1",null,"in the Renaissance Engineering Programme."),i.a.createElement("input",{type:"text",value:this.state.input,onChange:this.handleChange,onClick:this.stopTypewriter,ref:this.input})))),i.a.createElement(w,null,i.a.createElement(G,{filter:this.state.input.substring(K.length)})))},t}(a.Component),K="I do ",F=["apps","blockchain","javascript","consulting"],J=n(189);t.default=function(){return i.a.createElement(r.a,null,i.a.createElement(J.a,{title:"Home",keywords:["gatsby","application","react"]}),i.a.createElement(U,null))}},208:function(e,t,n){},209:function(e,t,n){var a=n(11),i=n(210)(!0);a(a.S,"Object",{entries:function(e){return i(e)}})},210:function(e,t,n){var a=n(33),i=n(34),r=n(85).f;e.exports=function(e){return function(t){for(var n,o=i(t),s=a(o),l=s.length,c=0,d=[];l>c;)r.call(o,n=s[c++])&&d.push(e?[n,o[n]]:o[n]);return d}}},211:function(e,t){e.exports=function(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}},212:function(e,t,n){"undefined"!=typeof window&&window,e.exports=function(e){var t={};function n(a){if(t[a])return t[a].exports;var i=t[a]={i:a,l:!1,exports:{}};return e[a].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(a,i,function(t){return e[t]}.bind(null,i));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=0)}([function(e,t,n){e.exports=n(1)},function(e,t,n){"use strict";function a(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}n.r(t);var i=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,n;return t=e,(n=[{key:"getDescendantProperty",value:function(t,n){var a,i,r,o,s,l,c=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];if(n){if(-1===(r=n.indexOf("."))?a=n:(a=n.slice(0,r),i=n.slice(r+1)),null!=(o=t[a]))if(i||"string"!=typeof o&&"number"!=typeof o)if("[object Array]"===Object.prototype.toString.call(o))for(s=0,l=o.length;s<l;s++)e.getDescendantProperty(o[s],i,c);else i&&e.getDescendantProperty(o,i,c);else c.push(o)}else c.push(t);return c}}])&&a(t,n),e}();function r(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}n.d(t,"default",function(){return o});var o=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),Array.isArray(n)||(a=n,n=[]),this.haystack=t,this.keys=n,this.options=Object.assign({caseSensitive:!1,sort:!1},a)}var t,n,a;return t=e,a=[{key:"isMatch",value:function(e,t,n){n||(e=e.toLocaleLowerCase(),t=t.toLocaleLowerCase());for(var a=t.split(""),i=[],r=0,o=0;o<a.length;o++){var s=a[o];if(-1===(r=e.indexOf(s,r)))return!1;i.push(r),r++}return e===t?1:i.reduce(function(e,t){return e+t},2)}}],(n=[{key:"search",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";if(""===t)return this.haystack;for(var n=[],a=0;a<this.haystack.length;a++){var r=this.haystack[a];if(0===this.keys.length){var o=e.isMatch(r,t,this.options.caseSensitive);o&&n.push({item:r,score:o})}else for(var s=0;s<this.keys.length;s++){for(var l=i.getDescendantProperty(r,this.keys[s]),c=!1,d=0;d<l.length;d++){var u=e.isMatch(l[d],t,this.options.caseSensitive);if(u){c=!0,n.push({item:r,score:u});break}}if(c)break}}return this.options.sort&&n.sort(function(e,t){return e.score-t.score}),n.map(function(e){return e.item})}}])&&r(t.prototype,n),a&&r(t,a),e}()}]).default},213:function(e){e.exports={items:[{title:"Kommerce",subtitle:"Blockchain Developer",duration:"Dec 2018 - Present",bullets:["Developing trade finance solution on private Hyperledger Fabric chain with Composer, mirroring public Ethereum smart contract","Built flexible data pipelines extracting data from blockchain ledger enabling fast querying of business statistics"],category:"Work Experience",keywords:["blockchain","ethereum","hyperledger","fabric","composer","developer","programming","work","data","javascript"]},{title:"University of California, Berkeley",subtitle:"Exchange Student",duration:"Aug 2019 – May 2020",bullets:["Concurrent with 3rd year of REP studies"],category:"Education",keywords:["berkeley","school","computer science"]},{title:"Nanyang Technological University",subtitle:"Renaissance Engineering Programme",duration:"Aug 2017 – Dec 2021 (Expected)",bullets:["Concurrent degree as Bachelor of Engineering Science (Computer Science) and Master of Science (Technology Management), current Cumulative GPA of 4.82/5.00 (1st Class Honours)","Awarded the Renaissance Engineering Programme Scholarship"],category:"Education",keywords:["nanyang technological university","school","computer science"]},{title:"Mercury",subtitle:"Permissioned Blockchain in Java",duration:"Oct 2017",bullets:["Planned and wrote a permissioned blockchain protocol from scratch in Java to track airline inventory for the SIA App Challenge","Wrote API endpoints for front-end applications (Vue.js admin panel and Android app) to access and parse data","Coordinated team by planning out app components and delegating work according to skills and interests"],category:"Projects",keywords:["java","blockchain","computer science","back end","hackathon","android"]},{title:"Etch",subtitle:"Learning Application in Android Powered by Google Firebase",duration:"May 2017 – Aug 2017",bullets:["Developed an Android app for learning and retaining A level content through a special Spaced Repetition System","Designed a NoSQL schema for storing user state using denormalization principles to improve performance"],category:"Projects",keywords:["java","computer science","back end","front end","nosql","android","apps"]},{title:"Change for Good Singapore",subtitle:"Pay-it-forward Vending Machine Social Project",duration:"Feb 2015 – May 2015",bullets:["Founded and managed a pay-it-forward social project with 6 teammates using a vending machine powered by Arduino ","Designed and deployed showcase website using materialize.css and Instagram API"],category:"Projects",keywords:["social good","computer science","front end","nosql","javascript"]},{title:"Business Solutions Case Club",subtitle:"Training Director",duration:"May 2018 – Present",bullets:["Developing training materials and mentoring 30 members in case consulting ","Improved the club selection process by consolidating opinions on desirable qualities and condensing them into a quantitative rubric"],category:"Extra Curricular Activities",keywords:["leadership","business","case","consulting","mentoring"]},{title:"Dunman High Student Council",subtitle:"President",duration:"Apr 2013 – Apr 2014",bullets:["Created Project Collage, an annual workshop/accelerator for Student Councillors to pitch ideas, find teammates, and obtain funding ","Lead Coordinator for the 2014 Senior High Orientation (1,200 participants), enhancing work processes by introducing Matrix Management in a team of 80 organisers and managing project with a Gantt Chart"],category:"Extra Curricular Activities",keywords:["teamwork","leadership","mentoring","event organisation","management"]},{title:"Hong Kong International Case Competition",subtitle:"International 2nd Runner Up",duration:"Oct 2018",bullets:["Clinched 2nd runner up against 15 other teams from universities like UC Berkeley, CBS (Denmark), and Queen’s University (Canada)","Devised a two-pronged digital strategy for a large HK department store targeting unique shopping habits of inbound mainland tourists and HK locals, with a projected NPV of 1,023 million HKD","Created value for all stakeholders in a green strategy awarding tiered labels to concessionaires practicing supply chain sustainability"],category:"Competitions",keywords:["teamwork","business","case","consulting"]},{title:"Singapore Business Case Competition",subtitle:"National Champion",duration:"Mar 2018",bullets:["Competed against 300 participants in Singapore’s biggest national case competition","Leveraged subject matter expertise from software engineering background to devise a recommendation on tailoring agile management techniques to a design studio ","Crafted a growth strategy for a SME based on a pivot from a B2B to B2C model"],category:"Competitions",keywords:["teamwork","business","case","consulting"]},{title:"Shell Mini Case Competition ",subtitle:"National 1st Runner Up",duration:"Sep 2017",bullets:["Competed against 100 other participants in Shell’s inaugural mini case competition","Deduced likely world energy landscape in 2060 through analysis of geopolitical trends and suggested Shell to enter renewables energy storage market","Planned key investment areas and milestones to achieve, producing a flexible roadmap for Shell to follow"],category:"Competitions",keywords:["teamwork","business","case","consulting"]}]}},214:function(e){e.exports=["Education","Work Experience","Projects","Extra Curricular Activities","Competitions"]}}]);
//# sourceMappingURL=component---src-pages-index-js-2d33ec9a31d43f5def3a.js.map