"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[50838],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),p=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=p(r),m=a,y=d["".concat(i,".").concat(m)]||d[m]||s[m]||l;return r?n.createElement(y,o(o({ref:t},u),{},{components:r})):n.createElement(y,o({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=d;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var p=2;p<l;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},92764:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>s,frontMatter:()=>l,metadata:()=>c,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const l={title:"dex",description:"OpenBB Terminal Function"},o="dex",c={unversionedId:"reference/cryptocurrency/discovery/dex",id:"reference/cryptocurrency/discovery/dex",title:"dex",description:"OpenBB Terminal Function",source:"@site/content/terminal/reference/cryptocurrency/discovery/dex.md",sourceDirName:"reference/cryptocurrency/discovery",slug:"/reference/cryptocurrency/discovery/dex",permalink:"/terminal/reference/cryptocurrency/discovery/dex",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/reference/cryptocurrency/discovery/dex.md",tags:[],version:"current",frontMatter:{title:"dex",description:"OpenBB Terminal Function"},sidebar:"tutorialSidebar",previous:{title:"dapps",permalink:"/terminal/reference/cryptocurrency/discovery/dapps"},next:{title:"gainers",permalink:"/terminal/reference/cryptocurrency/discovery/gainers"}},i={},p=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2}],u={toc:p};function s(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"dex"},"dex"),(0,a.kt)("p",null,"Shows top decentralized exchanges ","[Source: https://dappradar.com/]"," Accepts --sort {Name,Daily Users,Daily Volume ","[$]","} to sort by column"),(0,a.kt)("h3",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"usage: dex [-l LIMIT] [-s SORTBY [SORTBY ...]]\n")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"),(0,a.kt)("th",{parentName:"tr",align:null},"Optional"),(0,a.kt)("th",{parentName:"tr",align:null},"Choices"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"limit"),(0,a.kt)("td",{parentName:"tr",align:null},"Number of records to display"),(0,a.kt)("td",{parentName:"tr",align:null},"15"),(0,a.kt)("td",{parentName:"tr",align:null},"True"),(0,a.kt)("td",{parentName:"tr",align:null},"None")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"sortby"),(0,a.kt)("td",{parentName:"tr",align:null},"Sort by given column. Default: Daily Volume ","[$]"),(0,a.kt)("td",{parentName:"tr",align:null},"Daily Volume ","[$]"),(0,a.kt)("td",{parentName:"tr",align:null},"True"),(0,a.kt)("td",{parentName:"tr",align:null},"Name, Category, Daily Users, Daily Volume ","[$]")))),(0,a.kt)("hr",null))}s.isMDXComponent=!0}}]);