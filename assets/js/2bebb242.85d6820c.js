"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[684],{4137:function(e,t,a){a.d(t,{Zo:function(){return l},kt:function(){return d}});var i=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function n(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,i,o=function(e,t){if(null==e)return{};var a,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var c=i.createContext({}),p=function(e){var t=i.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):n(n({},t),e)),a},l=function(e){var t=p(e.components);return i.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=p(a),d=o,h=m["".concat(c,".").concat(d)]||m[d]||u[d]||r;return a?i.createElement(h,n(n({ref:t},l),{},{components:a})):i.createElement(h,n({ref:t},l))}));function d(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,n=new Array(r);n[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,n[1]=s;for(var p=2;p<r;p++)n[p]=a[p];return i.createElement.apply(null,n)}return i.createElement.apply(null,a)}m.displayName="MDXCreateElement"},8946:function(e,t,a){a.r(t),a.d(t,{assets:function(){return l},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return u}});var i=a(7462),o=a(3366),r=(a(7294),a(4137)),n=["components"],s={slug:"practices-cognitive-services",title:"#24: Cognitive Services & SWA",authors:["y\xf6net"],tags:["swa","30days","best-practices","AI","ComputerVision","CognitiveServices"],draft:!1},c=void 0,p={permalink:"/blog/practices-cognitive-services",editUrl:"https://github.com/staticwebdev/30DaysOfSWA/tree/main/www/blog/2022-05-25.md",source:"@site/blog/2022-05-25.md",title:"#24: Cognitive Services & SWA",description:"Welcome to Week 4, Day 3 of #30DaysOfSWA!!",date:"2022-05-25T00:00:00.000Z",formattedDate:"May 25, 2022",tags:[{label:"swa",permalink:"/blog/tags/swa"},{label:"30days",permalink:"/blog/tags/30-days"},{label:"best-practices",permalink:"/blog/tags/best-practices"},{label:"AI",permalink:"/blog/tags/ai"},{label:"ComputerVision",permalink:"/blog/tags/computer-vision"},{label:"CognitiveServices",permalink:"/blog/tags/cognitive-services"}],readingTime:6.785,truncated:!1,authors:[{name:"Ay\u015feg\xfcl Y\xf6net",title:"Senior Developer Advocate @Microsoft",url:"https://github.com/Yonet",imageURL:"https://github.com/Yonet.png",key:"y\xf6net"}],frontMatter:{slug:"practices-cognitive-services",title:"#24: Cognitive Services & SWA",authors:["y\xf6net"],tags:["swa","30days","best-practices","AI","ComputerVision","CognitiveServices"],draft:!1},prevItem:{title:"#25: KlipTok & SWA: Case Study",permalink:"/blog/practices-case-study"},nextItem:{title:"#23: Cognitive Search & SWA",permalink:"/blog/practices-cognitive-search"}},l={authorsImageUrls:[void 0]},u=[{value:"What We&#39;ll Cover",id:"what-well-cover",level:2},{value:"Resources",id:"resources",level:2},{value:"What are Azure Vision Services?",id:"what-are-azure-vision-services",level:2},{value:"Get Started building AI apps",id:"get-started-building-ai-apps",level:2},{value:"How to use the JavaScript AI SDKs",id:"how-to-use-the-javascript-ai-sdks",level:2},{value:"How to analyze a document using Form Recognizer",id:"how-to-analyze-a-document-using-form-recognizer",level:2},{value:"Deploy your app to SWA",id:"deploy-your-app-to-swa",level:2},{value:"Exercise",id:"exercise",level:2}],m={toc:u};function d(e){var t=e.components,s=(0,o.Z)(e,n);return(0,r.kt)("wrapper",(0,i.Z)({},m,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("head",null,(0,r.kt)("meta",{name:"twitter:url",content:"https://www.azurestaticwebapps.dev/blog/practices-cognitive-services"}),(0,r.kt)("meta",{name:"twitter:title",content:"#24: Custom Vision & SWA"}),(0,r.kt)("meta",{name:"twitter:description",content:"Join @AysSomething as we kick off 'Best Practices' week on #30DaysOfSWA with a discussion on adding AI capabilities to @AzureStatic Apps using Cognitive Services!"}),(0,r.kt)("meta",{name:"twitter:image",content:"https://www.azurestaticwebapps.dev/assets/images/24-banner.png"}),(0,r.kt)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,r.kt)("meta",{name:"twitter:creator",content:"@nitya"}),(0,r.kt)("meta",{name:"twitter:site",content:"@AzureStaticApps"}),(0,r.kt)("link",{rel:"canonical",href:"https://www.azurestaticwebapps.dev/blog/practices-cognitive-services"})),(0,r.kt)("p",null,"Welcome to ",(0,r.kt)("inlineCode",{parentName:"p"},"Week 4, Day 3")," of ",(0,r.kt)("strong",{parentName:"p"},"#30DaysOfSWA"),"!!"),(0,r.kt)("p",null,"We continue our Best Practices week by looking at year another Azure Services integration option for your Azure Static Web Apps deployment. Yesterday we talked about adding search to your website using pre-trained Azure AI models. Today we'll discuss how you can use Vision AI Services."),(0,r.kt)("h2",{id:"what-well-cover"},"What We'll Cover"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"What are Azure Vision Services"),(0,r.kt)("li",{parentName:"ul"},"How to get started building your AI applications"),(0,r.kt)("li",{parentName:"ul"},"How to use the JavaScript AI SDKs"),(0,r.kt)("li",{parentName:"ul"},"How to analyze a document using Form Recognizer"),(0,r.kt)("li",{parentName:"ul"},"How to deploy your APIs and Static Web App(SWA)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Exercise")," ",(0,r.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/samples/azure-samples/js-e2e-client-cognitive-services/build-and-deploy-a-static-web-app-to-azure/?WT.mc_id=javascript-68057-ayyonet"},"Build and deploy a SWA to analyse images"))),(0,r.kt)("h2",{id:"resources"},"Resources"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://aka.ms/AzureCustomVision"},"Azure Custom Vision")," - Documentation"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/learn/paths/explore-computer-vision-microsoft-azure/?WT.mc_id=javascript-68057-ayyonet"},"Azure AI Fundamentals: Explore computer vision")," - Learn Module"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/azure/static-web-apps/deploy-nextjs?WT.mc_id=javascript-68057-ayyonet"},"SWA Next.js ")," - Documentation")),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(9949).Z,width:"1000",height:"420"})),(0,r.kt)("h2",{id:"what-are-azure-vision-services"},"What are Azure Vision Services?"),(0,r.kt)("p",null,"Azure AI Vision is part of ",(0,r.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/azure/cognitive-services/what-are-cognitive-services?WT.mc_id=javascript-57623-ayyonet"},"Azure Cognitive Services")," - cloud-based AI services that give you Terminator-like powers."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://media.giphy.com/media/NHUaA15Nk910hFczxu/giphy.gif",alt:null})),(0,r.kt)("p",null,"You can take a picture and ",(0,r.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/azure/cognitive-services/computer-vision/quickstarts-sdk/image-analysis-client-library?tabs=visual-studio&pivots=programming-language-javascript&WT.mc_id=javascript-57623-ayyonet"},"analyze it to describe the image, detect objects, landmarks and famous people")," or ",(0,r.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/azure/cognitive-services/face/build-enrollment-app?tabs=android&WT.mc_id=javascript-57623-ayyonet"},"your users"),", ",(0,r.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/azure/cognitive-services/computer-vision/quickstarts-sdk/client-library?tabs=visual-studio&pivots=programming-language-javascript&WT.mc_id=javascript-57623-ayyonet"},"read documents")," and scan information on an ID or a business card. All of these superpowers are available to you - an API call away - using Azure\u2019s Cognitive and Applied AI Services. Let\u2019s dive into what we can build and what we can customize."),(0,r.kt)("h2",{id:"get-started-building-ai-apps"},"Get Started building AI apps"),(0,r.kt)("p",null,"If you are planning to infuse your application with AI, the first place you need to look at is our ",(0,r.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/azure/applied-ai-services/?WT.mc_id=javascript-57623-ayyonet"},"Applied AI Services"),". Applied AI services are solving the most common use cases and build on top of our Cognitive Services. In terms of Vision related services, we have two Applied AI Services, ",(0,r.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/azure/applied-ai-services/form-recognizer/?WT.mc_id=javascript-57623-ayyonet"},"Form Recognizer")," and ",(0,r.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/azure/azure-video-analyzer/?WT.mc_id=javascript-57623-ayyonet"},"Video Analyzer"),"."),(0,r.kt)("p",null,"Azure Form Recognizer is built using ",(0,r.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/azure/cognitive-services/computer-vision/overview-ocr?WT.mc_id=javascript-57623-ayyonet"},"Optical Character Recognition(OCR)"),", ",(0,r.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/azure/cognitive-services/language-service/overview?WT.mc_id=javascript-57623-ayyonet"},"Text Analytics")," and ",(0,r.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/azure/cognitive-services/language-service/custom-text-classification/overview?WT.mc_id=javascript-57623-ayyonet"},"Custom Text")," from Azure Cognitive Services and has ",(0,r.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/azure/applied-ai-services/form-recognizer/concept-custom?WT.mc_id=javascript-57623-ayyonet"},"custom trained models")," for things like vaccination cards, passports and tax documentation. If you are wondering why you need Form Recognizer, you can try reverse engineering some of its features by using the Cognitive Services."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://media.giphy.com/media/tH2Ur5u1wpfPDNHhgm/giphy.gif",alt:"Building things from scratch instea of using a ready solution"})),(0,r.kt)("p",null,"I won\u2019t wish that for any of you and that\u2019s why your first stop should be ",(0,r.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/azure/applied-ai-services/?WT.mc_id=javascript-57623-ayyonet"},"Applied AI Services documentation")," to see if your problem is solvable by any of these services. Whenever your problem is not solved or you need more flexibility, you can build with Cognitive Services, ",(0,r.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/azure/cognitive-services/computer-vision/overview-image-analysis?WT.mc_id=javascript-57623-ayyonet"},"Computer Vision"),", ",(0,r.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/azure/cognitive-services/custom-vision-service/?WT.mc_id=javascript-57623-ayyonet"},"Custom Vision")," or ",(0,r.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/azure/cognitive-services/face/overview?WT.mc_id=javascript-57623-ayyonet"},"Face")," APIs."),(0,r.kt)("p",null,"A great way to start playing with these APIs and explore your specific use case is through ",(0,r.kt)("a",{parentName:"p",href:"https://preview.vision.azure.com/"},"Vision Studio Preview")," or ",(0,r.kt)("a",{parentName:"p",href:"https://formrecognizer.appliedai.azure.com/studio"},"Form Recognizer Studio preview"),". For example, I was wondering if I can recognize Mixed Reality devices using Computer Vision. Since these devices are very new and still not a common object, they were not recognized by our all-purpose object detection model. Before building an app, I was able to easily see that I need to train a custom model. You can check and see your logo or your product is easily recognizable or you should start training a custom model on the Studio without writing any code and find the code samples right inside the Studio."),(0,r.kt)("p",null,"If the object you want to detect is not recognized, you can train a custom model through ",(0,r.kt)("a",{parentName:"p",href:"https://customvision.ai"},"customvision.ai")," and deploy it. You will get a custom API endpoint to call and your client implementation won\u2019t be different than using any other service. There are couple of best practices for training a custom model. Most importantly, you need a variety of images in different contexts. For example if you want to find Waldo, you can\u2019t just train with Waldo\u2019s profile picture, you need to also use his pictures in a crowd."),(0,r.kt)("p",null,"You can read how I\u2019ve trained my custom model and built an ",(0,r.kt)("a",{parentName:"p",href:"https://medium.com/microsoftazure/no-code-ai-app-with-azure-cognitive-services-custom-vision-and-power-apps-ca47c019dcd0"},"No Code prototype here")," using ",(0,r.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/ai-builder/overview?WT.mc_id=javascript-57623-ayyonet"},"Power Apps AI Builder")),(0,r.kt)("h2",{id:"how-to-use-the-javascript-ai-sdks"},"How to use the JavaScript AI SDKs"),(0,r.kt)("p",null,"Using any of these APIs works pretty much the same way if you are working with an image instead of a video to analyze:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Sign into your Azure account or ",(0,r.kt)("a",{parentName:"li",href:"https://azure.microsoft.com/free/?WT.mc_id=javascript-57623-ayyonet"},"sign up for $200 free credit"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/azure/cognitive-services/cognitive-services-apis-create-account?WT.mc_id=javascript-57623-ayyonet"},"Create an Azure Cognitive Services or Specific service resource")," and get the key and endpoint information."),(0,r.kt)("li",{parentName:"ul"},"Install the related service\u2019s ",(0,r.kt)("a",{parentName:"li",href:"https://www.npmjs.com/~azure-sdk"},"JavaScript SDK")," and ",(0,r.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@azure/identity"},"Azure Identity SDK"),"."),(0,r.kt)("li",{parentName:"ul"},"Take a picture or upload an image."),(0,r.kt)("li",{parentName:"ul"},"Initialize an AzureCredentials object using your resource key."),(0,r.kt)("li",{parentName:"ul"},"Initialize a Client object with the Azure credential object & endpoint."),(0,r.kt)("li",{parentName:"ul"},"Use the client\u2019s analyze method to make an API call, wait for response.")),(0,r.kt)("p",null,"The class and method names change, like ",(0,r.kt)("inlineCode",{parentName:"p"},"DocumentAnalysisClient")," for Form Recognizer, ",(0,r.kt)("inlineCode",{parentName:"p"},"PredictionAPIClient")," for Custom Vision or ",(0,r.kt)("inlineCode",{parentName:"p"},"FaceClient")," for facial recognition. If you are training a custom model or using a specific model for form recognizer, you have couple of things that you will do but the most important part of it is taken care of by our SDK functionality."),(0,r.kt)("h2",{id:"how-to-analyze-a-document-using-form-recognizer"},"How to analyze a document using Form Recognizer"),(0,r.kt)("p",null,"Let\u2019s see the code in action for Form Recognizer using their ",(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@azure/ai-form-recognizer/v/4.0.0-beta.3"},"new JavaScript SDK"),". You can start with your ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/staticwebdev"},"choice of Static Web Apps templates")," or add the code to your existing application."),(0,r.kt)("p",null,"We need to import the SDK objects and your environment variables:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'import {\n    AzureKeyCredential,\n    DocumentAnalysisClient,\n    DocumentField,\n    FormRecognizerApiVersion,\n    PrebuiltModels,\n} from "@azure/ai-form-recognizer";\n\nconst key = process.env.FORM_RECOGNIZER_KEY || "";\nconst endpoint = process.env.FORM_RECOGNIZER_ENDPOINT || "";\n')),(0,r.kt)("p",null,"In your async callback function that starts the analysis, like a picture upload or click event callback, you will initialize the client object and poll until you have all the results from your analysis."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'async function Analyze() {\n    const client = new DocumentAnalysisClient(endpoint, new AzureKeyCredential(key));\n\n    const poller = await client.beginAnalyzeDocument("prebuilt-document", formUrl);\n\n    const { keyValuePairs, entities } = await poller.pollUntilDone();\n\n    //Do amazing things with the data.\n}\n')),(0,r.kt)("p",null,"Do something with the results, either sign in your user with their ID doc data or display the key value pairs to your user."),(0,r.kt)("h2",{id:"deploy-your-app-to-swa"},"Deploy your app to SWA"),(0,r.kt)("p",null,"If you are using one of the SWA templates, all you need to do is push your code to share it with the word."),(0,r.kt)("p",null,"If you are not using a template, you can use the ",(0,r.kt)("a",{parentName:"p",href:"https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-azurestaticwebapps"},"Azure Static Web Apps VS Code Extension")," or ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Azure/static-web-apps-cli"},"SWA CLI")," to ",(0,r.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/azure/static-web-apps/deploy-nextjs?WT.mc_id=javascript-57623-ayyonet"},"deploy your app to an")," SWA resource."),(0,r.kt)("p",null,"If you have a lot of images and would like to batch process or if you are doing multiple things with your image, like detect objects, read the text in the image and translate, you might want to use a ",(0,r.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/azure/azure-functions/?WT.mc_id=javascript-57623-ayyonet"},"Azure Functions App"),". Thankfully ",(0,r.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/azure/static-web-apps/functions-bring-your-own?WT.mc_id=javascript-57623-ayyonet"},"creating and API for your Static Web App")," is one of the features of the VSCode extension.\nCheck out my video for step by step instructions to deploy your SWA with Functions."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://youtu.be/VzML-6DClVU"},(0,r.kt)("img",{parentName:"a",src:"https://img.youtube.com/vi/VzML-6DClVU/0.jpg",alt:"How to add an API to your Azure Static Web App | Azure Tips and Tricks: Static Web Apps"}))),(0,r.kt)("p",null,"I hope you are inspired to enhance your applications with Azure Applied AI or Cognitive Services. Checkout the ",(0,r.kt)("a",{parentName:"p",href:"https://aka.ms/MSBuild2022"},"Build AI talk")," and ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Azure-Samples/papiro"},"demo")," to see what else you can do with AI."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://youtu.be/L10-LnbXxEo"},(0,r.kt)("img",{parentName:"a",src:"https://media.giphy.com/media/YSsOvebCkyeglsqsaQ/giphy.gif",alt:"MS Build 2022 AI Session Demo"}))),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://twitter.com/AysSomething"},"Reach out to me on twitter")," if you have questions, you want to share what you build or discuss your ideas."),(0,r.kt)("h2",{id:"exercise"},"Exercise"),(0,r.kt)("p",null,"Want to explore Azure Cognitive Service integrations with your Azure Static Web App? Try walking through one of these tutorials to get hands-on experience with development:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/samples/azure-samples/js-e2e-client-cognitive-services/build-and-deploy-a-static-web-app-to-azure/?WT.mc_id=javascript-68057-ayyonet"},"Build and deploy a SWA to analyse images")," - build a React application that analyzes an image using Azure Cognitive Services (Computer Vision) - deploy the app to Azure Static Web Apps."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"http://aka.ms/ws-customvision"},"Machine Learning With Custom Vision")," - complete this workshop where you learn to build a model to detect dog breeds using the Custom Vision API, then deploy it to Azure Static Web Apps with an Azure Functions backend.")))}d.isMDXComponent=!0},9949:function(e,t,a){t.Z=a.p+"assets/images/24-banner-ab6720f7206b937aa107fdbb0084e7e9.png"}}]);