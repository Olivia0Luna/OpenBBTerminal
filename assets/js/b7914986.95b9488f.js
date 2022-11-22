"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[35399],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(n),d=a,f=u["".concat(s,".").concat(d)]||u[d]||m[d]||o;return n?r.createElement(f,l(l({ref:t},c),{},{components:n})):r.createElement(f,l({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},77406:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const o={title:"ols",description:"OpenBB SDK Function"},l="ols",i={unversionedId:"reference/econometrics/ols",id:"reference/econometrics/ols",title:"ols",description:"OpenBB SDK Function",source:"@site/content/sdk/reference/econometrics/ols.md",sourceDirName:"reference/econometrics",slug:"/reference/econometrics/ols",permalink:"/sdk/reference/econometrics/ols",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/sdk/reference/econometrics/ols.md",tags:[],version:"current",frontMatter:{title:"ols",description:"OpenBB SDK Function"},sidebar:"tutorialSidebar",previous:{title:"norm",permalink:"/sdk/reference/econometrics/norm"},next:{title:"options",permalink:"/sdk/reference/econometrics/options"}},s={},p=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2}],c={toc:p};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"ols"},"ols"),(0,a.kt)("p",null,"Performs an OLS regression on timeseries data. ","[Source: Statsmodels]"),(0,a.kt)("p",null,"Source Code: [",(0,a.kt)("a",{parentName:"p",href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/econometrics/regression_model.py#L178"},"link"),"]"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"openbb.econometrics.ols(Y: pd.DataFrame, X: pd.DataFrame)\n")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"),(0,a.kt)("th",{parentName:"tr",align:null},"Optional"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Y"),(0,a.kt)("td",{parentName:"tr",align:null},"pd.DataFrame"),(0,a.kt)("td",{parentName:"tr",align:null},"Dependent variable series."),(0,a.kt)("td",{parentName:"tr",align:null},"None"),(0,a.kt)("td",{parentName:"tr",align:null},"False")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"X"),(0,a.kt)("td",{parentName:"tr",align:null},"pd.DataFrame"),(0,a.kt)("td",{parentName:"tr",align:null},"Dataframe of independent variables series."),(0,a.kt)("td",{parentName:"tr",align:null},"None"),(0,a.kt)("td",{parentName:"tr",align:null},"False")))),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"returns"},"Returns"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"statsmodels.regression.linear_model.RegressionResultsWrapper"),(0,a.kt)("td",{parentName:"tr",align:null},"Regression model wrapper from statsmodels.")))),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("p",null,"SDK Snippet:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'import openbb_terminal.sdk as openbb\ndf = openbb.econometrics.load("wage_panel")\nOLS_model = openbb.econometrics.OLS(df["lwage"], df[["educ", "exper", "expersq"]])\nprint(OLS_model.summary())`\n')),(0,a.kt)("p",null,"Results:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"                             OLS Regression Results\n=======================================================================================\nDep. Variable:                  lwage   R-squared (uncentered):                   0.920\nModel:                            OLS   Adj. R-squared (uncentered):              0.919\nMethod:                 Least Squares   F-statistic:                          1.659e+04\nDate:                Thu, 10 Nov 2022   Prob (F-statistic):                        0.00\nTime:                        15:28:11   Log-Likelihood:                         -3091.3\nNo. Observations:                4360   AIC:                                      6189.\nDf Residuals:                    4357   BIC:                                      6208.\nDf Model:                           3\nCovariance Type:            nonrobust\n==============================================================================\n                coef    std err          t      P>|t|      [0.025      0.975]\n------------------------------------------------------------------------------\neduc           0.0986      0.002     39.879      0.000       0.094       0.103\nexper          0.1018      0.009     10.737      0.000       0.083       0.120\nexpersq       -0.0034      0.001     -4.894      0.000      -0.005      -0.002\n==============================================================================\nOmnibus:                     1249.642   Durbin-Watson:                   0.954\nProb(Omnibus):                  0.000   Jarque-Bera (JB):             9627.436\nSkew:                          -1.152   Prob(JB):                         0.00\nKurtosis:                       9.905   Cond. No.                         86.4\n==============================================================================\nNotes:\n[1] R\xb2 is computed without centering (uncentered) since the model does not contain a constant.\n[2] Standard Errors assume that the covariance matrix of the errors is correctly specified.\n")),(0,a.kt)("hr",null))}m.isMDXComponent=!0}}]);