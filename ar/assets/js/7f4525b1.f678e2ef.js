"use strict";(self.webpackChunkpromptgineering=self.webpackChunkpromptgineering||[]).push([[1631],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(n),d=o,h=m["".concat(s,".").concat(d)]||m[d]||u[d]||r;return n?a.createElement(h,i(i({ref:t},c),{},{components:n})):a.createElement(h,i({ref:t},c))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},46572:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var a=n(87462),o=(n(67294),n(3905));const r=n.p+"assets/images/pal-08b7777800187b41a639d2a8129e7756.webp",i={sidebar_position:4},l="\ud83d\udfe1 Code as Reasoning",s={unversionedId:"advanced_applications/pal",id:"advanced_applications/pal",title:"\ud83d\udfe1 Code as Reasoning",description:"Program-aided Language Models (PAL)(@gao2022pal) are another example of a MRKL system.",source:"@site/docs/advanced_applications/pal.md",sourceDirName:"advanced_applications",slug:"/advanced_applications/pal",permalink:"/ar/docs/advanced_applications/pal",draft:!1,editUrl:"https://github.com/trigaten/promptgineering/tree/v1.2.3/docs/advanced_applications/pal.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udfe1 LLMs that Reason and Act",permalink:"/ar/docs/advanced_applications/react"},next:{title:"\u2696\ufe0f Reliability",permalink:"/ar/docs/category/\ufe0f-reliability"}},p={},c=[{value:"Example",id:"example",level:2},{value:"More",id:"more",level:2}],m={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"-code-as-reasoning"},"\ud83d\udfe1 Code as Reasoning"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://reasonwithpal.com"},"Program-aided Language Models (PAL)"),(0,o.kt)("sup",{parentName:"p",id:"fnref-1"},(0,o.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))," are another example of a MRKL system.\nWhen given a question, PALs are able to ",(0,o.kt)("strong",{parentName:"p"},"write code")," that solves this question. They send the\ncode to a programmatic runtime to get the result. PAL works in contrast to CoT; PAL's intermediate\nreasoning is code, while CoT's is natural language."),(0,o.kt)("div",{style:{textAlign:"center"}},(0,o.kt)("img",{src:r,style:{width:"500px"}})),(0,o.kt)("div",{style:{textAlign:"center"}},"PAL Example (Gao et al.)"),(0,o.kt)("p",null,"One important thing to note it that PAL actually interleaves natural language (NL) and code.\nIn the above image, in blue are natural language reasoning that PAL generates. Although it\nis not shown in the image, PAL actually generates '","#","' before each line of NL reasoning, so\nthat they are interpreted as comments by the programmatic runtime."),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("p",null,"Let's look at an example of PAL solving a math question. I use a 3-shot prompt,\nwhich is a simplified version of ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/reasoning-machines/pal/blob/main/pal/prompt/math_prompts.py"},"this one"),(0,o.kt)("sup",{parentName:"p",id:"fnref-1"},(0,o.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1")),". "),(0,o.kt)("p",null,"I will use langchain, a Python package for chaining LLM functionality for this. First, a few installations are needed:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'!pip install langchain==0.0.26\n!pip install openai\nfrom langchain.llms import OpenAI\nimport os\nos.environ["OPENAI_API_KEY"] = "sk-YOUR_KEY_HERE"\n')),(0,o.kt)("p",null,"Then, we can create an instance of GPT-3 davinci-002 (an API call happens when we use this object)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"llm = OpenAI(model_name='text-davinci-002', temperature=0)\n")),(0,o.kt)("p",null,"Here is the few shot prompt:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'MATH_PROMPT = \'\'\'\nQ: There were nine computers in the server room. Five more computers were installed each day, from monday to thursday. How many computers are now in the server room?\n\n# solution in Python:\n"""There were nine computers in the server room. Five more computers were installed each day, from monday to thursday. How many computers are now in the server room?"""\ncomputers_initial = 9\ncomputers_per_day = 5\nnum_days = 4  # 4 days between monday and thursday\ncomputers_added = computers_per_day * num_days\ncomputers_total = computers_initial + computers_added\nresult = computers_total\nreturn result\n\n\nQ: Shawn has five toys. For Christmas, he got two toys each from his mom and dad. How many toys does he have now?\n\n# solution in Python:\n"""Shawn has five toys. For Christmas, he got two toys each from his mom and dad. How many toys does he have now?"""\ntoys_initial = 5\nmom_toys = 2\ndad_toys = 2\ntotal_received = mom_toys + dad_toys\ntotal_toys = toys_initial + total_received\nresult = total_toys\n\n\nQ: Jason had 20 lollipops. He gave Denny some lollipops. Now Jason has 12 lollipops. How many lollipops did Jason give to Denny?\n\n# solution in Python:\n"""Jason had 20 lollipops. He gave Denny some lollipops. Now Jason has 12 lollipops. How many lollipops did Jason give to Denny?"""\njason_lollipops_initial = 20\njason_lollipops_after = 12\ndenny_lollipops = jason_lollipops_initial - jason_lollipops_after\nresult = denny_lollipops\n\nQ: {question}\n\n# solution in Python:\n\'\'\'\n')),(0,o.kt)("p",null,"Now we can pass the combined prompt to GPT-3."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"llm_out = llm(MATH_PROMPT.format(question=question))\nprint(llm_out)\n")),(0,o.kt)("p",null,"The output is:"),(0,o.kt)("pre",null,(0,o.kt)("span",{className:"bluegreen-highlight"},"Emma took a 60 minute plane ride to seattle. She then took a 2 hour train ride to portland, and then a 30 minute bus ride to vancouver. How long did it take her to get to vancouver?",(0,o.kt)("br",null),(0,o.kt)("br",null),"plane_ride = 60",(0,o.kt)("br",null),"train_ride = 2 * 60  # 2 hours in minutes",(0,o.kt)("br",null),"bus_ride = 30",(0,o.kt)("br",null),"total_time = plane_ride + train_ride + bus_ride",(0,o.kt)("br",null),"result = total_time")),(0,o.kt)("p",null,"Finally, we can pass this code to a Python runtime to get the answer:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"exec(llm_out)\nprint(result)\n")),(0,o.kt)("p",null,"The output is ",(0,o.kt)("strong",{parentName:"p"},"210"),", which is correct."),(0,o.kt)("p",null,"See the Jupyter notebook for this example ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/trigaten/Learn_Prompting/tree/main/docs/code_examples/PAL.ipynb"},"here"),"."),(0,o.kt)("h2",{id:"more"},"More"),(0,o.kt)("p",null,"Also see ",(0,o.kt)("a",{parentName:"p",href:"https://colab.research.google.com/drive/1u4_RsdI0E79PCMDdcPiJUzYhdnjoXeXc?usp=sharing#scrollTo=Ba0ycacK4i1V"},"PAL's colab example"),"."),(0,o.kt)("div",{className:"footnotes"},(0,o.kt)("hr",{parentName:"div"}),(0,o.kt)("ol",{parentName:"div"},(0,o.kt)("li",{parentName:"ol",id:"fn-1"},"Gao, L., Madaan, A., Zhou, S., Alon, U., Liu, P., Yang, Y., Callan, J., & Neubig, G. (2022).\n",(0,o.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")))))}d.isMDXComponent=!0}}]);