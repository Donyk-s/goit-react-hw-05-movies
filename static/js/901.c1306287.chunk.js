"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[901],{9699:function(r,e,t){var n=t(643),a=t(184);e.Z=function(){return(0,a.jsx)(n.p2,{height:"200",width:"200",color:"#4fa94d",ariaLabel:"circles-loading",wrapperStyle:{},wrapperClass:"",visible:!0})}},901:function(r,e,t){t.r(e);var n=t(5861),a=t(9439),c=t(7757),u=t.n(c),s=t(2791),i=t(7689),o=t(4126),p=t(9699),f=t(184);e.default=function(){var r=(0,i.UO)().id,e=(0,s.useState)([]),t=(0,a.Z)(e,2),c=t[0],h=t[1],v=(0,s.useState)(!0),l=(0,a.Z)(v,2),d=l[0],w=l[1],m=(0,s.useState)(!1),x=(0,a.Z)(m,2),Z=x[0],b=x[1];return(0,s.useEffect)((function(){var e=function(){var e=(0,n.Z)(u().mark((function e(){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,o.Bt)(r);case 3:t=e.sent,h(t),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),b(!0);case 10:return e.prev=10,w(!1),e.finish(10);case 13:case"end":return e.stop()}}),e,null,[[0,7,10,13]])})));return function(){return e.apply(this,arguments)}}();e()}),[r]),d?(0,f.jsx)(p.Z,{}):Z?(0,f.jsx)("p",{children:"Error occurred while fetching reviews."}):(0,f.jsxs)("div",{children:[(0,f.jsx)("h2",{children:"Reviews:"}),c.length>0?(0,f.jsx)("ul",{children:c.map((function(r){return(0,f.jsxs)("li",{children:[(0,f.jsx)("h3",{children:r.author}),(0,f.jsx)("p",{children:r.content})]},r.id)}))}):(0,f.jsx)("p",{children:"No reviews available."})]})}},4126:function(r,e,t){t.d(e,{Bt:function(){return l},Y5:function(){return h},bI:function(){return f},wr:function(){return p},y:function(){return v}});var n=t(1413),a=t(5861),c=t(7757),u=t.n(c),s=t(1243),i="ce6180729ed4220a4a998763c9b5bf5d",o="https://api.themoviedb.org/3",p=function(){var r=(0,a.Z)(u().mark((function r(){var e,t;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,s.Z.get("".concat(o,"/trending/movie/day"),{params:{api_key:i}});case 3:return e=r.sent,t=e.data.results,r.abrupt("return",t);case 8:return r.prev=8,r.t0=r.catch(0),r.abrupt("return",[]);case 11:case"end":return r.stop()}}),r,null,[[0,8]])})));return function(){return r.apply(this,arguments)}}(),f=function(){var r=(0,a.Z)(u().mark((function r(e){var t;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,s.Z.get("".concat(o,"/search/movie"),{params:{api_key:i,query:e}});case 3:return t=r.sent,r.abrupt("return",t.data.results);case 7:throw r.prev=7,r.t0=r.catch(0),r.t0;case 10:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(e){return r.apply(this,arguments)}}(),h=function(){var r=(0,a.Z)(u().mark((function r(e){var t,a,c,o;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,s.Z.get("https://api.themoviedb.org/3/movie/".concat(e,"?api_key=").concat(i));case 3:return t=r.sent,a=t.data,c=a.poster_path,o=a.vote_average,r.abrupt("return",(0,n.Z)((0,n.Z)({},t.data),{},{poster_path:c,vote_average:o}));case 8:throw r.prev=8,r.t0=r.catch(0),new Error("Error fetching movie details");case 11:case"end":return r.stop()}}),r,null,[[0,8]])})));return function(e){return r.apply(this,arguments)}}(),v=function(){var r=(0,a.Z)(u().mark((function r(e){var t,a,c;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,s.Z.get("".concat(o,"/movie/").concat(e,"/credits?api_key=").concat(i));case 3:return t=r.sent,a=t.data.cast,c=a.map((function(r){return(0,n.Z)((0,n.Z)({},r),{},{profilePath:r.profile_path?"https://image.tmdb.org/t/p/w500/".concat(r.profile_path):null})})),r.abrupt("return",{cast:c});case 9:throw r.prev=9,r.t0=r.catch(0),new Error("Error fetching movie details");case 12:case"end":return r.stop()}}),r,null,[[0,9]])})));return function(e){return r.apply(this,arguments)}}(),l=function(){var r=(0,a.Z)(u().mark((function r(e){var t,n;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,s.Z.get("".concat(o,"/movie/").concat(e,"/reviews"),{params:{api_key:i}});case 3:return t=r.sent,n=t.data.results,r.abrupt("return",n);case 8:return r.prev=8,r.t0=r.catch(0),r.abrupt("return",[]);case 11:case"end":return r.stop()}}),r,null,[[0,8]])})));return function(e){return r.apply(this,arguments)}}()}}]);
//# sourceMappingURL=901.c1306287.chunk.js.map