(this["webpackJsonpreact_list-of-goods"]=this["webpackJsonpreact_list-of-goods"]||[]).push([[0],{13:function(t,e,r){},15:function(t,e,r){"use strict";r.r(e);var n,s=r(3),o=r.n(s),c=r(4),i=r(5),a=r(8),u=r(6),l=r(7),b=r(1),h=(r(13),r(0)),p=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"];!function(t){t[t.NONE=0]="NONE",t[t.ALPABET=1]="ALPABET",t[t.LENGTH=2]="LENGTH"}(n||(n={}));var d=function(t){Object(a.a)(r,t);var e=Object(u.a)(r);function r(){var t;Object(c.a)(this,r);for(var s=arguments.length,o=new Array(s),i=0;i<s;i++)o[i]=arguments[i];return(t=e.call.apply(e,[this].concat(o))).state={isStarted:!1,isReversed:!1,sortType:n.NONE},t.start=function(){return t.setState({isStarted:!0})},t.reverse=function(){return t.setState((function(t){return{isReversed:!t.isReversed}}))},t.alphabet=function(){return t.setState({sortType:n.ALPABET})},t.length=function(){return t.setState({sortType:n.LENGTH})},t.reset=function(){return t.setState({isReversed:!1,sortType:n.NONE})},t}return Object(i.a)(r,[{key:"render",value:function(){var t=this.state,e=t.sortType,r=t.isReversed,s=function(t,e,r){var s=Object(l.a)(t);return e!==n.NONE&&(e===n.ALPABET&&s.sort((function(t,e){return t.localeCompare(e)})),e===n.LENGTH&&s.sort((function(t,e){return t.length-e.length}))),r?s.reverse():s}(p,e,r);return Object(h.jsx)("div",{className:"App",children:this.state.isStarted?Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("button",{type:"button",onClick:this.alphabet,children:"Sort alphabetically"}),Object(h.jsx)("button",{type:"button",onClick:this.length,children:"Sort by length"}),Object(h.jsx)("button",{type:"button",onClick:this.reverse,children:"Reverse"}),Object(h.jsx)("button",{type:"button",onClick:this.reset,children:"Reset"}),Object(h.jsx)("ul",{className:"Goods",children:s.map((function(t){return Object(h.jsx)("li",{className:"Goods__item",children:t},t)}))})]}):Object(h.jsx)("button",{type:"button",onClick:this.start,children:"Start"})})}}]),r}(b.Component);o.a.render(Object(h.jsx)(d,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.f40a3895.chunk.js.map