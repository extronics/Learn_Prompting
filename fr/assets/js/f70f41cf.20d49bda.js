"use strict";(self.webpackChunkpromptgineering=self.webpackChunkpromptgineering||[]).push([[8917],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>g});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),c=u(n),m=a,g=c["".concat(p,".").concat(m)]||c[m]||d[m]||o;return n?r.createElement(g,i(i({ref:t},l),{},{components:n})):r.createElement(g,i({ref:t},l))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[c]="string"==typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},57688:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var r=n(87462),a=(n(67294),n(3905));const o={sidebar_position:1},i="\ud83d\udfe2 Prompting",s={unversionedId:"basics/prompting",id:"basics/prompting",title:"\ud83d\udfe2 Prompting",description:"Dans le chapitre pr\xe9c\xe9dent, nous avons discut\xe9 de l'IA et de la mani\xe8re dont les humains peuvent demander aux IA d'effectuer des t\xe2ches. Le processus consistant \xe0 demander \xe0 une IA d'effectuer une t\xe2che est appel\xe9 prompting1. Nous donnons \xe0 l'IA un ensemble d'instructions (le prompt) et elle ex\xe9cute la t\xe2che. Les prompts peuvent \xeatre aussi simples qu'une question ou aussi complexes que plusieurs paragraphes.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/basics/prompting.md",sourceDirName:"basics",slug:"/basics/prompting",permalink:"/fr/docs/basics/prompting",draft:!1,editUrl:"https://github.com/trigaten/promptgineering/tree/v1.2.3/docs/basics/prompting.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udfe2 Introduction",permalink:"/fr/docs/basics/intro"},next:{title:"\ud83d\udfe2 Donner des instructions",permalink:"/fr/docs/basics/instructions"}},p={},u=[{value:"1) R\xe9sumer un article",id:"1-r\xe9sumer-un-article",level:3},{value:"2) R\xe9solution de probl\xe8mes math\xe9matiques",id:"2-r\xe9solution-de-probl\xe8mes-math\xe9matiques",level:3}],l={toc:u},c="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"-prompting"},"\ud83d\udfe2 Prompting"),(0,a.kt)("p",null,"Dans le chapitre pr\xe9c\xe9dent, nous avons discut\xe9 de l'IA et de la mani\xe8re dont les humains peuvent demander aux IA d'effectuer des t\xe2ches. Le processus consistant \xe0 demander \xe0 une IA d'effectuer une t\xe2che est appel\xe9 prompting",(0,a.kt)("a",{parentName:"p",href:"https://learnprompting.org/docs/basics/prompting#fn-1"},"1"),". Nous donnons \xe0 l'IA un ensemble d'instructions (le prompt) et elle ex\xe9cute la t\xe2che. Les prompts peuvent \xeatre aussi simples qu'une question ou aussi complexes que plusieurs paragraphes."),(0,a.kt)("p",null,"Pour illustrer, voici deux exemples de prompt\xa0:"),(0,a.kt)("h3",{id:"1-r\xe9sumer-un-article"},"1) R\xe9sumer un article",(0,a.kt)("a",{parentName:"h3",href:"https://learnprompting.org/docs/basics/prompting#1-summarizing-an-article"})),(0,a.kt)("p",null,"Say you are reading an article about snowfall in Florida. You want to quickly get the main ideas of the article, so you show the AI what you are reading, and ask for a summary ",(0,a.kt)("a",{parentName:"p",href:"https://learnprompting.org/docs/basics/prompting#fn-2"},"2")," :"),(0,a.kt)("p",null,"Supposons que vous lisez un article sur les chutes de neige en Floride. Vous souhaitez obtenir rapidement les id\xe9es principales de l'article, vous montrez donc \xe0 l'IA ce que vous lisez et lui demandez un r\xe9sum\xe9 ",(0,a.kt)("a",{parentName:"p",href:"https://learnprompting.org/docs/basics/prompting#fn-2"},"2"),"\xa0:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Il est tr\xe8s rare que de la neige tombe dans l'\xc9tat am\xe9ricain de Floride, en particulier dans les parties centrale et m\xe9ridionale de l'\xc9tat. \xc0 l'exception des r\xe9gions de l'extr\xeame nord de l'\xc9tat, la plupart des grandes villes de Floride n'ont jamais enregistr\xe9 de chutes de neige mesurables, bien que des traces aient \xe9t\xe9 enregistr\xe9es, ou des rafales dans l'air observ\xe9es quelques fois par si\xe8cle. Selon le National Weather Service, dans les Florida Keys et Key West, il n'y a pas d'occurrence connue d'averses de neige depuis la colonisation europ\xe9enne de la r\xe9gion il y a plus de 300 ans. \xc0 Miami, Fort Lauderdale et Palm Beach, il n'y a eu qu'un seul rapport connu d'averses de neige observ\xe9es dans l'air en plus de 200 ans; cela s'est produit en janvier 1977. Quoi qu'il en soit, Miami, Fort Lauderdale et Palm Beach n'ont pas connu d'averses de neige avant ou depuis cet \xe9v\xe9nement de 1977.\n\nR\xe9sumez ce paragraphe en une seule phrase :\n")),(0,a.kt)("p",null,"Voici la r\xe9ponse de l'IA. Une lecture beaucoup plus courte !"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Snowfall is extremely rare in Florida, with the exception of the far northern areas, \nand only one instance of snow flurries in the air has been recorded in the major cities \nof Miami, Fort Lauderdale, and Palm Beach in the last 200 years.\n")),(0,a.kt)("h3",{id:"2-r\xe9solution-de-probl\xe8mes-math\xe9matiques"},"2) R\xe9solution de probl\xe8mes math\xe9matiques",(0,a.kt)("a",{parentName:"h3",href:"https://learnprompting.org/docs/basics/prompting#2-math-word-problem-solving"})),(0,a.kt)("p",null,"Si vous avez un ensemble de donn\xe9es d'\xe9quations math\xe9matiques que vous aimeriez qu'un mod\xe8le de langage r\xe9solve, vous pouvez cr\xe9er un prompt en posant la question \"Qu'est-ce que ","[EQUATION]",'".'),(0,a.kt)("p",null,"Pour une question donn\xe9e, votre prompt complet pourrait ressembler \xe0 ceci\xa0:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Qu'est ce que 1,000,000 * 9,000?\n")),(0,a.kt)("p",null,"Pour ce prompt, GPT-3 (text-davinci-002) (une IA) r\xe9pond parfois 9 000 000 (incorrect). C'est l\xe0 qu'intervient le prompt engineering."),(0,a.kt)("h1",{id:"prompt-engineering"},"Prompt Engineering"),(0,a.kt)("p",null,"Si, au lieu de demander\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"Qu'est-ce que 1\xa0000\xa0000\xa0x\xa09\xa0000\xa0?"),", nous demandons\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"Qu'est-ce que 1\xa0000\xa0000\xa0x\xa09\xa0000\xa0? Assurez-vous de mettre le bon nombre de z\xe9ros, m\xeame s'il y en a beaucoup :"),", GPT-3 r\xe9pondra 9 000 000 000 (correct). Alors, pourquoi est-ce le cas? Pourquoi la sp\xe9cification suppl\xe9mentaire du nombre de z\xe9ros est-elle n\xe9cessaire pour que l'IA obtienne la bonne r\xe9ponse\xa0? Comment pouvons-nous cr\xe9er des prompts qui donnent des r\xe9sultats optimaux sur notre t\xe2che\xa0? Cette derni\xe8re question, en particulier, est au centre du domaine du prompt engineering, ainsi que de ce cours."),(0,a.kt)("p",null,"Lisez la suite pour apprendre \xe0 concevoir de bons prompts !"),(0,a.kt)("hr",null),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Shin, T., Razeghi, Y., Logan IV, R. L., Wallace, E. et Singh, S. (2020). AutoPrompt\xa0: obtention de connaissances \xe0 partir de mod\xe8les de langage avec des prompts g\xe9n\xe9r\xe9es automatiquement. Actes de la conf\xe9rence 2020 sur les m\xe9thodes empiriques dans le traitement du langage naturel (EMNLP). ",(0,a.kt)("a",{parentName:"li",href:"https://doi.org/10.18653/v1/2020.emnlp-main.346"},"https://doi.org/10.18653/v1/2020.emnlp-main.346"),"\xa0",(0,a.kt)("a",{parentName:"li",href:"https://learnprompting.org/docs/basics/prompting#fnref-1"},"\u21a9")),(0,a.kt)("li",{parentName:"ol"},"Ce paragraphe vient de\xa0",(0,a.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Snow_in_Florida"},"https://en.wikipedia.org/wiki/Snow_in_Florida"),(0,a.kt)("a",{parentName:"li",href:"https://learnprompting.org/docs/basics/prompting#fnref-2"},"\u21a9"))))}d.isMDXComponent=!0}}]);