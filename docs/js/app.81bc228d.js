(function(e){function t(t){for(var n,a,c=t[0],u=t[1],i=t[2],p=0,f=[];p<c.length;p++)a=c[p],Object.prototype.hasOwnProperty.call(s,a)&&s[a]&&f.push(s[a][0]),s[a]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(e[n]=u[n]);l&&l(t);while(f.length)f.shift()();return o.push.apply(o,i||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],n=!0,c=1;c<r.length;c++){var u=r[c];0!==s[u]&&(n=!1)}n&&(o.splice(t--,1),e=a(a.s=r[0]))}return e}var n={},s={app:0},o=[];function a(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.m=e,a.c=n,a.d=function(e,t,r){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)a.d(r,n,function(t){return e[t]}.bind(null,n));return r},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=t,c=c.slice();for(var i=0;i<c.length;i++)t(c[i]);var l=u;o.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"034f":function(e,t,r){"use strict";var n=r("85ec"),s=r.n(n);s.a},1100:function(e,t,r){},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("div",{attrs:{id:"nav"}},[r("router-link",{attrs:{to:{name:"search"}}},[e._v("Search")]),r("h1",[e._v("Search for Instant Answers")]),r("h2",[e._v("Abstract from DuckDuckGo")]),r("BaseIcon"),r("router-view")],1)])},o=[],a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("router-link",{attrs:{to:{name:"search"}}},[n("img",{attrs:{alt:"DuckDuckGo logo",src:r("a1b3")}})])],1)},c=[],u={name:"Icon"},i=u,l=r("2877"),p=Object(l["a"])(i,a,c,!1,null,"6c483b2f",null),f=p.exports,h={name:"app",components:{BaseIcon:f}},d=h,v=(r("034f"),Object(l["a"])(d,s,o,!1,null,null,null)),m=v.exports,b=r("8c4f"),_=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"search"},[r("div",{directives:[{name:"show",rawName:"v-show",value:e.showForm,expression:"showForm"}],staticClass:"form-container"},[r("h3",[e._v("Type in your search term")]),r("p",{directives:[{name:"show",rawName:"v-show",value:e.showError,expression:"showError"}],staticClass:"error"},[e._v(" Please check the information you have entered. Be sure to fill in all fields. ")]),r("form",{on:{submit:function(t){t.preventDefault(),e.validateForm(),e.getResult(e.query)}}},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.query,expression:"query"}],attrs:{type:"text",placeholder:"Type in your search"},domProps:{value:e.query},on:{input:function(t){t.target.composing||(e.query=t.target.value)}}}),r("button",{attrs:{type:"submit"}},[e._v("Search")])])]),e.results?r("div",{staticClass:"results"},[e.showSpinner?r("spinner"):e._e(),r("h3",[e._v(e._s(e.results.Heading))]),r("p",[e._v(e._s(e.results.Abstract))]),r("p",[e._v(e._s(e.results.AbstractSource))]),r("p",[e._v(e._s(e.results.AbstractURL))])],1):e._e()])},w=[],y=r("bc3a"),g=r.n(y),k=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},S=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("h2",[e._v("Loading...")]),r("div",{staticClass:"sk-folding-cube"},[r("div",{staticClass:"sk-cube1 sk-cube"}),r("div",{staticClass:"sk-cube2 sk-cube"}),r("div",{staticClass:"sk-cube4 sk-cube"}),r("div",{staticClass:"sk-cube3 sk-cube"})])])}],x={name:"CubeSpinner"},O=x,j=(r("de62"),Object(l["a"])(O,k,S,!1,null,"fe181480",null)),C=j.exports,E={name:"search",components:{spinner:C},data:function(){return{msg:"Search",query:"",results:[],showForm:!0,showError:!1,showSpinner:!1}},methods:{validateForm:function(){""!==this.query?this.showForm=!0:this.showError=!0},getResult:function(e){var t=this;this.showSpinner=!0,g.a.get("https://api.duckduckgo.com/?q="+e+"&format=json&pretty=1&no_redirects=1&no_html=1&skip_disambig=1").then((function(e){console.log(e.data),t.showSpinner=!1,t.results=e.data})).catch((function(e){console.log("There was an error:"+e.response),t.showSpinner=!1}))}}},P=E,q=Object(l["a"])(P,_,w,!1,null,null,null),F=q.exports;n["a"].use(b["a"]);var T=[{path:"/",name:"search",component:F}],$=new b["a"]({mode:"history",routes:T}),A=$;n["a"].component("BaseIcon",f),n["a"].config.productionTip=!1,new n["a"]({router:A,render:function(e){return e(m)}}).$mount("#app")},"85ec":function(e,t,r){},a1b3:function(e,t,r){e.exports=r.p+"img/ddg-logo.3cdbd1eb.png"},de62:function(e,t,r){"use strict";var n=r("1100"),s=r.n(n);s.a}});
//# sourceMappingURL=app.81bc228d.js.map