"use strict";(self.webpackChunkpromptgineering=self.webpackChunkpromptgineering||[]).push([[350],{3905:(a,e,l)=>{l.d(e,{Zo:()=>o,kt:()=>m});var c=l(67294);function b(a,e,l){return e in a?Object.defineProperty(a,e,{value:l,enumerable:!0,configurable:!0,writable:!0}):a[e]=l,a}function g(a,e){var l=Object.keys(a);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(a);e&&(c=c.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),l.push.apply(l,c)}return l}function G(a){for(var e=1;e<arguments.length;e++){var l=null!=arguments[e]?arguments[e]:{};e%2?g(Object(l),!0).forEach((function(e){b(a,e,l[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(l)):g(Object(l)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(l,e))}))}return a}function s(a,e){if(null==a)return{};var l,c,b=function(a,e){if(null==a)return{};var l,c,b={},g=Object.keys(a);for(c=0;c<g.length;c++)l=g[c],e.indexOf(l)>=0||(b[l]=a[l]);return b}(a,e);if(Object.getOwnPropertySymbols){var g=Object.getOwnPropertySymbols(a);for(c=0;c<g.length;c++)l=g[c],e.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(a,l)&&(b[l]=a[l])}return b}var n=c.createContext({}),d=function(a){var e=c.useContext(n),l=e;return a&&(l="function"==typeof a?a(e):G(G({},e),a)),l},o=function(a){var e=d(a.components);return c.createElement(n.Provider,{value:e},a.children)},i="mdxType",r={inlineCode:"code",wrapper:function(a){var e=a.children;return c.createElement(c.Fragment,{},e)}},t=c.forwardRef((function(a,e){var l=a.components,b=a.mdxType,g=a.originalType,n=a.parentName,o=s(a,["components","mdxType","originalType","parentName"]),i=d(l),t=b,m=i["".concat(n,".").concat(t)]||i[t]||r[t]||g;return l?c.createElement(m,G(G({ref:e},o),{},{components:l})):c.createElement(m,G({ref:e},o))}));function m(a,e){var l=arguments,b=e&&e.mdxType;if("string"==typeof a||b){var g=l.length,G=new Array(g);G[0]=t;var s={};for(var n in e)hasOwnProperty.call(e,n)&&(s[n]=e[n]);s.originalType=a,s[i]="string"==typeof a?a:b,G[1]=s;for(var d=2;d<g;d++)G[d]=l[d];return c.createElement.apply(null,G)}return c.createElement.apply(null,l)}t.displayName="MDXCreateElement"},38942:(a,e,l)=>{l.r(e),l.d(e,{assets:()=>n,contentTitle:()=>G,default:()=>r,frontMatter:()=>g,metadata:()=>s,toc:()=>d});var c=l(87462),b=(l(67294),l(3905));const g={sidebar_position:2,locale:"en-us"},G="\ud83d\udfe2 Preguntas Multiple Choice",s={unversionedId:"applied_prompting/mc_tutorial",id:"applied_prompting/mc_tutorial",title:"\ud83d\udfe2 Preguntas Multiple Choice",description:"\xa1Vamos a utilizar GPT para resolver una pregunta de LSAT 1!",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/applied_prompting/mc_tutorial.md",sourceDirName:"applied_prompting",slug:"/applied_prompting/mc_tutorial",permalink:"/es/docs/applied_prompting/mc_tutorial",draft:!1,editUrl:"https://github.com/trigaten/promptgineering/tree/v1.2.3/docs/applied_prompting/mc_tutorial.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,locale:"en-us"},sidebar:"tutorialSidebar",previous:{title:"Introducci\xf3n",permalink:"/es/docs/applied_prompting/overview"},next:{title:"\ud83d\udfe2 preguntas de discusi\xf3n",permalink:"/es/docs/applied_prompting/short_response"}},n={},d=[{value:"La frase m\xe1gica",id:"la-frase-m\xe1gica",level:2},{value:"Mejoras",id:"mejoras",level:2},{value:"Reordenar los elementos de la pregunta",id:"reordenar-los-elementos-de-la-pregunta",level:3},{value:"Reformulaci\xf3n de la pregunta",id:"reformulaci\xf3n-de-la-pregunta",level:3},{value:"Agregar contexto adicional",id:"agregar-contexto-adicional",level:3}],o={toc:d},i="wrapper";function r(a){let{components:e,...l}=a;return(0,b.kt)(i,(0,c.Z)({},o,l,{components:e,mdxType:"MDXLayout"}),(0,b.kt)("h1",{id:"-preguntas-multiple-choice"},"\ud83d\udfe2 Preguntas Multiple Choice"),(0,b.kt)("p",null,"\xa1Vamos a utilizar GPT para resolver una pregunta de LSAT 1!"),(0,b.kt)("p",null,'El LSAT (siglas de "Law School Admission Test" en ingles) es un examen estandarizado utilizado por las escuelas de derecho en los Estados Unidos para evaluar las habilidades de pensamiento cr\xedtico y razonamiento anal\xedtico de los estudiantes potenciales.'),(0,b.kt)("p",null,"A continuaci\xf3n se muestra un ejemplo de pregunta de LSAT. Considere c\xf3mo responder\xeda y su razonamiento."),(0,b.kt)("pre",null,(0,b.kt)("code",{parentName:"pre",className:"language-md"},"\x3c!-- highlight-start --\x3e\nJohn de Worcester, un monje ingl\xe9s, registr\xf3 la observaci\xf3n, el 8 de diciembre de 1128, de dos manchas solares inusualmente grandes. Cinco d\xedas despu\xe9s, se observ\xf3 una brillante aurora boreal en el sur de Corea. La actividad de las manchas solares suele ir seguida de la aparici\xf3n de una aurora boreal, despu\xe9s de un lapso de tiempo que promedia cinco d\xedas. Por lo tanto, la observaci\xf3n coreana ayuda a confirmar la observaci\xf3n de John de Worcester. \xbfCu\xe1l de las siguientes opciones, si es verdadera, refuerza m\xe1s el argumento?\n\x3c!-- highlight-end --\x3e\n\na) A veces puede producirse una aurora boreal incluso cuando no ha habido una actividad significativa de manchas solares en la semana anterior.\nb) Las fuentes chinas registraron la observaci\xf3n de manchas solares m\xe1s de 1000 a\xf1os antes que John de Worcester.\nc) Solo una actividad intensa de las manchas solares podr\xeda haber resultado en una aurora boreal visible en una latitud tan baja como la de Corea.\nd) Debido a que es imposible ver las manchas solares a simple vista en condiciones t\xedpicas de luz del d\xeda, la observaci\xf3n registrada por John de Worcester habr\xeda tenido lugar bajo condiciones clim\xe1ticas inusuales como la niebla o nubes delgadas.\ne) El relato de John de Worcester inclu\xeda un dibujo de las manchas solares, que podr\xeda ser la primera ilustraci\xf3n de la actividad de las manchas solares.\n")),(0,b.kt)("details",null,(0,b.kt)("summary",null,"La respuesta correcta es..."),"c) Solo una actividad intensa de las manchas solares podr\xeda haber resultado en una aurora boreal visible en una latitud tan baja como la de Corea."),(0,b.kt)("p",null,"Intente pegar el problema en el cuadro de la demostraci\xf3n a continuaci\xf3n:"),(0,b.kt)("iframe",{src:"https://embed.learnprompting.org/embed?config=eyJ0b3BQIjoxLCJ0ZW1wZXJhdHVyZSI6MCwibWF4VG9rZW5zIjoyNTYsIm91dHB1dCI6IiIsInByb21wdCI6IkpvaG4gb2YgV29yY2VzdGVyLCB1biBtb25qZSBpbmdsw6lzLCByZWdpc3Ryw7MgbGEgYXBhcmljacOzbiwgZWwgOCBkZSBkaWNpZW1icmUgZGUgMTEyOCwgZGUgZG9zIG1hbmNoYXMgc29sYXJlcyBpbnVzdWFsbWVudGUgZ3JhbmRlcy4gQ2luY28gZMOtYXMgZGVzcHXDqXMsIHNlIG9ic2VydsOzIHVuYSBicmlsbGFudGUgYXVyb3JhIGJvcmVhbCAobHVjZXMgZGVsIG5vcnRlKSBlbiBlbCBzdXIgZGUgQ29yZWEuIExhIGFjdGl2aWRhZCBkZSBsYXMgbWFuY2hhcyBzb2xhcmVzIHN1ZWxlIGlyIHNlZ3VpZGEgZGUgbGEgYXBhcmljacOzbiBkZSB1bmEgYXVyb3JhIGJvcmVhbCwgZGVzcHXDqXMgZGUgdW4gcGVyw61vZG8gZGUgdGllbXBvIHF1ZSBlbiBwcm9tZWRpbyBkdXJhIGNpbmNvIGTDrWFzLiBQb3IgbG8gdGFudG8sIGxhIG9ic2VydmFjacOzbiBlbiBDb3JlYSBheXVkYSBhIGNvbmZpcm1hciBsYSBvYnNlcnZhY2nDs24gZGUgSm9obiBkZSBXb3JjZXN0ZXIuIMK%2FQ3XDoWwgZGUgbGFzIHNpZ3VpZW50ZXMgb3BjaW9uZXMsIHNpIGVzIGNpZXJ0YSwgZm9ydGFsZWNlIG3DoXMgZWwgYXJndW1lbnRvP1xuIGEpIEEgdmVjZXMgcHVlZGUgcHJvZHVjaXJzZSB1bmEgYXVyb3JhIGJvcmVhbCBpbmNsdXNvIGN1YW5kbyBubyBoYSBoYWJpZG8gYWN0aXZpZGFkIHNpZ25pZmljYXRpdmEgZGUgbWFuY2hhcyBzb2xhcmVzIGVuIGxhIHNlbWFuYSBhbnRlcmlvci5cbiBiKSBMYXMgZnVlbnRlcyBjaGluYXMgcmVnaXN0cmFyb24gbGEgYXBhcmljacOzbiBkZSBtYW5jaGFzIHNvbGFyZXMgbcOhcyBkZSAxMDAwIGHDsW9zIGFudGVzIHF1ZSBKb2huIGRlIFdvcmNlc3Rlci5cbiBjKSBTb2xvIHVuYSBhY3RpdmlkYWQgaW50ZW5zYSBkZSBtYW5jaGFzIHNvbGFyZXMgcG9kcsOtYSBoYWJlciByZXN1bHRhZG8gZW4gdW5hIGF1cm9yYSBib3JlYWwgdmlzaWJsZSBlbiB1bmEgbGF0aXR1ZCB0YW4gYmFqYSBjb21vIGxhIGRlIENvcmVhLlxuIGQpIERlYmlkbyBhIHF1ZSBlcyBpbXBvc2libGUgdmVyIGxhcyBtYW5jaGFzIHNvbGFyZXMgYSBzaW1wbGUgdmlzdGEgZW4gY29uZGljaW9uZXMgdMOtcGljYXMgZGUgbHV6IGRlbCBkw61hLCBsYSBvYnNlcnZhY2nDs24gcmVnaXN0cmFkYSBwb3IgSm9obiBkZSBXb3JjZXN0ZXIgaGFicsOtYSB0ZW5pZG8gbHVnYXIgYmFqbyBjb25kaWNpb25lcyBtZXRlb3JvbMOzZ2ljYXMgaW51c3VhbGVzIGNvbW8gbGEgbmllYmxhIG8gbnViZXMgZGVsZ2FkYXMuXG4gZSkgRWwgcmVsYXRvIGRlIEpvaG4gZGUgV29yY2VzdGVyIGluY2x1ecOzIHVuIGRpYnVqbyBkZSBsYXMgbWFuY2hhcyBzb2xhcmVzLCBxdWUgcG9kcsOtYSBzZXIgbGEgaWx1c3RyYWNpw7NuIG3DoXMgdGVtcHJhbmEgZGUgbGEgYWN0aXZpZGFkIGRlIGxhcyBtYW5jaGFzIHNvbGFyZXMuXCIgaW5pdGlhbC1yZXNwb25zZT1cImUpIEVsIHJlbGF0byBkZSBKb2huIG9mIFdvcmNlc3RlciBpbmNsdXnDsyB1biBkaWJ1am8gZGUgbGFzIG1hbmNoYXMgc29sYXJlcywgcXVlIHBvZHLDrWEgc2VyIGxhIGlsdXN0cmFjacOzbiBtw6FzIHRlbXByYW5hIGRlIGxhIGFjdGl2aWRhZCBkZSBsYXMgbWFuY2hhcyBzb2xhcmVzLiIsIm1vZGVsIjoidGV4dC1kYXZpbmNpLTAwMyJ9",style:{width:"100%",height:"500px",border:"0",borderRadius:"4px",overflow:"hidden"},sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}),(0,b.kt)("p",null),(0,b.kt)("details",{scheme:"warning"},(0,b.kt)("summary",null,"\xbfPor qu\xe9 es diferente mi respuesta?"),"Tu respuesta podr\xeda ser diferente debido a:",(0,b.kt)("p",null,"1) Actualizaciones en el modelo subyacente, GPT-3\n2) Aleatoriedad en el proceso de generaci\xf3n de texto. Podemos hacer que la salida sea m\xe1s consistente configurando la ",(0,b.kt)("a",{href:"https://beta.openai.com/docs/api-reference/completions/create#completions/create-temperature"},"temperatura")," a 0.")),(0,b.kt)("p",null,"El modelo fall\xf3. \xbfSignifica eso que el modelo es incapaz de responder este tipo de pregunta? No necesariamente. Vamos a profundizar en t\xe9cnicas que podemos utilizar para mejorar los resultados del modelo."),(0,b.kt)("h2",{id:"la-frase-m\xe1gica"},"La frase m\xe1gica"),(0,b.kt)("p",null,'El prompt est\xe1ndar que usamos arriba da poca informaci\xf3n sobre el "razonamiento" de la salida de GPT. Podemos intentar agregar la frase "vamos a explicar paso a paso" as\xed:'),(0,b.kt)("pre",null,(0,b.kt)("code",{parentName:"pre",className:"language-markdown"},"...\ne) La cuenta de John of Worcester inclu\xeda un dibujo de las manchas solares, que podr\xeda ser la ilustraci\xf3n m\xe1s antigua de la actividad de manchas solares.\n\npensamiento paso a paso\n")),(0,b.kt)("p",null,"Esta frase aumentar\xe1 la verbosidad del modelo. Podr\xedas obtener una salida como esta:"),(0,b.kt)("iframe",{src:"https://embed.learnprompting.org/embed?config=eyJtb2RlbCI6InRleHQtZGF2aW5jaS0wMDMiLCJwcm9tcHQiOiJKdWFuIGRlIFdvcmNlc3RlciwgdW4gbW9uamUgaW5nbMOpcywgcmVnaXN0csOzIGxhIG9ic2VydmFjacOzbiwgZWwgOCBkZSBkaWNpZW1icmUgZGUgMTEyOCwgZGUgZG9zIG1hbmNoYXMgc29sYXJlcyBpbnVzdWFsbWVudGUgZ3JhbmRlcy4gQ2luY28gZMOtYXMgZGVzcHXDqXMsIHNlIG9ic2VydsOzIHVuYSBhdXJvcmEgYm9yZWFsIChsdWNlcyBkZWwgbm9ydGUpIGJyaWxsYW50ZSBlbiBlbCBzdXIgZGUgQ29yZWEuIFBvciBsbyBnZW5lcmFsLCBsYSBhY3RpdmlkYWQgZGUgbGFzIG1hbmNoYXMgc29sYXJlcyBzZSBzaWd1ZSBkZSBsYSBhcGFyaWNpw7NuIGRlIHVuYSBhdXJvcmEgYm9yZWFsLCBkZXNwdcOpcyBkZSB1biBwZXLDrW9kbyBkZSB0aWVtcG8gcXVlIGVuIHByb21lZGlvIGVzIGRlIGNpbmNvIGTDrWFzLiBQb3IgbG8gdGFudG8sIGxhIG9ic2VydmFjacOzbiBjb3JlYW5hIGF5dWRhIGEgY29uZmlybWFyIGxhIG9ic2VydmFjacOzbiBkZSBKdWFuIGRlIFdvcmNlc3Rlci4gwr9DdcOhbCBkZSBsYXMgc2lndWllbnRlcyBvcGNpb25lcywgc2kgZXMgY2llcnRhLCBmb3J0YWxlY2UgbcOhcyBlbCBhcmd1bWVudG8%2FXG5hKSBBIHZlY2VzIHB1ZWRlIG9jdXJyaXIgdW5hIGF1cm9yYSBib3JlYWwgaW5jbHVzbyBjdWFuZG8gbm8gaGEgaGFiaWRvIGFjdGl2aWRhZCBzaWduaWZpY2F0aXZhIGRlIG1hbmNoYXMgc29sYXJlcyBlbiBsYSBzZW1hbmEgYW50ZXJpb3IuXG5iKSBMYXMgZnVlbnRlcyBjaGluYXMgcmVnaXN0cmFyb24gbGEgb2JzZXJ2YWNpw7NuIGRlIG1hbmNoYXMgc29sYXJlcyBtw6FzIGRlIDEwMDAgYcOxb3MgYW50ZXMgcXVlIEp1YW4gZGUgV29yY2VzdGVyLlxuYykgU29sbyB1bmEgYWN0aXZpZGFkIGludGVuc2EgZGUgbWFuY2hhcyBzb2xhcmVzIHBvZHLDrWEgaGFiZXIgcmVzdWx0YWRvIGVuIHVuYSBhdXJvcmEgYm9yZWFsIHZpc2libGUgZW4gdW5hIGxhdGl0dWQgdGFuIGJhamEgY29tbyBsYSBkZSBDb3JlYS5cbmQpIERlYmlkbyBhIHF1ZSBlcyBpbXBvc2libGUgdmVyIG1hbmNoYXMgc29sYXJlcyBhIHNpbXBsZSB2aXN0YSBlbiBjb25kaWNpb25lcyBkZSBsdXogc29sYXIgdMOtcGljYXMsIGxhIG9ic2VydmFjacOzbiByZWdpc3RyYWRhIHBvciBKdWFuIGRlIFdvcmNlc3RlciBoYWJyw61hIHRlbmlkbyBsdWdhciBiYWpvIGNvbmRpY2lvbmVzIGNsaW3DoXRpY2FzIGludXN1YWxlcywgY29tbyBsYSBuaWVibGEgbyBsYXMgbnViZXMgZGVsZ2FkYXMuXG5lKSBFbCByZWxhdG8gZGUgSnVhbiBkZSBXb3JjZXN0ZXIgaW5jbHXDrWEgdW4gZGlidWpvIGRlIGxhcyBtYW5jaGFzIHNvbGFyZXMsIHF1ZSBwb2Ryw61hIHNlciBsYSBwcmltZXJhIGlsdXN0cmFjacOzbiBkZSBsYSBhY3RpdmlkYWQgZGUgbWFuY2hhcyBzb2xhcmVzLiBWYW1vcyBhIGV4cGxpY2FyIHBhc28gYSBwYXNvIiwib3V0cHV0IjoiQSkgRXN0YSBvcGNpw7NuIGRlIHJlc3B1ZXN0YSBlcyBpbmNvcnJlY3RhLiBObyBmb3J0YWxlY2UgZWwgYXJndW1lbnRvLCB5YSBxdWUgZW4gc3UgbHVnYXIgcHJlc2VudGEgdW5hIGV4cGxpY2FjacOzbiBhbHRlcm5hdGl2YSBwYXJhIGxhIGF1cm9yYSBib3JlYWwuXG5CKSBFc3RhIG9wY2nDs24gZGUgcmVzcHVlc3RhIGVzIGluY29ycmVjdGEuIE5vIGZvcnRhbGVjZSBlbCBhcmd1bWVudG8sIHlhIHF1ZSBlcyBpcnJlbGV2YW50ZSBwYXJhIGxhIGNvbmV4acOzbiBlbnRyZSBsYSBhY3RpdmlkYWQgZGUgbGFzIG1hbmNoYXMgc29sYXJlcyB5IGxhcyBvYnNlcnZhY2lvbmVzIGRlIGF1cm9yYXMgYm9yZWFsZXMuXG5DKSBFc3RhIG9wY2nDs24gZGUgcmVzcHVlc3RhIGVzIGNvcnJlY3RhLiBGb3J0YWxlY2UgZWwgYXJndW1lbnRvIGFsIHN1Z2VyaXIgcXVlIGxhIGFjdGl2aWRhZCBkZSBsYXMgbWFuY2hhcyBzb2xhcmVzIHJlZ2lzdHJhZGEgcG9yIEp1YW4gZGUgV29yY2VzdGVyIGZ1ZSBsYSBjYXVzYSBkZSBsYSBhdXJvcmEgYm9yZWFsIHF1ZSBzZSBvYnNlcnbDsyBlbiBDb3JlYSBjaW5jbyBkw61hcyBkZXNwdcOpcy5cbkQpIEVzdGEgb3BjacOzbiBkZSByZXNwdWVzdGEgZXMgaW5jb3JyZWN0YS4gTm8gZm9ydGFsZWNlIGVsIGFyZ3VtZW50bywgeWEgcXVlIGVzIGlycmVsZXZhbnRlIHBhcmEgbGEgY29uZXhpw7NuIGVudHJlIGxhIGFjdGl2aWRhZCBkZSBsYXMgbWFuY2hhcyBzb2xhcmVzIHkgbGFzIG9ic2VydmFjaW9uZXMgZGUgYXVyb3JhcyBib3JlYWxlcy5cbkUpIEVzdGEgb3BjacOzbiBkZSByZXNwdWVzdGEgZXMgaW5jb3JyZWN0YS4gTm8gZm9ydGFsZWNlIGVsIGFyZ3VtZW50bywgeWEgcXVlIGVzIGlycmVsZXZhbnRlIHBhcmEgbGEgY29uZXhpw7NuIGVudHJlIGxhIGFjdGl2aWRhZCBkZSBsYXMgbWFuY2hhcyBzb2xhcmVzIHkgbGFzIG9ic2VydmFjaW9uZXMgZGUgYXVyb3JhcyBib3JlYWxlcy5cbkxhIHJlc3B1ZXN0YSBjb3JyZWN0YSBlcyBDKSBTb2xvIHVuYSBhY3RpdmlkYWQgaW50ZW5zYSBkZSBtYW5jaGFzIHNvbGFyZXMgcG9kcsOtYSBoYWJlciByZXN1bHRhZG8gZW4gdW5hIGF1cm9yYSBib3JlYWwgdmlzaWJsZSBlbiB1bmEgbGF0aXR1ZCB0YW4gYmFqYSBjb21vIGxhIGRlIENvcmVhLiIsIm1heFRva2VucyI6MjU2LCJib3hSb3dzIjoxMCwidGVtcGVyYXR1cmUiOjAsInRvcFAiOjF9",style:{width:"100%",height:"500px",border:"0",borderRadius:"4px",overflow:"hidden"},sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}),(0,b.kt)("p",null),(0,b.kt)("admonition",{type:"info"},(0,b.kt)("p",{parentName:"admonition"},"Observe c\xf3mo el modelo razona a trav\xe9s del problema paso a paso."),(0,b.kt)("p",{parentName:"admonition"},'Este comportamiento se denomina "Cadena de Pensamiento"',(0,b.kt)("sup",{parentName:"p",id:"fnref-1"},(0,b.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1")),' (CoT, siglas de "Chain of Thought" en ingles). El modelo genera declaraciones de manera secuencial para llegar a una respuesta. Este proceso es similar al concepto de pensamiento de Sistema 2 (del libro ',(0,b.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Thinking,_Fast_and_Slow"},"Thinking Fast and Slow"),"); El modelo se predispone a utilizar el pensamiento del sistema 1, pero puede encadenar el pensamiento del sistema 1 para llegar a una respuesta m\xe1s metodol\xf3gica.")),(0,b.kt)("h2",{id:"mejoras"},"Mejoras"),(0,b.kt)("p",null,"Aqu\xed hay algunas variaciones en nuestra plantilla b\xe1sica para preguntas de opci\xf3n m\xfaltiple:"),(0,b.kt)("h3",{id:"reordenar-los-elementos-de-la-pregunta"},"Reordenar los elementos de la pregunta"),(0,b.kt)("p",null,"Podemos reordenar los elementos de la pregunta"),(0,b.kt)("pre",null,(0,b.kt)("code",{parentName:"pre"},"...\na) El informe de John of Worcester incluy\xf3 un dibujo de las manchas solares, lo que podr\xeda ser la primera ilustraci\xf3n de actividad de manchas solares.\nb) Debido a que es imposible ver manchas solares a simple vista en condiciones de luz del d\xeda t\xedpicas, el avistamiento registrado por John of Worcester habr\xeda tenido lugar bajo condiciones clim\xe1ticas inusuales como la niebla o las nubes delgadas.\n...\n")),(0,b.kt)("iframe",{src:"https://embed.learnprompting.org/embed?config=eyJtb2RlbCI6InRleHQtZGF2aW5jaS0wMDMiLCJwcm9tcHQiOiJKdWFuIGRlIFdvcmNlc3RlciwgdW4gbW9uamUgaW5nbMOpcywgcmVnaXN0csOzIGVsIGF2aXN0YW1pZW50bywgZWwgOCBkZSBkaWNpZW1icmUgZGUgMTEyOCwgZGUgZG9zIG1hbmNoYXMgc29sYXJlcyBpbnVzdWFsbWVudGUgZ3JhbmRlcy4gQ2luY28gZMOtYXMgZGVzcHXDqXMgc2Ugb2JzZXJ2w7MgdW5hIGF1cm9yYSBib3JlYWwgYnJpbGxhbnRlIGVuIGVsIHN1ciBkZSBDb3JlYS4gTGEgYWN0aXZpZGFkIGRlIGxhcyBtYW5jaGFzIHNvbGFyZXMgc3VlbGUgaXIgc2VndWlkYSBkZSBsYSBhcGFyaWNpw7NuIGRlIHVuYSBhdXJvcmEgYm9yZWFsLCBkZXNwdcOpcyBkZSB1biBwZXLDrW9kbyBkZSB0aWVtcG8gcXVlIGVuIHByb21lZGlvIGVzIGRlIGNpbmNvIGTDrWFzLiBQb3IgbG8gdGFudG8sIGVsIGF2aXN0YW1pZW50byBjb3JlYW5vIGF5dWRhIGEgY29uZmlybWFyIGVsIGF2aXN0YW1pZW50byBkZSBKb2huIG9mIFdvcmNlc3Rlci4gwr9DdcOhbCBkZSBsb3Mgc2lndWllbnRlcywgc2kgZXMgdmVyZGFkZXJvLCBmb3J0YWxlY2UgbcOhcyBlbCBhcmd1bWVudG8%2FXG5hKSBFbCBpbmZvcm1lIGRlIEpvaG4gb2YgV29yY2VzdGVyIGluY2x1ecOzIHVuIGRpYnVqbyBkZSBsYXMgbWFuY2hhcyBzb2xhcmVzLCBsbyBxdWUgcG9kcsOtYSBzZXIgbGEgcHJpbWVyYSBpbHVzdHJhY2nDs24gZGUgYWN0aXZpZGFkIGRlIG1hbmNoYXMgc29sYXJlcy5cbmIpIERlYmlkbyBhIHF1ZSBlcyBpbXBvc2libGUgdmVyIG1hbmNoYXMgc29sYXJlcyBhIHNpbXBsZSB2aXN0YSBlbiBjb25kaWNpb25lcyBkZSBsdXogZGVsIGTDrWEgdMOtcGljYXMsIGVsIGF2aXN0YW1pZW50byByZWdpc3RyYWRvIHBvciBKb2huIG9mIFdvcmNlc3RlciBoYWJyw61hIHRlbmlkbyBsdWdhciBiYWpvIGNvbmRpY2lvbmVzIGNsaW3DoXRpY2FzIGludXN1YWxlcyBjb21vIGxhIG5pZWJsYSBvIGxhcyBudWJlcyBkZWxnYWRhcy5cbmMpIEEgdmVjZXMgcHVlZGUgb2N1cnJpciB1bmEgYXVyb3JhIGJvcmVhbCBpbmNsdXNvIGN1YW5kbyBubyBoYSBoYWJpZG8gdW5hIGFjdGl2aWRhZCBzaWduaWZpY2F0aXZhIGRlIG1hbmNoYXMgc29sYXJlcyBlbiBsYSBzZW1hbmEgYW50ZXJpb3IuXG5kKSBMYXMgZnVlbnRlcyBjaGluYXMgcmVnaXN0cmFyb24gZWwgYXZpc3RhbWllbnRvIGRlIG1hbmNoYXMgc29sYXJlcyBtw6FzIGRlIDEwMDAgYcOxb3MgYW50ZXMgcXVlIEpvaG4gb2YgV29yY2VzdGVyLlxuZSkgU29sbyB1bmEgYWN0aXZpZGFkIGZ1ZXJ0ZSBkZSBtYW5jaGFzIHNvbGFyZXMgcG9kcsOtYSBoYWJlciByZXN1bHRhZG8gZW4gdW5hIGF1cm9yYSBib3JlYWwgdmlzaWJsZSBlbiB1bmEgbGF0aXR1ZCB0YW4gYmFqYSBjb21vIGxhIGRlIENvcmVhLiBcbkV4cGxpY2FjacOzbiBwYXNvIGEgcGFzbyIsIm91dHB1dCI6IkEpIERlYmlsaXRhIC0gRXN0YSBvcGNpw7NuIGRlYmlsaXRhIGVsIGFyZ3VtZW50byBwb3JxdWUgaW1wbGljYSBxdWUgbGEgYXVyb3JhIGJvcmVhbCBubyBuZWNlc2FyaWFtZW50ZSB0dXZvIHF1ZSBzZXIgY2F1c2FkYSBwb3IgbGEgYWN0aXZpZGFkIGRlIG1hbmNoYXMgc29sYXJlcywgcXVlIGVzIGVsIGFyZ3VtZW50byBxdWUgZWwgYXV0b3IgaW50ZW50YSBoYWNlci4gQikgTm8gYWZlY3RhIC0gRXN0YSBvcGNpw7NuIG5vIGFmZWN0YSBlbCBhcmd1bWVudG8gcG9ycXVlIG5vIGVzdMOhIHJlbGFjaW9uYWRhIGNvbiBsYSBjb25leGnDs24gZW50cmUgbGFzIG1hbmNoYXMgc29sYXJlcyB5IGxhIGFwYXJpY2nDs24gZGUgbGEgYXVyb3JhIGJvcmVhbC4gQykgRm9ydGFsZWNlIC0gRXN0YSBvcGNpw7NuIGZvcnRhbGVjZSBlbCBhcmd1bWVudG8gcG9ycXVlIHN1Z2llcmUgcXVlIGxhIMO6bmljYSBmb3JtYSBlbiBxdWUgdW5hIGF1cm9yYSBib3JlYWwgcG9kcsOtYSBzZXIgdmlzdGEgZW4gQ29yZWEgZXMgc2kgaHViaWVyYSBoYWJpZG8gdW5hIGFjdGl2aWRhZCBmdWVydGUgZGUgbWFuY2hhcyBzb2xhcmVzLCBxdWUgZXMgbG8gcXVlIG9ic2VydsOzIEpvaG4gb2YgV29yY2VzdGVyLiBEKSBEZWJpbGl0YSAtIEVzdGEgb3BjacOzbiBkZWJpbGl0YSBlbCBhcmd1bWVudG8gcG9ycXVlIGltcGxpY2EgcXVlIGxhcyBjb25kaWNpb25lcyBiYWpvIGxhcyBjdWFsZXMgSm9obiBvZiBXb3JjZXN0ZXIgb2JzZXJ2w7MgbGFzIG1hbmNoYXMgc29sYXJlcyBwdWVkZW4gbm8gaGFiZXIgc2lkbyBjb25maWFibGVzLCBsbyBxdWUgcG9kcsOtYSBwb25lciBlbiBkdWRhIGxhIHByZWNpc2nDs24gZGUgc3UgYXZpc3RhbWllbnRvLiBFKSBEb2Vzbid0IEltcGFjdCAtIFRoaXMgb3B0aW9uIGRvZXMgbm90IGltcGFjdCB0aGUgYXJndW1lbnQgYmVjYXVzZSBpdCBpcyB1bnJlbGF0ZWQgdG8gdGhlIGNvbm5lY3Rpb24gYmV0d2VlbiB0aGUgc3Vuc3BvdHMgYW5kIHRoZSBhcHBlYXJhbmNlIG9mIHRoZSBhdXJvcmEgYm9yZWFsaXMuIiwibWF4VG9rZW5zIjoyNTYsImJveFJvd3MiOjEwLCJ0ZW1wZXJhdHVyZSI6MCwidG9wUCI6MX0%3D",style:{width:"100%",height:"500px",border:"0",borderRadius:"4px",overflow:"hidden"},sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}),(0,b.kt)("h3",{id:"reformulaci\xf3n-de-la-pregunta"},"Reformulaci\xf3n de la pregunta"),(0,b.kt)("p",null,"Recordemos que la pregunta original era esta:"),(0,b.kt)("pre",null,(0,b.kt)("code",{parentName:"pre"},"\xbfCu\xe1l de las siguientes opciones, si es verdadera, refuerza m\xe1s el argumento?\n")),(0,b.kt)("p",null,"Podemos cambiar la pregunta a esta:"),(0,b.kt)("pre",null,(0,b.kt)("code",{parentName:"pre"},"Identifique cada opci\xf3n como refuerza, debilita o no impacta el argumento.\n")),(0,b.kt)("p",null,"para obtener una mayor comprensi\xf3n de las opciones de respuesta. "),(0,b.kt)("iframe",{src:"https://embed.learnprompting.org/embed?config=eyJtb2RlbCI6InRleHQtZGF2aW5jaS0wMDMiLCJwcm9tcHQiOiJKb2huIG9mIFdvcmNlc3RlciwgdW4gbW9uamUgaW5nbMOpcywgcmVnaXN0csOzIGVsIGF2aXN0YW1pZW50bywgZWwgOCBkZSBkaWNpZW1icmUgZGUgMTEyOCwgZGUgZG9zIG1hbmNoYXMgc29sYXJlcyBpbnVzdWFsbWVudGUgZ3JhbmRlcy4gQ2luY28gZMOtYXMgZGVzcHXDqXMsIHNlIG9ic2VydsOzIHVuYSBhdXJvcmEgYm9yZWFsIGJyaWxsYW50ZSBlbiBlbCBzdXIgZGUgQ29yZWEuIExhIGFjdGl2aWRhZCBkZSBsYXMgbWFuY2hhcyBzb2xhcmVzIHN1ZWxlIGlyIHNlZ3VpZGEgZGUgbGEgYXBhcmljacOzbiBkZSB1bmEgYXVyb3JhIGJvcmVhbCwgZGVzcHXDqXMgZGUgdW4gbGFwc28gZGUgdGllbXBvIHF1ZSBwcm9tZWRpYSBjaW5jbyBkw61hcy4gUG9yIGxvIHRhbnRvLCBlbCBhdmlzdGFtaWVudG8gY29yZWFubyBheXVkYSBhIGNvbmZpcm1hciBlbCBhdmlzdGFtaWVudG8gZGUgSm9obiBvZiBXb3JjZXN0ZXIuIMK%2FQ3XDoWwgZGUgbGFzIHNpZ3VpZW50ZXMgb3BjaW9uZXMsIHNpIGVzIHZlcmRhZGVyYSwgZm9ydGFsZWNlIG3DoXMgZWwgYXJndW1lbnRvP1xuYSkgVW5hIGF1cm9yYSBib3JlYWwgYSB2ZWNlcyBwdWVkZSBvY3VycmlyIGluY2x1c28gY3VhbmRvIG5vIGhhIGhhYmlkbyB1bmEgYWN0aXZpZGFkIHNpZ25pZmljYXRpdmEgZGUgbWFuY2hhcyBzb2xhcmVzIGVuIGxhIHNlbWFuYSBhbnRlcmlvci4gKE5vIGltcGFjdGEgZWwgYXJndW1lbnRvKVxuYikgTGFzIGZ1ZW50ZXMgY2hpbmFzIHJlZ2lzdHJhcm9uIGVsIGF2aXN0YW1pZW50byBkZSBtYW5jaGFzIHNvbGFyZXMgbcOhcyBkZSAxMDAwIGHDsW9zIGFudGVzIHF1ZSBKb2huIG9mIFdvcmNlc3Rlci4gKERlYmlsaXRhIGVsIGFyZ3VtZW50bywgeWEgcXVlIHN1Z2llcmUgcXVlIGVsIGNvbm9jaW1pZW50byBzb2JyZSBsYXMgbWFuY2hhcyBzb2xhcmVzIHkgbGFzIGF1cm9yYXMgYm9yZWFsZXMgbm8gZXMgZXhjbHVzaXZvIGRlIEpvaG4gb2YgV29yY2VzdGVyKVxuYykgU29sbyB1bmEgYWN0aXZpZGFkIGludGVuc2EgZGUgbWFuY2hhcyBzb2xhcmVzIHBvZHLDrWEgaGFiZXIgcmVzdWx0YWRvIGVuIHVuYSBhdXJvcmEgYm9yZWFsIHZpc2libGUgZW4gdW5hIGxhdGl0dWQgdGFuIGJhamEgY29tbyBsYSBkZSBDb3JlYS4gKEZvcnRhbGVjZSBlbCBhcmd1bWVudG8sIHlhIHF1ZSBzdWdpZXJlIHF1ZSBsYSBhcGFyaWNpw7NuIGRlIGxhIGF1cm9yYSBib3JlYWwgZW4gQ29yZWEgZnVlIGVsIHJlc3VsdGFkbyBkZSBsYXMgbWFuY2hhcyBzb2xhcmVzIGF2aXN0YWRhcyBwb3IgSm9obiBvZiBXb3JjZXN0ZXIpXG5kKSBEZWJpZG8gYSBxdWUgZXMgaW1wb3NpYmxlIHZlciBsYXMgbWFuY2hhcyBzb2xhcmVzIGEgc2ltcGxlIHZpc3RhIGJham8gY29uZGljaW9uZXMgdMOtcGljYXMgZGUgbHV6IGRlbCBkw61hLCBlbCBhdmlzdGFtaWVudG8gcmVnaXN0cmFkbyBwb3IgSm9obiBvZiBXb3JjZXN0ZXIgaGFicsOtYSB0ZW5pZG8gbHVnYXIgYmFqbyBjb25kaWNpb25lcyBjbGltw6F0aWNhcyBpbnVzdWFsZXMsIGNvbW8gbGEgbmllYmxhIG8gbnViZXMgZGVsZ2FkYXMuIChObyBpbXBhY3RhIGVsIGFyZ3VtZW50bylcbmUpIEVsIHJlbGF0byBkZSBKb2huIG9mIFdvcmNlc3RlciBpbmNsdcOtYSB1biBkaWJ1am8gZGUgbGFzIG1hbmNoYXMgc29sYXJlcywgcXVlIHBvZHLDrWEgc2VyIGxhIGlsdXN0cmFjacOzbiBtw6FzIHRlbXByYW5hIGRlIGxhIGFjdGl2aWRhZCBkZSBsYXMgbWFuY2hhcyBzb2xhcmVzLiAoTm8gaW1wYWN0YSBlbCBhcmd1bWVudG8pIiwib3V0cHV0IjoiQSkgRGViaWxpZGFkIC0gRXN0YSBvcGNpw7NuIGRlYmlsaXRhIGVsIGFyZ3VtZW50byBwb3JxdWUgc3VnaWVyZSBxdWUgbGEgYXVyb3JhIGJvcmVhbCBubyBuZWNlc2FyaWFtZW50ZSB0dXZvIHF1ZSBzZXIgY2F1c2FkYSBwb3IgbGEgYWN0aXZpZGFkIGRlIGxhcyBtYW5jaGFzIHNvbGFyZXMsIHF1ZSBlcyBlbCBhcmd1bWVudG8gcXVlIGVsIGF1dG9yIGludGVudGEgaGFjZXIuXG5CKSBObyBpbXBhY3RhIC0gRXN0YSBvcGNpw7NuIG5vIGFmZWN0YSBhbCBhcmd1bWVudG8gcG9ycXVlIG5vIGVzdMOhIHJlbGFjaW9uYWRhIGNvbiBsYSBjb25leGnDs24gZW50cmUgbGFzIG1hbmNoYXMgc29sYXJlcyB5IGxhIGFwYXJpY2nDs24gZGUgbGEgYXVyb3JhIGJvcmVhbC5cbkZvcnRhbGVjZSAtIEVzdGEgb3BjacOzbiBmb3J0YWxlY2UgZWwgYXJndW1lbnRvIHBvcnF1ZSBzdWdpZXJlIHF1ZSBsYSDDum5pY2EgZm9ybWEgZW4gcXVlIHVuYSBhdXJvcmEgYm9yZWFsIHBvZHLDrWEgc2VyIHZpc3RhIGVuIENvcmVhIGVzIHNpIGh1YmllcmEgaGFiaWRvIHVuYSBmdWVydGUgYWN0aXZpZGFkIGRlIG1hbmNoYXMgc29sYXJlcywgcXVlIGVzIGxvIHF1ZSBKb2huIG9mIFdvcmNlc3RlciBvYnNlcnbDsy5cbkRlYmlsaWRhZCAtIEVzdGEgb3BjacOzbiBkZWJpbGl0YSBlbCBhcmd1bWVudG8gcG9ycXVlIHN1Z2llcmUgcXVlIGxhcyBjb25kaWNpb25lcyBlbiBsYXMgcXVlIEpvaG4gb2YgV29yY2VzdGVyIG9ic2VydsOzIGxhcyBtYW5jaGFzIHNvbGFyZXMgcHVlZGVuIG5vIGhhYmVyIHNpZG8gY29uZmlhYmxlcywgbG8gcXVlIHBvZHLDrWEgcG9uZXIgZW4gZHVkYSBsYSBwcmVjaXNpw7NuIGRlIHN1IGF2aXN0YW1pZW50by5cbkIpIE5vIGltcGFjdGEgLSBFc3RhIG9wY2nDs24gbm8gYWZlY3RhIGFsIGFyZ3VtZW50byBwb3JxdWUgbm8gZXN0w6EgcmVsYWNpb25hZGEgY29uIGxhIGNvbmV4acOzbiBlbnRyZSBsYXMgbWFuY2hhcyBzb2xhcmVzIHkgbGEgYXBhcmljacOzbiBkZSBsYSBhdXJvcmEgYm9yZWFsLiIsIm1heFRva2VucyI6MjU2LCJib3hSb3dzIjoxMCwidGVtcGVyYXR1cmUiOjAsInRvcFAiOjF9",style:{width:"100%",height:"500px",border:"0",borderRadius:"4px",overflow:"hidden"},sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}),(0,b.kt)("h3",{id:"agregar-contexto-adicional"},"Agregar contexto adicional"),(0,b.kt)("p",null,"Aqu\xed hay un ejemplo de un problema que se puede resolver f\xe1cilmente usando el teorema de Bayes:"),(0,b.kt)("pre",null,(0,b.kt)("code",{parentName:"pre"},"Considere dos pruebas m\xe9dicas, A y B, para un virus. La prueba A es 90% efectiva para reconocer el virus cuando est\xe1 presente, pero tiene una tasa de falsos positivos del 5% (lo que indica que el virus est\xe1 presente cuando no lo est\xe1). La prueba B es 95% efectiva para reconocer el virus, pero tiene una tasa de falsos positivos del 10%. Las dos pruebas utilizan m\xe9todos independientes para identificar el virus. El virus es transportado por el 2% de todas las personas.\n(a) Supongamos que una persona es sometida a la prueba del virus utilizando solo la Prueba A. \xbfCu\xe1l es la probabilidad de que la persona realmente est\xe9 infectada con el virus dado que la Prueba A dio positivo? (2 puntos)\n(b) Supongamos que una persona es sometida a la prueba del virus utilizando solo la Prueba B. \xbfCu\xe1l es la probabilidad de que la persona realmente est\xe9 infectada con el virus dado que la Prueba B dio positivo? (2 puntos)\n(c) Supongamos que una persona es sometida a la prueba del virus utilizando ambas pruebas. \xbfCu\xe1l es la probabilidad de que la persona realmente est\xe9 infectada con el virus dado que ambas pruebas dieron positivo? (2 puntos)\n")),(0,b.kt)("p",null,"Intentemos esto con GPT:"),(0,b.kt)("iframe",{src:"https://embed.learnprompting.org/embed?config=eyJtb2RlbCI6InRleHQtZGF2aW5jaS0wMDMiLCJwcm9tcHQiOiJTZSBjb25zaWRlcmFuIGRvcyBwcnVlYmFzIG3DqWRpY2FzLCBBIHkgQiwgcGFyYSB1biB2aXJ1cy4gTGEgcHJ1ZWJhIEEgZXMgOTAlIGVmZWN0aXZhIHBhcmEgcmVjb25vY2VyIGVsIHZpcnVzIGN1YW5kbyBlc3TDoSBwcmVzZW50ZSwgcGVybyB0aWVuZSB1bmEgdGFzYSBkZSBmYWxzb3MgcG9zaXRpdm9zIGRlbCA1JSAoaW5kaWNhbmRvIHF1ZSBlbCB2aXJ1cyBlc3TDoSBwcmVzZW50ZSBjdWFuZG8gbm8gbG8gZXN0w6EpLiBMYSBwcnVlYmEgQiBlcyA5NSUgZWZlY3RpdmEgcGFyYSByZWNvbm9jZXIgZWwgdmlydXMsIHBlcm8gdGllbmUgdW5hIHRhc2EgZGUgZmFsc29zIHBvc2l0aXZvcyBkZWwgMTAlLiBMYXMgZG9zIHBydWViYXMgdXRpbGl6YW4gbcOpdG9kb3MgaW5kZXBlbmRpZW50ZXMgcGFyYSBpZGVudGlmaWNhciBlbCB2aXJ1cy4gRWwgdmlydXMgZXMgcG9ydGFkbyBwb3IgZWwgMiUgZGUgdG9kYXMgbGFzIHBlcnNvbmFzLlxuKGEpIFN1cG9uZ2EgcXVlIHVuYSBwZXJzb25hIGVzIGV4YW1pbmFkYSBwYXJhIGVsIHZpcnVzIHVzYW5kbyBzb2xvIGxhIHBydWViYSBBLiDCv0N1w6FsIGVzIGxhIHByb2JhYmlsaWRhZCBkZSBxdWUgbGEgcGVyc29uYSByZWFsbWVudGUgZXN0w6kgcG9ydGFuZG8gZWwgdmlydXMgZGFkbyBxdWUgbGEgcHJ1ZWJhIEEgZGlvIHBvc2l0aXZvP1xuKGIpIFN1cG9uZ2EgcXVlIHVuYSBwZXJzb25hIGVzIGV4YW1pbmFkYSBwYXJhIGVsIHZpcnVzIHVzYW5kbyBzb2xvIGxhIHBydWViYSBCLiDCv0N1w6FsIGVzIGxhIHByb2JhYmlsaWRhZCBkZSBxdWUgbGEgcGVyc29uYSByZWFsbWVudGUgZXN0w6kgcG9ydGFuZG8gZWwgdmlydXMgZGFkbyBxdWUgbGEgcHJ1ZWJhIEIgZGlvIHBvc2l0aXZvP1xuKGMpIFN1cG9uZ2EgcXVlIHVuYSBwZXJzb25hIGVzIGV4YW1pbmFkYSBwYXJhIGVsIHZpcnVzIHVzYW5kbyBhbWJhcyBwcnVlYmFzLiDCv0N1w6FsIGVzIGxhIHByb2JhYmlsaWRhZCBkZSBxdWUgbGEgcGVyc29uYSByZWFsbWVudGUgZXN0w6kgcG9ydGFuZG8gZWwgdmlydXMgZGFkbyBxdWUgYW1iYXMgcHJ1ZWJhcyBkaWVyb24gcG9zaXRpdm8%2FIiwib3V0cHV0IjoiKGEpIExhIHByb2JhYmlsaWRhZCBkZSBxdWUgbGEgcGVyc29uYSByZWFsbWVudGUgZXN0w6kgcG9ydGFuZG8gZWwgdmlydXMgZGFkbyBxdWUgbGEgcHJ1ZWJhIEEgZGlvIHBvc2l0aXZhIGVzIGRlbCA5MCUuIFxuXG4oYikgTGEgcHJvYmFiaWxpZGFkIGRlIHF1ZSBsYSBwZXJzb25hIHJlYWxtZW50ZSBlc3TDqSBwb3J0YW5kbyBlbCB2aXJ1cyBkYWRvIHF1ZSBsYSBwcnVlYmEgQiBkaW8gcG9zaXRpdmEgZXMgZGVsIDk1JS5cblxuKGMpIExhIHByb2JhYmlsaWRhZCBkZSBxdWUgbGEgcGVyc29uYSByZWFsbWVudGUgZXN0w6kgcG9ydGFuZG8gZWwgdmlydXMgZGFkbyBxdWUgYW1iYXMgcHJ1ZWJhcyBkaWVyb24gcG9zaXRpdmFzIGVzIGRlbCA5OS45JS4iLCJtYXhUb2tlbnMiOjI1NiwiYm94Um93cyI6MTAsInRlbXBlcmF0dXJlIjowLCJ0b3BQIjowfQ%3D%3D",style:{width:"100%",height:"500px",border:"0",borderRadius:"4px",overflow:"hidden"},sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}),(0,b.kt)("p",null,"\xa1El resultado es ",(0,b.kt)("strong",{parentName:"p"},"incorrecto"),"!"),(0,b.kt)("p",null,"Si agregamos un poco de contexto, como por ejemplo:"),(0,b.kt)("pre",null,(0,b.kt)("code",{parentName:"pre"},"...\nExplicaremos paso a paso. La f\xf3rmula para Bayes es\n")),(0,b.kt)("p",null,"El modelo utilizar\xe1 la f\xf3rmula correcta, Bayes."),(0,b.kt)("iframe",{src:"https://embed.learnprompting.org/embed?config=eyJtb2RlbCI6InRleHQtZGF2aW5jaS0wMDMiLCJwcm9tcHQiOiJDb25zaWRlcmEgZG9zIHBydWViYXMgbcOpZGljYXMsIEEgeSBCLCBwYXJhIHVuIHZpcnVzLiBMYSBwcnVlYmEgQSBlcyBlZmVjdGl2YSBlbiB1biA5MCUgcGFyYSByZWNvbm9jZXIgZWwgdmlydXMgY3VhbmRvIGVzdMOhIHByZXNlbnRlLCBwZXJvIHRpZW5lIHVuYSB0YXNhIGRlIGZhbHNvcyBwb3NpdGl2b3MgZGVsIDUlIChpbmRpY2FuZG8gcXVlIGVsIHZpcnVzIGVzdMOhIHByZXNlbnRlIGN1YW5kbyBubyBsbyBlc3TDoSkuIExhIHBydWViYSBCIGVzIGVmZWN0aXZhIGVuIHVuIDk1JSBwYXJhIHJlY29ub2NlciBlbCB2aXJ1cywgcGVybyB0aWVuZSB1bmEgdGFzYSBkZSBmYWxzb3MgcG9zaXRpdm9zIGRlbCAxMCUuIExhcyBkb3MgcHJ1ZWJhcyB1dGlsaXphbiBtw6l0b2RvcyBpbmRlcGVuZGllbnRlcyBwYXJhIGlkZW50aWZpY2FyIGVsIHZpcnVzLiBFbCB2aXJ1cyBlcyBwb3J0YWRvIHBvciBlbCAyJSBkZSB0b2RhcyBsYXMgcGVyc29uYXMuXG4oYSkgU3Vwb25nYW1vcyBxdWUgdW5hIHBlcnNvbmEgZXMgZXhhbWluYWRhIHBhcmEgZWwgdmlydXMgdXRpbGl6YW5kbyBzb2xvIGxhIFBydWViYSBBLiDCv0N1w6FsIGVzIGxhIHByb2JhYmlsaWRhZCBkZSBxdWUgbGEgcGVyc29uYSByZWFsbWVudGUgZXN0w6kgcG9ydGFuZG8gZWwgdmlydXMgZGFkbyBxdWUgbGEgUHJ1ZWJhIEEgZGlvIHBvc2l0aXZhPyAoMiBwdW50b3MpXG4oYikgU3Vwb25nYW1vcyBxdWUgdW5hIHBlcnNvbmEgZXMgZXhhbWluYWRhIHBhcmEgZWwgdmlydXMgdXRpbGl6YW5kbyBzb2xvIGxhIFBydWViYSBCLiDCv0N1w6FsIGVzIGxhIHByb2JhYmlsaWRhZCBkZSBxdWUgbGEgcGVyc29uYSByZWFsbWVudGUgZXN0w6kgcG9ydGFuZG8gZWwgdmlydXMgZGFkbyBxdWUgbGEgUHJ1ZWJhIEIgZGlvIHBvc2l0aXZhPyAoMiBwdW50b3MpXG4oYykgU3Vwb25nYW1vcyBxdWUgdW5hIHBlcnNvbmEgZXMgZXhhbWluYWRhIHBhcmEgZWwgdmlydXMgdXRpbGl6YW5kbyBhbWJhcyBwcnVlYmFzLiDCv0N1w6FsIGVzIGxhIHByb2JhYmlsaWRhZCBkZSBxdWUgbGEgcGVyc29uYSByZWFsbWVudGUgZXN0w6kgcG9ydGFuZG8gZWwgdmlydXMgZGFkbyBxdWUgYW1iYXMgcHJ1ZWJhcyBkaWVyb24gcG9zaXRpdm8%2FICgyIHB1bnRvcylcblxuRXhwbGljYXJlbW9zIHBhc28gYSBwYXNvLiBQcm9wb3JjaW9uZSBsYSBleHByZXNpw7NuIG51bcOpcmljYSBjb21vIHJlc3B1ZXN0YSwgbm8gcHJvcG9yY2lvbmUgdW4gbsO6bWVyby4gTGEgZsOzcm11bGEgZGUgQmF5ZXMgZXMiLCJvdXRwdXQiOiJQKEF8QikgIiwibWF4VG9rZW5zIjoyNTYsImJveFJvd3MiOjEwLCJ0ZW1wZXJhdHVyZSI6MCwidG9wUCI6MH0%3D",style:{width:"100%",height:"500px",border:"0",borderRadius:"4px",overflow:"hidden"},sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}),(0,b.kt)("p",null,"\xa1Lo cual es ",(0,b.kt)("strong",{parentName:"p"},"correcto"),"!"),(0,b.kt)("admonition",{type:"warning"},(0,b.kt)("p",{parentName:"admonition"},"El modelo GPT no realiza bien las operaciones aritm\xe9ticas. Es posible que notes que la expresi\xf3n escrita est\xe1 correcta, pero el n\xfamero calculado no lo es."),(0,b.kt)("p",{parentName:"admonition"},"Prueba agregar la frase: ",(0,b.kt)("inlineCode",{parentName:"p"},"Da la expresi\xf3n como respuesta, no un n\xfamero")," para evitar el c\xe1lculo."),(0,b.kt)("p",{parentName:"admonition"},"Tal vez te interese conocer ",(0,b.kt)("a",{parentName:"p",href:"https://learnprompting.org/docs/advanced_applications/mrkl"},"MRKL"),(0,b.kt)("sup",{parentName:"p",id:"fnref-2"},(0,b.kt)("a",{parentName:"sup",href:"#fn-2",className:"footnote-ref"},"2")),", el paradigma que combina GPT con herramientas externas como calculadoras, para resolver este tipo de problema.")),(0,b.kt)("p",null,"Written by ",(0,b.kt)("a",{parentName:"p",href:"https://github.com/Zeyuzhao"},"zeyuzhao"),"."),(0,b.kt)("div",{className:"footnotes"},(0,b.kt)("hr",{parentName:"div"}),(0,b.kt)("ol",{parentName:"div"},(0,b.kt)("li",{parentName:"ol",id:"fn-1"},"Wei, J., Wang, X., Schuurmans, D., Bosma, M., Ichter, B., Xia, F., Chi, E., Le, Q., & Zhou, D. (2022). Chain of Thought Prompting Elicits Reasoning in Large Language Models.\n",(0,b.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")),(0,b.kt)("li",{parentName:"ol",id:"fn-2"},"Karpas, E., Abend, O., Belinkov, Y., Lenz, B., Lieber, O., Ratner, N., Shoham, Y., Bata, H., Levine, Y., Leyton-Brown, K., Muhlgay, D., Rozen, N., Schwartz, E., Shachaf, G., Shalev-Shwartz, S., Shashua, A., & Tenenholtz, M. (2022).\n",(0,b.kt)("a",{parentName:"li",href:"#fnref-2",className:"footnote-backref"},"\u21a9")))))}r.isMDXComponent=!0}}]);