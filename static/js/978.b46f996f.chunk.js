"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[978],{978:function(e,r,t){t.r(r),t.d(r,{default:function(){return h}});var n=t(433),a=t(861),u=t(439),i=t(757),s=t.n(i),c=t(791),o=t(87),p={item:"movies_item__xyEG3",item__image:"movies_item__image__XU3U0"},l=t(724),f=t(184),v=function(){var e=(0,c.useState)([]),r=(0,u.Z)(e,2),t=r[0],i=r[1];(0,c.useEffect)((function(){var e=function(){var e=(0,a.Z)(s().mark((function e(){var r,t,a,u;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,l.AC)();case 3:r=e.sent,t=r.data,a=(0,n.Z)(t.results)?(0,n.Z)(t.results):[],i((0,n.Z)(a)),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),u=e.t0.response,console.log(u.error.message);case 13:return e.prev=13,e.finish(13);case 15:case"end":return e.stop()}}),e,null,[[0,9,13,15]])})));return function(){return e.apply(this,arguments)}}();e()}),[]);var v=t.map((function(e){var r=e.id,t=(e.backdrop_path,e.media_type),n=(e.original_language,e.original_title,e.overview,e.poster_path,e.title);return(0,f.jsx)(o.rU,{to:"/".concat(t,"/").concat(r),children:(0,f.jsx)("li",{className:p.item,children:(0,f.jsxs)("h3",{children:[" ",n]})})},r)}));return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)("h2",{children:"Trending today"}),(0,f.jsx)("ul",{className:p.gallery,children:v})]})},h=function(){return(0,f.jsx)(v,{})}},724:function(e,r,t){t.d(r,{AC:function(){return g},E9:function(){return l},PB:function(){return h},PD:function(){return p},SJ:function(){return v},qo:function(){return f}});var n=t(861),a=t(757),u=t.n(a),i=t(912),s="https://api.themoviedb.org/3/",c="?api_key=1a6a0e252669dea132492bf96fa96565",o=i.Z.create({baseURL:"https://api.themoviedb.org/3/trending/movie/day?api_key=1a6a0e252669dea132492bf96fa96565"}),p=function(e){var r="https://image.tmdb.org/t/p/w500"+e;return console.log("makeImageUrl",r),r},l=function(){var e=(0,n.Z)(u().mark((function e(){var r,t,n,a,i,p=arguments;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=p.length>0&&void 0!==p[0]?p[0]:"movie",t=p.length>1?p[1]:void 0,n=s+r+"/"+t+"/reviews"+c,e.next=5,o.get(n,{params:{language:"en-US",page:1}});case 5:return a=e.sent,i=a.data,console.log("searchReviewsById",i),e.abrupt("return",i);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),f=function(){var e=(0,n.Z)(u().mark((function e(){var r,t,n,a,i,p=arguments;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=p.length>0&&void 0!==p[0]?p[0]:"movie",t=p.length>1?p[1]:void 0,n=s+r+"/"+t+"/credits"+c,e.next=5,o.get(n,{params:{language:"en-US"}});case 5:return a=e.sent,i=a.data,console.log("searchCast",i),e.abrupt("return",i);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),v=function(){var e=(0,n.Z)(u().mark((function e(r,t){var n,a;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=s+"search/"+t+c,console.log("searchByTitle",n),e.next=4,o.get(n,{params:{language:"en-US",query:r}});case 4:return a=e.sent,console.log("searchByTitle",a),e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)})));return function(r,t){return e.apply(this,arguments)}}(),h=function(){var e=(0,n.Z)(u().mark((function e(){var r,t,n,a,i=arguments;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=i.length>0&&void 0!==i[0]?i[0]:"movie",t=i.length>1?i[1]:void 0,n=s+r+"/"+t+c,e.next=5,o.get(n,{params:{language:"en-US"}});case 5:return a=e.sent,e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),g=function(){var e=(0,n.Z)(u().mark((function e(){var r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.get("https://api.themoviedb.org/3/trending/movie/day?api_key=1a6a0e252669dea132492bf96fa96565");case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=978.b46f996f.chunk.js.map