"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[47708],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>c});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),m=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=m(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=m(n),c=r,h=d["".concat(s,".").concat(c)]||d[c]||p[c]||l;return n?a.createElement(h,i(i({ref:t},u),{},{components:n})):a.createElement(h,i({ref:t},u))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var m=2;m<l;m++)i[m]=n[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},74982:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>o,toc:()=>m});var a=n(87462),r=(n(67294),n(3905));const l={title:"Introduction to the Behavioural Analysis",keywords:["stocks","behaviour","analysis","ba","headlines","snews","wsb","watchlist","popular","spac","trending","stalking","bullbear","messages","inter","sentiment","Google","Twitter","Reddit","Stocktwits","SentimentInvestor","Cramer","Jim","mentions","regions","interest","queries","rise","trend","hist","jcrd","jctr"],date:"2022-05-23",type:"guides",status:"publish",excerpt:"An Introduction to the Behavioural Analysis menu, within the Stocks menu."},i=void 0,o={unversionedId:"guides/common/ba",id:"guides/common/ba",title:"Introduction to the Behavioural Analysis",description:"The Behavioural Analysis menu offers the user tools for gauging the overall",source:"@site/content/terminal/guides/common/ba.md",sourceDirName:"guides/common",slug:"/guides/common/ba",permalink:"/terminal/guides/common/ba",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/guides/common/ba.md",tags:[],version:"current",frontMatter:{title:"Introduction to the Behavioural Analysis",keywords:["stocks","behaviour","analysis","ba","headlines","snews","wsb","watchlist","popular","spac","trending","stalking","bullbear","messages","inter","sentiment","Google","Twitter","Reddit","Stocktwits","SentimentInvestor","Cramer","Jim","mentions","regions","interest","queries","rise","trend","hist","jcrd","jctr"],date:"2022-05-23",type:"guides",status:"publish",excerpt:"An Introduction to the Behavioural Analysis menu, within the Stocks menu."},sidebar:"tutorialSidebar",previous:{title:"Common Menus",permalink:"/terminal/common-features"},next:{title:"Introduction to the Quantitative Analysis Menu",permalink:"/terminal/guides/common/qa"}},s={},m=[{value:"How to use",id:"how-to-use",level:2},{value:"Examples",id:"examples",level:2}],u={toc:m};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The Behavioural Analysis menu offers the user tools for gauging the overall\npublic sentiment of a company online. The complexity of the tools range from\nmessage board scrapers to deep learning algorithms for financial analysis and\nprediction. Sentiment is particularly useful for momentum trading strategies,\ndiscovery, and general fundamental research. Navigate into the menu from the"),(0,r.kt)("a",{href:"https://openbb-finance.github.io/OpenBBTerminal/terminal/stocks/",target:"_blank"},"Stocks"),"menu by entering, `ba`; or, using absolute paths from anywhere in the Terminal: `/stocks/ba`",(0,r.kt)("img",{alt:"The Behavioural Analysis submenu",src:"https://user-images.githubusercontent.com/46355364/170242317-ae66ed0b-f2e8-4304-9231-ea833d01e0e2.png"}),(0,r.kt)("h2",{id:"how-to-use"},"How to use"),(0,r.kt)("p",null,"The commands with text, representing"),(0,r.kt)("a",{href:"https://openbb-finance.github.io/OpenBBTerminal/#structure-of-the-openbb-terminal",target:"_blank"},"commands"),", do not require a ticker, faded commands will turn light blue when there is a ticker loaded.",(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"(\ud83e\udd8b) /stocks/ba/ $ load gme\n\nLoading Daily GME stock with starting period 2019-05-20 for analysis.\n\nDatetime: 2022 May 23 12:13\nTimezone: America/New_York\nCurrency: USD\nMarket:   CLOSED\nCompany:  GameStop Corporation\n\n(\ud83e\udd8b) /stocks/ba/ $ ?\n")),(0,r.kt)("img",{alt:"The Behavioural Analysis Menu with a loaded ticker",src:"https://user-images.githubusercontent.com/46355364/170242757-3e29f690-7d29-4fe2-9e14-889c43e3142e.png"}),(0,r.kt)("p",null,"Some data sources will require a valid API key, which can be obtained for free\nand then set using the Keys menu. To use all the features in this menu, obtain\nfree API keys from these providers:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{href:"https://finnhub.io/",target:"_blank"},"Finnhub"),(0,r.kt)("br",null)),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{href:"https://developer.twitter.com/",target:"_blank"},"Twitter"),(0,r.kt)("br",null)),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{href:"https://old.reddit.com/prefs/apps/",target:"_blank"},"Reddit"),(0,r.kt)("br",null)),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{href:"https://sentimentinvestor.com/",target:"_blank"},"Sentiment Investor"),(0,r.kt)("br",null))),(0,r.kt)("p",null,"See the"),(0,r.kt)("a",{href:"https://openbb-finance.github.io/OpenBBTerminal/terminal/#accessing-other-sources-of-data-via-api-keys",target:"_blank"},"Getting Started Guide")," for help setting API keys in the Terminal.",(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("p",null,"As with every command, using the ",(0,r.kt)("inlineCode",{parentName:"p"},"-h")," argument displays the help dialogue.\nRunning the"),(0,r.kt)("a",{href:"https://openbb-finance.github.io/OpenBBTerminal/terminal/common/behavioural_analysis/headlines/",target:"_blank"},"headlines"),"command returns the following:",(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"(\ud83e\udd8b) /stocks/ba/ $ headlines\n")),(0,r.kt)("img",{alt:"headlines",src:"https://user-images.githubusercontent.com/46355364/170244924-ffe6cd15-8d17-4690-bf44-d2b496dbc310.png"}),(0,r.kt)("p",null,"Alternatively, running the"),(0,r.kt)("a",{href:"https://openbb-finance.github.io/OpenBBTerminal/terminal/common/behavioural_analysis/snews/",target:"_blank"},"snews"),"command returns the following:",(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"(\ud83e\udd8b) /stocks/ba/ $ snews\n")),(0,r.kt)("img",{alt:"headlines",src:"https://user-images.githubusercontent.com/46355364/170243359-9d1302f0-3394-4e05-8360-0e59a1cb6e54.png"}),(0,r.kt)("p",null,"The Reddit functions will return popular tickers and posts, or measure sentiment\nfor a particular stock. An example would be by looking at the threads that pop\nup on"),(0,r.kt)("a",{href:"https://www.reddit.com/r/wallstreetbets/",target:"_blank"},"/r/wallstreetbets"),", famous for the",(0,r.kt)("a",{href:"https://en.wikipedia.org/wiki/R/wallstreetbets",target:"_blank"},"GameStop short squeeze"),":",(0,r.kt)("p",null,"(\ud83e\udd8b) /stocks/ba/ $ wsb"),(0,r.kt)("p",null,"2022-05-23 10:00:12 - Daily Discussion Thread for May 23, 2022\n",(0,r.kt)("a",{parentName:"p",href:"https://old.reddit.com/r/wallstreetbets/comments/uvwq8z/daily_discussion_thread_for_may_23_2022/"},"https://old.reddit.com/r/wallstreetbets/comments/uvwq8z/daily_discussion_thread_for_may_23_2022/")),(0,r.kt)("p",null,"Reddit Submission"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Subreddit"),(0,r.kt)("th",{parentName:"tr",align:null},"Flair"),(0,r.kt)("th",{parentName:"tr",align:null},"Score"),(0,r.kt)("th",{parentName:"tr",align:null},"# Comments"),(0,r.kt)("th",{parentName:"tr",align:null},"Upvote %"),(0,r.kt)("th",{parentName:"tr",align:null},"Awards"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"wallstreetbets"),(0,r.kt)("td",{parentName:"tr",align:null},"Daily Discussion"),(0,r.kt)("td",{parentName:"tr",align:null},"195"),(0,r.kt)("td",{parentName:"tr",align:null},"9168"),(0,r.kt)("td",{parentName:"tr",align:null},"88%"),(0,r.kt)("td",{parentName:"tr",align:null},"3 Silver")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"2 Helpful")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"1 Wholesome")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"1 Got the")))),(0,r.kt)("p",null,"2022-05-21 11:34:21 - Most Anticipated Earnings Releases for the week beginning\nMay 23rd, 2022\n",(0,r.kt)("a",{parentName:"p",href:"https://old.reddit.com/r/wallstreetbets/comments/uul9fs/most_anticipated_earnings_releases_for_the_week/"},"https://old.reddit.com/r/wallstreetbets/comments/uul9fs/most_anticipated_earnings_releases_for_the_week/")),(0,r.kt)("p",null,"Reddit Submission"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Subreddit"),(0,r.kt)("th",{parentName:"tr",align:null},"Flair"),(0,r.kt)("th",{parentName:"tr",align:null},"Score"),(0,r.kt)("th",{parentName:"tr",align:null},"# Comments"),(0,r.kt)("th",{parentName:"tr",align:null},"Upvote %"),(0,r.kt)("th",{parentName:"tr",align:null},"Awards"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"wallstreetbets"),(0,r.kt)("td",{parentName:"tr",align:null},"Earnings Thread"),(0,r.kt)("td",{parentName:"tr",align:null},"960"),(0,r.kt)("td",{parentName:"tr",align:null},"1325"),(0,r.kt)("td",{parentName:"tr",align:null},"97%"),(0,r.kt)("td",{parentName:"tr",align:null},"1 Silver")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"5 Helpful")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"3 Wholesome")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"1 Take My Energy")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"1 Sne")))),(0,r.kt)("p",null,"The Behavioural Analysis menu also has the ability to scan for sentiment on\nmultiple platforms including Twitter and Google with"),(0,r.kt)("a",{href:"https://openbb-finance.github.io/OpenBBTerminal/terminal/common/behavioural_analysis/sentiment/",target:"_blank"},"sentiment"),",",(0,r.kt)("a",{href:"https://openbb-finance.github.io/OpenBBTerminal/terminal/common/behavioural_analysis/infer/",target:"_blank"},"infer"),"and",(0,r.kt)("a",{href:"https://openbb-finance.github.io/OpenBBTerminal/terminal/common/behavioural_analysis/queries/",target:"_blank"},"queries"),".",(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"(\ud83e\udd8b) /stocks/ba/ $ sentiment -c\nFrom 2022-05-23 retrieving 360 tweets (15 tweets/hour)\nFrom 2022-05-22 retrieving 360 tweets (15 tweets/hour)\nFrom 2022-05-21 retrieving 360 tweets (15 tweets/hour)\nFrom 2022-05-20 retrieving 360 tweets (15 tweets/hour)\nFrom 2022-05-19 retrieving 360 tweets (15 tweets/hour)\nFrom 2022-05-18 retrieving 360 tweets (15 tweets/hour)\nFrom 2022-05-17 retrieving 360 tweets (15 tweets/hour)\n\n(\ud83e\udd8b) /stocks/ba/ $ infer\nFrom: 2022-05-23 18:21:12\nTo:   2022-05-23 18:30:36\n100 tweets were analyzed.\nFrequency of approx 1 tweet every 6 seconds.\nThe summed compound sentiment of GME is: 18.42\nThe average compound sentiment of GME is: 0.18\nOf the last 100 tweets, 41.00 % had a higher positive sentiment\nOf the last 100 tweets, 19.00 % had a higher negative sentiment\n\n(\ud83e\udd8b) /stocks/ba/ $ queries\n\n Top GME's related queries\n\n| query           | value |\n|-----------------|-------|\n| stock gme       | 100%  |\n| amc             | 29%   |\n| amc stock       | 24%   |\n| gme price       | 23%   |\n| gme stock price | 14%   |\n| gme share       | 7%    |\n| gme share price | 6%    |\n| reddit          | 6%    |\n| gme reddit      | 6%    |\n| bb              | 5%    |\n")),(0,r.kt)("p",null,"The"),(0,r.kt)("a",{href:"https://openbb-finance.github.io/OpenBBTerminal/terminal/common/behavioural_analysis/sentiment/",target:"_blank"},"sentiment"),"command returns the following:",(0,r.kt)("img",{alt:"sentiment",src:"https://user-images.githubusercontent.com/46355364/170243539-1ea3fc6a-d7ec-4991-a6bb-ed5879753328.png"}),(0,r.kt)("p",null,"More advanced techniques can also be applied by using tools from"),(0,r.kt)("a",{href:"https://sentimentinvestor.com",target:"_blank"},"Sentiment Investor"),"that analyzes millions of messages to show the most talked about stocks by hour. This has the ability to show the most trending tickers with",(0,r.kt)("a",{href:"https://openbb-finance.github.io/OpenBBTerminal/terminal/common/behavioural_analysis/trend/",target:"_blank"},"trend"),"and historical sentiment data with",(0,r.kt)("a",{href:"https://openbb-finance.github.io/OpenBBTerminal/terminal/common/behavioural_analysis/hist/",target:"_blank"},"hist"),".",(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"(\ud83e\udd8b) /stocks/ba/ $ trend\n\nMost trending stocks at 2022-05-23 00:00\n\n| TICKER | TOTAL | LIKES  | RHI  | AHI  |\n|--------|-------|--------|------|------|\n| SPY    | 89.00 | 43.00  | 1.22 | 1.26 |\n| AMC    | 80.00 | 155.00 | 1.07 | 1.18 |\n| TSLA   | 80.00 | 78.00  | 1.07 | 1.34 |\n| BTC    | 62.00 | 74.00  | 1.14 | 1.09 |\n| NIO    | 50.00 | 14.00  | 1.17 | 1.15 |\n| AAPL   | 28.00 | 4.00   | 0.66 | 0.75 |\n| AMD    | 26.00 | 59.00  | 0.57 | 0.61 |\n| NVAX   | 13.00 | 4.00   | 0.47 | 0.40 |\n| NVDA   | 12.00 | 11.00  | 0.45 | 0.47 |\n| DIS    | 12.00 | 1.00   | 0.69 | 0.44 |\n\n\n(\ud83e\udd8b) /stocks/ba/ $ hist -s 2022-05-01\n")),(0,r.kt)("a",{target:"_blank",href:"https://user-images.githubusercontent.com/46355364/170243719-fccf414b-3a89-4776-88de-e30f4eb34f89.png"},(0,r.kt)("img",{alt:"hist",src:"https://user-images.githubusercontent.com/46355364/170243719-fccf414b-3a89-4776-88de-e30f4eb34f89.png"})),(0,r.kt)("p",null,"Inspired by the Twitter user,"),(0,r.kt)("a",{href:"https://twitter.com/CramerTracker",target:"_blank"},"@cramertracker"),", the final two features follow (CNBC Talking Head) Jim Cramer stock recommendations as satire that rings true.",(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"(\ud83e\udd8b) /stocks/ba/ $ jcdr\n\nJim Cramer Recommendations for 05/19\n\n\n| Company                | Symbol | Price  | LastPrice | Change (%) | Recommendation |\n|------------------------|--------|--------|-----------|------------|----------------|\n| Apple                  | AAPL   | 137.35 | 142.38    | 3.53       | Buy            |\n| AeroVironment          | AVAV   | 85.35  | 85.49     | 0.16       | Buy            |\n| Alibaba                | BABA   | 87.69  | 87.04     | -0.75      | Sell           |\n| Constellation Energy   | CEG    | 57.23  | 56.92     | -0.54      | Buy            |\n| Costco                 | COST   | 422.93 | 427.93    | 1.17       | Buy            |\n| DraftKings             | DKNG   | 14.15  | 13.89     | -1.87      | Buy            |\n| Lockheed Martin        | LMT    | 425.62 | 433.71    | 1.87       | Buy            |\n| Cloudflare             | NET    | 58.00  | 56.92     | -1.90      | Buy            |\n| Northrop Grumman       | NOC    | 448.50 | 456.57    | 1.77       | Buy            |\n| NVIDIA                 | NVDA   | 171.24 | 168.29    | -1.75      | Buy            |\n| Palo Alto Networks     | PANW   | 436.37 | 502.69    | 13.19      | Buy            |\n| PLBY Group             | PLBY   | 9.06   | 9.26      | 2.16       | Sell           |\n| Raytheon Technologies  | RTX    | 90.25  | 91.87     | 1.76       | Buy            |\n| SoFi Technologies      | SOFI   | 7.75   | 7.30      | -6.16      | Buy            |\n")),(0,r.kt)("a",{target:"_blank",href:"https://user-images.githubusercontent.com/46355364/170243863-f95dc515-c0d7-4ede-964d-f6ba41aec743.png"},(0,r.kt)("img",{alt:"Jim Cramer historical recommendations for $DKNG",src:"https://user-images.githubusercontent.com/46355364/170243863-f95dc515-c0d7-4ede-964d-f6ba41aec743.png"})))}p.isMDXComponent=!0}}]);