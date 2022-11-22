"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[83012],{3905:(t,e,a)=>{a.d(e,{Zo:()=>m,kt:()=>g});var r=a(67294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},l=Object.keys(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var o=r.createContext({}),d=function(t){var e=r.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},m=function(t){var e=d(t.components);return r.createElement(o.Provider,{value:e},t.children)},k={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},s=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,l=t.originalType,o=t.parentName,m=p(t,["components","mdxType","originalType","parentName"]),s=d(a),g=n,N=s["".concat(o,".").concat(g)]||s[g]||k[g]||l;return a?r.createElement(N,i(i({ref:e},m),{},{components:a})):r.createElement(N,i({ref:e},m))}));function g(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=a.length,i=new Array(l);i[0]=s;var p={};for(var o in e)hasOwnProperty.call(e,o)&&(p[o]=e[o]);p.originalType=t,p.mdxType="string"==typeof t?t:n,i[1]=p;for(var d=2;d<l;d++)i[d]=a[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}s.displayName="MDXCreateElement"},82645:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>o,contentTitle:()=>i,default:()=>k,frontMatter:()=>l,metadata:()=>p,toc:()=>d});var r=a(87462),n=(a(67294),a(3905));const l={title:"Set API Keys"},i=void 0,p={unversionedId:"guides/advanced/api-keys",id:"guides/advanced/api-keys",title:"Set API Keys",description:"API Keys",source:"@site/content/sdk/guides/advanced/api-keys.md",sourceDirName:"guides/advanced",slug:"/guides/advanced/api-keys",permalink:"/sdk/guides/advanced/api-keys",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/sdk/guides/advanced/api-keys.md",tags:[],version:"current",frontMatter:{title:"Set API Keys"},sidebar:"tutorialSidebar",previous:{title:"Technical Analysis",permalink:"/sdk/guides/guides/ta"},next:{title:"Changing Sources",permalink:"/sdk/guides/advanced/changing-sources"}},o={},d=[{value:"<strong>API Keys</strong>",id:"api-keys",level:2},{value:"Importing Keys as a Variable",id:"importing-keys-as-a-variable",level:3},{value:"Creating a Backup Copy",id:"creating-a-backup-copy",level:3}],m={toc:d};function k(t){let{components:e,...a}=t;return(0,n.kt)("wrapper",(0,r.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"api-keys"},(0,n.kt)("strong",{parentName:"h2"},"API Keys")),(0,n.kt)("p",null,"API keys can be managed directly from the SDK environment. If there is already a Terminal installation configured with API keys, they will be recognized by the SDK. Their status can be verified with the line of code below."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"from openbb_terminal.sdk import openbb\nopenbb.keys.mykeys(show = True)\n")),(0,n.kt)("p",null,"Removing ",(0,n.kt)("inlineCode",{parentName:"p"},"show = True")," from the syntax will hide the values for the keys, as shown in the screenshot below."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"API"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Key"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"BINANCE_KEY"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"td"},"***"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"BINANCE_SECRET"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"td"},"***"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"BITQUERY_KEY"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"td"},"***"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"CMC_KEY"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"td"},"***"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"COINBASE_KEY"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"td"},"***"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"COINBASE_PASS_PHRASE"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"td"},"***"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"COINBASE_SECRET"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"td"},"***"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"COINGLASS_KEY"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"td"},"***"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"CRYPTO_PANIC_KEY"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"td"},"***"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"EODHD_KEY"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"td"},"***"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"ETHPLORER_KEY"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"td"},"***"))))),(0,n.kt)("p",null,"Individual keys are entered like this example:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"obb.keys.fred(\n    key = 'replace_me',\n    persist = True,\n)\n")),(0,n.kt)("p",null,"The required fields for each source will vary, print the docstring for each to know the required inputs."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"help(openbb.keys.reddit)\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-py"},"    Help on Operation in module openbb_terminal.core.library.operation:\n\n    <openbb_terminal.core.library.operation.Operation object>\n    Set Reddit key\n\n    Parameters\n    ----------\n    client_id: str\n        Client ID\n    client_secret: str\n        Client secret\n    password: str\n        User assword\n    username: str\n        User username\n    useragent: str\n        User useragent\n    persist: bool\n        If False, api key change will be contained to where it was changed. For example, Jupyter notebook.\n        If True, api key change will be global, i.e. it will affect terminal environment variables.\n        By default, False.\n    show_output: bool\n        Display status string or not. By default, False.\n\n    Returns\n    -------\n    str\n        Status of key set\n")),(0,n.kt)("details",null,(0,n.kt)("summary",null,"API Reference (expand to see list of API key references)"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Key Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,n.kt)("th",{parentName:"tr",align:"left"},"URL"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"av"),(0,n.kt)("td",{parentName:"tr",align:"left"},"AlphaVantage"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://www.alphavantage.co/support/#api-key"},"https://www.alphavantage.co/support/#api-key"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"fmp"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Financial Modelling Prep"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://site.financialmodelingprep.com/developer/docs/"},"https://site.financialmodelingprep.com/developer/docs/"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"quandl"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Quandl"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://www.quandl.com"},"https://www.quandl.com"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"polygon"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Polygon"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://polygon.io"},"https://polygon.io"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"fred"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Federal Reserve Economic Database (FRED)"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://fred.stlouisfed.org"},"https://fred.stlouisfed.org"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"news"),(0,n.kt)("td",{parentName:"tr",align:"left"},"News API"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://newsapi.org/"},"https://newsapi.org/"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"tradier"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Tradier"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://developer.tradier.com"},"https://developer.tradier.com"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"cmc"),(0,n.kt)("td",{parentName:"tr",align:"left"},"CoinMarketCap"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://coinmarketcap.com/"},"https://coinmarketcap.com/"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"finnhub"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Finnhub"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://finnhub.io/"},"https://finnhub.io/"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"iex"),(0,n.kt)("td",{parentName:"tr",align:"left"},"IEX Cloud"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://iexcloud.io/"},"https://iexcloud.io/"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"reddit"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Reddit"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://www.reddit.com/wiki/api"},"https://www.reddit.com/wiki/api"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"twitter"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Twitter"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://developer.twitter.com"},"https://developer.twitter.com"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"rh"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Robinhood"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://robinhood.com/us/en/"},"https://robinhood.com/us/en/"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"degiro"),(0,n.kt)("td",{parentName:"tr",align:"left"},"DeGiro"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://www.degiro.com/"},"https://www.degiro.com/"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"oanda"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Oanda"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://developer.oanda.com"},"https://developer.oanda.com"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"binance"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Binance"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://binance.com"},"https://binance.com"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"bitquery"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Bitquery"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://bitquery.io/"},"https://bitquery.io/"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"si"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Sentiment Investor"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://sentimentinvestor.com"},"https://sentimentinvestor.com"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"cb"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Coinbase"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://help.coinbase.com/en/exchange/managing-my-account/how-to-create-an-api-key"},"https://help.coinbase.com/en/exchange/managing-my-account/how-to-create-an-api-key"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"walert"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Whale Alert"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://docs.whale-alert.io/"},"https://docs.whale-alert.io/"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"glassnode"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Glassnode"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://docs.glassnode.com/basic-api/api-key#how-to-get-an-api-key/"},"https://docs.glassnode.com/basic-api/api-key#how-to-get-an-api-key/"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"coinglass"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Coinglass"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://coinglass.github.io/API-Reference/#api-key"},"https://coinglass.github.io/API-Reference/#api-key"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"ethplorer"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Ethplorer"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/EverexIO/Ethplorer/wiki/Ethplorer-API"},"https://github.com/EverexIO/Ethplorer/wiki/Ethplorer-API"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"smartstake"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Smartstake"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://www.smartstake.io"},"https://www.smartstake.io"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"github"),(0,n.kt)("td",{parentName:"tr",align:"left"},"GitHub"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://docs.github.com/en/rest/guides/getting-started-with-the-rest-api"},"https://docs.github.com/en/rest/guides/getting-started-with-the-rest-api"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"messari"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Messari"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://messari.io/api/docs"},"https://messari.io/api/docs"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"cpanic"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Crypto Panic"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://cryptopanic.com/developers/api/"},"https://cryptopanic.com/developers/api/"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"eodhd"),(0,n.kt)("td",{parentName:"tr",align:"left"},"EODHD"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://eodhistoricaldata.com/"},"https://eodhistoricaldata.com/"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"santiment"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Santiment"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://app.santiment.net/"},"https://app.santiment.net/"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"shroom"),(0,n.kt)("td",{parentName:"tr",align:"left"},"ShroomDK"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://sdk.flipsidecrypto.xyz/shroomdk"},"https://sdk.flipsidecrypto.xyz/shroomdk"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"tokenterminal"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Token Terminal"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://tokenterminal.com/"},"https://tokenterminal.com/")))))),(0,n.kt)("h3",{id:"importing-keys-as-a-variable"},"Importing Keys as a Variable"),(0,n.kt)("p",null,"In cases where API credentials must be passed to another process, use the following import statement:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"from openbb_terminal import config_terminal as cfg\n")),(0,n.kt)("p",null,"Values can then be passed to a request URL as a variable, ",(0,n.kt)("inlineCode",{parentName:"p"},'f"{cfg.API_KEY_QUANDL}"')),(0,n.kt)("p",null,"The code block below will authorize Quandl to request data from Nasdaq Data Link. The series in the example is for the historical price of gold."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},'import quandl\nfrom openbb_terminal import config_terminal as cfg\n\ngold = quandl.get("LBMA/GOLD", collapse="monthly", transform="", index_col=0, order="desc", parse_dates=True, authtoken=f"{cfg.API_KEY_QUANDL}")\n')),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Date"),(0,n.kt)("th",{parentName:"tr",align:"right"},"USD (AM)"),(0,n.kt)("th",{parentName:"tr",align:"right"},"USD (PM)"),(0,n.kt)("th",{parentName:"tr",align:"right"},"GBP (AM)"),(0,n.kt)("th",{parentName:"tr",align:"right"},"GBP (PM)"),(0,n.kt)("th",{parentName:"tr",align:"right"},"EURO (AM)"),(0,n.kt)("th",{parentName:"tr",align:"right"},"EURO (PM)"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-11-30 00:00:00"),(0,n.kt)("td",{parentName:"tr",align:"right"},"1757.35"),(0,n.kt)("td",{parentName:"tr",align:"right"},"1768.9"),(0,n.kt)("td",{parentName:"tr",align:"right"},"1491.46"),(0,n.kt)("td",{parentName:"tr",align:"right"},"1506.57"),(0,n.kt)("td",{parentName:"tr",align:"right"},"1704.98"),(0,n.kt)("td",{parentName:"tr",align:"right"},"1714.06")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-10-31 00:00:00"),(0,n.kt)("td",{parentName:"tr",align:"right"},"1638.85"),(0,n.kt)("td",{parentName:"tr",align:"right"},"1639"),(0,n.kt)("td",{parentName:"tr",align:"right"},"1419.74"),(0,n.kt)("td",{parentName:"tr",align:"right"},"1425.27"),(0,n.kt)("td",{parentName:"tr",align:"right"},"1649.5"),(0,n.kt)("td",{parentName:"tr",align:"right"},"1656.87")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-09-30 00:00:00"),(0,n.kt)("td",{parentName:"tr",align:"right"},"1672.75"),(0,n.kt)("td",{parentName:"tr",align:"right"},"1671.75"),(0,n.kt)("td",{parentName:"tr",align:"right"},"1495.94"),(0,n.kt)("td",{parentName:"tr",align:"right"},"1502.4"),(0,n.kt)("td",{parentName:"tr",align:"right"},"1703.7"),(0,n.kt)("td",{parentName:"tr",align:"right"},"1710.53")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-08-31 00:00:00"),(0,n.kt)("td",{parentName:"tr",align:"right"},"1712.4"),(0,n.kt)("td",{parentName:"tr",align:"right"},"1715.9"),(0,n.kt)("td",{parentName:"tr",align:"right"},"1472.15"),(0,n.kt)("td",{parentName:"tr",align:"right"},"1478.08"),(0,n.kt)("td",{parentName:"tr",align:"right"},"1713.6"),(0,n.kt)("td",{parentName:"tr",align:"right"},"1715.21")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-07-31 00:00:00"),(0,n.kt)("td",{parentName:"tr",align:"right"},"1758.9"),(0,n.kt)("td",{parentName:"tr",align:"right"},"1753.4"),(0,n.kt)("td",{parentName:"tr",align:"right"},"1447.4"),(0,n.kt)("td",{parentName:"tr",align:"right"},"1451.64"),(0,n.kt)("td",{parentName:"tr",align:"right"},"1724.07"),(0,n.kt)("td",{parentName:"tr",align:"right"},"1725.7")))),(0,n.kt)("h3",{id:"creating-a-backup-copy"},"Creating a Backup Copy"),(0,n.kt)("p",null,"To make a backup file containing all stored keys, use the code block below."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"df_keys = openbb.keys.mykeys(show = True)\ndf_keys.to_csv('backup.csv')\n")))}k.isMDXComponent=!0}}]);