"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[642],{9699:function(t,r,e){var n=e(643),a=e(184);r.Z=function(){return(0,a.jsx)(n.p2,{height:"200",width:"200",color:"#4fa94d",ariaLabel:"circles-loading",wrapperStyle:{},wrapperClass:"",visible:!0})}},642:function(t,r,e){e.r(r),e.d(r,{default:function(){return h}});var n=e(5861),a=e(9439),c=e(7757),u=e.n(c),s=e(2791),i=e(7689),o=e(4126),p=e(9699),f="Cast_castList__7fOsP",l=e(184),h=function(){var t=(0,i.UO)().id,r=(0,s.useState)(null),e=(0,a.Z)(r,2),c=e[0],h=e[1],v=(0,s.useState)(!0),d=(0,a.Z)(v,2),m=d[0],w=d[1],x=(0,s.useState)(!1),g=(0,a.Z)(x,2),b=g[0],_=g[1];return(0,s.useEffect)((function(){var r=function(){var r=(0,n.Z)(u().mark((function r(){var e;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,(0,o.y)(t);case 3:e=r.sent,h(e.cast),r.next=10;break;case 7:r.prev=7,r.t0=r.catch(0),_(!0);case 10:return r.prev=10,w(!1),r.finish(10);case 13:case"end":return r.stop()}}),r,null,[[0,7,10,13]])})));return function(){return r.apply(this,arguments)}}();r()}),[t]),m?(0,l.jsx)(p.Z,{}):b?(0,l.jsx)("p",{children:"Sorry, we have a poblem..."}):(0,l.jsx)("div",{children:c?(0,l.jsx)("ul",{className:f,children:c.map((function(t){return(0,l.jsxs)("li",{children:[(0,l.jsx)("h3",{children:t.name}),(0,l.jsxs)("p",{children:["Character: ",t.character]}),t.profile_path?(0,l.jsx)("img",{src:"https://image.tmdb.org/t/p/w400/".concat(t.profile_path),alt:t.name}):(0,l.jsx)("img",{src:"https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=400x250",alt:t.name})]},t.cast_id)}))}):(0,l.jsx)("p",{children:"Sorry, there is no such information at the moment."})})}},4126:function(t,r,e){e.d(r,{Bt:function(){return v},Y5:function(){return l},bI:function(){return f},wr:function(){return p},y:function(){return h}});var n=e(1413),a=e(5861),c=e(7757),u=e.n(c),s=e(1243),i="ce6180729ed4220a4a998763c9b5bf5d",o="https://api.themoviedb.org/3",p=function(){var t=(0,a.Z)(u().mark((function t(){var r,e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,s.Z.get("".concat(o,"/trending/movie/day"),{params:{api_key:i}});case 3:return r=t.sent,e=r.data.results,t.abrupt("return",e);case 8:return t.prev=8,t.t0=t.catch(0),t.abrupt("return",[]);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(){return t.apply(this,arguments)}}(),f=function(){var t=(0,a.Z)(u().mark((function t(r){var e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,s.Z.get("".concat(o,"/search/movie"),{params:{api_key:i,query:r}});case 3:return e=t.sent,t.abrupt("return",e.data.results);case 7:throw t.prev=7,t.t0=t.catch(0),t.t0;case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(r){return t.apply(this,arguments)}}(),l=function(){var t=(0,a.Z)(u().mark((function t(r){var e,a,c,o;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,s.Z.get("https://api.themoviedb.org/3/movie/".concat(r,"?api_key=").concat(i));case 3:return e=t.sent,a=e.data,c=a.poster_path,o=a.vote_average,t.abrupt("return",(0,n.Z)((0,n.Z)({},e.data),{},{poster_path:c,vote_average:o}));case 8:throw t.prev=8,t.t0=t.catch(0),new Error("Error fetching movie details");case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(r){return t.apply(this,arguments)}}(),h=function(){var t=(0,a.Z)(u().mark((function t(r){var e,a,c;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,s.Z.get("".concat(o,"/movie/").concat(r,"/credits?api_key=").concat(i));case 3:return e=t.sent,a=e.data.cast,c=a.map((function(t){return(0,n.Z)((0,n.Z)({},t),{},{profilePath:t.profile_path?"https://image.tmdb.org/t/p/w500/".concat(t.profile_path):null})})),t.abrupt("return",{cast:c});case 9:throw t.prev=9,t.t0=t.catch(0),new Error("Error fetching movie details");case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(r){return t.apply(this,arguments)}}(),v=function(){var t=(0,a.Z)(u().mark((function t(r){var e,n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,s.Z.get("".concat(o,"/movie/").concat(r,"/reviews"),{params:{api_key:i}});case 3:return e=t.sent,n=e.data.results,t.abrupt("return",n);case 8:return t.prev=8,t.t0=t.catch(0),t.abrupt("return",[]);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(r){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=642.36cdfee8.chunk.js.map