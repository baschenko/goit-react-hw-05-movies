"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[186],{186:function(t,e,r){r.r(e);var n=r(861),a=r(439),u=r(687),c=r.n(u),i=r(791),s=r(689),o=r(690),p=r(184);e.default=function(){var t=(0,s.UO)().movieId,e=(0,i.useState)(),r=(0,a.Z)(e,2),u=r[0],h=r[1];return(0,i.useEffect)((function(){function e(){return(e=(0,n.Z)(c().mark((function e(){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.SM(t);case 3:r=e.sent,h(r),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[t]),(0,p.jsx)(p.Fragment,{children:u&&(0===u.total_results?"We don't have any review for this movie":(0,p.jsx)(p.Fragment,{children:(0,p.jsx)("ul",{children:u.results.map((function(t){return(0,p.jsxs)("li",{children:[(0,p.jsx)("h2",{children:t.author}),(0,p.jsx)("p",{children:t.content})]},t.id)}))})}))})}},690:function(t,e,r){r.d(e,{SM:function(){return h},XT:function(){return s},a2:function(){return p},gH:function(){return f},t2:function(){return o}});var n=r(861),a=r(687),u=r.n(a),c=r(340),i={method:"GET",params:{language:"en-US"},headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNWQ5OTNmM2EyZjlkOThhZTUyNjY1YzU3MTFmNGFiZSIsInN1YiI6IjY2MmFkODRmNWMwNzFiMDExZjVlMzc1MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rLVAAmb9wgXoqcUutJsdF_E9TvT3e0pPXYBi2Q9FDY4"}},s=function(){var t=(0,n.Z)(u().mark((function t(){var e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.request("https://api.themoviedb.org/3/trending/movie/day",i);case 2:return e=t.sent,t.abrupt("return",e.data.results);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),o=function(){var t=(0,n.Z)(u().mark((function t(e){var r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.request("https://api.themoviedb.org/3/movie/".concat(e),i);case 2:return r=t.sent,t.abrupt("return",r.data);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),p=function(){var t=(0,n.Z)(u().mark((function t(e){var r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.request("https://api.themoviedb.org/3/movie/".concat(e,"/credits"),i);case 2:return r=t.sent,t.abrupt("return",r.data);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),h=function(){var t=(0,n.Z)(u().mark((function t(e){var r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.request("https://api.themoviedb.org/3/movie/".concat(e,"/reviews"),i);case 2:return r=t.sent,t.abrupt("return",r.data);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=(0,n.Z)(u().mark((function t(e){var r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.request("https://api.themoviedb.org/3/search/movie?".concat(e),i);case 2:return r=t.sent,t.abrupt("return",r.data.results);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=186.118c4e10.chunk.js.map