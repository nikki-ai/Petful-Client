(this["webpackJsonppetful-client"]=this["webpackJsonppetful-client"]||[]).push([[0],{22:function(e,t,n){e.exports=n(34)},23:function(e,t,n){},28:function(e,t,n){},34:function(e,t,n){"use strict";n.r(t);n(23);var a=n(0),o=n.n(a),r=n(19),l=n.n(r),c=n(8),i=n(9),s=n(11),u=n(10),p=n(5),d=n(6),h=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return o.a.createElement("div",{className:"homepage-text"},o.a.createElement("h1",null,"Welcome!"),o.a.createElement("section",null,o.a.createElement("h2",null,"About Us"),o.a.createElement("p",null,"FIFO pet adoption centers mission is to ensure pets get adopted to healthy happy homes in the order that they were brought to us. We feel it is very important that no animal be without a loving home for an extended period of time. So we maintain the First in First out rule when it comes to the adoption process."),o.a.createElement("h3",null,"How It Works:"),o.a.createElement("p",null,"When you are ready to adopt go to the 'Adopt Now' page and add your name to the line. Once you are at the front of the line you are given the option of adopting a dog or a cat. We provide you with a picture, name, breed, age, description, and a brief backstory about how the furry little fellow ended up with us.")))}}]),n}(o.a.Component),m=n(16),f={REACT_APP_API_BASE:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_API_BASE||"http://localhost:8000"},E={getCat:function(){return fetch("".concat(f,"/pets/cats")).then((function(e){return e.ok?e.json():e.json().then((function(e){return Promise.reject(e)}))})).then((function(e){return e})).catch((function(e){return console.error(e)}))},adoptCat:function(){return fetch("".concat(f,"/pets/cats"),{method:"DELETE",headers:{"content-Type":"application/json"}})},getDog:function(){return fetch("".concat(f,"/pets/dogs")).then((function(e){return e.ok?e.json():e.json().then((function(e){return Promise.reject(e)}))})).then((function(e){return e})).catch((function(e){return console.error(e)}))},adoptDog:function(){return fetch("".concat(f,"/pets/dogs"),{method:"DELETE",headers:{"content-type":"application/json"}})},getPeople:function(){return fetch("".concat(f,"/people")).then((function(e){return e.ok?e.json():e.json().then((function(e){return Promise.reject(e)}))})).catch((function(e){return console.error(e)}))},addPerson:function(e){return fetch("".concat(f,"/people"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:e})})}},g=(n(28),function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={cats:[],dogs:[],people:[],name:""},e.setFirstCat=function(){E.getCat().then((function(t){e.setState({cats:t})})).catch({error:"An error occurred."})},e.setFirstDog=function(){E.getDog().then((function(t){e.setState({dogs:t})})).catch({error:"An error occurred."})},e.setAllPeople=function(){E.getPeople().then((function(t){console.log(t),e.setState({people:t})})).catch({error:"Sorry, an error occurred."})},e.adoptDog=function(){E.adoptDog().then((function(){e.setState({dogs:e.state.dogs.splice(1),people:e.state.people.splice(1)})}))},e.adoptCat=function(){E.adoptCat().then((function(){e.setState({pets:e.state.cats.splice(1),people:e.state.people.splice(1)})}))},e.firstInLine=function(){e.state.people[0]===e.name&&clearInterval(e.adoptInterval)},e.handleAddPerson=function(t){t.preventDefault(),E.addPerson(e.state.name).then((function(){e.name=e.state.name,e.setState({people:[].concat(Object(m.a)(e.state.people),[e.state.name]),name:""}),e.adoptInterval=setInterval((function(){(new Date).getTime()%2===0?e.adoptCat():e.adoptDog(),E.addPerson("Kurapika").then((function(){e.setState({people:[].concat(Object(m.a)(e.state.people),["Kurapika"])})}))}),5e3)}))},e.handleOnChange=function(t){t.preventDefault(),e.setState({name:t.target.value})},e.handleAdoptDog=function(t){t.preventDefault(),e.adoptDog(),alert("Meet your new furry friend!")},e.handleAdoptCat=function(t){t.preventDefault(),e.adoptCat(),alert("Meet your new furry friend!")},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){this.setFirstCat(),this.setFirstDog(),this.setAllPeople()}},{key:"renderCats",value:function(){return console.log(this.state.cats),o.a.createElement("div",null,o.a.createElement("section",null,this.renderPet(this.state.cats[0],"cats"),o.a.createElement("button",{onClick:this.handleAdoptCat,disabled:this.state.people[0]!==this.name},"Adopt Me!")))}},{key:"renderDogs",value:function(){return console.log(this.state.dogs),o.a.createElement("div",null,o.a.createElement("section",null,this.renderPet(this.state.dogs[0],"dogs"),o.a.createElement("button",{onClick:this.handleAdoptDog,disabled:this.state.people[0]!==this.name},"Adopt Me!")))}},{key:"renderPet",value:function(e,t){if(void 0===e)return o.a.createElement(o.a.Fragment,null);var n=e.name,a=e.imageURL,r=e.description,l=e.gender,c=e.age,i=e.breed,s=e.story;return o.a.createElement("div",null,o.a.createElement("img",{src:a,alt:t}),o.a.createElement("h4",null,n),o.a.createElement("p",null,"Age:",c),o.a.createElement("p",null,"About ",n,": ",r),o.a.createElement("p",null,"Gender: ",l),o.a.createElement("p",null,"Breed: ",i),o.a.createElement("p",null,n,"'s Story: ",s))}},{key:"render",value:function(){return this.firstInLine(),o.a.createElement("div",{className:"adoption-page"},o.a.createElement("h1",null,"Pet Adoption"),o.a.createElement("div",{className:"pets"},o.a.createElement("div",null,this.renderDogs()),o.a.createElement("div",null,this.renderCats())),o.a.createElement("section",null,o.a.createElement("h3",null,"Join Adoption Queue: "),o.a.createElement("form",{onSubmit:this.handleAddPerson},o.a.createElement("label",{htmlFor:"name"},"Name: "),o.a.createElement("input",{name:"name",value:this.state.name,onChange:this.handleOnChange,placeholder:"Your name here",required:!0}),o.a.createElement("button",{type:"submit"},"Submit")),o.a.createElement("ul",null,this.state.people.map((function(e,t){return o.a.createElement("li",{key:t},e)})))))}}]),n}(o.a.Component)),v=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(p.a,null,o.a.createElement("header",null,o.a.createElement(p.b,{to:"/",className:"title-text"},o.a.createElement("h1",null,"FIFO Pet Adoption")),o.a.createElement("nav",null,o.a.createElement(p.b,{to:"/",className:"title-text"},"Home"),o.a.createElement("br",null),o.a.createElement(p.b,{to:"/adoption",className:"title-text"},"Adopt Now!"))),o.a.createElement("main",null,o.a.createElement(d.a,{exact:!0,path:"/",component:h}),o.a.createElement(d.a,{path:"/adoption",component:g}))))}}]),n}(o.a.Component);l.a.render(o.a.createElement(p.a,null,o.a.createElement(v,null)),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.43b2d4cd.chunk.js.map