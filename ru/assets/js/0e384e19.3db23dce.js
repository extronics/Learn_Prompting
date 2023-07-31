"use strict";(self.webpackChunkpromptgineering=self.webpackChunkpromptgineering||[]).push([[9671],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),h=o,d=u["".concat(s,".").concat(h)]||u[h]||m[h]||i;return n?r.createElement(d,a(a({ref:t},c),{},{components:n})):r.createElement(d,a({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:o,a[1]=l;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},59881:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=n(87462),o=(n(67294),n(3905));const i={sidebar_position:1},a="Welcome",l={unversionedId:"intro",id:"intro",title:"Welcome",description:"Welcome to our introductory course on prompt engineering!",source:"@site/docs/intro.md",sourceDirName:".",slug:"/intro",permalink:"/ru/docs/intro",draft:!1,editUrl:"https://github.com/trigaten/promptgineering/tree/v1.2.3/docs/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"\ud83d\ude03 Basics",permalink:"/ru/docs/category/-basics"}},s={},p=[{value:"Ethos and Philosophy",id:"ethos-and-philosophy",level:2},{value:"How we teach",id:"how-we-teach",level:3},{value:"How to read",id:"how-to-read",level:2},{value:"Article rating system",id:"article-rating-system",level:3},{value:"Chapters",id:"chapters",level:3},{value:"Feedback",id:"feedback",level:2}],c={toc:p},u="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"welcome"},"Welcome"),(0,o.kt)("p",null,"Welcome to our introductory course on prompt engineering!"),(0,o.kt)("p",null,"Prompt engineering (PE) is the process of ",(0,o.kt)("strong",{parentName:"p"},"communicating effectively with an AI to achieve desired results"),". As AI technology continues to rapidly advance, the ability to master prompt engineering has become a particularly valuable skill. Prompt engineering techniques can be applied to a wide variety of tasks, making it a useful tool for anyone seeking to improve their efficiency in both everyday and innovative activities."),(0,o.kt)("p",null,"This course is tailored to ",(0,o.kt)("strong",{parentName:"p"},"beginners"),", making it the perfect starting point if you're new to AI and PE. However, even if you're not a beginner, you'll still find valuable insights within this course. This course is the ",(0,o.kt)("strong",{parentName:"p"},"most comprehensive")," prompt engineering course available, and the content ranges from an introduction to AI to advanced PE techniques."),(0,o.kt)("h2",{id:"ethos-and-philosophy"},"Ethos and Philosophy"),(0,o.kt)("p",null,"This course is open source, and built by a diverse community of researchers, translators, and hobbyists. We believe that AI should be accessible to everyone, and that it should be described clearly and objectively. To this end, we strive to produce a comprehensive and unbiased course that is free of excessive jargon and hype."),(0,o.kt)("p",null,"We have found this approach to be appreciated by the PE community: This course is cited by ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Prompt_engineering#cite_ref-15"},"Wikipedia"),", and is used by people at companies such as ",(0,o.kt)("a",{parentName:"p",href:"https://learning.oreilly.com/live-events/prompt-engineering-for-generating-ai-art-and-text/0636920084340/0636920084339/"},"O'REILLY"),", Scale AI, and OpenAI. You may also notice that ",(0,o.kt)("a",{href:"https://youtu.be/GPqSoiOP3w8?t=274",rel:"nofollow"},"almost "),(0,o.kt)("a",{href:"https://learnwithhasan.com/prompt-engineering-guide/",rel:"nofollow"},"every "),(0,o.kt)("a",{href:"https://www.youtube.com/watch?v=EYjG6i53-xk",rel:"nofollow"},"other ")," ",(0,o.kt)("a",{href:"https://youtu.be/yR4hNBNS6yc?t=743",rel:"nofollow"},"prompt ")," ",(0,o.kt)("a",{href:"https://youtu.be/pZsJbYIFCCw?t=208",rel:"nofollow"},"engineering ")," ",(0,o.kt)("a",{href:"https://youtu.be/4kp7oVTu9Ck?t=495",rel:"nofollow"},"video ")," ",(0,o.kt)("a",{href:"https://www.youtube.com/watch?v=q5wuHUmGFMw",rel:"nofollow"},"and ")," ",(0,o.kt)("a",{href:"https://youtu.be/f8PGV3T9w38?t=549",rel:"nofollow"},"guide "),"\nuses material from this course. We are honored to support the prompt engineering community, including our 1M+ users and 40K ",(0,o.kt)("a",{parentName:"p",href:"https://discord.gg/learn-prompting"},"Discord")," members."),(0,o.kt)("h3",{id:"how-we-teach"},"How we teach"),(0,o.kt)("p",null,"Our approach to teaching prompt engineering is guided by the following principles:"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Quick Iterations"),"\u2014Since new PE content is published almost daily, we'll keep this course up-to-date with frequent, concise articles about emerging techniques. Please tell us what topics you'd like us to explore further!"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Emphasis on Practicality"),"\u2014Our focus is on applied, practical techniques that you can immediately incorporate into your projects and applications."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Accessible Examples"),"\u2014To help you grasp the techniques quickly, we'll provide clear, relevant examples throughout the articles."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Collaborative Learning"),"\u2014We believe in learning from each other. If you come across something that you don't quite understand or find a mistake, please let us know by creating an ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/trigaten/Learn_Prompting/issues/new/choose"},"issue on GitHub"),". Your feedback helps us improve the course for everyone."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"This course is under heavy development. We are working hard to improve the learning experience and add more content. If you have any suggestions, please let us know!")),(0,o.kt)("h2",{id:"how-to-read"},"How to read"),(0,o.kt)("p",null,"There's no need to read all chapters in order; feel free to explore what interests you! If you're new to AI, machine learning, and programming, we suggest starting with the ",(0,o.kt)("a",{parentName:"p",href:"https://learnprompting.org/docs/category/-basics"},"Basics")," section and the ",(0,o.kt)("a",{parentName:"p",href:"https://learnprompting.org/docs/basics/intro"},"Instructions")," guide. For those already familiar with these concepts, the ",(0,o.kt)("a",{parentName:"p",href:"https://learnprompting.org/docs/category/%EF%B8%8F-intermediate"},"Intermediate")," section is a great place to dive in and expand your knowledge."),(0,o.kt)("h3",{id:"article-rating-system"},"Article rating system"),(0,o.kt)("p",null,"We've implemented a rating system for articles based on their level of difficulty and the extent of programming knowledge needed:"),(0,o.kt)("p",null,"\ud83d\udfe2 Beginner-friendly; no programming required"),(0,o.kt)("p",null,"\ud83d\udfe1 Easy; basic programming knowledge necessary, but no specialized expertise"),(0,o.kt)("p",null,"\ud83d\udd34 Intermediate; programming skills and some domain knowledge required (e.g., calculating logarithmic probabilities)"),(0,o.kt)("p",null,"\ud83d\udfe3 Advanced; programming expertise and in-depth domain understanding needed (e.g., reinforcement learning techniques)"),(0,o.kt)("p",null,"Please note that even for \ud83d\udd34 and \ud83d\udfe3 articles, you can generally grasp the content without prior domain expertise, though it may be helpful for implementation."),(0,o.kt)("h3",{id:"chapters"},"Chapters"),(0,o.kt)("p",null,"Below is a brief overview of each chapter:"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Basics"),": Introduction to prompt engineering and fundamental techniques"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Basic Applications"),": Simple, practical applications of prompt engineering"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Intermediate"),": Research-based PE techniques with moderate complexity"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Applied Prompting"),": Comprehensive PE process walkthroughs contributed by community members"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Advanced Applications"),": Powerful, and more complex applications of prompt engineering"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Reliability"),": Enhancing the reliability of large language models (LLMs)"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Image Prompting"),": Prompt engineering for text-to-image models, such as DALLE and Stable Diffusion"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Prompt Hacking"),": Hacking, but for prompt engineering"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Tooling"),": A review of various prompt engineering tools and IDEs"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Prompt Tuning"),": Refining prompts using gradient-based techniques"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Miscellaneous"),": A collection of additional topics and techniques related to prompt engineering"),(0,o.kt)("h2",{id:"feedback"},"Feedback"),(0,o.kt)("p",null,"The single most important part of this course is your feedback!"),(0,o.kt)("p",null,"If you have any questions, comments, or suggestions, you can:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Make an ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/trigaten/Learn_Prompting/issues/new/choose"},"issue on GitHub")),(0,o.kt)("li",{parentName:"ul"},"Email us at ",(0,o.kt)("a",{parentName:"li",href:"mailto:learnprompting@gmail.com"},"learnprompting@gmail.com")),(0,o.kt)("li",{parentName:"ul"},"Join the ",(0,o.kt)("a",{parentName:"li",href:"https://learnprompting.org/discord"},"Discord community")),(0,o.kt)("li",{parentName:"ul"},"Follow us on ",(0,o.kt)("a",{parentName:"li",href:"https://twitter.com/learnprompting"},"Twitter")),(0,o.kt)("li",{parentName:"ul"},"Join the HackAPrompt Competition until May 26 ",(0,o.kt)("a",{parentName:"li",href:"https://www.aicrowd.com/challenges/hackaprompt-2023"},"Twitter"))),(0,o.kt)("p",null,"Even the smallest amount of feedback is very helpful!"))}m.isMDXComponent=!0}}]);