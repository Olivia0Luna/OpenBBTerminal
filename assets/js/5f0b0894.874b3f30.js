"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[34470],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,f=d["".concat(s,".").concat(m)]||d[m]||c[m]||l;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var u=2;u<l;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},44885:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var r=n(87462),a=(n(67294),n(3905));const l={title:"FAQ",sidebar_position:3},o="FAQ",i={unversionedId:"quickstart/faq",id:"quickstart/faq",title:"FAQ",description:"Where does the data comes from?",source:"@site/content/sdk/quickstart/faq.md",sourceDirName:"quickstart",slug:"/quickstart/faq",permalink:"/sdk/quickstart/faq",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/sdk/quickstart/faq.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"FAQ",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Installation",permalink:"/sdk/quickstart/installation"},next:{title:"Basics",permalink:"/sdk/guides/basics/"}},s={},u=[],p={toc:u};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"faq"},"FAQ"),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Where does the data comes from?"),(0,a.kt)("p",null,(0,a.kt)("p",null,"OpenBB does not provide any data. OpenBB is a data aggregator that connects to\nmultiple data providers and provides a unified API to access the data."))),(0,a.kt)("details",null,(0,a.kt)("summary",null,"What programs do I need to allow for Windows Firewall?"),(0,a.kt)("p",null,(0,a.kt)("p",null,"Windows Firewall will need to allow the following applications through (if not already):"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"BranchCache"),(0,a.kt)("li",{parentName:"ul"},"Hyper-V"),(0,a.kt)("li",{parentName:"ul"},"VcXsrv"),(0,a.kt)("li",{parentName:"ul"},"Windows Terminal")),(0,a.kt)("p",null,'From the Windows Security menu, click on the Firewall & Network Protection tab, then click on "Allow an app through firewall". If the applications below are not allowed to communicate through Windows Defender Firewall, change the settings to allow.'))),(0,a.kt)("details",null,(0,a.kt)("summary",null,"In what Operating Systems can I run OpenBB SDK?"),(0,a.kt)("p",null,(0,a.kt)("p",null,"OpenBB SDK is compatible with Windows, Linux, and Mac OS. Check the\n",(0,a.kt)("a",{parentName:"p",href:"/sdk/getstarted/installation"},"installation guide")," and ",(0,a.kt)("a",{parentName:"p",href:"/sdk/getstarted/requirements"},"requirements outline")," for more details."))),(0,a.kt)("details",null,(0,a.kt)("summary",null,"How much hard drive space is required?"),(0,a.kt)("p",null,(0,a.kt)("p",null,"An installation will use approximately 4GB of space."))),(0,a.kt)("details",null,(0,a.kt)("summary",null,"How do I launch Jupyter Lab for use with the OpenBB SDK?"),(0,a.kt)("p",null,(0,a.kt)("p",null,"From the command line, with the environment active, and from the root of the local installation folder, enter: ",(0,a.kt)("inlineCode",{parentName:"p"},"jupyter lab"),". A browser window will launch."))),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Why is data from today missing when I use the load function?"),(0,a.kt)("p",null,(0,a.kt)("p",null,"By default, the load function requests end-of-day daily data and is not included until the EOD summary has been published. The current day's data is considered intraday and is loaded when the ",(0,a.kt)("inlineCode",{parentName:"p"},"interval")," argument is present."))),(0,a.kt)("details",null,(0,a.kt)("summary",null,"How do I report a bug?"),(0,a.kt)("p",null,(0,a.kt)("p",null,"First, search the open issues for another report. If one already exists, attach any relevant information and screenshots as a comment. If one does not exist, start one with this ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/OpenBB-finance/OpenBBTerminal/issues/new?assignees=&labels=type%3Abug&template=bug_report.md&title=%5BBug%5D"},"link")))),(0,a.kt)("details",null,(0,a.kt)("summary",null,"How can I get help with OpenBB SDK?"),(0,a.kt)("p",null,(0,a.kt)("p",null,"You can get help with OpenBB SDK by joining our\n",(0,a.kt)("a",{parentName:"p",href:"https://openbb.co/discord"},"Discord server")," or contact us in our support form\n",(0,a.kt)("a",{parentName:"p",href:"https://openbb.co/support"},"here"),"."))))}c.isMDXComponent=!0}}]);