/*! For license information please see 5de0d05e.6c3fa540.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[116816],{603905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(667294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=u(r),f=a,m=c["".concat(l,".").concat(f)]||c[f]||d[f]||o;return r?n.createElement(m,i(i({ref:t},p),{},{components:r})):n.createElement(m,i({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},966613:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>f,frontMatter:()=>s,metadata:()=>u,toc:()=>c});r(827378);var n=r(603905);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const s={id:"org",title:"Microsoft Azure Active Directory Organizational Data",sidebar_label:"Org Data",description:"Importing users and groups from Microsoft Azure Active Directory into Backstage"},l=void 0,u={unversionedId:"integrations/azure/org",id:"integrations/azure/org",title:"Microsoft Azure Active Directory Organizational Data",description:"Importing users and groups from Microsoft Azure Active Directory into Backstage",source:"@site/../docs/integrations/azure/org.md",sourceDirName:"integrations/azure",slug:"/integrations/azure/org",permalink:"/docs/integrations/azure/org",draft:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/integrations/azure/org.md",tags:[],version:"current",frontMatter:{id:"org",title:"Microsoft Azure Active Directory Organizational Data",sidebar_label:"Org Data",description:"Importing users and groups from Microsoft Azure Active Directory into Backstage"},sidebar:"docs",previous:{title:"Discovery",permalink:"/docs/integrations/azure/discovery"},next:{title:"Locations",permalink:"/docs/integrations/bitbucketCloud/locations"}},p={},c=[{value:"Installation",id:"installation",level:2},{value:"Authenticating with Microsoft Graph",id:"authenticating-with-microsoft-graph",level:2},{value:"Local Development",id:"local-development",level:3},{value:"App Registration",id:"app-registration",level:3},{value:"Managed Identity",id:"managed-identity",level:3},{value:"Filtering imported Users and Groups",id:"filtering-imported-users-and-groups",level:2},{value:"Groups",id:"groups",level:3},{value:"Users",id:"users",level:3},{value:"Customizing Transformation",id:"customizing-transformation",level:2},{value:"Troubleshooting",id:"troubleshooting",level:2},{value:"No data",id:"no-data",level:3},{value:"Authentication / Token Errors",id:"authentication--token-errors",level:3},{value:"Error while reading users from Microsoft Graph: Authorization_RequestDenied - Insufficient privileges to complete the operation",id:"error-while-reading-users-from-microsoft-graph-authorization_requestdenied---insufficient-privileges-to-complete-the-operation",level:3}],d={toc:c};function f(e){var{components:t}=e,r=i(e,["components"]);return(0,n.kt)("wrapper",o(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){a(e,t,r[t])}))}return e}({},d,r),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"The Backstage catalog can be set up to ingest organizational data - users and\nteams - directly from a tenant in Microsoft Azure Active Directory via the\nMicrosoft Graph API."),(0,n.kt)("h2",{id:"installation"},"Installation"),(0,n.kt)("p",null,"The package is not installed by default, therefore you have to add ",(0,n.kt)("inlineCode",{parentName:"p"},"@backstage/plugin-catalog-backend-module-msgraph")," to your backend package."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"# From your Backstage root directory\nyarn add --cwd packages/backend @backstage/plugin-catalog-backend-module-msgraph\n")),(0,n.kt)("p",null,"Next add the basic configuration to ",(0,n.kt)("inlineCode",{parentName:"p"},"app-config.yaml")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="app-config.yaml"',title:'"app-config.yaml"'},"catalog:\n  providers:\n    microsoftGraphOrg:\n      default:\n        tenantId: ${AZURE_TENANT_ID}\n        user:\n          filter: accountEnabled eq true and userType eq 'member'\n        group:\n          filter: >\n            securityEnabled eq false\n            and mailEnabled eq true\n            and groupTypes/any(c:c+eq+'Unified')\n")),(0,n.kt)("p",null,"Finally, register the plugin in ",(0,n.kt)("inlineCode",{parentName:"p"},"catalog.ts"),".\nFor large organizations, this plugin can take a long time, so be careful setting low frequency / timeouts."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="packages/backend/src/plugins/catalog.ts"',title:'"packages/backend/src/plugins/catalog.ts"'},"/* highlight-add-next-line */\nimport { MicrosoftGraphOrgEntityProvider } from '@backstage/plugin-catalog-backend-module-msgraph';\n\nexport default async function createPlugin(\n  env: PluginEnvironment,\n): Promise<Router> {\n  const builder = await CatalogBuilder.create(env);\n\n  /* highlight-add-start */\n  builder.addEntityProvider(\n    MicrosoftGraphOrgEntityProvider.fromConfig(env.config, {\n      logger: env.logger,\n      schedule: env.scheduler.createScheduledTaskRunner({\n        frequency: { hours: 1 },\n        timeout: { minutes: 50 },\n        initialDelay: { seconds: 15 },\n      }),\n    }),\n  );\n  /* highlight-add-end */\n\n  // ..\n}\n")),(0,n.kt)("h2",{id:"authenticating-with-microsoft-graph"},"Authenticating with Microsoft Graph"),(0,n.kt)("h3",{id:"local-development"},"Local Development"),(0,n.kt)("p",null,"For a local dev environment, it's recommended you have the Azure CLI or Azure PowerShell installed, and are logged in to those.\nAlternatively you can use VSCode with the Azure extension if you install ",(0,n.kt)("inlineCode",{parentName:"p"},"@azure/identity-vscode"),".\nWhen these are set up, the plugin will authenticate with the Microsoft Graph API without you needing to configure any credentials, or granting any special permissions.\nIf you can't do this, you'll have to create an App Registration."),(0,n.kt)("h3",{id:"app-registration"},"App Registration"),(0,n.kt)("p",null,"If none of the other authentication methods work, you can create an app registration in the azure portal.\nBy default the graph plugin requires the following Application permissions (not Delegated) for Microsoft Graph:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"GroupMember.Read.All")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"User.Read.All"))),(0,n.kt)("p",null,"If your organization required Admin Consent for these permissions, that will need to be granted."),(0,n.kt)("p",null,"When authenticating with a ClientId/ClientSecret, you can either set the ",(0,n.kt)("inlineCode",{parentName:"p"},"AZURE_TENANT_ID"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"AZURE_CLIENT_ID")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"AZURE_CLIENT_SECRET")," environment variables, or specify the values in configuration"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},"microsoftGraphOrg:\n  default:\n    ##...\n    clientId: 9ef1aac6-b454-4e69-9cf5-7199df049281\n    clientSecret: REDACTED\n")),(0,n.kt)("p",null,"To authenticate with a certificate rather than a client secret, you can set the ",(0,n.kt)("inlineCode",{parentName:"p"},"AZURE_TENANT_ID"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"AZURE_CLIENT_ID")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"AZURE_CLIENT_CERTIFICATE_PATH")," environments"),(0,n.kt)("h3",{id:"managed-identity"},"Managed Identity"),(0,n.kt)("p",null,"If deploying to resources that supports Managed Identity, and has identities configured (e.g. Azure App Services, Azure Container Apps), Managed Identity should be picked up without any additional configuration.\nIf your app has multiple managed identities, you may need to set the ",(0,n.kt)("inlineCode",{parentName:"p"},"AZURE_CLIENT_ID")," environment variable to tell Azure Identity which identity to use."),(0,n.kt)("p",null,"To grant the managed identity the same permissions as mentioned in ",(0,n.kt)("em",{parentName:"p"},"App Registration")," above, ",(0,n.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/app-service/tutorial-connect-app-access-microsoft-graph-as-app-javascript?tabs=azure-powershell"},"please follow this guide")),(0,n.kt)("h2",{id:"filtering-imported-users-and-groups"},"Filtering imported Users and Groups"),(0,n.kt)("p",null,"By default, the plugin will import all users and groups from your directory.\nThis can be customized through ",(0,n.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/graph/filter-query-parameter"},"filters")," and ",(0,n.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/graph/search-query-parameter"},"search")," queries."),(0,n.kt)("h3",{id:"groups"},"Groups"),(0,n.kt)("p",null,"A smaller set of groups can be obtained by configuring a search query or a filter.\nIf both ",(0,n.kt)("inlineCode",{parentName:"p"},"filter")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"search")," are provided, then groups must match both to be ingested."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},'microsoftGraphOrg:\n  providerId:\n    group:\n      filter: securityEnabled eq false and mailEnabled eq true and groupTypes/any(c:c+eq+\'Unified\')\n      search: \'"description:One" AND ("displayName:Video" OR "displayName:Drive")\'\n')),(0,n.kt)("p",null,"In addition to these groups, one additional group will be created for your organization.\nAll imported groups will be a child of this group."),(0,n.kt)("h3",{id:"users"},"Users"),(0,n.kt)("p",null,"There are two modes for importing users - You can import all user objects matching a ",(0,n.kt)("inlineCode",{parentName:"p"},"filter"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},"microsoftGraphOrg:\n  providerId:\n    user:\n      filter: accountEnabled eq true and userType eq 'member'\n")),(0,n.kt)("p",null,"Alternatively you can import users that are members of specific groups.\nFor each group matching the ",(0,n.kt)("inlineCode",{parentName:"p"},"search")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"filter")," query, each group member will be imported.\nOnly direct group members will be imported, not transient users."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},'microsoftGraphOrg:\n  providerId:\n    userGroupMember:\n      filter: "displayName eq \'Backstage Users\'"\n      search: \'"description:One" AND ("displayName:Video" OR "displayName:Drive")\'\n')),(0,n.kt)("h2",{id:"customizing-transformation"},"Customizing Transformation"),(0,n.kt)("p",null,"Ingested entities can be customized by providing custom transformers.\nThese can be used to completely replace the built in logic, or used to tweak it by using the default transformers (",(0,n.kt)("inlineCode",{parentName:"p"},"defaultGroupTransformer"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"defaultUserTransformer")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"defaultOrganizationTransformer"),"\nEntities can also be excluded from backstage by returning ",(0,n.kt)("inlineCode",{parentName:"p"},"undefined"),"."),(0,n.kt)("p",null,"These Transformers are be registered when configuring ",(0,n.kt)("inlineCode",{parentName:"p"},"MicrosoftGraphOrgEntityProvider")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},"builder.addEntityProvider(\n  MicrosoftGraphOrgEntityProvider.fromConfig(env.config, {\n    // ...\n    /* highlight-add-start */\n    groupTransformer: myGroupTransformer,\n    userTransformer: myUserTransformer,\n    organizationTransformer: myOrganizationTransformer,\n    /* highlight-add-end */\n  }),\n);\n")),(0,n.kt)("p",null,"When using custom transformers, you may want to customize the data returned.\nSeveral configuration options can be provided to tweak the Microsoft Graph query to get the data you need"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},"microsoftGraphOrg:\n  providerId:\n    user:\n      expand: manager\n    group:\n      expand: member\n      select: ['id', 'displayName', 'description']\n")),(0,n.kt)("p",null,"The following provides an example of each kind of transformer"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},"import * as MicrosoftGraph from '@microsoft/microsoft-graph-types';\nimport {\n  defaultGroupTransformer,\n  defaultUserTransformer,\n  defaultOrganizationTransformer,\n} from '@backstage/plugin-catalog-backend-module-msgraph';\nimport { GroupEntity, UserEntity } from '@backstage/catalog-model';\n\n// This group transformer completely replaces the built in logic with custom logic.\nexport async function myGroupTransformer(\n  group: MicrosoftGraph.Group,\n  groupPhoto?: string,\n): Promise<GroupEntity | undefined> {\n  return {\n    apiVersion: 'backstage.io/v1alpha1',\n    kind: 'Group',\n    metadata: {\n      name: group.id!,\n      annotations: {},\n    },\n    spec: {\n      type: 'aad',\n      children: [],\n    },\n  };\n}\n\n// This user transformer makes use of the built in logic, but also sets the description field\nexport async function myUserTransformer(\n  graphUser: MicrosoftGraph.User,\n  userPhoto?: string,\n): Promise<UserEntity | undefined> {\n  const backstageUser = await defaultUserTransformer(graphUser, userPhoto);\n\n  if (backstageUser) {\n    backstageUser.metadata.description = 'Loaded from Azure Active Directory';\n  }\n\n  return backstageUser;\n}\n\n// Example organization transformer that removes the organization group completely\nexport async function myOrganizationTransformer(\n  graphOrganization: MicrosoftGraph.Organization,\n): Promise<GroupEntity | undefined> {\n  return undefined;\n}\n")),(0,n.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,n.kt)("h3",{id:"no-data"},"No data"),(0,n.kt)("p",null,"First check your logs for the message ",(0,n.kt)("inlineCode",{parentName:"p"},"Reading msgraph users and groups"),".\nIf you don't see this, check you've registered the provider, and that the schedule is valid"),(0,n.kt)("p",null,"If you see a log entry ",(0,n.kt)("inlineCode",{parentName:"p"},"Read 0 msgraph users and 0 msgraph groups"),", check your search and filter arguments."),(0,n.kt)("p",null,"If you see the start message (",(0,n.kt)("inlineCode",{parentName:"p"},"Reading msgraph users and groups"),") but no end message (",(0,n.kt)("inlineCode",{parentName:"p"},"Read X msgraph users and Y msgraph groups"),"), then it is likely the job is taking a long time due to a large volume of data.\nThe default behavior is to import all users and groups, which is often more data than needed.\nTry importing a smaller set of data (e.g. ",(0,n.kt)("inlineCode",{parentName:"p"},"filter: displayName eq 'John Smith'"),")."),(0,n.kt)("h3",{id:"authentication--token-errors"},"Authentication / Token Errors"),(0,n.kt)("p",null,"See ",(0,n.kt)("a",{parentName:"p",href:"https://aka.ms/azsdk/js/identity/troubleshoot"},"Troubleshooting Azure Identity Authentication Issues")),(0,n.kt)("h3",{id:"error-while-reading-users-from-microsoft-graph-authorization_requestdenied---insufficient-privileges-to-complete-the-operation"},"Error while reading users from Microsoft Graph: Authorization_RequestDenied - Insufficient privileges to complete the operation"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Make sure you've granted all the required permissions to your application registration or managed identity"),(0,n.kt)("li",{parentName:"ul"},"Make sure the permissions are ",(0,n.kt)("inlineCode",{parentName:"li"},"Application")," permissions rather than ",(0,n.kt)("inlineCode",{parentName:"li"},"Delegated")),(0,n.kt)("li",{parentName:"ul"},'If your organization has configured "Admin consent" to be required, make sure this has been granted for your application permissions'),(0,n.kt)("li",{parentName:"ul"},"If your group queries are returning Microsoft Teams groups, you may need to grant addition permissions (e.g. ",(0,n.kt)("inlineCode",{parentName:"li"},"Team.ReadBasic.All"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"TeamMember.Read.All"),")"),(0,n.kt)("li",{parentName:"ul"},"If you've added additional ",(0,n.kt)("inlineCode",{parentName:"li"},"select")," or ",(0,n.kt)("inlineCode",{parentName:"li"},"expand")," fields, those may need additional permissions granted")))}f.isMDXComponent=!0},862525:e=>{var t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;function a(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(a){return!1}}()?Object.assign:function(e,o){for(var i,s,l=a(e),u=1;u<arguments.length;u++){for(var p in i=Object(arguments[u]))r.call(i,p)&&(l[p]=i[p]);if(t){s=t(i);for(var c=0;c<s.length;c++)n.call(i,s[c])&&(l[s[c]]=i[s[c]])}}return l}},541535:(e,t,r)=>{var n=r(862525),a=60103,o=60106;var i=60109,s=60110,l=60112;var u=60115,p=60116;if("function"==typeof Symbol&&Symbol.for){var c=Symbol.for;a=c("react.element"),o=c("react.portal"),c("react.fragment"),c("react.strict_mode"),c("react.profiler"),i=c("react.provider"),s=c("react.context"),l=c("react.forward_ref"),c("react.suspense"),u=c("react.memo"),p=c("react.lazy")}var d="function"==typeof Symbol&&Symbol.iterator;function f(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var m={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g={};function h(e,t,r){this.props=e,this.context=t,this.refs=g,this.updater=r||m}function y(){}function k(e,t,r){this.props=e,this.context=t,this.refs=g,this.updater=r||m}h.prototype.isReactComponent={},h.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(f(85));this.updater.enqueueSetState(this,e,t,"setState")},h.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},y.prototype=h.prototype;var b=k.prototype=new y;b.constructor=k,n(b,h.prototype),b.isPureReactComponent=!0;var v={current:null},O=Object.prototype.hasOwnProperty,N={key:!0,ref:!0,__self:!0,__source:!0};function w(e,t,r){var n,o={},i=null,s=null;if(null!=t)for(n in void 0!==t.ref&&(s=t.ref),void 0!==t.key&&(i=""+t.key),t)O.call(t,n)&&!N.hasOwnProperty(n)&&(o[n]=t[n]);var l=arguments.length-2;if(1===l)o.children=r;else if(1<l){for(var u=Array(l),p=0;p<l;p++)u[p]=arguments[p+2];o.children=u}if(e&&e.defaultProps)for(n in l=e.defaultProps)void 0===o[n]&&(o[n]=l[n]);return{$$typeof:a,type:e,key:i,ref:s,props:o,_owner:v.current}}function A(e){return"object"==typeof e&&null!==e&&e.$$typeof===a}var T=/\/+/g;function j(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function C(e,t,r,n,i){var s=typeof e;"undefined"!==s&&"boolean"!==s||(e=null);var l=!1;if(null===e)l=!0;else switch(s){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case a:case o:l=!0}}if(l)return i=i(l=e),e=""===n?"."+j(l,0):n,Array.isArray(i)?(r="",null!=e&&(r=e.replace(T,"$&/")+"/"),C(i,t,r,"",(function(e){return e}))):null!=i&&(A(i)&&(i=function(e,t){return{$$typeof:a,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(i,r+(!i.key||l&&l.key===i.key?"":(""+i.key).replace(T,"$&/")+"/")+e)),t.push(i)),1;if(l=0,n=""===n?".":n+":",Array.isArray(e))for(var u=0;u<e.length;u++){var p=n+j(s=e[u],u);l+=C(s,t,r,p,i)}else if(p=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=d&&e[d]||e["@@iterator"])?e:null}(e),"function"==typeof p)for(e=p.call(e),u=0;!(s=e.next()).done;)l+=C(s=s.value,t,r,p=n+j(s,u++),i);else if("object"===s)throw t=""+e,Error(f(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return l}function E(e,t,r){if(null==e)return e;var n=[],a=0;return C(e,n,"","",(function(e){return t.call(r,e,a++)})),n}function z(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var I={current:null};function P(){var e=I.current;if(null===e)throw Error(f(321));return e}},827378:(e,t,r)=>{r(541535)}}]);