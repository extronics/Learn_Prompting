"use strict";(self.webpackChunkpromptgineering=self.webpackChunkpromptgineering||[]).push([[4847],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var i=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,i,s=function(e,t){if(null==e)return{};var n,i,s={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var l=i.createContext({}),u=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return i.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,s=e.mdxType,r=e.originalType,l=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),p=u(n),m=s,f=p["".concat(l,".").concat(m)]||p[m]||d[m]||r;return n?i.createElement(f,o(o({ref:t},c),{},{components:n})):i.createElement(f,o({ref:t},c))}));function f(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var r=n.length,o=new Array(r);o[0]=m;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a[p]="string"==typeof e?e:s,o[1]=a;for(var u=2;u<r;u++)o[u]=n[u];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4908:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>a,toc:()=>u});var i=n(87462),s=(n(67294),n(3905));const r={sidebar_position:30},o="\ud83d\udfe2 Ami de r\xe9visions",a={unversionedId:"basic_applications/study_tool",id:"basic_applications/study_tool",title:"\ud83d\udfe2 Ami de r\xe9visions",description:"Un de nos moyens pr\xe9f\xe9r\xe9s d'utiliser les LLMs est comme outil d'\xe9tude ! En particulier, il est utile pour expliquer des termes confus ainsi que pour vous interroger sur le contenu des tests.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/basic_applications/study_tool.md",sourceDirName:"basic_applications",slug:"/basic_applications/study_tool",permalink:"/fr/docs/basic_applications/study_tool",draft:!1,editUrl:"https://github.com/trigaten/promptgineering/tree/v1.2.3/docs/basic_applications/study_tool.md",tags:[],version:"current",sidebarPosition:30,frontMatter:{sidebar_position:30},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udfe2 Blogs",permalink:"/fr/docs/basic_applications/blog_generation"},next:{title:"\ud83d\udfe1 Assistance en programmation",permalink:"/fr/docs/basic_applications/coding_assistance"}},l={},u=[{value:"Explication des termes",id:"explication-des-termes",level:2},{value:"Auto-interrogation",id:"auto-interrogation",level:2},{value:"Conclusion",id:"conclusion",level:2}],c={toc:u},p="wrapper";function d(e){let{components:t,...n}=e;return(0,s.kt)(p,(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"-ami-de-r\xe9visions"},"\ud83d\udfe2 Ami de r\xe9visions"),(0,s.kt)("p",null,"Un de nos moyens pr\xe9f\xe9r\xe9s d'utiliser les LLMs est comme outil d'\xe9tude ! En particulier, il est utile pour expliquer des termes confus ainsi que pour vous interroger sur le contenu des tests."),(0,s.kt)("h2",{id:"explication-des-termes"},"Explication des termes"),(0,s.kt)("p",null,"J'ai r\xe9cemment lu un manuel sur les Cactus",(0,s.kt)("sup",{parentName:"p",id:"fnref-1"},(0,s.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1")),", et j'ai vu ce passage :"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-text"},"Because of adaptations to xeric conditions and the presence of **less derived woods** in Pereskioideae, the Cactaceae is one of the most interesting families both anatomically and morphologically.\n")),(0,s.kt)("p",null,"Je ne savais pas ce que signifiait ",(0,s.kt)("strong",{parentName:"p"},"less derived woods"),", et Google n'a montr\xe9 que des articles de recherche \xe0 ce sujet. J'ai d\xe9cid\xe9 d'utiliser ChatGPT pour savoir ce que cela signifiait. Je lui ai donn\xe9 le prompt suivant, qui est simplement le passage du livre et ma question."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-text"},'Because of adaptations to xeric conditions and the presence of less derived woods in Pereskioideae, the Cactaceae is one of the most interesting families both anatomically and morphologically.\n\nQue veut dire "less derived woods" ?\n\n// highlight-start\nDans ce contexte, "les bois moins d\xe9riv\xe9s" font r\xe9f\xe9rence \xe0 la forme ancestrale ou primitive de bois trouv\xe9e dans l\'\xe9volution pr\xe9coce des plantes. Ces bois manquent de structures et de caract\xe9ristiques sp\xe9cialis\xe9es qui ont \xe9volu\xe9 plus tard chez les plantes plus d\xe9riv\xe9es ou avanc\xe9es. Dans la sous-famille Pereskioideae de la famille Cactaceae, le bois est moins d\xe9riv\xe9 par rapport \xe0 d\'autres sous-familles et est plus similaire au bois trouv\xe9 dans les plantes non-cactus. Le bois moins d\xe9riv\xe9 dans Pereskioideae est consid\xe9r\xe9 comme une adaptation aux environnements plus humides et moins x\xe9riques dans lesquels ces plantes poussent par rapport \xe0 d\'autres cactus.\n//highlight-end\n')),(0,s.kt)("p",null,"Le mod\xe8le a \xe9t\xe9 en mesure de r\xe9pondre rapidement \xe0 ma question et j'ai pu continuer ma lecture."),(0,s.kt)("h2",{id:"auto-interrogation"},"Auto-interrogation"),(0,s.kt)("p",null,"Une autre fa\xe7on d'utiliser les LLMs comme outil d'\xe9tude est de s'interroger soi-m\xeame. Si vous avez un test de calcul \xe0 venir, vous pourriez simplement demander :"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-text"},"G\xe9n\xe8re 5 questions d'interrogation de calcul I pour moi :\n\n// highlight-start\n1. Quelle est la d\xe9riv\xe9e de y = x3 ?\n2. \xc9valuez l'int\xe9grale ind\xe9finie de x3 + 5x2 + 7x + 4.\n3. Quelle est la r\xe8gle du produit pour les d\xe9riv\xe9es ?\n4. Trouvez l'\xe9quation de la tangente \xe0 y = x2 au point (4, 16).\n5. Quelle est la deuxi\xe8me d\xe9riv\xe9e de y = x4 ?\n//highlight-end\n")),(0,s.kt)("p",null,"Si vous \xe9tudiez un sujet plus sp\xe9cifique, vous devrez peut-\xeatre donner des informations suppl\xe9mentaires au mod\xe8le, par exemple vos notes de cours !"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-text"},"3/20/2020 2:30 PM\n\nNotes de cours de marketing\n\n- Discussion des 4 P du marketing : Produit, Prix, Place, Promotion\n- Diff\xe9rence entre B2C et B2B : B2C est le march\xe9 direct au consommateur, B2B est le business to business\n- Diff\xe9rents types de recherche de march\xe9 : quantitative et qualitative, tels que des enqu\xeates et des groupes de discussion\n- Strat\xe9gies de tarification : Skimming, Penetration, Competition, et Value\n- Segmentation : segmentation de la base de clients par l'\xe2ge, le revenu, etc.\n- 4 types de segmentation : D\xe9mographique, G\xe9ographique, Psychographique et Comportementale\n- Discussion des diff\xe9rents outils promotionnels : Publicit\xe9, Vente personnelle, Relations publiques, Marketing direct, et promotions des ventes\n\nG\xe9n\xe8re 5 questions d'interrogation marketing pour moi bas\xe9es sur mes notes :\n\n// highlight-start\n1. Quels sont les 4 P du marketing ?\n2. Quelle est la diff\xe9rence entre B2C et B2B ?\n3. Quels sont les deux types de recherche de march\xe9 ?\n4. Quels sont les 4 types de segmentation ?\n5. Nommez 5 outils promotionnels.\n//highlight-end\n")),(0,s.kt)("h2",{id:"conclusion"},"Conclusion"),(0,s.kt)("p",null,"Il y a probablement d'autres fa\xe7ons d'utiliser les LLMs pour \xe9tudier. De nombreuses entreprises d'apprentissage comme Duolingo et Quizlet int\xe8grent des LLMs dans leurs produits."),(0,s.kt)("div",{className:"footnotes"},(0,s.kt)("hr",{parentName:"div"}),(0,s.kt)("ol",{parentName:"div"},(0,s.kt)("li",{parentName:"ol",id:"fn-1"},"Nobel, P. S., & others. (2002). Cacti: biology and uses. Univ of California Press.\n",(0,s.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")))))}d.isMDXComponent=!0}}]);