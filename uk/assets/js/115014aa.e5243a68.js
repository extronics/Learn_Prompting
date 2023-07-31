"use strict";(self.webpackChunkpromptgineering=self.webpackChunkpromptgineering||[]).push([[8228],{6360:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>g,contentTitle:()=>p,default:()=>b,frontMatter:()=>l,metadata:()=>d,toc:()=>c});var a=o(87462),i=(o(67294),o(3905));const n=o.p+"assets/images/zero_shot-2fcfd390293eb7bf9f7d8371c2f6f5a7.webp",r=o.p+"assets/images/zero_shot_example-f98e34cb8ed72c5520cfd08c3c1c2f44.webp";var s=o(39145);const l={sidebar_position:4},p="\ud83d\udfe2 \u041b\u0430\u043d\u0446\u044e\u0433 \u0434\u0443\u043c\u043e\u043a \u0431\u0435\u0437 \u0456\u043b\u044e\u0441\u0442\u0440\u0430\u0446\u0456\u0439",d={unversionedId:"intermediate/zero_shot_cot",id:"intermediate/zero_shot_cot",title:"\ud83d\udfe2 \u041b\u0430\u043d\u0446\u044e\u0433 \u0434\u0443\u043c\u043e\u043a \u0431\u0435\u0437 \u0456\u043b\u044e\u0441\u0442\u0440\u0430\u0446\u0456\u0439",description:'\u0417\u0430\u043f\u0438\u0442 \u043b\u0430\u043d\u0446\u044e\u0433 \u0434\u0443\u043c\u043e\u043a \u0431\u0435\u0437 \u0456\u043b\u044e\u0441\u0442\u0440\u0430\u0446\u0456\u0439 (Zero-shot-CoT)(@kojima2022large) \u0454 \u0434\u043e\u043f\u043e\u0432\u043d\u0435\u043d\u043d\u044f\u043c \u0434\u043e %%CoT|CoT prompting%% (@wei2022chain), \u044f\u043a\u0438\u0439 \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u044f\u0454 \u043d\u0435\u0439\u043c\u043e\u0432\u0456\u0440\u043d\u043e \u043f\u0440\u043e\u0441\u0442\u0438\u0439 \u0437\u0430\u043f\u0438\u0442 \u043d\u0430 \u043e\u0441\u043d\u043e\u0432\u0456 1 \u0456\u043b\u044e\u0441\u0442\u0440\u0430\u0446\u0456\u0457. \u0422\u0430\u043a\u0438\u043c \u0447\u0438\u043d\u043e\u043c, \u0434\u043e\u0434\u0430\u044e\u0447\u0438 \u0441\u043b\u043e\u0432\u0430 "Let\'s think step by step." \u0434\u043e \u043a\u0456\u043d\u0446\u044f \u0437\u0430\u043f\u0438\u0442\u0430\u043d\u043d\u044f, \u0412\u041c\u041c \u043c\u043e\u0436\u0443\u0442\u044c \u0441\u0442\u0432\u043e\u0440\u0438\u0442\u0438 \u043b\u0430\u043d\u0446\u044e\u0433 \u0434\u0443\u043c\u043e\u043a, \u044f\u043a\u0438\u0439 \u0432\u0456\u0434\u043f\u043e\u0432\u0456\u0434\u0430\u0454 \u043d\u0430 \u0437\u0430\u043f\u0438\u0442\u0430\u043d\u043d\u044f. \u0417 \u0446\u044c\u043e\u0433\u043e \u043b\u0430\u043d\u0446\u044e\u0433\u0430 \u0434\u0443\u043c\u043e\u043a \u0432\u043e\u043d\u0438 \u043c\u043e\u0436\u0443\u0442\u044c \u043e\u0442\u0440\u0438\u043c\u0430\u0442\u0438 \u0442\u043e\u0447\u043d\u0456\u0448\u0456 \u0432\u0456\u0434\u043f\u043e\u0432\u0456\u0434\u0456.',source:"@site/i18n/uk/docusaurus-plugin-content-docs/current/intermediate/zero_shot_cot.md",sourceDirName:"intermediate",slug:"/intermediate/zero_shot_cot",permalink:"/uk/docs/intermediate/zero_shot_cot",draft:!1,editUrl:"https://github.com/trigaten/promptgineering/tree/v1.2.3/docs/intermediate/zero_shot_cot.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udfe2 \u041b\u0430\u043d\u0446\u044e\u0433 \u0434\u0443\u043c\u043e\u043a",permalink:"/uk/docs/intermediate/chain_of_thought"},next:{title:"\ud83d\udfe1 \u0421\u0430\u043c\u043e\u0443\u0437\u0433\u043e\u0434\u0436\u0435\u043d\u0456\u0441\u0442\u044c",permalink:"/uk/docs/intermediate/self_consistency"}},g={},c=[{value:"\u041d\u0430\u043f\u0440\u0438\u043a\u043b\u0430\u0434",id:"\u043d\u0430\u043f\u0440\u0438\u043a\u043b\u0430\u0434",level:2},{value:"\u041d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e",id:"\u043d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e",level:4},{value:"\u041f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e",id:"\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e",level:4},{value:"\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u0438",id:"\u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u0438",level:2},{value:"\u0410\u0431\u043b\u044f\u0446\u0456\u0457 \u0432\u0438\u0433\u043e\u0434\u0438",id:"\u0430\u0431\u043b\u044f\u0446\u0456\u0457-\u0432\u0438\u0433\u043e\u0434\u0438",level:2},{value:"\u041f\u0440\u0438\u043c\u0456\u0442\u043a\u0438",id:"\u043f\u0440\u0438\u043c\u0456\u0442\u043a\u0438",level:2}],m=(h="LazyLoadImage",function(e){return console.warn("Component "+h+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",e)});var h;const u={toc:c},k="wrapper";function b(e){let{components:t,...o}=e;return(0,i.kt)(k,(0,a.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"-\u043b\u0430\u043d\u0446\u044e\u0433-\u0434\u0443\u043c\u043e\u043a-\u0431\u0435\u0437-\u0456\u043b\u044e\u0441\u0442\u0440\u0430\u0446\u0456\u0439"},"\ud83d\udfe2 \u041b\u0430\u043d\u0446\u044e\u0433 \u0434\u0443\u043c\u043e\u043a \u0431\u0435\u0437 \u0456\u043b\u044e\u0441\u0442\u0440\u0430\u0446\u0456\u0439"),(0,i.kt)("p",null,"\u0417\u0430\u043f\u0438\u0442 \u043b\u0430\u043d\u0446\u044e\u0433 \u0434\u0443\u043c\u043e\u043a \u0431\u0435\u0437 \u0456\u043b\u044e\u0441\u0442\u0440\u0430\u0446\u0456\u0439 (Zero-shot-CoT)",(0,i.kt)("sup",{parentName:"p",id:"fnref-1"},(0,i.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))," \u0454 \u0434\u043e\u043f\u043e\u0432\u043d\u0435\u043d\u043d\u044f\u043c \u0434\u043e ",(0,i.kt)("a",{parentName:"p",id:"CoT prompting_2_18_1690797176228","data-tooltip-html":"The main idea of CoT is that by showing the LLM some few shot exemplars where the reasoning process is explained in the exemplars, the LLM will also show the reasoning process when answering the prompt.","data-tooltip-place":"top"},"CoT"),(0,i.kt)(s.u,{anchorId:"CoT prompting_2_18_1690797176228",clickable:!0,mdxType:"Tooltip"}),(0,i.kt)("sup",{parentName:"p",id:"fnref-2"},(0,i.kt)("a",{parentName:"sup",href:"#fn-2",className:"footnote-ref"},"2")),', \u044f\u043a\u0438\u0439 \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u044f\u0454 \u043d\u0435\u0439\u043c\u043e\u0432\u0456\u0440\u043d\u043e \u043f\u0440\u043e\u0441\u0442\u0438\u0439 \u0437\u0430\u043f\u0438\u0442 \u043d\u0430 \u043e\u0441\u043d\u043e\u0432\u0456 1 \u0456\u043b\u044e\u0441\u0442\u0440\u0430\u0446\u0456\u0457. \u0422\u0430\u043a\u0438\u043c \u0447\u0438\u043d\u043e\u043c, \u0434\u043e\u0434\u0430\u044e\u0447\u0438 \u0441\u043b\u043e\u0432\u0430 "',(0,i.kt)("strong",{parentName:"p"},"Let's think step by step."),'" \u0434\u043e \u043a\u0456\u043d\u0446\u044f \u0437\u0430\u043f\u0438\u0442\u0430\u043d\u043d\u044f, \u0412\u041c\u041c \u043c\u043e\u0436\u0443\u0442\u044c \u0441\u0442\u0432\u043e\u0440\u0438\u0442\u0438 \u043b\u0430\u043d\u0446\u044e\u0433 \u0434\u0443\u043c\u043e\u043a, \u044f\u043a\u0438\u0439 \u0432\u0456\u0434\u043f\u043e\u0432\u0456\u0434\u0430\u0454 \u043d\u0430 \u0437\u0430\u043f\u0438\u0442\u0430\u043d\u043d\u044f. \u0417 \u0446\u044c\u043e\u0433\u043e \u043b\u0430\u043d\u0446\u044e\u0433\u0430 \u0434\u0443\u043c\u043e\u043a \u0432\u043e\u043d\u0438 \u043c\u043e\u0436\u0443\u0442\u044c \u043e\u0442\u0440\u0438\u043c\u0430\u0442\u0438 \u0442\u043e\u0447\u043d\u0456\u0448\u0456 \u0432\u0456\u0434\u043f\u043e\u0432\u0456\u0434\u0456.'),(0,i.kt)("div",{style:{textAlign:"center"}},(0,i.kt)("img",{src:n,style:{width:"500px"}})),(0,i.kt)("div",{style:{textAlign:"center"}},"\u041b\u0430\u043d\u0446\u044e\u0433 \u0434\u0443\u043c\u043e\u043a \u0431\u0435\u0437 \u0456\u043b\u044e\u0441\u0442\u0440\u0430\u0446\u0456\u0439 (\u041a\u043e\u0434\u0436\u0456\u043c\u0430 \u0442\u0430 \u0456\u043d.)"),(0,i.kt)("p",null,"\u0422\u0435\u0445\u043d\u0456\u0447\u043d\u043e, \u043f\u043e\u0432\u043d\u0438\u0439 \u043f\u0440\u043e\u0446\u0435\u0441 Zero-shot-CoT \u0432\u043a\u043b\u044e\u0447\u0430\u0454 \u0434\u0432\u0430 \u043e\u043a\u0440\u0435\u043c\u0456 \u0437\u0430\u043f\u0438\u0442\u0438/\u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043d\u043d\u044f. \u041d\u0430 \u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u043d\u0456 \u043d\u0438\u0436\u0447\u0435 \u0432\u0435\u0440\u0445\u043d\u044f \u0431\u0443\u043b\u044c\u0431\u0430\u0448\u043a\u0430 \u0437\u043b\u0456\u0432\u0430 \u0441\u0442\u0432\u043e\u0440\u044e\u0454 \u043b\u0430\u043d\u0446\u044e\u0433 \u0434\u0443\u043c\u043e\u043a, \u0430 \u0432\u0435\u0440\u0445\u043d\u044f \u0431\u0443\u043b\u044c\u0431\u0430\u0448\u043a\u0430 \u0441\u043f\u0440\u0430\u0432\u0430 \u0431\u0435\u0440\u0435 \u0432\u0438\u0445\u0456\u0434\u043d\u0456 \u0434\u0430\u043d\u0456 \u0437 \u043f\u0435\u0440\u0448\u043e\u0433\u043e \u0437\u0430\u043f\u0438\u0442\u0443 (\u0432\u043a\u043b\u044e\u0447\u043d\u043e \u0437 \u043d\u0430\u0439\u043f\u0435\u0440\u0448\u0438\u043c \u0437\u0430\u043f\u0438\u0442\u043e\u043c) \u0442\u0430 \u0432\u0438\u043b\u0443\u0447\u0430\u0454 \u0432\u0456\u0434\u043f\u043e\u0432\u0456\u0434\u044c \u0456\u0437 \u043b\u0430\u043d\u0446\u044e\u0433\u0430 \u0434\u0443\u043c\u043e\u043a. \u0426\u0435\u0439 \u0434\u0440\u0443\u0433\u0438\u0439 \u0437\u0430\u043f\u0438\u0442 \u0454 ",(0,i.kt)("em",{parentName:"p"},"\u0441\u0430\u043c\u043e\u0434\u043e\u043f\u043e\u0432\u043d\u0435\u043d\u0438\u043c"),"."),(0,i.kt)("div",{style:{textAlign:"center"}},(0,i.kt)(m,{src:r,style:{width:"500px"},mdxType:"LazyLoadImage"})),(0,i.kt)("div",{style:{textAlign:"center"}},"\u041f\u0440\u043e\u0446\u0435\u0441 \u043b\u0430\u043d\u0446\u044e\u0433\u0430 \u0434\u0443\u043c\u043e\u043a \u0431\u0435\u0437 \u0456\u043b\u044e\u0441\u0442\u0440\u0430\u0446\u0456\u0439 (\u041a\u043e\u0434\u0436\u0456\u043c\u0430 \u0442\u0430 \u0456\u043d.)"),(0,i.kt)("h2",{id:"\u043d\u0430\u043f\u0440\u0438\u043a\u043b\u0430\u0434"},"\u041d\u0430\u043f\u0440\u0438\u043a\u043b\u0430\u0434"),(0,i.kt)("p",null,"\u041e\u0441\u044c \u043a\u0456\u043b\u044c\u043a\u0430 \u0434\u0435\u043c\u043e\u043d\u0441\u0442\u0440\u0430\u0446\u0456\u0439 (\u0443 \u044f\u043a\u0438\u0445 \u043b\u0438\u0448\u0435 \u0432\u0438\u043a\u043e\u043d\u0443\u0454\u0442\u044c\u0441\u044f \u0432\u0438\u043b\u0443\u0447\u0435\u043d\u043d\u044f \u043c\u0456\u0440\u043a\u0443\u0432\u0430\u043d\u044c). \u041f\u0435\u0440\u0448\u0430 \u0434\u0435\u043c\u043e\u043d\u0441\u0442\u0440\u0430\u0446\u0456\u044f \u043f\u043e\u043a\u0430\u0437\u0443\u0454, \u0449\u043e GPT-3 (davinci-003) \u043d\u0435 \u043c\u043e\u0436\u0435 \u0432\u043f\u043e\u0440\u0430\u0442\u0438\u0441\u044f \u0437 \u043f\u0440\u043e\u0441\u0442\u0438\u043c \u043c\u0430\u0442\u0435\u043c\u0430\u0442\u0438\u0447\u043d\u0438\u043c \u043f\u0438\u0442\u0430\u043d\u043d\u044f\u043c, \u0432 \u0442\u043e\u0439 \u0447\u0430\u0441, \u044f\u043a \u0434\u0440\u0443\u0433\u0430 \u0434\u0435\u043c\u043e\u043d\u0441\u0442\u0440\u0430\u0446\u0456\u044f \u0432\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u043e\u0432\u0443\u0454 \u0437\u0430\u043f\u0438\u0442 Zero-shot-CoT \u0442\u0430 \u0443\u0441\u043f\u0456\u0448\u043d\u043e \u0440\u043e\u0437\u0432'\u044f\u0437\u0443\u0454 \u0437\u0430\u0434\u0430\u0447\u0443. \u0412\u0438 \u043c\u043e\u0436\u0435\u0442\u0435 \u0432\u0432\u0435\u0441\u0442\u0438 \u0441\u0432\u0456\u0439 \u043a\u043b\u044e\u0447 OpenAI API (\u043d\u0430\u0442\u0438\u0441\u043d\u0443\u0442\u0438 \xab\u0421\u0442\u0432\u043e\u0440\u0438\u0442\u0438\xbb) \u0456 \u043f\u043e\u0433\u0440\u0430\u0442\u0438\u0441\u044f \u0437 \u043f\u0440\u0438\u043a\u043b\u0430\u0434\u0430\u043c\u0438. \u0417\u0432\u0435\u0440\u043d\u0456\u0442\u044c \u0443\u0432\u0430\u0433\u0443, \u043d\u0430\u0441\u043a\u0456\u043b\u044c\u043a\u0438 \u043f\u0440\u043e\u0441\u0442\u0456\u0448\u0438\u043c \u0454 \u0437\u0430\u043f\u0438\u0442 Zero-shot-CoT \u0443 \u043f\u043e\u0440\u0456\u0432\u043d\u044f\u043d\u043d\u0456 \u0437 \u0437\u0430\u043f\u0438\u0442\u043e\u043c CoT."),(0,i.kt)("h4",{id:"\u043d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e"},"\u041d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e"),(0,i.kt)("iframe",{src:"https://embed.learnprompting.org/embed?config=eyJ0b3BQIjoxLCJ0ZW1wZXJhdHVyZSI6MC43LCJtYXhUb2tlbnMiOjI1Niwib3V0cHV0Ijoi0KMg0JTQvNC40YLRgNCwIDgg0LPRgNGD0YguIiwicHJvbXB0Ijoi0K%2FQutGJ0L4g0YMg0JTQvNC40YLRgNCwINGUIDUg0LPRgNGD0YgsINCy0ZbQvSDQtyfRl9C00LDRlCAyLCDQutGD0L%2FRg9GUINGJ0LUgNSwg0LAg0L%2FQvtGC0ZbQvCDQstGW0LTQtNCw0ZQgMyDRgdCy0L7RlNC80YMg0LTRgNGD0LPRgywg0YHQutGW0LvRjNC60Lgg0LPRgNGD0Ygg0YMg0L3RjNC%2B0LPQviDQt9Cw0LvQuNGI0LjQu9C%2B0YHRjz8iLCJtb2RlbCI6InRleHQtZGF2aW5jaS0wMDMifQ%3D%3D",style:{width:"100%",height:"500px",border:"0",borderRadius:"4px",overflow:"hidden"},sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}),(0,i.kt)("h4",{id:"\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e"},"\u041f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e"),(0,i.kt)("iframe",{src:"https://embed.learnprompting.org/embed?config=eyJ0b3BQIjoxLCJ0ZW1wZXJhdHVyZSI6MC43LCJtYXhUb2tlbnMiOjI1Niwib3V0cHV0IjoiSm9obiBzdGFydHMgd2l0aCA1IHBlYXJzLiBIZSBlYXRzIDIgcGVhcnMsIGxlYXZpbmcgaGltIHdpdGggMyBwZWFycy4gSGUgYnV5cyA1IG1vcmUgcGVhcnMsIGdpdmluZyBoaW0gYSB0b3RhbCBvZiA4IHBlYXJzLiBIZSBnaXZlcyAzIHBlYXJzIHRvIGhpcyBmcmllbmQsIGxlYXZpbmcgaGltIHdpdGggb25seSA1IHBlYXJzLiIsInByb21wdCI6IklmIEpvaG4gaGFzIDUgcGVhcnMsIHRoZW4gZWF0cyAyLCBhbmQgYnV5cyA1IG1vcmUsIHRoZW4gZ2l2ZXMgMyB0byBoaXMgZnJpZW5kLCBob3cgbWFueSBwZWFycyBkb2VzIGhlIGhhdmU%2FXG5cbkxldCdzIHRoaW5rIHN0ZXAgYnkgc3RlcC4iLCJtb2RlbCI6InRleHQtZGF2aW5jaS0wMDMifQ%3D%3D",style:{width:"100%",height:"500px",border:"0",borderRadius:"4px",overflow:"hidden"},sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}),(0,i.kt)("h2",{id:"\u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u0438"},"\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u0438"),(0,i.kt)("p",null,"Zero-shot-CoT \u0442\u0430\u043a\u043e\u0436 \u0431\u0443\u0432 \u0435\u0444\u0435\u043a\u0442\u0438\u0432\u043d\u0438\u043c \u0443 \u043f\u043e\u043a\u0440\u0430\u0449\u0435\u043d\u043d\u0456 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u0456\u0432 \u0430\u0440\u0438\u0444\u043c\u0435\u0442\u0438\u0447\u043d\u0438\u0445 \u0437\u0430\u0434\u0430\u0447, \u0437\u0430\u0434\u0430\u0447 \u043d\u0430 \u043b\u043e\u0433\u0456\u043a\u0443 \u0439 \u0441\u0438\u043c\u0432\u043e\u043b\u044c\u043d\u0435 \u043c\u0456\u0440\u043a\u0443\u0432\u0430\u043d\u043d\u044f. \u041e\u0434\u043d\u0430\u043a, \u044f\u043a \u043d\u0435 \u0434\u0438\u0432\u043d\u043e, \u0432\u0456\u043d \u0437\u0430\u0437\u0432\u0438\u0447\u0430\u0439 \u043d\u0435 \u0431\u0443\u0432 \u043d\u0430\u0441\u0442\u0456\u043b\u044c\u043a\u0438 \u0436 \u0435\u0444\u0435\u043a\u0442\u0438\u0432\u043d\u0438\u043c, \u044f\u043a \u0437\u0430\u043f\u0438\u0442 CoT. \u0412\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u0430\u043d\u043d\u044f Zero-shot-CoT \u043c\u043e\u0436\u0435 \u0431\u0443\u0442\u0438 \u0434\u043e\u0446\u0456\u043b\u044c\u043d\u0438\u043c \u0442\u043e\u0434\u0456, \u043a\u043e\u043b\u0438 \u0432\u0430\u0436\u043a\u043e \u043e\u0442\u0440\u0438\u043c\u0430\u0442\u0438 \u043a\u0456\u043b\u044c\u043a\u0430 \u0437\u0440\u0430\u0437\u043a\u0456\u0432 \u043d\u0430 \u043e\u0441\u043d\u043e\u0432\u0456 \u043a\u0456\u043b\u044c\u043a\u043e\u0445 \u0456\u043b\u044e\u0441\u0442\u0440\u0430\u0446\u0456\u0439 \u0434\u043b\u044f \u0437\u0430\u043f\u0438\u0442\u0443 CoT."),(0,i.kt)("h2",{id:"\u0430\u0431\u043b\u044f\u0446\u0456\u0457-\u0432\u0438\u0433\u043e\u0434\u0438"},"\u0410\u0431\u043b\u044f\u0446\u0456\u0457 \u0432\u0438\u0433\u043e\u0434\u0438"),(0,i.kt)("p",null,"\u041a\u043e\u0434\u0436\u0456\u043c\u0430 \u0442\u0430 \u0456\u043d. \u0435\u043a\u0441\u043f\u0435\u0440\u0438\u043c\u0435\u043d\u0442\u0443\u044e\u0442\u044c \u0437 \u043a\u0456\u043b\u044c\u043a\u043e\u043c\u0430 \u0440\u0456\u0437\u043d\u0438\u043c\u0438 \u0437\u0430\u043f\u0438\u0442\u0430\u043c\u0438 Zero-shot-CoT (\u043d\u0430\u043f\u0440\u0438\u043a\u043b\u0430\u0434, \xab\u0420\u043e\u0437\u0432'\u044f\u0436\u0456\u043c\u043e \u0446\u044e \u0437\u0430\u0434\u0430\u0447\u0443, \u0440\u043e\u0437\u0434\u0456\u043b\u0438\u0432\u0448\u0438 \u0457\u0457 \u043d\u0430 \u043a\u0440\u043e\u043a\u0438\xbb \u0430\u0431\u043e \xab\u041f\u043e\u0434\u0443\u043c\u0430\u0439\u043c\u043e \u043f\u0440\u043e \u0446\u0435 \u043b\u043e\u0433\u0456\u0447\u043d\u043e\xbb), \u0430\u043b\u0435 \u0432\u043e\u043d\u0438 \u0432\u0432\u0430\u0436\u0430\u044e\u0442\u044c, \u0449\u043e \xab\u0414\u0443\u043c\u0430\u0439\u043c\u043e \u043a\u0440\u043e\u043a \u0437\u0430 \u043a\u0440\u043e\u043a\u043e\u043c\xbb \u0454 \u043d\u0430\u0439\u0435\u0444\u0435\u043a\u0442\u0438\u0432\u043d\u0456\u0448\u0438\u043c \u0434\u043b\u044f \u0432\u0438\u0431\u0440\u0430\u043d\u0438\u0445 \u043d\u0438\u043c\u0438 \u0437\u0430\u0432\u0434\u0430\u043d\u044c."),(0,i.kt)("h2",{id:"\u043f\u0440\u0438\u043c\u0456\u0442\u043a\u0438"},"\u041f\u0440\u0438\u043c\u0456\u0442\u043a\u0438"),(0,i.kt)("p",null,"\u0415\u0442\u0430\u043f \u0432\u0438\u043b\u0443\u0447\u0435\u043d\u043d\u044f \u0447\u0430\u0441\u0442\u043e \u043c\u0430\u0454 \u0437\u0430\u043b\u0435\u0436\u0430\u0442\u0438 \u0432\u0456\u0434 \u0437\u0430\u0432\u0434\u0430\u043d\u043d\u044f, \u0449\u043e \u0440\u043e\u0431\u0438\u0442\u044c Zero-Shot-CoT \u043c\u0435\u043d\u0448 \u0443\u0437\u0430\u0433\u0430\u043b\u044c\u043d\u0435\u043d\u0438\u043c, \u043d\u0456\u0436 \u0437\u0434\u0430\u0454\u0442\u044c\u0441\u044f \u043d\u0430 \u043f\u0435\u0440\u0448\u0438\u0439 \u043f\u043e\u0433\u043b\u044f\u0434."),(0,i.kt)("p",null,"\u0414\u043e \u0440\u0435\u0447\u0456, \u044f \u0432\u0438\u044f\u0432\u0438\u0432, \u0449\u043e \u0437\u0430\u043f\u0438\u0442\u0438 \u0432 \u0441\u0442\u0438\u043b\u0456 Zero-shot-CoT \u0456\u043d\u043e\u0434\u0456 \u0435\u0444\u0435\u043a\u0442\u0438\u0432\u043d\u0456 \u0434\u043b\u044f \u043f\u043e\u043a\u0440\u0430\u0449\u0435\u043d\u043d\u044f \u0442\u0440\u0438\u0432\u0430\u043b\u043e\u0441\u0442\u0456 \u0432\u0438\u043a\u043e\u043d\u0430\u043d\u043d\u044f \u0433\u0435\u043d\u0435\u0440\u0430\u0442\u0438\u0432\u043d\u0438\u0445 \u0437\u0430\u0432\u0434\u0430\u043d\u044c. \u041d\u0430\u043f\u0440\u0438\u043a\u043b\u0430\u0434, \u0440\u043e\u0437\u0433\u043b\u044f\u043d\u0435\u043c\u043e \u0441\u0442\u0430\u043d\u0434\u0430\u0440\u0442\u043d\u0438\u0439 \u0437\u0430\u043f\u0438\u0442 ",(0,i.kt)("inlineCode",{parentName:"p"},"Write a story about a frog and a mushroom who become friends.")," \u0414\u043e\u0434\u0430\u0432\u0430\u043d\u043d\u044f \u0441\u043b\u0456\u0432 ",(0,i.kt)("inlineCode",{parentName:"p"},"Let's think step by step.")," \u0434\u043e \u043a\u0456\u043d\u0446\u044f \u0446\u044c\u043e\u0433\u043e \u0437\u0430\u043f\u0438\u0442\u0443 \u043f\u0440\u0438\u0437\u0432\u043e\u0434\u0438\u0442\u044c \u0434\u043e \u043d\u0430\u0431\u0430\u0433\u0430\u0442\u043e \u0434\u043e\u0432\u0448\u043e\u0433\u043e \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043d\u043d\u044f."),(0,i.kt)("div",{className:"footnotes"},(0,i.kt)("hr",{parentName:"div"}),(0,i.kt)("ol",{parentName:"div"},(0,i.kt)("li",{parentName:"ol",id:"fn-1"},"Kojima, T., Gu, S. S., Reid, M., Matsuo, Y., & Iwasawa, Y. (2022). Large Language Models are Zero-Shot Reasoners.\n",(0,i.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")),(0,i.kt)("li",{parentName:"ol",id:"fn-2"},"Wei, J., Wang, X., Schuurmans, D., Bosma, M., Ichter, B., Xia, F., Chi, E., Le, Q., & Zhou, D. (2022). Chain of Thought Prompting Elicits Reasoning in Large Language Models.\n",(0,i.kt)("a",{parentName:"li",href:"#fnref-2",className:"footnote-backref"},"\u21a9")))))}b.isMDXComponent=!0}}]);