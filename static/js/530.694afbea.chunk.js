"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[530],{530:function(e,t,r){r.r(t),r.d(t,{default:function(){return m}});var n=r(165),a=r(861),c=r(439),u=r(791),s=r(87),o=r(689),i="Movies_Searchbar__x0Q8w",p="Movies_SearchForm__wjo2h",f="Movies_SearchFormButton__8YSXn",l="Movies_SearchFormButtonLabel__wEI6R",v="Movies_SearchFormInput__bFrPB",h=r(243),d=r(184),m=function(){var e=(0,u.useState)([]),t=(0,c.Z)(e,2),r=t[0],m=t[1],_=(0,s.lr)(),Z=(0,c.Z)(_,2),x=Z[0],w=Z[1],y=x.get("query"),g=(0,o.TH)();return(0,u.useEffect)((function(){if(""!==y&&null!==y){var e=function(){var e=(0,a.Z)((0,n.Z)().mark((function e(){var t,r;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,h.z1)(y);case 2:t=e.sent,r=t.results,m(r);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}}),[y]),(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("div",{className:i,children:(0,d.jsxs)("form",{className:p,onSubmit:function(e){e.preventDefault();var t=e.currentTarget;w(""!==y?{query:t.elements.query.value}:{}),t.reset()},children:[(0,d.jsx)("input",{className:v,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search movie",name:"query"}),(0,d.jsx)("button",{type:"submit",className:f,children:(0,d.jsx)("span",{className:l,children:"Search"})})]})}),(0,d.jsx)("ul",{children:r&&r.map((function(e){var t=e.id,r=e.title;return(0,d.jsx)("li",{children:(0,d.jsx)(s.rU,{to:"/movies/".concat(t),state:{from:g},children:(0,d.jsx)("p",{children:r})})},t)}))})]})}},243:function(e,t,r){r.d(t,{Jh:function(){return l},M1:function(){return f},TP:function(){return i},wr:function(){return p},yA:function(){return s},z1:function(){return o}});var n=r(165),a=r(861),c=r(388);c.Z.defaults.baseURL="https://api.themoviedb.org/3/";var u="be0d83ce9c2c607120c6d4ef533d72b4",s="https://image.tmdb.org/t/p/w500",o=function(){var e=(0,a.Z)((0,n.Z)().mark((function e(t){var r,a,s;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="search/movie?api_key=".concat(u,"&language=en-US&page=1&include_adult=false&query=").concat(t),e.next=3,c.Z.get(r);case 3:return a=e.sent,s=a.data,e.abrupt("return",s);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),i=function(){var e=(0,a.Z)((0,n.Z)().mark((function e(t){var r,a,s;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="movie/".concat(t,"$?api_key=").concat(u,"&language=en-US"),e.next=3,c.Z.get(r);case 3:return a=e.sent,s=a.data,e.abrupt("return",s);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,a.Z)((0,n.Z)().mark((function e(){var t,r,a;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="trending/movie/day?api_key=".concat(u),e.next=3,c.Z.get(t);case 3:return r=e.sent,a=r.data,e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),f=function(){var e=(0,a.Z)((0,n.Z)().mark((function e(t){var r,a;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="movie/".concat(t,"/credits?api_key=").concat(u),e.next=3,c.Z.get(r);case 3:return a=e.sent,e.abrupt("return",a.data.cast);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,a.Z)((0,n.Z)().mark((function e(t){var r,a;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="movie/".concat(t,"/reviews?api_key=").concat(u),e.next=3,c.Z.get(r);case 3:return a=e.sent,e.abrupt("return",a.data.results);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=530.694afbea.chunk.js.map