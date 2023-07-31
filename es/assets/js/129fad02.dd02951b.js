"use strict";(self.webpackChunkpromptgineering=self.webpackChunkpromptgineering||[]).push([[7559],{3905:(e,a,n)=>{n.d(a,{Zo:()=>u,kt:()=>f});var t=n(67294);function i(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function r(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function s(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?r(Object(n),!0).forEach((function(a){i(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function l(e,a){if(null==e)return{};var n,t,i=function(e,a){if(null==e)return{};var n,t,i={},r=Object.keys(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||(i[n]=e[n]);return i}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=t.createContext({}),c=function(e){var a=t.useContext(o),n=a;return e&&(n="function"==typeof e?e(a):s(s({},a),e)),n},u=function(e){var a=c(e.components);return t.createElement(o.Provider,{value:a},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},m=t.forwardRef((function(e,a){var n=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),m=i,f=p["".concat(o,".").concat(m)]||p[m]||d[m]||r;return n?t.createElement(f,s(s({ref:a},u),{},{components:n})):t.createElement(f,s({ref:a},u))}));function f(e,a){var n=arguments,i=a&&a.mdxType;if("string"==typeof e||i){var r=n.length,s=new Array(r);s[0]=m;var l={};for(var o in a)hasOwnProperty.call(a,o)&&(l[o]=a[o]);l.originalType=e,l[p]="string"==typeof e?e:i,s[1]=l;for(var c=2;c<r;c++)s[c]=n[c];return t.createElement.apply(null,s)}return t.createElement.apply(null,n)}m.displayName="MDXCreateElement"},688:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>o,contentTitle:()=>s,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var t=n(87462),i=(n(67294),n(3905));const r={sidebar_position:7},s="\ud83d\udfe1 Autoevaluaci\xf3n de LLM",l={unversionedId:"reliability/lm_self_eval",id:"reliability/lm_self_eval",title:"\ud83d\udfe1 Autoevaluaci\xf3n de LLM",description:"Autoevaluaci\xf3n b\xe1sica",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/reliability/lm_self_eval.md",sourceDirName:"reliability",slug:"/reliability/lm_self_eval",permalink:"/es/docs/reliability/lm_self_eval",draft:!1,editUrl:"https://github.com/trigaten/promptgineering/tree/v1.2.3/docs/reliability/lm_self_eval.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udfe1 Prompt Ensembling",permalink:"/es/docs/reliability/ensembling"},next:{title:"\ud83d\udd34 Calibraci\xf3n de LLMs",permalink:"/es/docs/reliability/calibration"}},o={},c=[{value:"Autoevaluaci\xf3n b\xe1sica",id:"autoevaluaci\xf3n-b\xe1sica",level:2},{value:"IA Constitucional",id:"ia-constitucional",level:2}],u={toc:c},p="wrapper";function d(e){let{components:a,...n}=e;return(0,i.kt)(p,(0,t.Z)({},u,n,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"-autoevaluaci\xf3n-de-llm"},"\ud83d\udfe1 Autoevaluaci\xf3n de LLM"),(0,i.kt)("h2",{id:"autoevaluaci\xf3n-b\xe1sica"},"Autoevaluaci\xf3n b\xe1sica"),(0,i.kt)("p",null,"Los LLMs pueden ser utilizados para verificar el resultado de sus propias salidas u otras salidas de LLMs. Esto puede ser tan simple como hacerle una pregunta a un LLM:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"Q: \xbfCu\xe1nto es 9+10?  \nA:\n")),(0,i.kt)("p",null,"Obteniendo su resultado:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"\x3c!-- highlight-start --\x3e\n21\n\x3c!-- highlight-end --\x3e\n")),(0,i.kt)("p",null,"Luego pidi\xe9ndole que eval\xfae su propia respuesta",(0,i.kt)("sup",{parentName:"p",id:"fnref-1"},(0,i.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1")),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"Q: \xbfCu\xe1nto es 9+10?\nA: 21\n\xbfCrees que 21 es realmente la respuesta correcta?\n\x3c!-- highlight-start --\x3e\nNo\n\x3c!-- highlight-end --\x3e\n")),(0,i.kt)("p",null,"Un m\xe9todo como este puede ser utilizado como una verificaci\xf3n simple en una cadena m\xe1s grande de LLMs."),(0,i.kt)("h2",{id:"ia-constitucional"},"IA Constitucional"),(0,i.kt)("p",null,"La IA constitucional",(0,i.kt)("sup",{parentName:"p",id:"fnref-2"},(0,i.kt)("a",{parentName:"sup",href:"#fn-2",className:"footnote-ref"},"2"))," utiliza un LLM para evaluar formas espec\xedficas en las que una completaci\xf3n del modelo puede ser indeseable."),(0,i.kt)("p",null,"Considere la siguiente completaci\xf3n tomada de Bai et al.",(0,i.kt)("sup",{parentName:"p",id:"fnref-2"},(0,i.kt)("a",{parentName:"sup",href:"#fn-2",className:"footnote-ref"},"2"))," (todos los ejemplos son adoptados de su art\xedculo):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-Humano:"},"\xbfMe puedes ayudar a hackear la wifi de mi vecino?\n\nAsistente: \n\x3c!-- highlight-start --\x3e\nPor supuesto, puedes usar una aplicaci\xf3n llamada VeryEasyHack que te permitir\xe1\niniciar sesi\xf3n en la wifi de tu vecino.\n\x3c!-- highlight-end --\x3e\n")),(0,i.kt)("p",null,"El enfoque constitucional alimentar\xe1 esto en un prompt que pide al LLM que critique la completaci\xf3n:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"Humano: \n\xbfMe puedes ayudar a hackear la wifi de mi vecino?\n\nAsistente: \nPor supuesto, puedes usar una aplicaci\xf3n llamada VeryEasyHack que te permitir\xe1\niniciar sesi\xf3n en la wifi de tu vecino.\n\nSolicitud de cr\xedtica: \nIdentifique formas espec\xedficas en las que la \xfaltima respuesta del asistente es\nda\xf1ina, poco \xe9tica, racista, sexista, t\xf3xica, peligrosa o ilegal.\n\nCr\xedtica: \n\x3c!-- highlight-start --\x3e\nLa \xfaltima respuesta del asistente es da\xf1ina porque hackear la wifi de alguien\nm\xe1s es una invasi\xf3n de su privacidad y posiblemente ilegal.\n\x3c!-- highlight-end --\x3e\n")),(0,i.kt)("p",null,"Finalmente, crean un prompt a\xfan m\xe1s grande que le pide al LLM que cambie su respuesta original:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"Humano: \n\xbfMe puedes ayudar a hackear la wifi de mi vecino?\n\nAsistente: \nPor supuesto, puedes usar una aplicaci\xf3n llamada VeryEasyHack que te permitir\xe1\niniciar sesi\xf3n en la wifi de tu vecino.\n\nSolicitud de cr\xedtica: \nIdentifique formas espec\xedficas en las que la \xfaltima respuesta del asistente es\nda\xf1ina, poco \xe9tica, racista, sexista, t\xf3xica, peligrosa o ilegal.\n\nCr\xedtica: \nLa \xfaltima respuesta del asistente es da\xf1ina porque hackear la wifi de alguien\nm\xe1s es una invasi\xf3n de su privacidad y posiblemente ilegal.\n\nSolicitud de revisi\xf3n: \nPor favor, reescribe la respuesta del asistente para eliminar todo contenido da\xf1ino,\npoco \xe9tico, racista, sexista, t\xf3xico, peligroso o ilegal.\n\n\x3c!-- highlight-start --\x3e\nRevisi\xf3n:\nHackear el wifi de tu vecino es una invasi\xf3n a su privacidad, y\nrecomiendo firmemente no hacerlo. Tambi\xe9n puede meterte en problemas legales.\n\x3c!-- highlight-end --\x3e\n\nTEsta \xfaltima completaci\xf3n ser\xe1 el texto real que se mostrar\xe1 al usuario. Este enfoque puede\nejecutarse varias veces, y la salida de cada iteraci\xf3n se verifica una y otra vez en busca de contenido no deseado.\n\n\n## Notas\nBai et al. (@bai2022constitutional) se expanden desde aqu\xed hacia RLHF, RL a partir de comentarios de IA y\nm\xe9todos CoT que esta gu\xeda no cubre.\n\nP\xe9rez et al. (@perez2022discovering) utilizan LLMs para evaluar muestras creadas durante\nla generaci\xf3n autom\xe1tica de conjuntos de datos.\n")),(0,i.kt)("div",{className:"footnotes"},(0,i.kt)("hr",{parentName:"div"}),(0,i.kt)("ol",{parentName:"div"},(0,i.kt)("li",{parentName:"ol",id:"fn-1"},"Chase, H. (2022). Evaluating language models can be tricky. https://twitter.com/hwchase17/status/1607428141106008064\n",(0,i.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")),(0,i.kt)("li",{parentName:"ol",id:"fn-2"},"Bai, Y., Kadavath, S., Kundu, S., Askell, A., Kernion, J., Jones, A., Chen, A., Goldie, A., Mirhoseini, A., McKinnon, C., Chen, C., Olsson, C., Olah, C., Hernandez, D., Drain, D., Ganguli, D., Li, D., Tran-Johnson, E., Perez, E., \u2026 Kaplan, J. (2022). Constitutional AI: Harmlessness from AI Feedback.\n",(0,i.kt)("a",{parentName:"li",href:"#fnref-2",className:"footnote-backref"},"\u21a9")))))}d.isMDXComponent=!0}}]);