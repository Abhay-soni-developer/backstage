/*! For license information please see 6229684a.424e16cb.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[529526],{603905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var o=n(667294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),l=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=l(e.components);return o.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},g=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=l(n),g=a,h=u["".concat(s,".").concat(g)]||u[g]||d[g]||r;return n?o.createElement(h,c(c({ref:t},p),{},{components:n})):o.createElement(h,c({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,c=new Array(r);c[0]=g;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:a,c[1]=i;for(var l=2;l<r;l++)c[l]=n[l];return o.createElement.apply(null,c)}return o.createElement.apply(null,n)}g.displayName="MDXCreateElement"},897653:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>c,metadata:()=>s,toc:()=>p});n(827378);var o=n(603905);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},a.apply(this,arguments)}function r(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const c={id:"getting-started",title:"Getting Started",description:"Getting Started Documentation"},i=void 0,s={unversionedId:"features/techdocs/getting-started",id:"features/techdocs/getting-started",title:"Getting Started",description:"Getting Started Documentation",source:"@site/../docs/features/techdocs/getting-started.md",sourceDirName:"features/techdocs",slug:"/features/techdocs/getting-started",permalink:"/docs/features/techdocs/getting-started",draft:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/features/techdocs/getting-started.md",tags:[],version:"current",frontMatter:{id:"getting-started",title:"Getting Started",description:"Getting Started Documentation"},sidebar:"docs",previous:{title:"Overview",permalink:"/docs/features/techdocs/"},next:{title:"Concepts",permalink:"/docs/features/techdocs/concepts"}},l={},p=[{value:"Adding TechDocs frontend plugin",id:"adding-techdocs-frontend-plugin",level:2},{value:"Adding TechDocs Backend plugin",id:"adding-techdocs-backend-plugin",level:2},{value:"Setting the configuration",id:"setting-the-configuration",level:2},{value:"Should TechDocs Backend generate docs?",id:"should-techdocs-backend-generate-docs",level:3},{value:"Choosing storage (publisher)",id:"choosing-storage-publisher",level:3},{value:"Disabling Docker in Docker situation (Optional)",id:"disabling-docker-in-docker-situation-optional",level:3},{value:"Running Backstage locally",id:"running-backstage-locally",level:2},{value:"Additional reading",id:"additional-reading",level:2}],u={toc:p};function d(e){var{components:t}=e,c=r(e,["components"]);return(0,o.kt)("wrapper",a({},u,c,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"TechDocs functions as a plugin to Backstage, so you will need to use Backstage\nto use TechDocs."),(0,o.kt)("p",null,"If you haven't setup Backstage already, start\n",(0,o.kt)("a",a({parentName:"p"},{href:"/docs/getting-started/"}),"here"),"."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"If you used ",(0,o.kt)("inlineCode",{parentName:"p"},"npx @backstage/create-app"),", TechDocs may already be present."),(0,o.kt)("p",{parentName:"blockquote"},"You should skip to ",(0,o.kt)("a",a({parentName:"p"},{href:"#setting-the-configuration"}),(0,o.kt)("inlineCode",{parentName:"a"},"Setting the Configuration")),"\nbelow.")),(0,o.kt)("h2",a({},{id:"adding-techdocs-frontend-plugin"}),"Adding TechDocs frontend plugin"),(0,o.kt)("p",null,"The first step is to add the TechDocs plugin to your Backstage application.\nNavigate to your new Backstage application directory. And then to your\n",(0,o.kt)("inlineCode",{parentName:"p"},"packages/app")," directory, and install the ",(0,o.kt)("inlineCode",{parentName:"p"},"@backstage/plugin-techdocs")," package."),(0,o.kt)("pre",null,(0,o.kt)("code",a({parentName:"pre"},{className:"language-bash"}),"# From your Backstage root directory\nyarn add --cwd packages/app @backstage/plugin-techdocs\n")),(0,o.kt)("p",null,"Once the package has been installed, you need to import the plugin in your app."),(0,o.kt)("p",null,"In ",(0,o.kt)("inlineCode",{parentName:"p"},"packages/app/src/App.tsx"),", import ",(0,o.kt)("inlineCode",{parentName:"p"},"TechDocsPage")," and add the following to\n",(0,o.kt)("inlineCode",{parentName:"p"},"FlatRoutes"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",a({parentName:"pre"},{className:"language-tsx",metastring:'title="packages/app/src/App.tsx"',title:'"packages/app/src/App.tsx"'}),'import {\n  DefaultTechDocsHome,\n  TechDocsIndexPage,\n  TechDocsReaderPage,\n} from \'@backstage/plugin-techdocs\';\n\nconst AppRoutes = () => {\n  <FlatRoutes>\n    {/* ... other plugin routes */}\n    <Route path="/docs" element={<TechDocsIndexPage />}>\n      <DefaultTechDocsHome />\n    </Route>\n    <Route\n      path="/docs/:namespace/:kind/:name/*"\n      element={<TechDocsReaderPage />}\n    />\n  </FlatRoutes>;\n};\n')),(0,o.kt)("p",null,"It would be nice to decorate your pages with something else... Having a link that redirects you to a new issue page when you highlight text in your documentation would be really cool, right? Let's learn how to do this using the TechDocs Addon Framework!"),(0,o.kt)("p",null,"With the ",(0,o.kt)("a",a({parentName:"p"},{href:"https://backstage.io/docs/features/techdocs/addons#installing-and-using-addons"}),"TechDocs Addon framework"),", you can render React components in documentation pages and these Addons can be provided by any Backstage plugin. The framework is exported by the ",(0,o.kt)("a",a({parentName:"p"},{href:"https://www.npmjs.com/package/@backstage/plugin-techdocs-react"}),"@backstage/plugin-techdocs-react")," package and there is a ",(0,o.kt)("inlineCode",{parentName:"p"},"<ReportIssue />")," Addon in the ",(0,o.kt)("a",a({parentName:"p"},{href:"https://www.npmjs.com/package/@backstage/plugin-techdocs-module-addons-contrib"}),"@backstage/plugin-techdocs-module-addons-contrib")," package for you to use once you have these two dependencies installed:"),(0,o.kt)("pre",null,(0,o.kt)("code",a({parentName:"pre"},{className:"language-tsx"}),"import {\n  DefaultTechDocsHome,\n  TechDocsIndexPage,\n  TechDocsReaderPage,\n} from '@backstage/plugin-techdocs';\n/* highlight-add-start */\nimport { TechDocsAddons } from '@backstage/plugin-techdocs-react';\nimport { ReportIssue } from '@backstage/plugin-techdocs-module-addons-contrib';\n/* highlight-add-end */\n\nconst AppRoutes = () => {\n  <FlatRoutes>\n    {/* ... other plugin routes */}\n    <Route path=\"/docs\" element={<TechDocsIndexPage />}>\n      <DefaultTechDocsHome />\n    </Route>\n    <Route\n      path=\"/docs/:namespace/:kind/:name/*\"\n      element={<TechDocsReaderPage />}\n    >\n      {/* highlight-add-start */}\n      <TechDocsAddons>\n        <ReportIssue />\n      </TechDocsAddons>\n      {/* highlight-add-end */}\n    </Route>\n  </FlatRoutes>;\n};\n")),(0,o.kt)("p",null,"I know, you're curious to see how it looks, aren't you? See the image below:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"TechDocs Report Issue Add-on",src:n(155385).Z,width:"666",height:"115"})),(0,o.kt)("p",null,"By clicking the open new issue button, you will be redirected to the new issue page according to the source code provider you are using:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"TechDocs Report Issue Template",src:n(124973).Z,width:"738",height:"514"})),(0,o.kt)("p",null,"That's it! Now, we need the TechDocs Backend plugin for the frontend to work."),(0,o.kt)("h2",a({},{id:"adding-techdocs-backend-plugin"}),"Adding TechDocs Backend plugin"),(0,o.kt)("p",null,"Navigate to ",(0,o.kt)("inlineCode",{parentName:"p"},"packages/backend")," of your Backstage app, and install the\n",(0,o.kt)("inlineCode",{parentName:"p"},"@backstage/plugin-techdocs-backend")," package."),(0,o.kt)("pre",null,(0,o.kt)("code",a({parentName:"pre"},{className:"language-bash"}),"# From your Backstage root directory\nyarn add --cwd packages/backend @backstage/plugin-techdocs-backend\n")),(0,o.kt)("p",null,"Create a file called ",(0,o.kt)("inlineCode",{parentName:"p"},"techdocs.ts")," inside ",(0,o.kt)("inlineCode",{parentName:"p"},"packages/backend/src/plugins/")," and\nadd the following"),(0,o.kt)("pre",null,(0,o.kt)("code",a({parentName:"pre"},{className:"language-typescript"}),"import { DockerContainerRunner } from '@backstage/backend-common';\nimport {\n  createRouter,\n  Generators,\n  Preparers,\n  Publisher,\n} from '@backstage/plugin-techdocs-backend';\nimport Docker from 'dockerode';\nimport { Router } from 'express';\nimport { PluginEnvironment } from '../types';\n\nexport default async function createPlugin(\n  env: PluginEnvironment,\n): Promise<Router> {\n  // Preparers are responsible for fetching source files for documentation.\n  const preparers = await Preparers.fromConfig(env.config, {\n    logger: env.logger,\n    reader: env.reader,\n  });\n\n  // Docker client (conditionally) used by the generators, based on techdocs.generators config.\n  const dockerClient = new Docker();\n  const containerRunner = new DockerContainerRunner({ dockerClient });\n\n  // Generators are used for generating documentation sites.\n  const generators = await Generators.fromConfig(env.config, {\n    logger: env.logger,\n    containerRunner,\n  });\n\n  // Publisher is used for\n  // 1. Publishing generated files to storage\n  // 2. Fetching files from storage and passing them to TechDocs frontend.\n  const publisher = await Publisher.fromConfig(env.config, {\n    logger: env.logger,\n    discovery: env.discovery,\n  });\n\n  // checks if the publisher is working and logs the result\n  await publisher.getReadiness();\n\n  return await createRouter({\n    preparers,\n    generators,\n    publisher,\n    logger: env.logger,\n    config: env.config,\n    discovery: env.discovery,\n    cache: env.cache,\n  });\n}\n")),(0,o.kt)("p",null,"You may need to install the ",(0,o.kt)("inlineCode",{parentName:"p"},"dockerode")," package. But you may already have it in\nyour backend since ",(0,o.kt)("a",a({parentName:"p"},{href:"/docs/features/software-templates/"}),"Scaffolder plugin")," also uses\nit."),(0,o.kt)("p",null,"See ",(0,o.kt)("a",a({parentName:"p"},{href:"/docs/features/techdocs/concepts"}),"Concepts")," and ",(0,o.kt)("a",a({parentName:"p"},{href:"/docs/features/techdocs/architecture"}),"TechDocs Architecture")," to\nlearn more about how preparers, generators and publishers work."),(0,o.kt)("p",null,"The final step is to import the techdocs backend plugin in Backstage app\nbackend. Add the following to your ",(0,o.kt)("inlineCode",{parentName:"p"},"packages/backend/src/index.ts"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",a({parentName:"pre"},{className:"language-typescript"}),"import techdocs from './plugins/techdocs';\n\n// .... main should already be present.\nasync function main() {\n  // ... other backend plugin envs\n  const techdocsEnv = useHotMemoize(module, () => createEnv('techdocs'));\n\n  // ... other backend plugin routes\n  apiRouter.use('/techdocs', await techdocs(techdocsEnv));\n}\n")),(0,o.kt)("p",null,"That's it! TechDocs frontend and backend have now been added to your Backstage\napp. Now let us tweak some configurations to suit your needs."),(0,o.kt)("h2",a({},{id:"setting-the-configuration"}),"Setting the configuration"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"See ",(0,o.kt)("a",a({parentName:"strong"},{href:"/docs/features/techdocs/configuration"}),"TechDocs Configuration Options")," for complete\nconfiguration reference.")),(0,o.kt)("h3",a({},{id:"should-techdocs-backend-generate-docs"}),"Should TechDocs Backend generate docs?"),(0,o.kt)("pre",null,(0,o.kt)("code",a({parentName:"pre"},{className:"language-yaml"}),"techdocs:\n  builder: 'local'\n")),(0,o.kt)("p",null,'Note that we recommend generating docs on CI/CD instead. Read more in the\n"Basic" and "Recommended" sections of the\n',(0,o.kt)("a",a({parentName:"p"},{href:"/docs/features/techdocs/architecture"}),"TechDocs Architecture"),". But if you want to get started quickly\nset ",(0,o.kt)("inlineCode",{parentName:"p"},"techdocs.builder")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"'local'")," so that TechDocs Backend is responsible for\ngenerating documentation sites. If set to ",(0,o.kt)("inlineCode",{parentName:"p"},"'external'"),", Backstage will assume\nthat the sites are being generated on each entity's CI/CD pipeline, and are\nbeing stored in a storage somewhere."),(0,o.kt)("p",null,"When ",(0,o.kt)("inlineCode",{parentName:"p"},"techdocs.builder")," is set to ",(0,o.kt)("inlineCode",{parentName:"p"},"'external'"),", TechDocs becomes more or less a\nread-only experience where it serves static files from a storage containing all\nthe generated documentation."),(0,o.kt)("h3",a({},{id:"choosing-storage-publisher"}),"Choosing storage (publisher)"),(0,o.kt)("p",null,"TechDocs needs to know where to store generated documentation sites and where to\nfetch the sites from. This is managed by a\n",(0,o.kt)("a",a({parentName:"p"},{href:"/docs/features/techdocs/concepts#techdocs-publisher"}),"Publisher"),". Examples: Google Cloud Storage,\nAmazon S3, or local filesystem of Backstage server."),(0,o.kt)("p",null,'It is okay to use the local filesystem in a "basic" setup when you are trying\nout Backstage for the first time. At a later time, review\n',(0,o.kt)("a",a({parentName:"p"},{href:"/docs/features/techdocs/using-cloud-storage"}),"Using Cloud Storage"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",a({parentName:"pre"},{className:"language-yaml"}),"techdocs:\n  builder: 'local'\n  publisher:\n    type: 'local'\n")),(0,o.kt)("h3",a({},{id:"disabling-docker-in-docker-situation-optional"}),"Disabling Docker in Docker situation (Optional)"),(0,o.kt)("p",null,"You can skip this if your ",(0,o.kt)("inlineCode",{parentName:"p"},"techdocs.builder")," is set to ",(0,o.kt)("inlineCode",{parentName:"p"},"'external'"),"."),(0,o.kt)("p",null,"The TechDocs Backend plugin runs a docker container with mkdocs installed to\ngenerate the frontend of the docs from source files (Markdown). If you are\ndeploying Backstage using Docker, this will mean that your Backstage Docker\ncontainer will try to run another Docker container for TechDocs Backend."),(0,o.kt)("p",null,"To avoid this problem, we have a configuration available. You can set a value in\nyour ",(0,o.kt)("inlineCode",{parentName:"p"},"app-config.yaml")," that tells the techdocs generator if it should run the\n",(0,o.kt)("inlineCode",{parentName:"p"},"local")," mkdocs or run it from ",(0,o.kt)("inlineCode",{parentName:"p"},"docker"),". This defaults to running as ",(0,o.kt)("inlineCode",{parentName:"p"},"docker")," if\nno config is provided."),(0,o.kt)("pre",null,(0,o.kt)("code",a({parentName:"pre"},{className:"language-yaml"}),"techdocs:\n  builder: 'local'\n  publisher:\n    type: 'local'\n  generator:\n    runIn: local\n")),(0,o.kt)("p",null,"Setting ",(0,o.kt)("inlineCode",{parentName:"p"},"generator.runIn")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"local")," means you will have to make sure your\nenvironment is compatible with techdocs."),(0,o.kt)("p",null,"You will have to install the ",(0,o.kt)("inlineCode",{parentName:"p"},"mkdocs")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"mkdocs-techdocs-core")," package from\npip, as well as ",(0,o.kt)("inlineCode",{parentName:"p"},"graphviz")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"plantuml")," from your OS package manager (e.g.\napt)."),(0,o.kt)("p",null,"You can do so by including the following lines right above ",(0,o.kt)("inlineCode",{parentName:"p"},"USER node")," of your\n",(0,o.kt)("inlineCode",{parentName:"p"},"Dockerfile"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",a({parentName:"pre"},{className:"language-Dockerfile"}),"RUN apt-get update && apt-get install -y python3 python3-pip\nRUN pip3 install mkdocs-techdocs-core==1.1.7\n")),(0,o.kt)("p",null,"Please be aware that the version requirement could change, you need to check our\n",(0,o.kt)("a",a({parentName:"p"},{href:"https://github.com/backstage/techdocs-container/blob/main/Dockerfile"}),(0,o.kt)("inlineCode",{parentName:"a"},"Dockerfile")),"\nand make sure to match with it."),(0,o.kt)("p",null,"Note: We recommend Python version 3.7 or higher."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Caveat: Please install the ",(0,o.kt)("inlineCode",{parentName:"p"},"mkdocs-techdocs-core")," package after all other\nPython packages. The order is important to make sure we get correct version of\nsome of the dependencies.")),(0,o.kt)("h2",a({},{id:"running-backstage-locally"}),"Running Backstage locally"),(0,o.kt)("p",null,"Start the frontend and the backend app by\n",(0,o.kt)("a",a({parentName:"p"},{href:"/docs/getting-started/running-backstage-locally"}),"running Backstage locally"),"."),(0,o.kt)("p",null,"Open your browser at ",(0,o.kt)("a",a({parentName:"p"},{href:"http://localhost:3000/docs/"}),"http://localhost:3000/docs/"),"\nto see all your documentation sites."),(0,o.kt)("h2",a({},{id:"additional-reading"}),"Additional reading"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",a({parentName:"li"},{href:"/docs/features/techdocs/creating-and-publishing"}),"Creating and publishing your docs")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",a({parentName:"li"},{href:"/docs/features/techdocs/"}),"Back to README"))))}d.isMDXComponent=!0},155385:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/report-issue-addon-8aa52607fc0b839c9e4188d18d70e31a.png"},124973:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/report-issue-template-ec7a2c568334e94d2f8ce6d0a8c9d5d9.png"},862525:e=>{var t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable;function a(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var o={};return"abcdefghijklmnopqrst".split("").forEach((function(e){o[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},o)).join("")}catch(a){return!1}}()?Object.assign:function(e,r){for(var c,i,s=a(e),l=1;l<arguments.length;l++){for(var p in c=Object(arguments[l]))n.call(c,p)&&(s[p]=c[p]);if(t){i=t(c);for(var u=0;u<i.length;u++)o.call(c,i[u])&&(s[i[u]]=c[i[u]])}}return s}},541535:(e,t,n)=>{var o=n(862525),a=60103,r=60106;var c=60109,i=60110,s=60112;var l=60115,p=60116;if("function"==typeof Symbol&&Symbol.for){var u=Symbol.for;a=u("react.element"),r=u("react.portal"),u("react.fragment"),u("react.strict_mode"),u("react.profiler"),c=u("react.provider"),i=u("react.context"),s=u("react.forward_ref"),u("react.suspense"),l=u("react.memo"),p=u("react.lazy")}var d="function"==typeof Symbol&&Symbol.iterator;function g(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},f={};function k(e,t,n){this.props=e,this.context=t,this.refs=f,this.updater=n||h}function m(){}function y(e,t,n){this.props=e,this.context=t,this.refs=f,this.updater=n||h}k.prototype.isReactComponent={},k.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(g(85));this.updater.enqueueSetState(this,e,t,"setState")},k.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},m.prototype=k.prototype;var b=y.prototype=new m;b.constructor=y,o(b,k.prototype),b.isPureReactComponent=!0;var v={current:null},w=Object.prototype.hasOwnProperty,N={key:!0,ref:!0,__self:!0,__source:!0};function D(e,t,n){var o,r={},c=null,i=null;if(null!=t)for(o in void 0!==t.ref&&(i=t.ref),void 0!==t.key&&(c=""+t.key),t)w.call(t,o)&&!N.hasOwnProperty(o)&&(r[o]=t[o]);var s=arguments.length-2;if(1===s)r.children=n;else if(1<s){for(var l=Array(s),p=0;p<s;p++)l[p]=arguments[p+2];r.children=l}if(e&&e.defaultProps)for(o in s=e.defaultProps)void 0===r[o]&&(r[o]=s[o]);return{$$typeof:a,type:e,key:c,ref:i,props:r,_owner:v.current}}function C(e){return"object"==typeof e&&null!==e&&e.$$typeof===a}var O=/\/+/g;function T(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function j(e,t,n,o,c){var i=typeof e;"undefined"!==i&&"boolean"!==i||(e=null);var s=!1;if(null===e)s=!0;else switch(i){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case a:case r:s=!0}}if(s)return c=c(s=e),e=""===o?"."+T(s,0):o,Array.isArray(c)?(n="",null!=e&&(n=e.replace(O,"$&/")+"/"),j(c,t,n,"",(function(e){return e}))):null!=c&&(C(c)&&(c=function(e,t){return{$$typeof:a,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(c,n+(!c.key||s&&s.key===c.key?"":(""+c.key).replace(O,"$&/")+"/")+e)),t.push(c)),1;if(s=0,o=""===o?".":o+":",Array.isArray(e))for(var l=0;l<e.length;l++){var p=o+T(i=e[l],l);s+=j(i,t,n,p,c)}else if(p=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=d&&e[d]||e["@@iterator"])?e:null}(e),"function"==typeof p)for(e=p.call(e),l=0;!(i=e.next()).done;)s+=j(i=i.value,t,n,p=o+T(i,l++),c);else if("object"===i)throw t=""+e,Error(g(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return s}function P(e,t,n){if(null==e)return e;var o=[],a=0;return j(e,o,"","",(function(e){return t.call(n,e,a++)})),o}function R(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var S={current:null};function x(){var e=S.current;if(null===e)throw Error(g(321));return e}},827378:(e,t,n)=>{n(541535)}}]);