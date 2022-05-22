"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[6914],{4137:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=o,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return n?a.createElement(h,r(r({ref:t},c),{},{components:n})):a.createElement(h,r({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var p=2;p<i;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8211:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return u}});var a=n(7462),o=n(3366),i=(n(7294),n(4137)),r=["components"],l={slug:"devtools-swacli-deploy",title:"#20: Deploy with SWA CLI",authors:["wassim","yohan"],tags:["swa","30days","dev-tools"],draft:!1},s=void 0,p={permalink:"/blog/devtools-swacli-deploy",editUrl:"https://github.com/staticwebdev/30DaysOfSWA/tree/main/www/blog/2021-05-21.md",source:"@site/blog/2021-05-21.md",title:"#20: Deploy with SWA CLI",description:"Welcome to Week 3, Day 6 of #30DaysOfSWA!!",date:"2021-05-21T00:00:00.000Z",formattedDate:"May 21, 2021",tags:[{label:"swa",permalink:"/blog/tags/swa"},{label:"30days",permalink:"/blog/tags/30-days"},{label:"dev-tools",permalink:"/blog/tags/dev-tools"}],readingTime:5.865,truncated:!1,authors:[{name:"Wassim Chegham",title:"Senior Cloud Advocate @Microsoft",url:"https://twitter.com/manekinekko",imageURL:"https://github.com/manekinekko.png",key:"wassim"},{name:"Yohan Lasorsa",title:"Senior Cloud Advocate @Microsoft",url:"https://twitter.com/sinedied",imageURL:"https://github.com/sinedied.png",key:"yohan"}],frontMatter:{slug:"devtools-swacli-deploy",title:"#20: Deploy with SWA CLI",authors:["wassim","yohan"],tags:["swa","30days","dev-tools"],draft:!1},prevItem:{title:"#21: Develop With VSCode",permalink:"/blog/devtools-vscode"},nextItem:{title:"#19: Develop with SWA CLI",permalink:"/blog/devtools-swacli-develop"}},c={authorsImageUrls:[void 0,void 0]},u=[{value:"Logging in to Azure",id:"logging-in-to-azure",level:2},{value:"Deploying your app",id:"deploying-your-app",level:2},{value:"Deploying from a CI/CD pipeline",id:"deploying-from-a-cicd-pipeline",level:2},{value:"Environment variables",id:"environment-variables",level:2},{value:"Next steps",id:"next-steps",level:2},{value:"Tell us your feedback!",id:"tell-us-your-feedback",level:2},{value:"Resources",id:"resources",level:2}],d={toc:u};function m(e){var t=e.components,l=(0,o.Z)(e,r);return(0,i.kt)("wrapper",(0,a.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("head",null,(0,i.kt)("meta",{name:"twitter:url",content:"https://www.azurestaticwebapps.dev/blog/devtools-swacli-deploy"}),(0,i.kt)("meta",{name:"twitter:title",content:"##19: Deploy with SWA CLI"}),(0,i.kt)("meta",{name:"twitter:description",content:"Join @sinedied and @manekinekko on #30DaysOfSWA in part 2 of the intro to SWA CLI for @AzureStaticApps - focused on deployment!"}),(0,i.kt)("meta",{name:"twitter:image",content:"https://www.azurestaticwebapps.dev/assets/images/20-banner-62cb7a9019981d88c514d8875b8547d9.png"}),(0,i.kt)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,i.kt)("meta",{name:"twitter:creator",content:"@nitya"}),(0,i.kt)("meta",{name:"twitter:site",content:"@AzureStaticApps"}),(0,i.kt)("link",{rel:"canonical",href:"https://dev.to/azure/deploy-your-static-web-apps-to-azure-directly-from-the-command-line-2ip8"})),(0,i.kt)("p",null,"Welcome to ",(0,i.kt)("inlineCode",{parentName:"p"},"Week 3, Day 6")," of ",(0,i.kt)("strong",{parentName:"p"},"#30DaysOfSWA"),"!! "),(0,i.kt)("p",null,"This is second part of the 2-part series that focuses on the launch of the ",(0,i.kt)("a",{parentName:"p",href:"https://azure.github.io/static-web-apps-cli/?WT.mc_id=30daysofswa-61155-cxall"},"Azure Static Web Apps CLI")," at the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/events/learntv/swa-anniversary-may-2022?WT.mc_id=30daysofswa-61155-cxall"},"Azure Static Web Apps Anniversary event")," on May 19, 2022. Yesterday's post introduced the core ",(0,i.kt)("inlineCode",{parentName:"p"},"swa")," command and walked through the ",(0,i.kt)("inlineCode",{parentName:"p"},"swa init")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"swa start")," commands - and covered configuration. "),(0,i.kt)("p",null,"Today, we'll explore the ",(0,i.kt)("inlineCode",{parentName:"p"},"swa login")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"swa deploy")," commands that help with deploying your locally-developed app to the Azure cloud. And we'll cover the use of Environment Variables to streamline the developer experience further."),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"What We'll Cover")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},"Logging in to Azure"),(0,i.kt)("li",{parentName:"ul"},"Deploying your app"),(0,i.kt)("li",{parentName:"ul"},"Environment variables"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Exercise"),": Use the new ",(0,i.kt)("inlineCode",{parentName:"li"},"swa")," CLI to authenticate, and deploy your app")))),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(4806).Z,width:"1000",height:"420"})),(0,i.kt)("p",null,"For this second article about the SWA CLI, we'll talk about the new deployment options. And yes, you can now deploy your apps straight from the command line! Who's better than the person who implemented it to talk about it? I'll let my friend ",(0,i.kt)("a",{parentName:"p",href:"https://twitter.com/manekinekko"},"Wassim")," explain it all to you."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"If you've never heard of Static Web Apps (or SWA for short), it's a web app hosting service provided by Azure, offering streamlined full-stack development with many built-in features like authentication, customizable routing, serverless functions and more. It also has a great ",(0,i.kt)("a",{parentName:"p",href:"https://azure.microsoft.com/free/?WT.mc_id=30daysofswa-61155-cxall"},"free tier")," \ud83d\ude09")),(0,i.kt)("h2",{id:"logging-in-to-azure"},"Logging in to Azure"),(0,i.kt)("p",null,"In the new SWA CLI for Azure Static Web Apps, we introduced a new ",(0,i.kt)("inlineCode",{parentName:"p"},"swa login")," command allowing you to log in to your Azure account, straight from the command line. This command will encrypt and store your credentials in your system's key Chain, so you don't have to enter them again."),(0,i.kt)("p",null,"In most common cases, the ",(0,i.kt)("inlineCode",{parentName:"p"},"swa login")," will pick your current active Azure credentials from the following locations (in this order):"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Your environment variables, if you have set one or all of following ",(0,i.kt)("a",{parentName:"li",href:"https://azure.github.io/static-web-apps-cli/docs/cli/env-vars#azure-identity?WT.mc_id=30daysofswa-61155-cxall"},"variables"),":",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"AZURE_TENANT_ID")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"AZURE_CLIENT_ID")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"AZURE_CLIENT_SECRET")))),(0,i.kt)("li",{parentName:"ol"},"Your current Visual Studio Code, if you're using VS Code and is connected to Azure."),(0,i.kt)("li",{parentName:"ol"},"Interactive prompt using your browser."),(0,i.kt)("li",{parentName:"ol"},"The last fallback is the device code flow, which will prompt you to log in to your Azure account using a generated device code.")),(0,i.kt)("p",null,"However, if you need, you can also provide any of these credentials from the command line, using the available flags:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'Usage: swa login [options]\n\nlogin into Azure\n\nOptions:\n  -S, --subscription-id <subscriptionId>    Azure subscription ID used by this project\n                                            (default: "process.env.AZURE_SUBSCRIPTION_ID")\n  -R, --resource-group <resourceGroupName>  Azure resource group used by this project\n  -T, --tenant-id <tenantId>                Azure tenant ID (default: "process.env.AZURE_TENANT_ID")\n  -C, --client-id <clientId>                Azure client ID\n  -CS, --client-secret <clientSecret>       Azure client secret\n  -n, --app-name <appName>                  Azure Static Web App application name\n  -cc, --clear-credentials                  clear persisted credentials before login (default: false)\n  -u, --use-keychain                        enable using the operating system native keychain\n                                            for persistent credentials (default: true)\n  -nu, --no-use-keychain                    disable using the operating system native keychain\n')),(0,i.kt)("p",null,"Once logged in, the SWA CLI will store your active Azure subscription ID and tenant ID in a local file called ",(0,i.kt)("inlineCode",{parentName:"p"},".env")," at the root of your project:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"\u279c swa login\n\nWelcome to Azure Static Web Apps CLI (1.0.0)\n\nChecking Azure session...\n\u2714 Successfully logged into Azure!\n\u2714 Saved project credentials in .env file.\n\u2714 Successfully setup project!\n")),(0,i.kt)("p",null,"This file will be used when deploying your project to Azure using the ",(0,i.kt)("inlineCode",{parentName:"p"},"swa deploy")," command."),(0,i.kt)("h2",{id:"deploying-your-app"},"Deploying your app"),(0,i.kt)("p",null,"The new SWA CLI makes it even more easier to deploy your apps to Azure. You can now deploy your app directly from the command line, using one single ",(0,i.kt)("inlineCode",{parentName:"p"},"swa deploy")," command."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"swa deploy")," command is smarter enough to figure out if you already have an Azure Static Web Apps instance available, and if so, it will use it. Otherwise, it will create a new one on the fly - or prompt you to select one from a list of already available ones:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'\u279c swa deploy\n\nWelcome to Azure Static Web Apps CLI (1.0.0)\n\nUsing configuration "thundr" from file:\n  /home/wassimchegham/oss/@thundr-dev/thundr/swa-cli.config.json\n\nDeploying front-end files from folder:\n  /home/wassimchegham/oss/@thundr-dev/thundr/app/dist/thundr-ui\n\nDeploying API from folder:\n  /home/wassimchegham/oss/@thundr-dev/thundr/api\n\nChecking Azure session...\n\u2714 Successfully logged into Azure!\n\nChecking project settings...\n? Choose your Static Web App \u203a - Use arrow-keys. Return to submit.\n\u276f   >> Create a new application\n    swa_samples/angular-web-bluetooth\n    swa_samples/catsify\n    swa_samples/hexa\n    swa_samples/ngxtools\n    swa_samples/nitrooo\n  \u2193 swa_samples/photobooth-teams\n\n')),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"swa deploy")," command is also able to detect if your existing Static Web Apps instance has already been deployed from a CI/CD pipeline and inform you about it!"),(0,i.kt)("h2",{id:"deploying-from-a-cicd-pipeline"},"Deploying from a CI/CD pipeline"),(0,i.kt)("p",null,"Deploying from CI/CD pipelines is a common practice in many projects. You can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"swa deploy")," command to deploy your app to Azure from your CI/CD pipeline. You can accomplish this by setting a deployment token:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'\u279c swa deploy --print-token --app-name thundr --resource-group swa_samples\n\nWelcome to Azure Static Web Apps CLI (1.0.0)\n\nChecking project "thundr" settings...\n\u2714 Successfully setup project!\n\nDeploying to environment: preview\n\nDeployment token:\n7c3fc44b858164b677-truncated-8c80ace9-39a8-416c-ae22-864745c0470b003\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"swa deploy --deployment-token=7c3fc44b858164b677-truncated-8c80ace9-39a8-416c-ae22-864745c0470b003b003\n")),(0,i.kt)("p",null,"You can also set the deployment token as an ",(0,i.kt)("a",{parentName:"p",href:"https://azure.github.io/static-web-apps-cli/docs/cli/env-vars#deploy-settings?WT.mc_id=30daysofswa-61155-cxall"},"environment variable"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"export SWA_CLI_DEPLOYMENT_TOKEN=7c3fc44b858164b677-truncated-8c80ace9-39a8-416c-ae22-864745c0470b003b003\nswa deploy\n")),(0,i.kt)("h2",{id:"environment-variables"},"Environment variables"),(0,i.kt)("p",null,"The new SWA CLI introduced a new set of environment variables to make it easier for you to configure your experience. You can customize the behavior of the SWA CLI by setting the following environment variables:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"General settings"),(0,i.kt)("li",{parentName:"ul"},"Emulator settings"),(0,i.kt)("li",{parentName:"ul"},"Deploy settings"),(0,i.kt)("li",{parentName:"ul"},"Runtime settings"),(0,i.kt)("li",{parentName:"ul"},"Login experience")),(0,i.kt)("p",null,"You can read more about these environment variables in the ",(0,i.kt)("a",{parentName:"p",href:"https://azure.github.io/static-web-apps-cli/docs/cli/env-vars??WT.mc_id=30daysofswa-61155-cxall"},"Environment Variables section")," in our new documentation website."),(0,i.kt)("h2",{id:"next-steps"},"Next steps"),(0,i.kt)("p",null,"From the start of your project to its deployment to Azure, with all the needed local testing in-between, you should now be equipped to take care of your complete development process all from the command line. Now the main challenge remaining for you is to deploy and grow your app \ud83d\ude09."),(0,i.kt)("p",null,"If you'd like to learn some tips you can use when developing your app, you can check out the ",(0,i.kt)("a",{parentName:"p",href:"https://aka.ms/StaticWebAppsTips??WT.mc_id=30daysofswa-61155-cxall"},"Static Web Apps - Tips & Tricks")," video series."),(0,i.kt)("p",null,"You can also learn more about all the new features of the SWA CLI and how to use them by looking at the ",(0,i.kt)("a",{parentName:"p",href:"https://azure.github.io/static-web-apps-cli/?WT.mc_id=30daysofswa-61155-cxall"},"new docs website"),"."),(0,i.kt)("h2",{id:"tell-us-your-feedback"},"Tell us your feedback!"),(0,i.kt)("p",null,"We're also here on dev.to to listen and help as much as we can! \ud83d\ude42"),(0,i.kt)("p",null,"Please tell us your experience, your difficulties, your questions, and what features you would like to see in the next versions of the SWA CLI."),(0,i.kt)("h2",{id:"resources"},"Resources"),(0,i.kt)("p",null,"Want to see the Static Web Apps CLI in action? The tool became generally available yesterday, launching at the ",(0,i.kt)("a",{parentName:"p",href:"https://aka.ms/swaanniversary"},"Azure Static Web Apps Anniversary"),". Watch the segment to see the SWA CLI in action."),(0,i.kt)("iframe",{width:"560",height:"315",frameborder:"0",src:"https://www.youtube.com/embed/1e6k5HNK4F8?WT.mc_id=30daysofswa-61155-cxall",title:"YouTube video player",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}))}m.isMDXComponent=!0},4806:function(e,t,n){t.Z=n.p+"assets/images/20-banner-62cb7a9019981d88c514d8875b8547d9.png"}}]);