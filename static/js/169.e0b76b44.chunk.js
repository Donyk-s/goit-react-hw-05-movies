"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[169],{9699:function(t,n,e){var r=e(643),a=e(184);n.Z=function(){return(0,a.jsx)(r.p2,{height:"200",width:"200",color:"#4fa94d",ariaLabel:"circles-loading",wrapperStyle:{},wrapperClass:"",visible:!0})}},5295:function(t,n,e){e.d(n,{Z:function(){return c}});var r=e(7689),a=e(1087),o="MoviesList_moviesList__46PAX",i=e(184),c=function(t){var n=t.movies,e=(0,r.TH)();return(0,i.jsx)("ul",{className:o,children:n.map((function(t){return(0,i.jsx)("li",{children:(0,i.jsx)(a.rU,{to:"/movies/".concat(t.id),state:{from:e},children:t.title})},t.id)}))})}},2169:function(t,n,e){e.r(n),e.d(n,{default:function(){return Et}});var r=e(5861),a=e(9439),o=e(7757),i=e.n(o),c=e(2791),s=e(1087),u=e(7689),p=e(4126),l=e(5295);function f(t,n){return n||(n=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(n)}}))}var d=e(3433),m=e(1413),v=e(4942),h={data:""},g=function(t){return"object"==typeof window?((t?t.querySelector("#_goober"):window._goober)||Object.assign((t||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:t||h},b=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,y=/\/\*[^]*?\*\/|  +/g,x=/\n+/g,Z=function t(n,e){var r="",a="",o="",i=function(i){var s=n[i];"@"==i[0]?"i"==i[1]?r=i+" "+s+";":a+="f"==i[1]?t(s,i):i+"{"+t(s,"k"==i[1]?"":e)+"}":"object"==typeof s?a+=t(s,e?e.replace(/([^,])+/g,(function(t){return i.replace(/(^:.*)|([^,])+/g,(function(n){return/&/.test(n)?n.replace(/&/g,t):t?t+" "+n:n}))})):i):null!=s&&(i=/^--/.test(i)?i:i.replace(/[A-Z]/g,"-$&").toLowerCase(),o+=t.p?t.p(i,s):i+":"+s+";"),c=i};for(var c in n)i(c);return r+(e&&o?e+"{"+o+"}":o)+a},w={},k=function t(n){if("object"==typeof n){var e="";for(var r in n)e+=r+t(n[r]);return e}return n},j=function(t,n,e,r,a){var o=k(t),i=w[o]||(w[o]=function(t){for(var n=0,e=11;n<t.length;)e=101*e+t.charCodeAt(n++)>>>0;return"go"+e}(o));if(!w[i]){var c=o!==t?t:function(t){for(var n,e,r=[{}];n=b.exec(t.replace(y,""));)n[4]?r.shift():n[3]?(e=n[3].replace(x," ").trim(),r.unshift(r[0][e]=r[0][e]||{})):r[0][n[1]]=n[2].replace(x," ").trim();return r[0]}(t);w[i]=Z(a?(0,v.Z)({},"@keyframes "+i,c):c,e?"":"."+i)}var s=e&&w.g?w.g:null;return e&&(w.g=w[i]),function(t,n,e,r){r?n.data=n.data.replace(r,t):-1===n.data.indexOf(t)&&(n.data=e?t+n.data:n.data+t)}(w[i],n,r,s),i},_=function(t,n,e){return t.reduce((function(t,r,a){var o=n[a];if(o&&o.call){var i=o(e),c=i&&i.props&&i.props.className||/^go/.test(i)&&i;o=c?"."+c:i&&"object"==typeof i?i.props?"":Z(i,""):!1===i?"":i}return t+r+(null==o?"":o)}),"")};function E(t){var n=this||{},e=t.call?t(n.p):t;return j(e.unshift?e.raw?_(e,[].slice.call(arguments,1),n.p):e.reduce((function(t,e){return Object.assign(t,e&&e.call?e(n.p):e)}),{}):e,g(n.target),n.g,n.o,n.k)}E.bind({g:1});var O,z,C,I,S,A,N,q,F,L,P,T,D,M,H,U,B,W,X,Y=E.bind({k:1});function $(t,n){var e=this||{};return function(){var r=arguments;function a(o,i){var c=Object.assign({},o),s=c.className||a.className;e.p=Object.assign({theme:z&&z()},c),e.o=/ *go\d+/.test(s),c.className=E.apply(e,r)+(s?" "+s:""),n&&(c.ref=i);var u=t;return t[0]&&(u=c.as||t,delete c.as),C&&u[0]&&C(c),O(u,c)}return n?n(a):a}}var G=function(t,n){return function(t){return"function"==typeof t}(t)?t(n):t},J=function(){var t=0;return function(){return(++t).toString()}}(),K=function(){var t;return function(){if(void 0===t&&typeof window<"u"){var n=matchMedia("(prefers-reduced-motion: reduce)");t=!n||n.matches}return t}}(),Q=new Map,R=function(t){if(!Q.has(t)){var n=setTimeout((function(){Q.delete(t),et({type:4,toastId:t})}),1e3);Q.set(t,n)}},V=function t(n,e){switch(e.type){case 0:return(0,m.Z)((0,m.Z)({},n),{},{toasts:[e.toast].concat((0,d.Z)(n.toasts)).slice(0,20)});case 1:return e.toast.id&&function(t){var n=Q.get(t);n&&clearTimeout(n)}(e.toast.id),(0,m.Z)((0,m.Z)({},n),{},{toasts:n.toasts.map((function(t){return t.id===e.toast.id?(0,m.Z)((0,m.Z)({},t),e.toast):t}))});case 2:var r=e.toast;return n.toasts.find((function(t){return t.id===r.id}))?t(n,{type:1,toast:r}):t(n,{type:0,toast:r});case 3:var a=e.toastId;return a?R(a):n.toasts.forEach((function(t){R(t.id)})),(0,m.Z)((0,m.Z)({},n),{},{toasts:n.toasts.map((function(t){return t.id===a||void 0===a?(0,m.Z)((0,m.Z)({},t),{},{visible:!1}):t}))});case 4:return void 0===e.toastId?(0,m.Z)((0,m.Z)({},n),{},{toasts:[]}):(0,m.Z)((0,m.Z)({},n),{},{toasts:n.toasts.filter((function(t){return t.id!==e.toastId}))});case 5:return(0,m.Z)((0,m.Z)({},n),{},{pausedAt:e.time});case 6:var o=e.time-(n.pausedAt||0);return(0,m.Z)((0,m.Z)({},n),{},{pausedAt:void 0,toasts:n.toasts.map((function(t){return(0,m.Z)((0,m.Z)({},t),{},{pauseDuration:t.pauseDuration+o})}))})}},tt=[],nt={toasts:[],pausedAt:void 0},et=function(t){nt=V(nt,t),tt.forEach((function(t){t(nt)}))},rt=function(t){return function(n,e){var r=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"blank",e=arguments.length>2?arguments[2]:void 0;return(0,m.Z)((0,m.Z)({createdAt:Date.now(),visible:!0,type:n,ariaProps:{role:"status","aria-live":"polite"},message:t,pauseDuration:0},e),{},{id:(null==e?void 0:e.id)||J()})}(n,t,e);return et({type:2,toast:r}),r.id}},at=function(t,n){return rt("blank")(t,n)};at.error=rt("error"),at.success=rt("success"),at.loading=rt("loading"),at.custom=rt("custom"),at.dismiss=function(t){et({type:3,toastId:t})},at.remove=function(t){return et({type:4,toastId:t})},at.promise=function(t,n,e){var r=at.loading(n.loading,(0,m.Z)((0,m.Z)({},e),null==e?void 0:e.loading));return t.then((function(t){return at.success(G(n.success,t),(0,m.Z)((0,m.Z)({id:r},e),null==e?void 0:e.success)),t})).catch((function(t){at.error(G(n.error,t),(0,m.Z)((0,m.Z)({id:r},e),null==e?void 0:e.error))})),t};var ot=Y(I||(I=f(["\nfrom {\n  transform: scale(0) rotate(45deg);\n\topacity: 0;\n}\nto {\n transform: scale(1) rotate(45deg);\n  opacity: 1;\n}"]))),it=Y(S||(S=f(["\nfrom {\n  transform: scale(0);\n  opacity: 0;\n}\nto {\n  transform: scale(1);\n  opacity: 1;\n}"]))),ct=Y(A||(A=f(["\nfrom {\n  transform: scale(0) rotate(90deg);\n\topacity: 0;\n}\nto {\n  transform: scale(1) rotate(90deg);\n\topacity: 1;\n}"]))),st=$("div")(N||(N=f(["\n  width: 20px;\n  opacity: 0;\n  height: 20px;\n  border-radius: 10px;\n  background: ",";\n  position: relative;\n  transform: rotate(45deg);\n\n  animation: "," 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)\n    forwards;\n  animation-delay: 100ms;\n\n  &:after,\n  &:before {\n    content: '';\n    animation: "," 0.15s ease-out forwards;\n    animation-delay: 150ms;\n    position: absolute;\n    border-radius: 3px;\n    opacity: 0;\n    background: ",";\n    bottom: 9px;\n    left: 4px;\n    height: 2px;\n    width: 12px;\n  }\n\n  &:before {\n    animation: "," 0.15s ease-out forwards;\n    animation-delay: 180ms;\n    transform: rotate(90deg);\n  }\n"])),(function(t){return t.primary||"#ff4b4b"}),ot,it,(function(t){return t.secondary||"#fff"}),ct),ut=Y(q||(q=f(["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"]))),pt=$("div")(F||(F=f(["\n  width: 12px;\n  height: 12px;\n  box-sizing: border-box;\n  border: 2px solid;\n  border-radius: 100%;\n  border-color: ",";\n  border-right-color: ",";\n  animation: "," 1s linear infinite;\n"])),(function(t){return t.secondary||"#e0e0e0"}),(function(t){return t.primary||"#616161"}),ut),lt=Y(L||(L=f(["\nfrom {\n  transform: scale(0) rotate(45deg);\n\topacity: 0;\n}\nto {\n  transform: scale(1) rotate(45deg);\n\topacity: 1;\n}"]))),ft=Y(P||(P=f(["\n0% {\n\theight: 0;\n\twidth: 0;\n\topacity: 0;\n}\n40% {\n  height: 0;\n\twidth: 6px;\n\topacity: 1;\n}\n100% {\n  opacity: 1;\n  height: 10px;\n}"]))),dt=$("div")(T||(T=f(["\n  width: 20px;\n  opacity: 0;\n  height: 20px;\n  border-radius: 10px;\n  background: ",";\n  position: relative;\n  transform: rotate(45deg);\n\n  animation: "," 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)\n    forwards;\n  animation-delay: 100ms;\n  &:after {\n    content: '';\n    box-sizing: border-box;\n    animation: "," 0.2s ease-out forwards;\n    opacity: 0;\n    animation-delay: 200ms;\n    position: absolute;\n    border-right: 2px solid;\n    border-bottom: 2px solid;\n    border-color: ",";\n    bottom: 6px;\n    left: 6px;\n    height: 10px;\n    width: 6px;\n  }\n"])),(function(t){return t.primary||"#61d345"}),lt,ft,(function(t){return t.secondary||"#fff"})),mt=$("div")(D||(D=f(["\n  position: absolute;\n"]))),vt=$("div")(M||(M=f(["\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-width: 20px;\n  min-height: 20px;\n"]))),ht=Y(H||(H=f(["\nfrom {\n  transform: scale(0.6);\n  opacity: 0.4;\n}\nto {\n  transform: scale(1);\n  opacity: 1;\n}"]))),gt=$("div")(U||(U=f(["\n  position: relative;\n  transform: scale(0.6);\n  opacity: 0.4;\n  min-width: 20px;\n  animation: "," 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)\n    forwards;\n"])),ht),bt=function(t){var n=t.toast,e=n.icon,r=n.type,a=n.iconTheme;return void 0!==e?"string"==typeof e?c.createElement(gt,null,e):e:"blank"===r?null:c.createElement(vt,null,c.createElement(pt,(0,m.Z)({},a)),"loading"!==r&&c.createElement(mt,null,"error"===r?c.createElement(st,(0,m.Z)({},a)):c.createElement(dt,(0,m.Z)({},a))))},yt=function(t){return"\n0% {transform: translate3d(0,".concat(-200*t,"%,0) scale(.6); opacity:.5;}\n100% {transform: translate3d(0,0,0) scale(1); opacity:1;}\n")},xt=function(t){return"\n0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}\n100% {transform: translate3d(0,".concat(-150*t,"%,-1px) scale(.6); opacity:0;}\n")},Zt=$("div")(B||(B=f(["\n  display: flex;\n  align-items: center;\n  background: #fff;\n  color: #363636;\n  line-height: 1.3;\n  will-change: transform;\n  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);\n  max-width: 350px;\n  pointer-events: auto;\n  padding: 8px 10px;\n  border-radius: 8px;\n"]))),wt=$("div")(W||(W=f(["\n  display: flex;\n  justify-content: center;\n  margin: 4px 10px;\n  color: inherit;\n  flex: 1 1 auto;\n  white-space: pre-line;\n"])));c.memo((function(t){var n=t.toast,e=t.position,r=t.style,o=t.children,i=n.height?function(t,n){var e=t.includes("top")?1:-1,r=K()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[yt(e),xt(e)],o=(0,a.Z)(r,2),i=o[0],c=o[1];return{animation:n?"".concat(Y(i)," 0.35s cubic-bezier(.21,1.02,.73,1) forwards"):"".concat(Y(c)," 0.4s forwards cubic-bezier(.06,.71,.55,1)")}}(n.position||e||"top-center",n.visible):{opacity:0},s=c.createElement(bt,{toast:n}),u=c.createElement(wt,(0,m.Z)({},n.ariaProps),G(n.message,n));return c.createElement(Zt,{className:n.className,style:(0,m.Z)((0,m.Z)((0,m.Z)({},i),r),n.style)},"function"==typeof o?o({icon:s,message:u}):c.createElement(c.Fragment,null,s,u))}));!function(t,n,e,r){Z.p=n,O=t,z=e,C=r}(c.createElement);E(X||(X=f(["\n  z-index: 9999;\n  > * {\n    pointer-events: auto;\n  }\n"])));var kt=e(184),jt=function(t){var n=t.onSubmit,e=(0,c.useState)(""),r=(0,a.Z)(e,2),o=r[0],i=r[1];return(0,kt.jsxs)("div",{children:[(0,kt.jsx)("input",{type:"text",name:"query",value:o,onChange:function(t){i(t.target.value)}}),(0,kt.jsx)("button",{onClick:function(){n(o)},children:"Search"})]})},_t=e(9699),Et=function(){var t=(0,c.useState)(null),n=(0,a.Z)(t,2),e=n[0],o=n[1],f=(0,s.lr)(),d=(0,a.Z)(f,2),m=d[0],v=d[1],h=(0,u.UO)().movieId,g=(0,c.useState)(!1),b=(0,a.Z)(g,2),y=b[0],x=b[1],Z=(0,c.useState)(!1),w=(0,a.Z)(Z,2),k=w[0],j=w[1],_=(0,c.useCallback)(function(){var t=(0,r.Z)(i().mark((function t(n){var e,r;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return x(!0),j(!1),t.prev=2,t.next=5,(0,p.bI)(n);case 5:e=t.sent,r=Object.values(e.results),o(r),v({query:n}),t.next=16;break;case 11:t.prev=11,t.t0=t.catch(2),console.error("Error searching movies:",t.t0),at.error("An error occurred while searching movies"),j(!0);case 16:return t.prev=16,x(!1),t.finish(16);case 19:case"end":return t.stop()}}),t,null,[[2,11,16,19]])})));return function(n){return t.apply(this,arguments)}}(),[v]);return(0,c.useEffect)((function(){var t=m.get("query");h&&"string"===typeof t&&""!==t.trim()&&_(t)}),[h,m,_]),(0,kt.jsxs)("div",{children:[(0,kt.jsx)("h1",{children:"Welcome!"}),(0,kt.jsx)(jt,{onSubmit:_}),y&&(0,kt.jsx)(_t.Z,{}),k&&(0,kt.jsx)("p",{children:"Oops, something went wrong"}),e&&e.length>0&&(0,kt.jsx)(l.Z,{movies:e}),null!==e&&0===e.length&&(0,kt.jsx)("p",{children:"No movies found..."})]})}},4126:function(t,n,e){e.d(n,{Bt:function(){return m},Y5:function(){return f},bI:function(){return l},wr:function(){return p},y:function(){return d}});var r=e(1413),a=e(5861),o=e(7757),i=e.n(o),c=e(1243),s="ce6180729ed4220a4a998763c9b5bf5d",u="https://api.themoviedb.org/3",p=function(){var t=(0,a.Z)(i().mark((function t(){var n,e;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,c.Z.get("".concat(u,"/trending/movie/day"),{params:{api_key:s}});case 3:return n=t.sent,e=n.data.results,t.abrupt("return",e);case 8:return t.prev=8,t.t0=t.catch(0),t.abrupt("return",[]);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(){return t.apply(this,arguments)}}(),l=function(){var t=(0,a.Z)(i().mark((function t(n){var e,a,o;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,c.Z.get("".concat(u,"/search/movie"),{params:{api_key:s,query:n}});case 3:return e=t.sent,a=e.data,o=a.results.map((function(t){return(0,r.Z)((0,r.Z)({},t),{},{movieId:t.id})})),t.abrupt("return",(0,r.Z)((0,r.Z)({},a),{},{results:o}));case 9:throw t.prev=9,t.t0=t.catch(0),t.t0;case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(n){return t.apply(this,arguments)}}(),f=function(){var t=(0,a.Z)(i().mark((function t(n){var e,a,o,u;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,c.Z.get("https://api.themoviedb.org/3/movie/".concat(n,"?api_key=").concat(s));case 3:return e=t.sent,a=e.data,o=a.poster_path,u=a.vote_average,t.abrupt("return",(0,r.Z)((0,r.Z)({},e.data),{},{poster_path:o,vote_average:u}));case 8:throw t.prev=8,t.t0=t.catch(0),new Error("Error fetching movie details");case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(n){return t.apply(this,arguments)}}(),d=function(){var t=(0,a.Z)(i().mark((function t(n){var e,a,o;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,c.Z.get("".concat(u,"/movie/").concat(n,"/credits?api_key=").concat(s));case 3:return e=t.sent,a=e.data.cast,o=a.map((function(t){return(0,r.Z)((0,r.Z)({},t),{},{profilePath:t.profile_path?"https://image.tmdb.org/t/p/w500/".concat(t.profile_path):null})})),t.abrupt("return",{cast:o});case 9:throw t.prev=9,t.t0=t.catch(0),new Error("Error fetching movie details");case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(n){return t.apply(this,arguments)}}(),m=function(){var t=(0,a.Z)(i().mark((function t(n){var e,r;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,c.Z.get("".concat(u,"/movie/").concat(n,"/reviews"),{params:{api_key:s}});case 3:return e=t.sent,r=e.data.results,t.abrupt("return",r);case 8:return t.prev=8,t.t0=t.catch(0),t.abrupt("return",[]);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(n){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=169.e0b76b44.chunk.js.map