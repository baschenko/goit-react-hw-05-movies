"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[186],{186:function(e,t,r){r.r(t);var n=r(861),a=r(439),c=r(687),u=r.n(c),o=r(791),i=r(689),s=r(690),p=r(184);t.default=function(){var e=(0,i.UO)().movieId,t=(0,o.useState)(),r=(0,a.Z)(t,2),c=r[0],f=r[1];return(0,o.useEffect)((function(){function t(){return(t=(0,n.Z)(u().mark((function t(){var r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,s.SM(e);case 3:r=t.sent,f(r),t.next=9;break;case 7:t.prev=7,t.t0=t.catch(0);case 9:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[e]),console.log("reviews:",c),(0,p.jsx)(p.Fragment,{children:c&&(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)("div",{children:"Reviews"}),(0,p.jsx)("ul",{children:c.results.map((function(e){return(0,p.jsxs)("li",{children:[(0,p.jsx)("h2",{children:e.author}),(0,p.jsx)("p",{children:e.content})]},e.id)}))})]})})}},690:function(e,t,r){r.d(t,{SM:function(){return f},XT:function(){return i},a2:function(){return p},gH:function(){return h},t2:function(){return s}});var n=r(861),a=r(687),c=r.n(a),u=r(340),o={method:"GET",params:{language:"en-US"},headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNWQ5OTNmM2EyZjlkOThhZTUyNjY1YzU3MTFmNGFiZSIsInN1YiI6IjY2MmFkODRmNWMwNzFiMDExZjVlMzc1MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rLVAAmb9wgXoqcUutJsdF_E9TvT3e0pPXYBi2Q9FDY4"}},i=function(){var e=(0,n.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.request("https://api.themoviedb.org/3/trending/movie/day",o);case 2:return t=e.sent,console.log("getMovies"),e.abrupt("return",t.data.results);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),s=function(){var e=(0,n.Z)(c().mark((function e(t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.request("https://api.themoviedb.org/3/movie/".concat(t),o);case 2:return r=e.sent,console.log("getMovieInfo"),e.abrupt("return",r.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(c().mark((function e(t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.request("https://api.themoviedb.org/3/movie/".concat(t,"/credits"),o);case 2:return r=e.sent,console.log("getActorsMovie"),e.abrupt("return",r.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,n.Z)(c().mark((function e(t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.request("https://api.themoviedb.org/3/movie/".concat(t,"/reviews"),o);case 2:return r=e.sent,console.log("getReviewMovie"),e.abrupt("return",r.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=function(){var e=(0,n.Z)(c().mark((function e(t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.request("https://api.themoviedb.org/3/search/movie?".concat(t),o);case 2:return r=e.sent,console.log("getReviewMovie"),e.abrupt("return",r.data.results);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=186.63f135e2.chunk.js.map