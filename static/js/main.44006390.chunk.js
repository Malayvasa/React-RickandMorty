(this["webpackJsonpreact-rick-and-morty"]=this["webpackJsonpreact-rick-and-morty"]||[]).push([[0],{24:function(e,t,a){},25:function(e,t,a){},26:function(e,t,a){},27:function(e,t,a){},30:function(e,t,a){},32:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a(0),r=a.n(n),s=a(6),i=a.n(s),h=(a(24),a(15)),o=a(16),l=a(18),u=a(17),d=(a(25),a(9)),j=function(e){var t;return t="Alive"===e.character.status?Object(c.jsx)(d.a,{variant:"success",children:"Alive"}):"Dead"===e.character.status?Object(c.jsx)(d.a,{variant:"danger",children:"Dead"}):Object(c.jsx)(d.a,{variant:"secondary",children:"Unknown"}),Object(c.jsxs)("div",{className:"card-container",children:[Object(c.jsx)("img",{className:"card-image",alt:"character",src:e.character.image}),Object(c.jsx)("p",{className:"name",children:e.character.name}),Object(c.jsx)("p",{className:"badge",children:t})]})},b=(a(26),function(e){return Object(c.jsx)("div",{className:"card-list",children:e.characters.map((function(e){return Object(c.jsx)(j,{character:e},e.id)}))})}),g=(a(27),function(e){var t=e.placeholder,a=e.handleChange;return Object(c.jsx)("input",{className:"search",type:"search",placeholder:t,onChange:a})}),p=a.p+"static/media/logo.23a3f17c.png",f=a(13),m=a(14),O=function(e){return Object(c.jsxs)(m.a,{variant:"danger",children:[Object(c.jsx)(m.a.Heading,{children:"Oh snap! No such characters exist!"}),Object(c.jsx)("p",{children:"To be clear, since there are infinite universes in the central time curve, they do exist. They just haven't been introduced to us yet."})]})},v=a(12),x=a.n(v),C=(a(30),function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(h.a)(this,a),(e=t.call(this)).handleChange=function(t){e.setState({searchField:t.target.value})},e.Greeting=function(e){if(""===e.filteredCharacters)return Object(c.jsx)(O,{})},e.state={characters:[],page:1,searchField:""},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this,t="https://rickandmortyapi.com/api/character/?page="+this.state.page;fetch(t).then((function(e){return e.json()})).then((function(t){e.setState({characters:t.results})}))}},{key:"componentDidUpdate",value:function(){var e=this,t="https://rickandmortyapi.com/api/character/?page="+this.state.page;fetch(t).then((function(e){return e.json()})).then((function(t){e.setState({characters:t.results})}))}},{key:"render",value:function(){var e,t=this,a=this.state,n=a.characters,r=a.searchField,s=n.filter((function(e){return e.name.toLowerCase().includes(r.toLowerCase())}));return s.length||(e=Object(c.jsx)(O,{className:"alert"})),Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)("div",{className:"logo-container",children:Object(c.jsx)("img",{className:"logo-image",alt:"logo",src:p})}),Object(c.jsx)(f.a,{className:"button",onClick:function(){1!==t.state.page&&t.setState({page:t.state.page-1})},children:Object(c.jsx)(x.a,{name:"chevron-circle-left"})}),Object(c.jsx)(g,{placeholder:"Search Characters",handleChange:this.handleChange}),Object(c.jsx)(f.a,{className:"button",onClick:function(){return t.setState({page:t.state.page+1})},children:Object(c.jsx)(x.a,{name:"chevron-circle-right"})}),Object(c.jsx)("div",{children:e}),Object(c.jsx)(b,{characters:s})]})}}]),a}(n.Component)),y=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,34)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,r=t.getLCP,s=t.getTTFB;a(e),c(e),n(e),r(e),s(e)}))};a(31);i.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(C,{})}),document.getElementById("root")),y()}},[[32,1,2]]]);
//# sourceMappingURL=main.44006390.chunk.js.map