"use strict";(self.webpackChunkpromptgineering=self.webpackChunkpromptgineering||[]).push([[1802],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=o,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||i;return n?r.createElement(f,a(a({ref:t},p),{},{components:n})):r.createElement(f,a({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},95956:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=n(87462),o=(n(67294),n(3905));const i={sidebar_position:100},a="Conclusion",l={unversionedId:"tooling/IDEs/conclusion",id:"tooling/IDEs/conclusion",title:"Conclusion",description:"This page will be updated as I get access to more IDEs.",source:"@site/docs/tooling/IDEs/conclusion.md",sourceDirName:"tooling/IDEs",slug:"/tooling/IDEs/conclusion",permalink:"/pt/docs/tooling/IDEs/conclusion",draft:!1,editUrl:"https://github.com/trigaten/promptgineering/tree/v1.2.3/docs/tooling/IDEs/conclusion.md",tags:[],version:"current",sidebarPosition:100,frontMatter:{sidebar_position:100},sidebar:"tutorialSidebar",previous:{title:"AnySolve",permalink:"/pt/docs/tooling/IDEs/anysolve"},next:{title:"\ud83d\udcaa Prompt Tuning",permalink:"/pt/docs/category/-prompt-tuning"}},s={},c=[{value:"For Single Prompt Iterating",id:"for-single-prompt-iterating",level:2},{value:"For Prompt Chaining",id:"for-prompt-chaining",level:2},{value:"Embeds",id:"embeds",level:2},{value:"For Full Control",id:"for-full-control",level:2},{value:"More",id:"more",level:2}],p={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"conclusion"},"Conclusion"),(0,o.kt)("p",null,"This page will be updated as I get access to more IDEs. "),(0,o.kt)("p",null,"This chapter has provided an overview of some of the tools which may be of interest to\nyou as a prompt engineer. Below are my recommendations for which to use, and in\nwhat capacity. Keep in mind that prompt engineering is a rapidly evolving field, and\nmany of the previously mentioned tools will undergo signifigant changes in the future."),(0,o.kt)("h2",{id:"for-single-prompt-iterating"},"For Single Prompt Iterating"),(0,o.kt)("p",null,"Everyprompt seems to have the best feature set for single prompt iterating (from the IDEs I have been able to try). Regular playground is also good, and a bit simpler."),(0,o.kt)("h2",{id:"for-prompt-chaining"},"For Prompt Chaining"),(0,o.kt)("p",null,"Dust is currently the best (less technical) tool for prompt chaining. It provides a very\nrobust feature set."),(0,o.kt)("h2",{id:"embeds"},"Embeds"),(0,o.kt)("p",null,"Dyno is the only tool which offers an embed."),(0,o.kt)("h2",{id:"for-full-control"},"For Full Control"),(0,o.kt)("p",null,"Langchain is the way to go! It is a Python library, so it is fully extensible,\nand already comes with a great feature set."),(0,o.kt)("h2",{id:"more"},"More"),(0,o.kt)("p",null,"I will be adding more recommendations as I get access to more IDEs. I recommend\ntrying out different ones, as each has a distinct feel and different features."))}d.isMDXComponent=!0}}]);