var __webpack_modules__={4698:(o,d,u)=>{u.e(674).then(u.bind(u,4674)).catch(f=>console.error(f))}},__webpack_module_cache__={};function __webpack_require__(o){var d=__webpack_module_cache__[o];if(void 0!==d)return d.exports;var u=__webpack_module_cache__[o]={exports:{}};return __webpack_modules__[o](u,u.exports,__webpack_require__),u.exports}__webpack_require__.m=__webpack_modules__,__webpack_require__.c=__webpack_module_cache__,__webpack_require__.d=(o,d)=>{for(var u in d)__webpack_require__.o(d,u)&&!__webpack_require__.o(o,u)&&Object.defineProperty(o,u,{enumerable:!0,get:d[u]})},__webpack_require__.f={},__webpack_require__.e=o=>Promise.all(Object.keys(__webpack_require__.f).reduce((d,u)=>(__webpack_require__.f[u](o,d),d),[])),__webpack_require__.u=o=>o+"."+{29:"aeb518c015cab21f",111:"c74222942db38247",181:"6a43deda25514457",255:"2cd44ae29253bb4f",481:"dc509b66afa554d3",559:"4c10a216269125dd",650:"b291c0fa78ed09b6",674:"af15cadcb8b97fd8",842:"396022b56b9e0262",895:"41bd0ee840d871f8"}[o]+".js",__webpack_require__.miniCssF=o=>{},__webpack_require__.o=(o,d)=>Object.prototype.hasOwnProperty.call(o,d),(()=>{var o={},d="mfe-plugins:";__webpack_require__.l=(u,f,b,p)=>{if(o[u])o[u].push(f);else{var l,_;if(void 0!==b)for(var h=document.getElementsByTagName("script"),S=0;S<h.length;S++){var c=h[S];if(c.getAttribute("src")==u||c.getAttribute("data-webpack")==d+b){l=c;break}}l||(_=!0,(l=document.createElement("script")).type="module",l.charset="utf-8",l.timeout=120,__webpack_require__.nc&&l.setAttribute("nonce",__webpack_require__.nc),l.setAttribute("data-webpack",d+b),l.src=__webpack_require__.tu(u)),o[u]=[f];var g=(C,y)=>{l.onerror=l.onload=null,clearTimeout(w);var m=o[u];if(delete o[u],l.parentNode&&l.parentNode.removeChild(l),m&&m.forEach(v=>v(y)),C)return C(y)},w=setTimeout(g.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=g.bind(null,l.onerror),l.onload=g.bind(null,l.onload),_&&document.head.appendChild(l)}}})(),__webpack_require__.r=o=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(o,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(o,"__esModule",{value:!0})},(()=>{__webpack_require__.S={};var o={},d={};__webpack_require__.I=(u,f)=>{f||(f=[]);var b=d[u];if(b||(b=d[u]={}),!(f.indexOf(b)>=0)){if(f.push(b),o[u])return o[u];__webpack_require__.o(__webpack_require__.S,u)||(__webpack_require__.S[u]={});var p=__webpack_require__.S[u],_="mfe-plugins",h=(g,w,C,y)=>{var m=p[g]=p[g]||{},v=m[w];(!v||!v.loaded&&(!y!=!v.eager?y:_>v.from))&&(m[w]={get:C,from:_,eager:!!y})},c=[];return"default"===u&&(h("@angular/common","15.0.0",()=>__webpack_require__.e(895).then(()=>()=>__webpack_require__(6895))),h("@angular/core","15.0.0",()=>__webpack_require__.e(650).then(()=>()=>__webpack_require__(4650))),h("@angular/platform-browser","15.0.0",()=>__webpack_require__.e(255).then(()=>()=>__webpack_require__(1481))),h("@shared","0.0.1",()=>__webpack_require__.e(29).then(()=>()=>__webpack_require__(3842))),h("rxjs/operators","7.5.0",()=>__webpack_require__.e(559).then(()=>()=>__webpack_require__(7559))),h("rxjs","7.5.0",()=>__webpack_require__.e(111).then(()=>()=>__webpack_require__(6111)))),o[u]=c.length?Promise.all(c).then(()=>o[u]=1):1}}})(),(()=>{var o;__webpack_require__.tt=()=>(void 0===o&&(o={createScriptURL:d=>d},typeof trustedTypes<"u"&&trustedTypes.createPolicy&&(o=trustedTypes.createPolicy("angular#bundler",o))),o)})(),__webpack_require__.tu=o=>__webpack_require__.tt().createScriptURL(o),(()=>{var o;if("string"==typeof import.meta.url&&(o=import.meta.url),!o)throw new Error("Automatic publicPath is not supported in this browser");o=o.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),__webpack_require__.p=o})(),(()=>{var o=e=>{var t=a=>a.split(".").map(i=>+i==i?+i:i),r=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),n=r[1]?t(r[1]):[];return r[2]&&(n.length++,n.push.apply(n,t(r[2]))),r[3]&&(n.push([]),n.push.apply(n,t(r[3]))),n},d=(e,t)=>{e=o(e),t=o(t);for(var r=0;;){if(r>=e.length)return r<t.length&&"u"!=(typeof t[r])[0];var n=e[r],a=(typeof n)[0];if(r>=t.length)return"u"==a;var i=t[r],s=(typeof i)[0];if(a!=s)return"o"==a&&"n"==s||"s"==s||"u"==a;if("o"!=a&&"u"!=a&&n!=i)return n<i;r++}},u=e=>{var t=e[0],r="";if(1===e.length)return"*";if(t+.5){r+=0==t?">=":-1==t?"<":1==t?"^":2==t?"~":t>0?"=":"!=";for(var n=1,a=1;a<e.length;a++)n--,r+="u"==(typeof(s=e[a]))[0]?"-":(n>0?".":"")+(n=2,s);return r}var i=[];for(a=1;a<e.length;a++){var s=e[a];i.push(0===s?"not("+V()+")":1===s?"("+V()+" || "+V()+")":2===s?i.pop()+" "+i.pop():u(s))}return V();function V(){return i.pop().replace(/^\((.+)\)$/,"$1")}},f=(e,t)=>{if(0 in e){t=o(t);var r=e[0],n=r<0;n&&(r=-r-1);for(var a=0,i=1,s=!0;;i++,a++){var V,O,j=i<e.length?(typeof e[i])[0]:"";if(a>=t.length||"o"==(O=(typeof(V=t[a]))[0]))return!s||("u"==j?i>r&&!n:""==j!=n);if("u"==O){if(!s||"u"!=j)return!1}else if(s)if(j==O)if(i<=r){if(V!=e[i])return!1}else{if(n?V>e[i]:V<e[i])return!1;V!=e[i]&&(s=!1)}else if("s"!=j&&"n"!=j){if(n||i<=r)return!1;s=!1,i--}else{if(i<=r||O<j!=n)return!1;s=!1}else"s"!=j&&"n"!=j&&(s=!1,i--)}}var k=[],x=k.pop.bind(k);for(a=1;a<e.length;a++){var T=e[a];k.push(1==T?x()|x():2==T?x()&x():T?f(T,t):!x())}return!!x()},c=(e,t,r,n)=>{var a=((e,t)=>{var r=e[t];return Object.keys(r).reduce((n,a)=>!n||!r[n].loaded&&d(n,a)?a:n,0)})(e,r);if(!f(n,a))throw new Error(((e,t,r,n)=>"Unsatisfied version "+r+" from "+(r&&e[t][r].from)+" of shared singleton module "+t+" (required "+u(n)+")")(e,r,a,n));return m(e[r][a])},m=e=>(e.loaded=1,e.get()),v=e=>function(t,r,n,a){var i=__webpack_require__.I(t);return i&&i.then?i.then(e.bind(e,t,__webpack_require__.S[t],r,n,a)):e(t,__webpack_require__.S[t],r,n,a)},A=v((e,t,r,n)=>t&&__webpack_require__.o(t,r)?m(((e,n)=>{var r=e[n];return(n=Object.keys(r).reduce((a,i)=>!a||d(a,i)?i:a,0))&&r[n]})(t,r)):n()),E=v((e,t,r,n,a)=>t&&__webpack_require__.o(t,r)?c(t,0,r,n):a()),P={},F={6269:()=>E("default","@angular/core",[1,15,0,0],()=>__webpack_require__.e(650).then(()=>()=>__webpack_require__(4650))),3970:()=>E("default","rxjs",[2,7,5,0],()=>__webpack_require__.e(111).then(()=>()=>__webpack_require__(6111))),6209:()=>E("default","rxjs/operators",[2,7,5,0],()=>__webpack_require__.e(559).then(()=>()=>__webpack_require__(7559))),1493:()=>E("default","@angular/common",[1,15,0,0],()=>__webpack_require__.e(181).then(()=>()=>__webpack_require__(6895))),167:()=>A("default","@shared",()=>__webpack_require__.e(842).then(()=>()=>__webpack_require__(3842))),7124:()=>E("default","@angular/platform-browser",[1,15,0,0],()=>__webpack_require__.e(481).then(()=>()=>__webpack_require__(1481)))},M={29:[3970,6269],255:[1493,6269],650:[3970,6209],674:[167,1493,3970,6269,7124],895:[6269]};__webpack_require__.f.consumes=(e,t)=>{__webpack_require__.o(M,e)&&M[e].forEach(r=>{if(__webpack_require__.o(P,r))return t.push(P[r]);var n=s=>{P[r]=0,__webpack_require__.m[r]=V=>{delete __webpack_require__.c[r],V.exports=s()}},a=s=>{delete P[r],__webpack_require__.m[r]=V=>{throw delete __webpack_require__.c[r],s}};try{var i=F[r]();i.then?t.push(P[r]=i.then(n).catch(a)):n(i)}catch(s){a(s)}})}})(),(()=>{var o={179:0};__webpack_require__.f.j=(f,b)=>{var p=__webpack_require__.o(o,f)?o[f]:void 0;if(0!==p)if(p)b.push(p[2]);else{var l=new Promise((c,g)=>p=o[f]=[c,g]);b.push(p[2]=l);var _=__webpack_require__.p+__webpack_require__.u(f),h=new Error;__webpack_require__.l(_,c=>{if(__webpack_require__.o(o,f)&&(0!==(p=o[f])&&(o[f]=void 0),p)){var g=c&&("load"===c.type?"missing":c.type),w=c&&c.target&&c.target.src;h.message="Loading chunk "+f+" failed.\n("+g+": "+w+")",h.name="ChunkLoadError",h.type=g,h.request=w,p[1](h)}},"chunk-"+f,f)}};var d=(f,b)=>{var h,S,[p,l,_]=b,c=0;if(p.some(w=>0!==o[w])){for(h in l)__webpack_require__.o(l,h)&&(__webpack_require__.m[h]=l[h]);_&&_(__webpack_require__)}for(f&&f(b);c<p.length;c++)__webpack_require__.o(o,S=p[c])&&o[S]&&o[S][0](),o[S]=0},u=self.webpackChunkmfe_plugins=self.webpackChunkmfe_plugins||[];u.forEach(d.bind(null,0)),u.push=d.bind(null,u.push.bind(u))})();var __webpack_exports__=__webpack_require__(4698);