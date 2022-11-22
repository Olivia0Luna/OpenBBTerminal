"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[69620],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),k=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=k(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),s=k(r),m=a,d=s["".concat(c,".").concat(m)]||s[m]||p[m]||l;return r?n.createElement(d,i(i({ref:t},u),{},{components:r})):n.createElement(d,i({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=s;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var k=2;k<l;k++)i[k]=r[k];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},48910:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>o,toc:()=>k});var n=r(87462),a=(r(67294),r(3905));const l={title:"ch",description:"OpenBB Terminal Function"},i="ch",o={unversionedId:"reference/cryptocurrency/overview/ch",id:"reference/cryptocurrency/overview/ch",title:"ch",description:"OpenBB Terminal Function",source:"@site/content/terminal/reference/cryptocurrency/overview/ch.md",sourceDirName:"reference/cryptocurrency/overview",slug:"/reference/cryptocurrency/overview/ch",permalink:"/terminal/reference/cryptocurrency/overview/ch",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/reference/cryptocurrency/overview/ch.md",tags:[],version:"current",frontMatter:{title:"ch",description:"OpenBB Terminal Function"},sidebar:"tutorialSidebar",previous:{title:"categories",permalink:"/terminal/reference/cryptocurrency/overview/categories"},next:{title:"contracts",permalink:"/terminal/reference/cryptocurrency/overview/contracts"}},c={},k=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2}],u={toc:k};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"ch"},"ch"),(0,a.kt)("p",null,"Display list of major crypto-related hacks ","[Source: https://rekt.news]"," Can be sorted by {Platform,Date,Amount ","[$]",",Audit,Slug,URL} with --sortby and reverse the display order with --reverse Show only N elements with --limit Accepts --slug or -s to check individual crypto hack (e.g., -s polynetwork-rekt)"),(0,a.kt)("h3",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"usage: ch [-l LIMIT] [--sortby {Platform,Date,Amount [$],Audit,Slug,URL} [{Platform,Date,Amount [$],Audit,Slug,URL} ...]] [-r] [-s SORTBY]\n")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"),(0,a.kt)("th",{parentName:"tr",align:null},"Optional"),(0,a.kt)("th",{parentName:"tr",align:null},"Choices"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"limit"),(0,a.kt)("td",{parentName:"tr",align:null},"Display N items"),(0,a.kt)("td",{parentName:"tr",align:null},"15"),(0,a.kt)("td",{parentName:"tr",align:null},"True"),(0,a.kt)("td",{parentName:"tr",align:null},"None")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"sortby"),(0,a.kt)("td",{parentName:"tr",align:null},"Sort by given column. Default: Amount ","[$]"),(0,a.kt)("td",{parentName:"tr",align:null},"Amount ","[$]"),(0,a.kt)("td",{parentName:"tr",align:null},"True"),(0,a.kt)("td",{parentName:"tr",align:null},"Platform, Date, Amount ","[$]",", Audit, Slug, URL")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"reverse"),(0,a.kt)("td",{parentName:"tr",align:null},"Data is sorted in descending order by default. Reverse flag will sort it in an ascending way. Only works when raw data is displayed."),(0,a.kt)("td",{parentName:"tr",align:null},"False"),(0,a.kt)("td",{parentName:"tr",align:null},"True"),(0,a.kt)("td",{parentName:"tr",align:null},"None")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"slug"),(0,a.kt)("td",{parentName:"tr",align:null},"Slug to check crypto hack (e.g., polynetwork-rekt)"),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"True"),(0,a.kt)("td",{parentName:"tr",align:null},"ronin-rekt, polynetwork-rekt, bnb-bridge-rekt, sbf-mask-off, wormhole-rekt, bitmart-rekt, nomad-rekt, beanstalk-rekt, wintermute-rekt-2, compound-rekt, vulcan-forged-rekt, cream-rekt-2, badger-rekt, mango-markets-rekt, harmony-rekt, mirror-rekt, fei-rari-rekt, qubit-rekt, ascendex-rekt, easyfi-rekt, uranium-rekt, bzx-rekt, cashio-rekt, pancakebunny-rekt, epic-hack-homie, alpha-finance-rekt, veefinance-rekt, cryptocom-rekt, meerkat-finance-bsc-rekt, monox-rekt, spartan-rekt, grim-finance-rekt, deribit-rekt, wintermute-rekt, stablemagnet-rekt, paid-rekt, harvest-finance-rekt, xtoken-rekt, elephant-money-rekt, venus-blizz-rekt, transit-swap-rekt, popsicle-rekt, pickle-finance-rekt, cream-rekt, snowdog-rekt, bearn-rekt, indexed-finance-rekt, teamfinance-rekt, inverse-finance-rekt, eminence-rekt-in-prod, furucombo-rekt, deus-dao-rekt-2, deathbed-confessions-c3pr, agave-hundred-rekt, saddle-finance-rekt2, value-rekt3, yearn-rekt, dego-finance-rekt, arbix-rekt, rari-capital-rekt, value-rekt2, cover-rekt, punkprotocol-rekt, crema-finance-rekt, superfluid-rekt, moola-markets-rekt, visor-finance-rekt, thorchain-rekt2, hack-epidemic, lcx-rekt, anyswap-rekt, warp-finance-rekt, meter-rekt, burgerswap-rekt, value-defi-rekt, alchemix-rekt, belt-rekt, audius-rekt, bondly-rekt, inverse-rekt2, roll-rekt, unsolved-mystery, thorchain-rekt, xtoken-rekt-x2, 11-rekt, chainswap-rekt, voltage-finance-rekt, daomaker-rekt, nirvana-rekt, skyward-rekt, jaypegs-automart-rekt, fortress-rekt, deus-dao-rekt, pancakebunny2-rekt, templedao-rekt, gymnet-rekt, revest-finance-rekt, madmeerkat-finance-rekt, au-dodo-rekt, akropolis-rekt, bent-finance, 8ight-finance-rekt, acala-network-rekt, levyathan-rekt, treasure-dao-rekt, the-big-combo, sovryn-rekt, autoshark-rekt, merlinlabs-rekt, curve-finance-rekt, merlin2-rekt, merlin3-rekt, saddle-finance-rekt, safedollar-rekt")))),(0,a.kt)("hr",null))}p.isMDXComponent=!0}}]);