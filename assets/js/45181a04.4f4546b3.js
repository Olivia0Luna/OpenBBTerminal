"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[99535],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(r),m=a,_=d["".concat(s,".").concat(m)]||d[m]||u[m]||l;return r?n.createElement(_,o(o({ref:t},p),{},{components:r})):n.createElement(_,o({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var c=2;c<l;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},37709:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const l={title:"overview",description:"OpenBB Terminal Function"},o="overview",i={unversionedId:"reference/stocks/screener/overview",id:"reference/stocks/screener/overview",title:"overview",description:"OpenBB Terminal Function",source:"@site/content/terminal/reference/stocks/screener/overview.md",sourceDirName:"reference/stocks/screener",slug:"/reference/stocks/screener/overview",permalink:"/terminal/reference/stocks/screener/overview",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/reference/stocks/screener/overview.md",tags:[],version:"current",frontMatter:{title:"overview",description:"OpenBB Terminal Function"},sidebar:"tutorialSidebar",previous:{title:"historical",permalink:"/terminal/reference/stocks/screener/historical"},next:{title:"ownership",permalink:"/terminal/reference/stocks/screener/ownership"}},s={},c=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2}],p={toc:c};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"overview"},"overview"),(0,a.kt)("p",null,"Prints overview data of the companies that meet the pre-set filtering."),(0,a.kt)("h3",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"usage: overview [-p Desired preset.] [-l LIMIT] [-r] [-s SORT]\n")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"),(0,a.kt)("th",{parentName:"tr",align:null},"Optional"),(0,a.kt)("th",{parentName:"tr",align:null},"Choices"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"preset"),(0,a.kt)("td",{parentName:"tr",align:null},"Filter presets"),(0,a.kt)("td",{parentName:"tr",align:null},"top_gainers"),(0,a.kt)("td",{parentName:"tr",align:null},"True"),(0,a.kt)("td",{parentName:"tr",align:null},"cheap_dividend, top_performers_all, top_performers_healthcare, potential_reversals, simplistic_momentum_scanner_under_7dol, stocks_strong_support_levels, weak_support_and_top_performers, unusual_volume, bull_runs_over_10pct, modified_dreman, template, cheap_bottom_dividend, break_out_stocks, heavy_inst_ins, golden_cross, growth_stocks, value_stocks, sexy_year, 5pct_above_low, buffett_like, death_cross, golden_cross_penny, oversold_under_3dol, short_squeeze_scan, cheap_oversold, continued_momentum_scan, top_performers_tech, analyst_strong_buy, oversold_under_5dol, modified_neff, oversold, rosenwald_gtfo, news_scanner, recent_growth_and_support, rosenwald, undervalue, high_vol_and_low_debt, under_15dol_stocks, channel_up_and_low_debt_and_sma_50and200, top_gainers, top_losers, new_high, new_low, most_volatile, most_active, overbought, downgrades, upgrades, earnings_before, earnings_after, recent_insider_buying, recent_insider_selling, major_news, horizontal_sr, tl_resistance, tl_support, wedge_up, wedge_down, wedge, triangle_ascending, triangle_descending, channel_up, channel_down, channel, double_top, double_bottom, multiple_top, multiple_bottom, head_shoulders, head_shoulders_inverse")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"limit"),(0,a.kt)("td",{parentName:"tr",align:null},"Limit of stocks to print"),(0,a.kt)("td",{parentName:"tr",align:null},"10"),(0,a.kt)("td",{parentName:"tr",align:null},"True"),(0,a.kt)("td",{parentName:"tr",align:null},"None")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"reverse"),(0,a.kt)("td",{parentName:"tr",align:null},"Data is sorted in descending order by default. Reverse flag will sort it in an ascending way. Only works when raw data is displayed."),(0,a.kt)("td",{parentName:"tr",align:null},"False"),(0,a.kt)("td",{parentName:"tr",align:null},"True"),(0,a.kt)("td",{parentName:"tr",align:null},"None")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"sort"),(0,a.kt)("td",{parentName:"tr",align:null},"Sort elements of the table."),(0,a.kt)("td",{parentName:"tr",align:null},"Ticker"),(0,a.kt)("td",{parentName:"tr",align:null},"True"),(0,a.kt)("td",{parentName:"tr",align:null},"ticker, company, sector, industry, country, marketcap, p/e, price, change, volume")))),(0,a.kt)("hr",null))}u.isMDXComponent=!0}}]);