"use strict";(self.webpackChunkpromptgineering=self.webpackChunkpromptgineering||[]).push([[1877],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>g});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),m=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=m(e.components);return n.createElement(s.Provider,{value:t},e.children)},l="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),l=m(r),u=i,g=l["".concat(s,".").concat(u)]||l[u]||d[u]||o;return r?n.createElement(g,a(a({ref:t},c),{},{components:r})):n.createElement(g,a({ref:t},c))}));function g(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=u;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[l]="string"==typeof e?e:i,a[1]=p;for(var m=2;m<o;m++)a[m]=r[m];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},91875:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>m,default:()=>y,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var n=r(87462),i=(r(67294),r(3905));const o=r.p+"assets/images/mountains-879e27bb217169838c5ce1f49cebc1a0.webp",a=r.p+"assets/images/mountains_no_trees-36a39df6b44f0e6e24f1238a29c2e034.webp",p=r.p+"assets/images/planets-ba6764aa7046af4d18b4e24ce3caeeed.webp",s={sidebar_position:60},m="\ud83d\udfe2 Weighted Terms",c={unversionedId:"image_prompting/weighted_terms",id:"image_prompting/weighted_terms",title:"\ud83d\udfe2 Weighted Terms",description:"Some models (Stable Diffusion, Midjourney, etc.) allow you to weight terms in a prompt. This can be used to emphasize certain words or phrases in the generated image. It can",source:"@site/docs/image_prompting/weighted_terms.md",sourceDirName:"image_prompting",slug:"/image_prompting/weighted_terms",permalink:"/docs/image_prompting/weighted_terms",draft:!1,editUrl:"https://github.com/trigaten/promptgineering/tree/v1.2.3/docs/image_prompting/weighted_terms.md",tags:[],version:"current",sidebarPosition:60,frontMatter:{sidebar_position:60},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udfe2 Repetition",permalink:"/docs/image_prompting/repetition"},next:{title:"\ud83d\udfe2 Fix Deformed Generations",permalink:"/docs/image_prompting/fix_deformed_generations"}},l={},d=[{value:"Notes",id:"notes",level:2}],u=(g="LazyLoadImage",function(e){return console.warn("Component "+g+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",e)});var g;const f={toc:d},h="wrapper";function y(e){let{components:t,...r}=e;return(0,i.kt)(h,(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"-weighted-terms"},"\ud83d\udfe2 Weighted Terms"),(0,i.kt)("p",null,"Some models (Stable Diffusion, Midjourney, etc.) allow you to weight terms in a prompt. This can be used to emphasize certain words or phrases in the generated image. It can\nalso be used to de-emphasize certain words or phrases in the generated image. Let's consider a simple example:"),(0,i.kt)("h1",{id:"example"},"Example"),(0,i.kt)("p",null,"Here are a few mountains generated by Stable Diffusion, with the prompt ",(0,i.kt)("inlineCode",{parentName:"p"},"mountain"),"."),(0,i.kt)("div",{style:{textAlign:"center"}},(0,i.kt)("img",{src:o,style:{width:"350px"}})),(0,i.kt)("p",null,"However, if we want mountains without trees, we can use the prompt ",(0,i.kt)("inlineCode",{parentName:"p"},"mountain | tree:-10"),". Since we weighted tree very negatively, they do not appear in the generated image."),(0,i.kt)("div",{style:{textAlign:"center"}},(0,i.kt)(u,{src:a,style:{width:"350px"},mdxType:"LazyLoadImage"})),(0,i.kt)("p",null,"Weighted terms can be combined into more complicated prompts, like\n",(0,i.kt)("inlineCode",{parentName:"p"},"A planet in space:10 | bursting with color red, blue, and purple:4 | aliens:-10 | 4K, high quality")),(0,i.kt)("div",{style:{textAlign:"center"}},(0,i.kt)(u,{src:p,style:{width:"350px"},mdxType:"LazyLoadImage"})),(0,i.kt)("h2",{id:"notes"},"Notes"),(0,i.kt)("p",null,"Read more about weighting in some of the resources at the end of this chapter."))}y.isMDXComponent=!0}}]);