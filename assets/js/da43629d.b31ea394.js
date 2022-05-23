"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[7766],{4137:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return d}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),h=p(a),d=r,m=h["".concat(l,".").concat(d)]||h[d]||c[d]||o;return a?n.createElement(m,i(i({ref:t},u),{},{components:a})):n.createElement(m,i({ref:t},u))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},4030:function(e,t,a){a.r(t),a.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return c}});var n=a(7462),r=a(3366),o=(a(7294),a(4137)),i=["components"],s={slug:"pwa-on-swa",title:"#13: Hosting PWA on Static Web Apps",authors:["max"],tags:["swa","30days","usage-examples"],draft:!1},l=void 0,p={permalink:"/blog/pwa-on-swa",editUrl:"https://github.com/staticwebdev/30DaysOfSWA/tree/main/www/blog/2021-05-14.md",source:"@site/blog/2021-05-14.md",title:"#13: Hosting PWA on Static Web Apps",description:"Welcome to Week 2, Day 6 of #30DaysOfSWA!!",date:"2021-05-14T00:00:00.000Z",formattedDate:"May 14, 2021",tags:[{label:"swa",permalink:"/blog/tags/swa"},{label:"30days",permalink:"/blog/tags/30-days"},{label:"usage-examples",permalink:"/blog/tags/usage-examples"}],readingTime:7.025,truncated:!1,authors:[{name:"Maxim Salnikov",title:"Developer Relations @Microsoft",url:"https://twitter.com/webmaxru",imageURL:"https://github.com/webmaxru.png",key:"max"}],frontMatter:{slug:"pwa-on-swa",title:"#13: Hosting PWA on Static Web Apps",authors:["max"],tags:["swa","30days","usage-examples"],draft:!1},prevItem:{title:"#14: Show & Tell: A SWArm Of Apps",permalink:"/blog/show-and-tell"},nextItem:{title:"#12: Headless CMS & Blazor SWA",permalink:"/blog/build-with-blazor"}},u={authorsImageUrls:[void 0]},c=[{value:"What We&#39;ll Cover",id:"what-well-cover",level:2},{value:"Progressive Web Applications",id:"progressive-web-applications",level:2},{value:"Is hosting a PWA on Azure Static Web Apps different from &quot;classic&quot; apps?",id:"is-hosting-a-pwa-on-azure-static-web-apps-different-from-classic-apps",level:2},{value:"Building your service worker as a part of the overall app build",id:"building-your-service-worker-as-a-part-of-the-overall-app-build",level:2},{value:"Setting up HTML5 routing - for the Single-Page Application (SPA)",id:"setting-up-html5-routing---for-the-single-page-application-spa",level:2},{value:"Showing custom error pages",id:"showing-custom-error-pages",level:2},{value:"Applying caching strategies for SWA-hosted APIs",id:"applying-caching-strategies-for-swa-hosted-apis",level:2},{value:"How to deal with authentication in PWA",id:"how-to-deal-with-authentication-in-pwa",level:2},{value:"Exercise: Deploy your PWA on SWA, run offline, and install it!",id:"exercise-deploy-your-pwa-on-swa-run-offline-and-install-it",level:2},{value:"Resources",id:"resources",level:2}],h={toc:c};function d(e){var t=e.components,s=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},h,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Welcome to ",(0,o.kt)("inlineCode",{parentName:"p"},"Week 2, Day 6")," of ",(0,o.kt)("strong",{parentName:"p"},"#30DaysOfSWA"),"!! "),(0,o.kt)("p",null,"Yesterday we talked about deploying Blazor apps on Static Web Apps. Let's continue today with one more type of the projects you can successfully host on SWA - Progressive Web Apps (PWAs)."),(0,o.kt)("h2",{id:"what-well-cover"},"What We'll Cover"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"How do I start with building a PWA?"),(0,o.kt)("li",{parentName:"ul"},"Optimized PWA-on-SWA configuration"),(0,o.kt)("li",{parentName:"ul"},"Advanced techniques for better user experience"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Exercise:")," ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/webmaxru/pwa-on-swa"},"Deploy your PWA on SWA, run offline, and install it"))),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(7931).Z,width:"1000",height:"420"})),(0,o.kt)("h2",{id:"progressive-web-applications"},"Progressive Web Applications"),(0,o.kt)("p",null,"A ",(0,o.kt)("strong",{parentName:"p"},"Progressive Web App (PWA)"),' is a web frontend application that is progressively enhanced using open web technologies, to make sure it delivers the best possible experience on every device, based on available capabilities. The "baseline" for your app to have a title "progressive" is its installability and offline-readiness. We skip the "served with https" requirement because it became a baseline for any web app these days.'),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"#30DaysOfPWA - Core Concepts",src:a(8102).Z,width:"880",height:"495"})),(0,o.kt)("p",null,"This chapter of #30DaysOfSWA assumes that you are familiar with the basic concepts of a Service Worker API and automating your service worker with the Workbox library. If you wish to learn about these technologies, you are welcome to go through the Core Concepts part of the ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://aka.ms/30DaysOfPWA"},"#30DaysOfPWA"))," project (see roadmap above) to learn about PWA fundamentals and to watch ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://www.youtube.com/watch?v=LILGt_pHk9M&ab_channel=NDCConferences"},"Automating a service worker with the Workbox 6"))," video for quickstart with Workbox."),(0,o.kt)("h2",{id:"is-hosting-a-pwa-on-azure-static-web-apps-different-from-classic-apps"},'Is hosting a PWA on Azure Static Web Apps different from "classic" apps?'),(0,o.kt)("p",null,'A Progressive Web Application is still a web frontend app so the initial scaffolding of your SWA resource is the same - you have learned how to deploy and configure various types of web apps from the previous chapters of the #30DaysOfSWA. But to make sure that your "PWA on SWA" works as intended both online & offline to provide the best possible user & developer experiences, you might need to pay special attention to some implementation details and fine-tune some configuration options. We\'ll go through the following points in this chapter:'),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Building your service worker as a part of the overall app build"),(0,o.kt)("li",{parentName:"ul"},"Setting up HTML5 routing - for the Single-Page Application (SPA) use-case"),(0,o.kt)("li",{parentName:"ul"},"Applying caching strategies for SWA-hosted APIs"),(0,o.kt)("li",{parentName:"ul"},"Showing custom error pages"),(0,o.kt)("li",{parentName:"ul"},"How to deal with authentication in PWA")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Sample project")),(0,o.kt)("p",null,"I created a ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://github.com/webmaxru/pwa-on-swa"},"PWA on SWA Starter"))," project with all the best practices implemented. The app is ",(0,o.kt)("a",{parentName:"p",href:"https://aka.ms/pwa-on-swa"},"hosted on SWA")," as shown below. Let's explore it!"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"PWA Starter on SWA",src:a(2948).Z,width:"1123",height:"889"})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Technical stack:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"A React application scaffolded by the ",(0,o.kt)("a",{parentName:"li",href:"https://reactjs.org/docs/create-a-new-react-app.html"},"create-react-app")," tool. A simple SPA with a few routes and the possibility to call API endpoints. Note that the approaches described are applicable for any web frontend application: ",(0,o.kt)("strong",{parentName:"li"},"framework-based")," (including your custom frameworks) or ",(0,o.kt)("strong",{parentName:"li"},'"vanilla" JavaScript'),'. We use React only for getting closer to the real-world scenario of the modern frontend app development when you have to perform some operations with your source code ("build the app") before the deployment.'),(0,o.kt)("li",{parentName:"ul"},"A ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/webmaxru/pwa-on-swa/blob/main/src/sw/service-worker.js"},"service worker")," powered by the ",(0,o.kt)("a",{parentName:"li",href:"https://workboxjs.org"},"Workbox")," library."),(0,o.kt)("li",{parentName:"ul"},'Two API endpoints created within SWA resource - to emulate "dynamic" (',(0,o.kt)("inlineCode",{parentName:"li"},"/api/news"),') and "conservative" (',(0,o.kt)("inlineCode",{parentName:"li"},"/api/archives"),") data sources.")),(0,o.kt)("h2",{id:"building-your-service-worker-as-a-part-of-the-overall-app-build"},"Building your service worker as a part of the overall app build"),(0,o.kt)("p",null,"The service worker file we have in the ",(0,o.kt)("inlineCode",{parentName:"p"},"src/sw")," folder of the application is not ready for the deployment. We have to"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"https://github.com/webmaxru/pwa-on-swa/blob/main/scripts/sw-build.js"},"Process it"))," by the ",(0,o.kt)("inlineCode",{parentName:"li"},"workbox-build")," module to populate with the resources to precache (to provide offline-readiness)"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Bundle it")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Choose")," production or development mode"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Minify")," for deployment")),(0,o.kt)("p",null,"This is why in ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json"),"'s ",(0,o.kt)("inlineCode",{parentName:"p"},"scripts")," we have ",(0,o.kt)("inlineCode",{parentName:"p"},'"build-sw": "node scripts/sw-build.js && npx rollup -c"')," command that is building a service worker file and copies it into the app distribution folder."),(0,o.kt)("p",null,"By default, Azure Static Web Apps runs ",(0,o.kt)("inlineCode",{parentName:"p"},"npm run build")," command to build your application. So do not forget to add a service worker build command there. The resulting  command will be:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'"build": "react-scripts build && npm run build-sw"\n')),(0,o.kt)("p",null,"Instead of ",(0,o.kt)("inlineCode",{parentName:"p"},"react-scripts build"),", there might be a command to build an application using a framework/bundler of your choice. ",(0,o.kt)("strong",{parentName:"p"},"Important"),": Keep this order - you always build a service worker ",(0,o.kt)("em",{parentName:"p"},"after")," the main application because the distribution folder will be scanned to list the files to precache based on the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/webmaxru/pwa-on-swa/blob/main/scripts/sw-build.js#L5"},"pattern")," you provided."),(0,o.kt)("h2",{id:"setting-up-html5-routing---for-the-single-page-application-spa"},"Setting up HTML5 routing - for the Single-Page Application (SPA)"),(0,o.kt)("p",null,'For having correct navigation in your single-page application, you have to "ask" the webserver to redirect all navigation requests to ',(0,o.kt)("inlineCode",{parentName:"p"},"index.html")," - to run the application and let it do the routing. In SWA, you have to have something like this in the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/webmaxru/pwa-on-swa/blob/main/staticwebapp.config.json"},"configuration file"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'"navigationFallback": {\n  "rewrite": "index.html",\n  "exclude": ["/images/*.{png,jpg,gif}", "/static/*"]\n}\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Best practices"),":"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},'Always "exclude" as much as possible in ',(0,o.kt)("inlineCode",{parentName:"li"},"navigationFallback"),' - it will help you to identify and fix "resource not found" errors.'),(0,o.kt)("li",{parentName:"ul"},"Do not copy ",(0,o.kt)("inlineCode",{parentName:"li"},"staticwebapp.config.json")," to the app distribution folder - SWA will find it in any location within the app source code.")),(0,o.kt)("p",null,"In case of PWA, there is an extra layer of this fallback: the first in a row to handle navigation requests is a service worker. In the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/webmaxru/pwa-on-swa/blob/main/src/sw/service-worker.js"},"service-worker.js")," we have to have the following block for correct routing in SPAs:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"const navHandler = createHandlerBoundToURL('/index.html');\nconst navigationRoute = new NavigationRoute(navHandler, {\n  denylist: [\n    new RegExp('^/images/'),\n    new RegExp('^/static/'),\n  ],\n});\nregisterRoute(navigationRoute);\n")),(0,o.kt)("p",null,'The above configuration will work fine for opening both root url and "deep links" like ',(0,o.kt)("inlineCode",{parentName:"p"},"/about")," both in online and offline modes. "),(0,o.kt)("h2",{id:"showing-custom-error-pages"},"Showing custom error pages"),(0,o.kt)("p",null,"It's a best practice to create and show custom error pages (for example for 404 Not Found) instead of the ones built-in in the browsers. And it makes sense to keep these pages as simple as possible - without running a SPA itself. To set up custom error pages, you add the following block to the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/webmaxru/pwa-on-swa/blob/main/staticwebapp.config.json"},"SWA config")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'"responseOverrides": {\n  "400": {\n    "rewrite": "/400.html"\n  },\n  "404": {\n    "rewrite": "/404.html"\n  }\n}\n')),(0,o.kt)("p",null,"These pages will be excluded from SWA's navigation fallback automatically because these two html are in the app distribution folder. But for the Workbox and explicit directive needed - just add these addresses to the same ",(0,o.kt)("inlineCode",{parentName:"p"},"denylist")," we met with the HTML5 navigation section."),(0,o.kt)("h2",{id:"applying-caching-strategies-for-swa-hosted-apis"},"Applying caching strategies for SWA-hosted APIs"),(0,o.kt)("p",null,'With Workbox, runtime caching is simple: you specify a url pattern to "listen" and intercept, and a caching strategy to apply. There are ',(0,o.kt)("a",{parentName:"p",href:"https://developer.chrome.com/docs/workbox/modules/workbox-strategies/"},"5 strategies")," available and you can always create a custom one. By default, all API urls start with ",(0,o.kt)("inlineCode",{parentName:"p"},"/api"),". Then in a ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/webmaxru/pwa-on-swa/blob/main/src/sw/service-worker.js"},"service worker"),", we'll add this block for caching responses from our two API endpoints using different strategies:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"registerRoute(\n  ({ url }) => url.pathname.startsWith('/api/news'),\n  new NetworkFirst()\n);\n\nregisterRoute(\n  ({ url }) => url.pathname.startsWith('/api/archives'),\n  new CacheFirst()\n);\n")),(0,o.kt)("p",null,"Now, the data from APIs, once fetched, is also available offline!"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Mini-exercise"),": Open the ",(0,o.kt)("a",{parentName:"p",href:"https://aka.ms/pwa-on-swa"},"hosted PWA on SWA Starter"),', open the Network tab of DevTools, and click on two buttons in the "API caching" demo area. What difference do you see in the network request/response patterns for these two strategies?'),(0,o.kt)("h2",{id:"how-to-deal-with-authentication-in-pwa"},"How to deal with authentication in PWA"),(0,o.kt)("p",null,"A couple of ",(0,o.kt)("strong",{parentName:"p"},"important")," rules here:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Explicitly exclude the ",(0,o.kt)("inlineCode",{parentName:"li"},".auth")," system folder of SWA from Workbox's navigation fallback (use ",(0,o.kt)("inlineCode",{parentName:"li"},"denylist"),") and never set up runtime caching for it"),(0,o.kt)("li",{parentName:"ol"},"Never runtime-cache all data users fetch from restricted API endpoints (served by SWA or external)")),(0,o.kt)("p",null,"And it's a ",(0,o.kt)("strong",{parentName:"p"},"best practice")," to never precache and always exclude from the service worker's navigation fallback all urls related to the user authentication and restricted parts of your application. ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/webmaxru/pwa-on-swa/blob/main/src/sw/service-worker.js#L27"},"Have a look")," at the resulting ",(0,o.kt)("inlineCode",{parentName:"p"},"denylist")," of our sample application."),(0,o.kt)("h2",{id:"exercise-deploy-your-pwa-on-swa-run-offline-and-install-it"},"Exercise: Deploy your PWA on SWA, run offline, and install it!"),(0,o.kt)("p",null,"Hopefully, you're ready to try something fun that will reinforce what you learned today. "),(0,o.kt)("p",null,"For this exercise:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/webmaxru/pwa-on-swa"},"Fork the PWA on SWA Starter repository")," and deploy it to Azure Static Web Apps using the skills you gained in the previous chapters of the #30DaysOfSWA"),(0,o.kt)("li",{parentName:"ul"},"Open the url you received after the SWA resource was created"),(0,o.kt)("li",{parentName:"ul"},"Now, go offline (disconnect from the Internet or emulate offline mode in the DevTools) and reload the page - it still works!"),(0,o.kt)("li",{parentName:"ul"},'Using the "App available" icon on the right-hand side of the desktop browser\'s address bar, install the application on your laptop - now it behaves like a native one!')),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"resources"},"Resources"),(0,o.kt)("p",null,"Here are some resources to get you started with your Progressive Web App journey into "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://aka.ms/learn-pwa"},"PWA on Microsoft Docs")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://aka.ms/30DaysOfPWA"},"#30DaysOfPWA")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://workboxjs.org"},"Workbox library"))))}d.isMDXComponent=!0},7931:function(e,t,a){t.Z=a.p+"assets/images/13-banner-3cf47c138a827b17cf3cafad0071cc35.png"},8102:function(e,t,a){t.Z=a.p+"assets/images/13-pwa-30days-49b1548a61b0171a30f832e32d493c75.jpg"},2948:function(e,t,a){t.Z=a.p+"assets/images/13-pwa-starter-a1635fd2b9c0d9f831010de9313f729e.png"}}]);