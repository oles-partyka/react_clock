(this.webpackJsonpreact_clock=this.webpackJsonpreact_clock||[]).push([[0],{12:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var c=n(7),a=n.n(c),o=n(2),l=n(3),i=n(5),r=n(4),s=n(1),u=(n(12),n(0)),m=function(e){return e.toUTCString().slice(-12,-4)},d=function(e){Object(i.a)(n,e);var t=Object(r.a)(n);function n(){var e;Object(o.a)(this,n);for(var c=arguments.length,a=new Array(c),l=0;l<c;l++)a[l]=arguments[l];return(e=t.call.apply(t,[this].concat(a))).state={clockTime:new Date},e.timeIntervalId=0,e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.timeIntervalId=window.setInterval((function(){e.setState({clockTime:new Date});var t=e.state.clockTime;console.info(m(t))}),1e3)}},{key:"componentDidUpdate",value:function(e){var t=this.props.clockName;t!==e.clockName&&console.debug("Renamed from ".concat(e.clockName," to ").concat(t))}},{key:"componentWillUnmount",value:function(){window.clearInterval(this.timeIntervalId)}},{key:"render",value:function(){var e=this.props.clockName,t=this.state.clockTime;return Object(u.jsxs)("div",{className:"Clock",children:[Object(u.jsx)("strong",{className:"Clock__name",children:e})," time is ",Object(u.jsx)("span",{className:"Clock__time",children:m(t)})]})}}]),n}(s.Component);function v(){var e=Date.now().toString().slice(-4);return"Clock-".concat(e)}var h=function(e){Object(i.a)(n,e);var t=Object(r.a)(n);function n(){var e;Object(o.a)(this,n);for(var c=arguments.length,a=new Array(c),l=0;l<c;l++)a[l]=arguments[l];return(e=t.call.apply(t,[this].concat(a))).state={clockName:"Clock-0",hasClock:!0},e.nameIntervalId=0,e.handleContextMenu=function(t){t.preventDefault(),e.setState({hasClock:!1})},e.handleClick=function(){e.setState({hasClock:!0})},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this;document.addEventListener("contextmenu",this.handleContextMenu),document.addEventListener("click",this.handleClick),this.nameIntervalId=window.setInterval((function(){e.setState({clockName:v()})}),3300)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("contextmenu",this.handleContextMenu),document.removeEventListener("click",this.handleClick),window.clearInterval(this.nameIntervalId)}},{key:"render",value:function(){var e=this.state,t=e.hasClock,n=e.clockName;return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)("h1",{children:"React clock"}),t&&Object(u.jsx)(d,{clockName:n})]})}}]),n}(s.Component);a.a.render(Object(u.jsx)(h,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.102e6f5c.chunk.js.map