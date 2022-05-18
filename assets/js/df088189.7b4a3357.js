"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[5521],{4137:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(n),h=i,m=d["".concat(p,".").concat(h)]||d[h]||c[h]||o;return n?a.createElement(m,r(r({ref:t},u),{},{components:n})):a.createElement(m,r({ref:t},u))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var s=2;s<o;s++)r[s]=n[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9481:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return p},default:function(){return h},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return c}});var a=n(7462),i=n(3366),o=(n(7294),n(4137)),r=["components"],l={slug:"devtools-ado",title:"#17: Multi-Stage Deploy with ADO",authors:["anthony"],tags:["swa","30days","dev-tools"],draft:!1},p=void 0,s={permalink:"/blog/devtools-ado",editUrl:"https://github.com/staticwebdev/30DaysOfSWA/tree/main/www/blog/2021-05-18.md",source:"@site/blog/2021-05-18.md",title:"#17: Multi-Stage Deploy with ADO",description:"Welcome to Week 3, Day 3 of #30DaysOfSWA!!",date:"2021-05-18T00:00:00.000Z",formattedDate:"May 18, 2021",tags:[{label:"swa",permalink:"/blog/tags/swa"},{label:"30days",permalink:"/blog/tags/30-days"},{label:"dev-tools",permalink:"/blog/tags/dev-tools"}],readingTime:10.27,truncated:!1,authors:[{name:"Anthony Chu",title:"Senior PM @Microsoft",url:"https://github.com/anthonychu",imageURL:"https://github.com/anthonychu.png",key:"anthony"}],frontMatter:{slug:"devtools-ado",title:"#17: Multi-Stage Deploy with ADO",authors:["anthony"],tags:["swa","30days","dev-tools"],draft:!1},nextItem:{title:"#16: Test Automation with Playwright",permalink:"/blog/devtools-playwright"}},u={authorsImageUrls:[void 0]},c=[{value:"What We&#39;ll Cover",id:"what-well-cover",level:2},{value:"Sample application",id:"sample-application",level:2},{value:"Create a static web app and deployment pipeline",id:"create-a-static-web-app-and-deployment-pipeline",level:2},{value:"Create Azure Pipelines environments",id:"create-azure-pipelines-environments",level:2},{value:"Protect Azure Static Web Apps environments with a password",id:"protect-azure-static-web-apps-environments-with-a-password",level:2},{value:"Configure the multi-stage pipeline",id:"configure-the-multi-stage-pipeline",level:2},{value:"Stage 1: build the app",id:"stage-1-build-the-app",level:3},{value:"Stage 2: deploy to staging and run Playwright tests",id:"stage-2-deploy-to-staging-and-run-playwright-tests",level:3},{value:"Stage 3: deploy to production",id:"stage-3-deploy-to-production",level:3},{value:"Run the multi-stage pipeline",id:"run-the-multi-stage-pipeline",level:2},{value:"A closer look",id:"a-closer-look",level:2},{value:"Azure Static Web Apps environments",id:"azure-static-web-apps-environments",level:3},{value:"Playwright tests",id:"playwright-tests",level:3},{value:"Summary",id:"summary",level:2},{value:"Exercise",id:"exercise",level:2},{value:"Resources",id:"resources",level:2}],d={toc:c};function h(e){var t=e.components,l=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,a.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Welcome to ",(0,o.kt)("inlineCode",{parentName:"p"},"Week 3, Day 3")," of ",(0,o.kt)("strong",{parentName:"p"},"#30DaysOfSWA"),"!! "),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"From Microsoft Tech Community")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Check out the canonical version of this post on the ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://techcommunity.microsoft.com/t5/apps-on-azure-blog/multi-stage-azure-static-web-apps-deployments-with-azure-devops/ba-p/3390625"},"Apps On Azure"))," Tech Community Blog along with other articles on the topic of ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://techcommunity.microsoft.com/t5/apps-on-azure-blog/bg-p/AppsonAzureBlog/label-name/Web%20Apps"},"Web Apps"))))),(0,o.kt)("h2",{id:"what-well-cover"},"What We'll Cover"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Build SWA with Azure Functions API + Playwright Tests"),(0,o.kt)("li",{parentName:"ul"},"Deploy SWA to staging environment"),(0,o.kt)("li",{parentName:"ul"},"Automate validation of staged app with Playwright"),(0,o.kt)("li",{parentName:"ul"},"Wait for manual approval"),(0,o.kt)("li",{parentName:"ul"},"Deploy to production"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Exercise.")," Explore the ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/anthonychu/swa-devops-pipeline-demo"},"Demo Application Source")," and try it out!")),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(1108).Z,width:"1000",height:"420"})),(0,o.kt)("p",null,"Azure Static Web Apps recently introduced the ability to automatically configure an Azure DevOps pipeline to build and deploy your app. It's a great way to get your app up and running quickly."),(0,o.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/4JkfeZp7aDk",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),(0,o.kt)("p",null,"For production applications, it's common to first deploy an app to staging environment(s) prior to deploying to production. In this article, we'll walk through how to configure a robust Azure DevOps pipeline that will:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Build an app, Azure Functions API, and Playwright tests"),(0,o.kt)("li",{parentName:"ul"},"Deploy the app to a staging environment"),(0,o.kt)("li",{parentName:"ul"},"Automatically validate the staging app with the Playwright tests"),(0,o.kt)("li",{parentName:"ul"},"Wait for a manual approval"),(0,o.kt)("li",{parentName:"ul"},"Deploy your app to production")),(0,o.kt)("h2",{id:"sample-application"},"Sample application"),(0,o.kt)("p",null,"We'll use a .NET 6 full-stack application. "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Frontend: Blazor WebAssembly"),(0,o.kt)("li",{parentName:"ul"},"Backend: Azure Functions"),(0,o.kt)("li",{parentName:"ul"},"Tests: Playwright")),(0,o.kt)("p",null,"To follow along, import the repository into your Azure DevOps project. You can use similar steps for a Node.js app."),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),(0,o.kt)("strong",{parentName:"h5"},"Source Code Available"))),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Check out the code at: ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://github.com/anthonychu/swa-devops-pipeline-demo"},"@anthonychu/swa-devops-pipeline-demo")),"."))),(0,o.kt)("h2",{id:"create-a-static-web-app-and-deployment-pipeline"},"Create a static web app and deployment pipeline"),(0,o.kt)("p",null,"Recently, Azure Static Web Apps added the ability to ",(0,o.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/azure/static-web-apps/get-started-portal?pivots=azure-devops"},"generate an Azure DevOps pipeline")," to deploy your app."),(0,o.kt)("p",null,"You can create a static web app and the deployment pipeline in a single step."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"In the Azure portal, search for and create a new static web app.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},'During the creation process, select "Azure DevOps" as the deployment source and select the DevOps repository and branch that contains the app.'),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/3982077/168908827-22dd512a-cec7-4e27-aca4-993428f2a03e.png",alt:"Create an app with Azure DevOps"}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},'In the build presets, select "Blazor". The pre-populates the app and API folder locations.'),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/3982077/168909032-b817a631-6e74-4739-8c4a-1ff480f955a3.png",alt:"Select Blazor preset"})))),(0,o.kt)("p",null,"When you create the app, a new pipeline YAML file will be created in the repository. It'll automatically run. It takes a few minutes to build and deploy the app."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/3982077/168909383-0d275e2f-15ae-40e8-aa2d-56a208f7a6f4.png",alt:"Location of the generated build pipeline YAML file"})),(0,o.kt)("p",null,"Open the pipeline YAML file in your browser or locally in an editor to see its contents. It contains a single ",(0,o.kt)("inlineCode",{parentName:"p"},"AzureStaticWebApp")," task that automatically builds and deploys the app."),(0,o.kt)("h2",{id:"create-azure-pipelines-environments"},"Create Azure Pipelines environments"),(0,o.kt)("p",null,"Azure Pipelines allows you to define environments. Environments are useful for adding manual approvals to your pipeline."),(0,o.kt)("p",null,"We'll create two environments \u2014 Staging and Production. They'll correspond to the two Azure Static Web Apps environments we'll deploy to."),(0,o.kt)("p",null,'To create a Pipelines environment, select "Environments" under Pipelines.'),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/3982077/168909775-61e3e243-c298-4fcf-a5ba-8af0a94a7a5d.png",alt:"Open environments"})),(0,o.kt)("p",null,"Create one named \"Staging\". Because you don't need a manual approval for this stage, you don't to configure anything else."),(0,o.kt)("p",null,'Next, create a new environment named "Production". Because we want to require a manual approval before deploying to production, you can configure the environment to require a manual approval.'),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},'In the environment\'s "Approvals and checks", select "Approvals".')),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Add yourself as an approver and create the approval policy."))),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/3982077/168910157-d32f767f-c608-4047-b0f5-66b7e4beb2f2.png",alt:"Create an approval policy"})),(0,o.kt)("p",null,"The pipeline you'll update later will reference these environments."),(0,o.kt)("h2",{id:"protect-azure-static-web-apps-environments-with-a-password"},"Protect Azure Static Web Apps environments with a password"),(0,o.kt)("p",null,"Azure Static Web Apps provides preview environments to let you test out your app before deploying to production."),(0,o.kt)("p",null,"Preview environments were intially available for pull requests in GitHub. Recently, Static Web Apps introduced the ability to arbitrary define ",(0,o.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/azure/static-web-apps/named-environments"},"named preview environments"),'. For instance, we can create an environment named "Staging".'),(0,o.kt)("p",null,"Preview environments are public by default. This is great for open source projects, but sometimes we want to protect them from public access."),(0,o.kt)("p",null,"You can add password protection to your app's preview environments."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"In the Azure portal, open your static web app.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},'In "Configuration", select the "General settings" tab.')),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},'Select "Protect staging environments only" and enter a password.'),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/3982077/168910485-02aacade-3961-41fd-aa9c-54cd14df5aab.png",alt:"Protect staging environments only"})))),(0,o.kt)("p",null,"You also have the option to protect all environments. But in this app, we want the production environment to be accessible to the public."),(0,o.kt)("h2",{id:"configure-the-multi-stage-pipeline"},"Configure the multi-stage pipeline"),(0,o.kt)("p",null,"Now that we've configured the Azure Pipelines environments and password protection, we can configure the pipeline."),(0,o.kt)("p",null,"Open the pipeline YAML file in your browser or locally in an editor. Replace its contents the contents of ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/anthonychu/swa-devops-pipeline-demo/blob/main/azure-pipelines.yml"},"this file"),"."),(0,o.kt)("p",null,"We'll walk through the different parts of the pipeline. It has 3 main stages: build, deploy to staging, and deploy to production."),(0,o.kt)("h3",{id:"stage-1-build-the-app"},"Stage 1: build the app"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"trigger:\n- main\n\npool:\n  vmImage: ubuntu-latest\n\nstages:\n\n- stage: Build\n\n  jobs:\n  - job: build\n    displayName: Build app\n\n    steps:\n    \n    - task: UseDotNet@2\n      displayName: Install .NET SDK\n      inputs:\n        packageType: 'sdk'\n        version: '6.0.x'\n        \n    - script: |    \n        dotnet publish -c Release -o \"$(Build.ArtifactStagingDirectory)/frontend\"\n      displayName: Build Blazor frontend\n      workingDirectory: $(System.DefaultWorkingDirectory)/Client\n      \n    - script: |  \n        dotnet publish -c Release -o \"$(Build.ArtifactStagingDirectory)/api\"\n      displayName: Build Azure Functions API\n      workingDirectory: $(System.DefaultWorkingDirectory)/Api\n      \n    - script: |\n        dotnet build -c Release -o \"$(Build.ArtifactStagingDirectory)/tests\"\n      displayName: Build Playwright tests\n      workingDirectory: $(System.DefaultWorkingDirectory)/PlaywrightTests\n\n    - task: PublishBuildArtifacts@1\n      displayName: Publish artifacts\n      inputs:\n        PathtoPublish: '$(Build.ArtifactStagingDirectory)'\n        ArtifactName: 'drop'\n        publishLocation: 'Container'\n")),(0,o.kt)("p",null,"The pipeline triggers on any changes to the ",(0,o.kt)("inlineCode",{parentName:"p"},"main")," branch. If your app uses a different branch, you can change it."),(0,o.kt)("p",null,"The pipeline then builds the app, Azure Functions API, and Playwright tests. It then outputs the artifacts. The same build artifacts are deployed to all environments. This ensures that the app you tested in other environments is the same one you're deploying to production."),(0,o.kt)("h3",{id:"stage-2-deploy-to-staging-and-run-playwright-tests"},"Stage 2: deploy to staging and run Playwright tests"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"- stage: deploy_staging\n  displayName: Deploy to staging\n\n  jobs:\n    - deployment: deploy\n      displayName: Deploy and test\n      environment: Staging\n      variables:\n      # Change the variable group name to match the one in the generated pipeline\n      - group: Azure-Static-Web-Apps-calm-coast-0df39b910-variable-group\n      strategy:\n        runOnce:\n          deploy:\n            steps:\n\n            - download: none\n            - checkout: none\n\n            - task: DownloadBuildArtifacts@1\n              displayName: Download artifacts\n              inputs:\n                buildType: current\n                downloadType: single\n                artifactName: drop\n                downloadPath: $(System.ArtifactsDirectory)\n\n            - task: AzureStaticWebApp@0\n              displayName: Deploy to staging environment\n              inputs:\n                app_location: frontend/wwwroot\n                api_location: api\n                skip_app_build: true\n                skip_api_build: true\n                verbose: true\n                azure_static_web_apps_api_token: $(AZURE_STATIC_WEB_APPS_API_TOKEN_CALM_COAST_0DF39B910)\n                deployment_environment: staging\n                workingDirectory: $(System.ArtifactsDirectory)/drop\n\n            - task: UseDotNet@2\n              displayName: Install .NET SDK\n              inputs:\n                packageType: 'sdk'\n                version: '6.0.x'\n\n            - script: |\n                chmod -R a+x $(System.ArtifactsDirectory)/drop/tests\n                sudo --preserve-env=PLAYWRIGHT_BROWSERS_PATH pwsh $(System.ArtifactsDirectory)/drop/tests/playwright.ps1 install --with-deps chromium\n                dotnet test $(System.ArtifactsDirectory)/drop/tests/PlaywrightTests.dll --logger trx\n              displayName: Run Playwright tests on staging app\n              env:\n                PLAYWRIGHT_BROWSERS_PATH: $(Build.SourcesDirectory)/browsers\n                LOGIN_PASSWORD: $(LOGIN_PASSWORD)\n            \n            - task: PublishTestResults@2\n              condition: succeededOrFailed()\n              inputs:\n                testRunner: VSTest\n                testResultsFiles: '**/*.trx'\n")),(0,o.kt)("p",null,'This is the most complex stage. Note that it references the "Staging" environment we created in the Azure Pipeline. It also references the variable group that was automatically generated when the static web app was first created. Change its name to match the variable group in the generated pipeline.'),(0,o.kt)("p",null,"This stage starts by downloading the artifacts from the build stage."),(0,o.kt)("p",null,"Next, it uses the ",(0,o.kt)("inlineCode",{parentName:"p"},"AzureStaticWebApp")," task to deploy the app to the staging environment."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"skip_app_build")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"skip_api_build")," are set to ",(0,o.kt)("inlineCode",{parentName:"li"},"true")," because the app and API artifacts were already built and don't need to be built again."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"deployment_environment")," is set to ",(0,o.kt)("inlineCode",{parentName:"li"},"staging")," because we want to deploy to the staging environment.")),(0,o.kt)("p",null,"After the app is deployed, the pipeline installs the .NET SDK and runs a script that installs the required dependencies for Playwright. Playwright is a testing framework that automates running tests in a browser."),(0,o.kt)("p",null,"After the dependencies are installed, the script runs the Playwright tests using the ",(0,o.kt)("inlineCode",{parentName:"p"},"dotnet test")," command."),(0,o.kt)("p",null,"One thing to note is that we need to configure a secret variable named ",(0,o.kt)("inlineCode",{parentName:"p"},"LOGIN_PASSWORD"),". This is the password that the user will enter when they log into the staging environment. The Playwright tests will use this password to log in when it runs tests on the staging environment."),(0,o.kt)("p",null,"The last step in the stage publishes the test results."),(0,o.kt)("h3",{id:"stage-3-deploy-to-production"},"Stage 3: deploy to production"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"- stage: deploy_production\n  displayName: Deploy to production\n\n  jobs:\n  - deployment: deploy\n    displayName: Deploy\n    environment: Production\n    variables:\n    # Change the variable group name to match the one in the generated pipeline\n    - group: Azure-Static-Web-Apps-calm-coast-0df39b910-variable-group\n    strategy:\n      runOnce:\n        deploy:\n          steps:\n          - download: none\n          - checkout: none\n\n          - task: DownloadBuildArtifacts@1\n            displayName: Download artifacts\n            inputs:\n              buildType: current\n              downloadType: single\n              artifactName: drop\n              downloadPath: $(System.ArtifactsDirectory)\n\n          - task: AzureStaticWebApp@0\n            displayName: Deploy to production environment\n            inputs:\n              app_location: frontend/wwwroot\n              api_location: api\n              skip_app_build: true\n              skip_api_build: true\n              verbose: true\n              azure_static_web_apps_api_token: $(AZURE_STATIC_WEB_APPS_API_TOKEN_CALM_COAST_0DF39B910)\n              workingDirectory: $(System.ArtifactsDirectory)/drop\n")),(0,o.kt)("p",null,'This stage references the "Production" environment in the Azure Pipeline. Because we configured this environment to require approval, this will trigger a manual approval step before this stage is run.'),(0,o.kt)("p",null,"Like the previous stage, this stage downloads the artifacts and deploys them with the ",(0,o.kt)("inlineCode",{parentName:"p"},"AzureStaticWebApp")," task. This time, no ",(0,o.kt)("inlineCode",{parentName:"p"},"deployment_environment")," is set because we want to deploy to the production environment of the static web app."),(0,o.kt)("h2",{id:"run-the-multi-stage-pipeline"},"Run the multi-stage pipeline"),(0,o.kt)("p",null,"Now that the pipeline is set up, you can run it by saving the file. If you edited it locally, don't forget to push it to your Azure DevOps repo."),(0,o.kt)("p",null,'After the "Deploy to staging" stage is run, you should see that the Playwright tests have been run to validate the staging environment and the results are published.'),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/3982077/168911185-3eea2e66-0aaf-4a86-af65-956618abc6d3.png",alt:"Test results"})),(0,o.kt)("p",null,'The pipeline run is paused because the "Deploy to production" stage requires an approval. '),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/3982077/168912243-6450a5fa-6e95-4ac8-8f65-b1a7bc8d3e6b.png",alt:"Approval step"})),(0,o.kt)("p",null,"When you approve the pipeline, the pipeline will run again."),(0,o.kt)("p",null,"After approval, the app is deployed to production."),(0,o.kt)("h2",{id:"a-closer-look"},"A closer look"),(0,o.kt)("p",null,"Before we end this article, we want to dive a bit deeper into the Static Web Apps environments and the Playwright tests."),(0,o.kt)("h3",{id:"azure-static-web-apps-environments"},"Azure Static Web Apps environments"),(0,o.kt)("p",null,"To see the environments you've created, click your static web app's \"Environments\" tab in the Azure portal. You should see the production and staging environments."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/3982077/168911293-571d1057-c36b-4ff2-88df-3cdf20154318.png",alt:"Static Web Apps Environments"})),(0,o.kt)("h3",{id:"playwright-tests"},"Playwright tests"),(0,o.kt)("p",null,"The Playwright tests are located in the ",(0,o.kt)("inlineCode",{parentName:"p"},"PlaywrightTests")," project and they're written in C#."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://playwright.dev"},"Playwright")," can be used to automate testing of web apps using real browsers. The tests in the example use Chrome (Chromium), but Playwright also supports Firefox, WebKit, and Microsoft Edge."),(0,o.kt)("p",null,'This is an example of a Playwright test in C#. It navigates the browser to the app\'s homepage, clicks on the "Fetch data" link, and confirms that the data is fetched from the backend API and it is rendered successfully.'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},'[Test]\npublic async Task ShouldLoadWeather()\n{\n    await using var browser = await Playwright.Chromium.LaunchAsync();\n    var page = await browser.NewPageAsync();\n    await GoToHomePage(page);\n\n    await page.ClickAsync("a[href=\'fetchdata\']");\n\n    var h1 = await page.QuerySelectorAsync("div#app main h1");\n    var h1Text = h1 == null ? "" : await h1.TextContentAsync();\n    Assert.AreEqual("Weather forecast", h1Text);\n\n    var rowsSelector = "div#app main table tbody tr";\n    // wait for table to have rows\n    await page.WaitForFunctionAsync($"document.querySelectorAll(\'{rowsSelector}\').length");\n    var rows = await page.QuerySelectorAllAsync(rowsSelector);\n    Assert.AreEqual(5, rows.Count);\n}\n')),(0,o.kt)("p",null,"The tests use the ",(0,o.kt)("inlineCode",{parentName:"p"},"AZURESTATICWEBAPP_STATIC_WEB_APP_URL")," environment variable to determine the URL of the app to test. In an Azure Pipeline, this variable is set by the Azure Static Web Apps task after a successful deployment. Because the tests run in the pipeline after a deployment to the staging environment, the variable contains the URL of the staging Static Web Apps environment."),(0,o.kt)("p",null,"Another interesting aspect of the tests is the following code for navigating to the homepage:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},'private async Task GoToHomePage(IPage page)\n{\n    await page.GotoAsync($"{siteBaseUrl}/");\n    var homePageLocatorTask = page.Locator("text=Hello, world!").WaitForAsync();\n    var passwordPageLocatorTask = page.Locator("text=Password protected").WaitForAsync();\n    var isPasswordPage = (await Task.WhenAny(homePageLocatorTask, passwordPageLocatorTask)) == passwordPageLocatorTask;\n\n    if (isPasswordPage)\n    {\n        System.Console.WriteLine("Found password page, logging in...");\n        var passwordInput = await page.QuerySelectorAsync("input[type=password]");\n        if (passwordInput == null)\n        {\n            throw new Exception("Could not find password input");\n        }\n        await passwordInput.TypeAsync(sitePassword);\n        await page.ClickAsync("button");\n        await page.Locator("text=Hello, world!").WaitForAsync();\n    }\n}\n')),(0,o.kt)("p",null,"This code automatically logs in to the staging environment if the browser session is unauthenticated. At run-time, the ",(0,o.kt)("inlineCode",{parentName:"p"},"sitePassword")," variable is set to the value of the ",(0,o.kt)("inlineCode",{parentName:"p"},"LOGIN_PASSWORD")," secret variable."),(0,o.kt)("h2",{id:"summary"},"Summary"),(0,o.kt)("p",null,"With the addition of features like named preview environments and automatic pipeline generation, it's now possible to configure complex, robust pipelines for building and deploying to Azure Static Web Apps from Azure DevOps."),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"exercise"},"Exercise"),(0,o.kt)("p",null,"The demo uses a .NET 6 full-stack application with a Blazor WebAssembly frontend, an Azure Functions backend, and integrated Playwright tests. "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Explore ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/anthonychu/swa-devops-pipeline-demo"},"the source code here"),"."),(0,o.kt)("li",{parentName:"ul"},"Import the repository into your Azure DevOps project and follow the tutorial.")),(0,o.kt)("h2",{id:"resources"},"Resources"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://youtu.be/4JkfeZp7aDk"},"Video"),": Multi-environment deployments with Azure DevOps & SWA"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/anthonychu/swa-devops-pipeline-demo"},"Repo")," with source code for demo")))}h.isMDXComponent=!0},1108:function(e,t,n){t.Z=n.p+"assets/images/17-banner-2d8ecefdc1683370295255b3fa8a0df3.png"}}]);