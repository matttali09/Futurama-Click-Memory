(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{22:function(e,t,a){e.exports=a(78)},28:function(e,t,a){},30:function(e,t,a){},32:function(e,t,a){},34:function(e,t,a){},36:function(e,t,a){},78:function(e,t,a){"use strict";a.r(t);var s=a(0),c=a.n(s),r=a(11),n=a.n(r),i=(a(28),a(20)),o=a(18),l=a(15),m=a(16),u=a(19),g=a(17),d=a(21);a(30);var p=function(e){return c.a.createElement("nav",null,c.a.createElement("div",{className:"nav-wrapper"},c.a.createElement("ul",{className:""},c.a.createElement("li",null,"Clicky Game!"),c.a.createElement("li",null,e.status),c.a.createElement("li",null,"Score: ",e.score," | High-Score: ",e.topScore))))};a(32);var h=function(){return c.a.createElement("div",{className:"jumbotron"},c.a.createElement("div",{className:"overlay"}),c.a.createElement("h1",{className:"center"},"Clicky Game"),c.a.createElement("h3",{className:"center"},"Click on an image to earn points, but don't click on any more than once!"),c.a.createElement("img",{className:"top-left",src:"assets/images/space-ship.png",alt:"Planet Express Ship"}),c.a.createElement("img",{className:"top-right",src:"assets/images/space-ship.png",alt:"Planet Express Ship"}),c.a.createElement("img",{className:"bottom-left",src:"assets/images/space-ship.png",alt:"Planet Express Ship"}),c.a.createElement("img",{className:"bottom-right",src:"assets/images/space-ship.png",alt:"Planet Express Ship"}))},f=(a(34),function(e){return c.a.createElement("a",{className:"carousel-item waves-effect waves-dark",href:"#one!"},c.a.createElement("img",{key:e.id,id:e.id,src:e.src,alt:e.alt,onClick:function(){return e.handleClick(e.character)}}))}),k=(a(36),a(7));var E=function(){return c.a.createElement(k.Footer,{className:"center",copyrights:"\xa9 2019 Matthew Taliancich"})},S=a(8),b=function(e){function t(){var e,a;Object(l.a)(this,t);for(var s=arguments.length,c=new Array(s),r=0;r<s;r++)c[r]=arguments[r];return(a=Object(u.a)(this,(e=Object(g.a)(t)).call.apply(e,[this].concat(c)))).state={status:"Click An Image To Begin",score:0,topScore:0,chars:S},a.shuffle=function(e){for(var t,a,s=e.length;0!==s;)a=Math.floor(Math.random()*s),t=e[s-=1],e[s]=e[a],e[a]=t;return e},a.setGameStart=function(){a.setState({status:"Great Job! Click An Image To Begin Again",score:0,topScore:0,chars:S})},a.setGameLoss=function(){a.setState({status:"You guessed wrong! Click An Image To Try Again!",score:0,chars:S})},a.incrementScore=function(){a.setState({score:a.state.score+1}),console.log("new score"+a.state.score)},a.setTopScore=function(){a.state.topScore<12?a.state.score>=a.state.topScore&&a.setState({topScore:a.state.topScore+1}):a.setGameStart()},a.handleClick=function(e){a.shuffle(a.state.chars);var t=Object(o.a)(a.state.chars),s=t.indexOf(e);t[s]=Object(i.a)({},e),!1===t[s].clicked?(t[s].clicked=!0,a.incrementScore(),a.setTopScore(),a.setState({chars:t,status:"Nice Choice!"})):!0===t[s].clicked&&(console.log("You Guessed Incorrectly!"),a.setGameLoss())},a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this;return c.a.createElement(c.a.Fragment,null,c.a.createElement(p,{status:this.state.status,score:this.state.score,topScore:this.state.topScore}),c.a.createElement(h,null),c.a.createElement(k.Carousel,null,this.state.chars.map(function(t){return c.a.createElement(f,{handleClick:e.handleClick,id:t.id,key:t.id,alt:t.alt,src:t.src,character:t})})),c.a.createElement(E,null))}}]),t}(s.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n.a.render(c.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e){e.exports=[{id:1,alt:"Amy",src:"./assets/images/amy.jpg",clicked:!1},{id:2,alt:"Bender",src:"./assets/images/bender.jpg",clicked:!1},{id:3,alt:"Farnsworth",src:"./assets/images/farnsworth.gif",clicked:!1},{id:4,alt:"Fry",src:"./assets/images/fry.jpeg",clicked:!1},{id:5,alt:"Hermes",src:"./assets/images/hermes.png",clicked:!1},{id:6,alt:"Kiff",src:"./assets/images/kiff.jpg",clicked:!1},{id:7,alt:"Leela",src:"./assets/images/leela.jpg",clicked:!1},{id:8,alt:"Nibbler",src:"./assets/images/nibbler.png",clicked:!1},{id:9,alt:"Roberto",src:"./assets/images/roberto.jpg",clicked:!1},{id:10,alt:"Robot Devil",src:"./assets/images/robot-devil.jpg",clicked:!1},{id:11,alt:"Scruffy",src:"./assets/images/scruffy.png",clicked:!1},{id:12,alt:"Zoidberg",src:"./assets/images/zoidberg.png",clicked:!1}]}},[[22,2,1]]]);
//# sourceMappingURL=main.df17eaff.chunk.js.map