(this["webpackJsonpstock-return-calculator"]=this["webpackJsonpstock-return-calculator"]||[]).push([[0],{14:function(t,e,c){},15:function(t,e,c){},16:function(t,e,c){"use strict";c.r(e);var s=c(0),a=c(1),n=c.n(a),r=c(4),l=c.n(r),d=(c(14),c(3)),i=c(5),j=c(6),o=c(8),u=c(7),b=(c(15),function(t){Object(o.a)(c,t);var e=Object(u.a)(c);function c(t){var s;return Object(i.a)(this,c),(s=e.call(this,t)).myChangeHandler=function(t){var e=t.target.name,c=parseFloat(t.target.value);isNaN(c)?s.setState(Object(d.a)({},e,0)):s.setState(Object(d.a)({},e,c)),document.getElementById(t.target.name).value=c.toFixed(2)},s.componentDidUpdate=function(){var t=s.state.initialPrice.toFixed(2),e=s.state.endingPrice.toFixed(2),c=s.state.dividend.toFixed(2),a=100*((parseFloat(e)-parseFloat(t)+parseFloat(c))/parseFloat(t));document.getElementById("result").innerHTML=a.toFixed(3)+"%"},s.state={initialPrice:0,endingPrice:0,dividend:0,result:0},s}return Object(j.a)(c,[{key:"render",value:function(){return Object(s.jsxs)("div",{className:"stock-return-calc-app",children:[Object(s.jsx)("div",{className:"table-1",children:Object(s.jsx)("table",{children:Object(s.jsxs)("tbody",{children:[Object(s.jsxs)("tr",{children:[Object(s.jsxs)("td",{className:"stock-return-calc-td",children:["Initial Share Price (P",Object(s.jsx)("sub",{children:"0"}),")"]}),Object(s.jsx)("td",{className:"stock-return-calc-td"}),Object(s.jsx)("td",{className:"stock-return-calc-td",children:Object(s.jsx)("input",{className:"stock-return-calc-input",type:"text",name:"initialPrice",id:"initialPrice",placeholder:"0.00",onBlur:this.myChangeHandler})})]}),Object(s.jsxs)("tr",{children:[Object(s.jsxs)("td",{className:"stock-return-calc-td",children:["Ending Share Price (P",Object(s.jsx)("sub",{children:"1"}),")"]}),Object(s.jsx)("td",{className:"stock-return-calc-td"}),Object(s.jsx)("td",{className:"stock-return-calc-td",children:Object(s.jsx)("input",{className:"stock-return-calc-input",type:"text",name:"endingPrice",id:"endingPrice",placeholder:"0.00",onBlur:this.myChangeHandler})})]}),Object(s.jsxs)("tr",{children:[Object(s.jsx)("td",{className:"stock-return-calc-td",children:"Dividend (D)"}),Object(s.jsx)("td",{className:"stock-return-calc-td"}),Object(s.jsx)("td",{className:"stock-return-calc-td",children:Object(s.jsx)("input",{className:"stock-return-calc-input",type:"text",name:"dividend",id:"dividend",placeholder:"0.00",onBlur:this.myChangeHandler})})]}),Object(s.jsxs)("tr",{children:[Object(s.jsx)("td",{className:"stock-return-calc-td"}),Object(s.jsx)("td",{className:"stock-return-calc-td",children:"="}),Object(s.jsx)("td",{className:"stock-return-calc-td",children:Object(s.jsx)("div",{style:{backgroundColor:"#fff",color:"#000",padding:5},id:"result",children:"0.000%"})})]})]})})}),Object(s.jsx)("div",{className:"table-2",children:Object(s.jsx)("table",{children:Object(s.jsxs)("tbody",{children:[Object(s.jsxs)("tr",{children:[Object(s.jsx)("td",{className:"stock-return-calc-td"}),Object(s.jsx)("td",{className:"stock-return-calc-td"}),Object(s.jsxs)("td",{className:"stock-return-calc-td",children:["$",this.state.endingPrice.toFixed(2)]}),Object(s.jsx)("td",{className:"stock-return-calc-td",children:"-"}),Object(s.jsxs)("td",{className:"stock-return-calc-td",children:["$",this.state.initialPrice.toFixed(2)]}),Object(s.jsx)("td",{className:"stock-return-calc-td",children:"+"}),Object(s.jsxs)("td",{className:"stock-return-calc-td",children:["$",this.state.dividend.toFixed(2)]}),Object(s.jsx)("td",{className:"stock-return-calc-td"})]}),Object(s.jsxs)("tr",{children:[Object(s.jsx)("td",{className:"stock-return-calc-td",children:"="}),Object(s.jsx)("td",{className:"stock-return-calc-td",colSpan:"7",children:Object(s.jsx)("hr",{color:"#000"})})]}),Object(s.jsxs)("tr",{children:[Object(s.jsx)("td",{className:"stock-return-calc-td",colSpan:"3"}),Object(s.jsxs)("td",{className:"stock-return-calc-td",colSpan:"3",children:["$",this.state.initialPrice.toFixed(2)]}),Object(s.jsx)("td",{className:"stock-return-calc-td",colSpan:"2"})]})]})})})]})}}]),c}(a.Component)),x=function(t){t&&t instanceof Function&&c.e(3).then(c.bind(null,17)).then((function(e){var c=e.getCLS,s=e.getFID,a=e.getFCP,n=e.getLCP,r=e.getTTFB;c(t),s(t),a(t),n(t),r(t)}))};l.a.render(Object(s.jsx)(n.a.StrictMode,{children:Object(s.jsx)(b,{})}),document.getElementById("my-stock-calc")),x()}},[[16,1,2]]]);
//# sourceMappingURL=main.34dca2b5.chunk.js.map