(this["webpackJsonpreact-rick-and-morty"]=this["webpackJsonpreact-rick-and-morty"]||[]).push([[0],{23:function(e,t,c){},24:function(e,t,c){},25:function(e,t,c){},26:function(e,t,c){},29:function(e,t,c){},31:function(e,t,c){"use strict";c.r(t);var a=c(1),n=c(0),r=c.n(n),s=c(6),i=c.n(s),h=(c(23),c(14)),o=c(15),l=c(17),u=c(16),j=(c(24),function(e){return Object(a.jsxs)("div",{className:"card-container",children:[Object(a.jsx)("img",{className:"card-image",alt:"character",src:e.character.image}),Object(a.jsx)("h2",{children:e.character.name}),Object(a.jsxs)("p",{children:["Origin : ",e.character.origin.name]}),Object(a.jsxs)("p",{children:["Species : ",e.character.species]})]})}),d=(c(25),function(e){return Object(a.jsx)("div",{className:"card-list",children:e.characters.map((function(e){return Object(a.jsx)(j,{character:e},e.id)}))})}),p=(c(26),function(e){var t=e.placeholder,c=e.handleChange;return Object(a.jsx)("input",{className:"search",type:"search",placeholder:t,onChange:c})}),g=c.p+"static/media/logo.23a3f17c.png",b=c(12),f=c(13),m=function(e){return Object(a.jsxs)(f.a,{variant:"danger",children:[Object(a.jsx)(f.a.Heading,{children:"Oh snap! No such characters exist!"}),Object(a.jsx)("p",{children:"To be clear, since there are infinite universes in the central time curve, they do exist. They just haven't been introduced to us yet."})]})},O=c(11),x=c.n(O),v=(c(29),function(e){Object(l.a)(c,e);var t=Object(u.a)(c);function c(){var e;return Object(h.a)(this,c),(e=t.call(this)).handleChange=function(t){e.setState({searchField:t.target.value})},e.Greeting=function(e){if(""===e.filteredCharacters)return Object(a.jsx)(m,{})},e.state={characters:[],page:1,searchField:""},e}return Object(o.a)(c,[{key:"componentDidMount",value:function(){var e=this,t="https://rickandmortyapi.com/api/character/?page="+this.state.page;fetch(t).then((function(e){return e.json()})).then((function(t){e.setState({characters:t.results})}))}},{key:"componentDidUpdate",value:function(){var e=this,t="https://rickandmortyapi.com/api/character/?page="+this.state.page;fetch(t).then((function(e){return e.json()})).then((function(t){e.setState({characters:t.results})}))}},{key:"render",value:function(){var e,t=this,c=this.state,n=c.characters,r=c.searchField,s=n.filter((function(e){return e.name.toLowerCase().includes(r.toLowerCase())}));return s.length||(e=Object(a.jsx)(m,{className:"alert"})),Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)("div",{className:"logo",children:Object(a.jsx)("img",{style:{width:450},alt:"logo",src:g})}),Object(a.jsx)(b.a,{className:"button",onClick:function(){1!==t.state.page&&t.setState({page:t.state.page-1})},children:Object(a.jsx)(x.a,{name:"chevron-circle-left"})}),Object(a.jsx)(p,{placeholder:"Search Characters",handleChange:this.handleChange}),Object(a.jsx)(b.a,{className:"button",onClick:function(){return t.setState({page:t.state.page+1})},children:Object(a.jsx)(x.a,{name:"chevron-circle-right"})}),Object(a.jsx)("div",{children:e}),Object(a.jsx)(d,{characters:s})]})}}]),c}(n.Component)),C=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,33)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,r=t.getLCP,s=t.getTTFB;c(e),a(e),n(e),r(e),s(e)}))};c(30);i.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(v,{})}),document.getElementById("root")),C()}},[[31,1,2]]]);
//# sourceMappingURL=main.855a35c3.chunk.js.map