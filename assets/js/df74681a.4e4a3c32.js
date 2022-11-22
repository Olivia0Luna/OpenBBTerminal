"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[72366],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),c=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(a),m=n,f=p["".concat(l,".").concat(m)]||p[m]||u[m]||i;return a?r.createElement(f,o(o({ref:t},d),{},{components:a})):r.createElement(f,o({ref:t},d))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var c=2;c<i;c++)o[c]=a[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}p.displayName="MDXCreateElement"},14754:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=a(87462),n=(a(67294),a(3905));const i={title:"fraud",description:"OpenBB Terminal Function"},o="fraud",s={unversionedId:"reference/stocks/fundamental analysis/fraud",id:"reference/stocks/fundamental analysis/fraud",title:"fraud",description:"OpenBB Terminal Function",source:"@site/content/terminal/reference/stocks/fundamental analysis/fraud.md",sourceDirName:"reference/stocks/fundamental analysis",slug:"/reference/stocks/fundamental analysis/fraud",permalink:"/terminal/reference/stocks/fundamental analysis/fraud",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/reference/stocks/fundamental analysis/fraud.md",tags:[],version:"current",frontMatter:{title:"fraud",description:"OpenBB Terminal Function"},sidebar:"tutorialSidebar",previous:{title:"enterprise",permalink:"/terminal/reference/stocks/fundamental analysis/enterprise"},next:{title:"growth",permalink:"/terminal/reference/stocks/fundamental analysis/growth"}},l={},c=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2}],d={toc:c};function u(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"fraud"},"fraud"),(0,n.kt)("p",null,"M-score: ------------------------------------------------ The Beneish model is a statistical model that uses financial ratios calculated with accounting data of a specific company in order to check if it is likely (high probability) that the reported earnings of the company have been manipulated. A score of -5 to -2.22 indicated a low chance of fraud, a score of -2.22 to -1.78 indicates a moderate change of fraud, and a score above -1.78 indicated a high chance of fraud.","[Source: Wikipedia]"," DSRI: Days Sales in Receivables Index gauges whether receivables and revenue are out of balance, a large number is expected to be associated with a higher likelihood that revenues and earnings are overstated. GMI: Gross Margin Index shows if gross margins are deteriorating. Research suggests that firms with worsening gross margin are more likely to engage in earnings management, therefore there should be a positive correlation between GMI and probability of earnings management. AQI: Asset Quality Index measures the proportion of assets where potential benefit is less certain. A positive relation between AQI and earnings manipulation is expected. SGI: Sales Growth Index shows the amount of growth companies are having. Higher growth companies are more likely to commit fraud so there should be a positive relation between SGI and earnings management. DEPI: Depreciation Index is the ratio for the rate of depreciation. A DEPI greater than 1 shows that the depreciation rate has slowed and is positively correlated with earnings management. SGAI: Sales General and Administrative Expenses Index measures the change in SG&A over sales. There should be a positive relationship between SGAI and earnings management. LVGI: Leverage Index represents change in leverage. A LVGI greater than one indicates a lower change of fraud. TATA: Total Accruals to Total Assets is a proxy for the extent that cash underlies earnings. A higher number is associated with a higher likelihood of manipulation. Z-score: ------------------------------------------------ The Zmijewski Score is a bankruptcy model used to predict a firm's bankruptcy in two years. The ratio uses in the Zmijewski score were determined by probit analysis (think of probit as probability unit). In this case, scores less than .5 represent a higher probability of default. One of the criticisms that Zmijewski made was that other bankruptcy scoring models oversampled distressed firms and favored situations with more complete data.","[Source: YCharts]"," McKee-score: ------------------------------------------------ The McKee Score is a bankruptcy model used to predict a firm's bankruptcy in one yearIt looks at a company's size, profitability, and liquidity to determine the probability.This model is 80% accurate in predicting bankruptcy."),(0,n.kt)("h3",{id:"usage"},"Usage"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"usage: fraud [-e] [-d]\n")),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"parameters"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"Default"),(0,n.kt)("th",{parentName:"tr",align:null},"Optional"),(0,n.kt)("th",{parentName:"tr",align:null},"Choices"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"exp"),(0,n.kt)("td",{parentName:"tr",align:null},"Shows an explanation for the metrics"),(0,n.kt)("td",{parentName:"tr",align:null},"False"),(0,n.kt)("td",{parentName:"tr",align:null},"True"),(0,n.kt)("td",{parentName:"tr",align:null},"None")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"detail"),(0,n.kt)("td",{parentName:"tr",align:null},"Shows the details for calculating the mscore"),(0,n.kt)("td",{parentName:"tr",align:null},"False"),(0,n.kt)("td",{parentName:"tr",align:null},"True"),(0,n.kt)("td",{parentName:"tr",align:null},"None")))),(0,n.kt)("hr",null))}u.isMDXComponent=!0}}]);