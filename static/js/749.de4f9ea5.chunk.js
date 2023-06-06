"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[749],{9699:function(e,t,r){var n=r(643),a=r(184);t.Z=function(){return(0,a.jsx)(n.p2,{height:"200",width:"200",color:"#4fa94d",ariaLabel:"circles-loading",wrapperStyle:{},wrapperClass:"",visible:!0})}},8749:function(e,t,r){r.r(t),r.d(t,{default:function(){return w}});var n=r(5861),a=r(9439),c=r(7757),s=r.n(c),i=r(2791),u=r(7689),o=r(1087),p=r(4126),l=r(719),v="MovieDetails_backLink__7eDBu",f="MovieDetails_detailsList__mipya",h="MovieDetails_detailsItems__7UesL",d=r(9699),m=r(184),w=function(){var e,t=(0,u.UO)().id,r=(0,i.useState)(null),c=(0,a.Z)(r,2),w=c[0],x=c[1],_=(0,u.TH)(),g=(0,i.useState)(!1),b=(0,a.Z)(g,2),k=b[0],Z=b[1],j=(0,i.useState)(!0),y=(0,a.Z)(j,2),L=y[0],E=y[1],O=null===(e=_.state)||void 0===e?void 0:e.from,S=function(){var e=(0,n.Z)(s().mark((function e(t){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,p.Y5)(t);case 3:return r=e.sent,e.abrupt("return",r);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",null);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}();return(0,i.useEffect)((function(){var e=function(){var e=(0,n.Z)(s().mark((function e(){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return E(!0),Z(!1),e.next=4,S(t);case 4:r=e.sent,x(r),E(!1);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[t]),L?(0,m.jsx)(d.Z,{}):k?(0,m.jsx)("p",{children:"Error occurred while fetching movie details."}):(0,m.jsxs)("main",{children:[(0,m.jsxs)(o.OL,{className:v,to:O,children:[(0,m.jsx)(l.Wpx,{}),"Return to the previous page"]}),(0,m.jsx)("h1",{children:w.title}),(0,m.jsx)("img",{src:w&&w.poster_path?"https://image.tmdb.org/t/p/w500/".concat(w.poster_path):"https://upload.wikimedia.org/wikipedia/commons/d/d1/Image_not_available.png",width:500,alt:"poster"}),(0,m.jsxs)("p",{children:["Overview: ",w.overview]}),(0,m.jsxs)("p",{children:["Rating: ",w.vote_average]}),(0,m.jsxs)("ul",{className:f,children:[(0,m.jsx)("li",{children:(0,m.jsx)(o.OL,{className:h,to:"/movies/".concat(t,"/cast"),state:{from:O},children:"Cast"})}),(0,m.jsx)("li",{children:(0,m.jsx)(o.OL,{className:h,to:"/movies/".concat(t,"/reviews"),state:{from:O},children:"Reviews"})})]}),(0,m.jsx)(i.Suspense,{fallback:(0,m.jsx)("div",{children:"Loading subpage..."})}),(0,m.jsx)(u.j3,{})]})}},4126:function(e,t,r){r.d(t,{Bt:function(){return h},Y5:function(){return v},bI:function(){return l},wr:function(){return p},y:function(){return f}});var n=r(1413),a=r(5861),c=r(7757),s=r.n(c),i=r(1243),u="ce6180729ed4220a4a998763c9b5bf5d",o="https://api.themoviedb.org/3",p=function(){var e=(0,a.Z)(s().mark((function e(){var t,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.Z.get("".concat(o,"/trending/movie/day"),{params:{api_key:u}});case 3:return t=e.sent,r=t.data.results,e.abrupt("return",r);case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",[]);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),l=function(){var e=(0,a.Z)(s().mark((function e(t){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.Z.get("".concat(o,"/search/movie"),{params:{api_key:u,query:t}});case 3:return r=e.sent,e.abrupt("return",r.data.results);case 7:throw e.prev=7,e.t0=e.catch(0),e.t0;case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=(0,a.Z)(s().mark((function e(t){var r,a,c,o;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.Z.get("https://api.themoviedb.org/3/movie/".concat(t,"?api_key=").concat(u));case 3:return r=e.sent,a=r.data,c=a.poster_path,o=a.vote_average,e.abrupt("return",(0,n.Z)((0,n.Z)({},r.data),{},{poster_path:c,vote_average:o}));case 8:throw e.prev=8,e.t0=e.catch(0),new Error("Error fetching movie details");case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,a.Z)(s().mark((function e(t){var r,a,c;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.Z.get("".concat(o,"/movie/").concat(t,"/credits?api_key=").concat(u));case 3:return r=e.sent,a=r.data.cast,c=a.map((function(e){return(0,n.Z)((0,n.Z)({},e),{},{profilePath:e.profile_path?"https://image.tmdb.org/t/p/w500/".concat(e.profile_path):null})})),e.abrupt("return",{cast:c});case 9:throw e.prev=9,e.t0=e.catch(0),new Error("Error fetching movie details");case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}(),h=function(){var e=(0,a.Z)(s().mark((function e(t){var r,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.Z.get("".concat(o,"/movie/").concat(t,"/reviews"),{params:{api_key:u}});case 3:return r=e.sent,n=r.data.results,e.abrupt("return",n);case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",[]);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=749.de4f9ea5.chunk.js.map