/*! For license information please see 6940ebd5.4b8a683d.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[227183],{603905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var o=n(667294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),p=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,h=u["".concat(l,".").concat(m)]||u[m]||d[m]||i;return n?o.createElement(h,s(s({ref:t},c),{},{components:n})):o.createElement(h,s({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=m;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a[u]="string"==typeof e?e:r,s[1]=a;for(var p=2;p<i;p++)s[p]=n[p];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},189777:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>d,frontMatter:()=>s,metadata:()=>l,toc:()=>c});n(827378);var o=n(603905);function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},r.apply(this,arguments)}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const s={id:"03-adding-a-resource-permission-check",title:"3. Adding a resource permission check",description:"Explains how to add a resource permission check to a Backstage plugin"},a=void 0,l={unversionedId:"permissions/plugin-authors/03-adding-a-resource-permission-check",id:"permissions/plugin-authors/03-adding-a-resource-permission-check",title:"3. Adding a resource permission check",description:"Explains how to add a resource permission check to a Backstage plugin",source:"@site/../docs/permissions/plugin-authors/03-adding-a-resource-permission-check.md",sourceDirName:"permissions/plugin-authors",slug:"/permissions/plugin-authors/03-adding-a-resource-permission-check",permalink:"/docs/permissions/plugin-authors/03-adding-a-resource-permission-check",draft:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/permissions/plugin-authors/03-adding-a-resource-permission-check.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"03-adding-a-resource-permission-check",title:"3. Adding a resource permission check",description:"Explains how to add a resource permission check to a Backstage plugin"},sidebar:"docs",previous:{title:"2. Adding a basic permission check",permalink:"/docs/permissions/plugin-authors/02-adding-a-basic-permission-check"},next:{title:"4. Authorizing access to paginated data",permalink:"/docs/permissions/plugin-authors/04-authorizing-access-to-paginated-data"}},p={},c=[{value:"Creating the update permission",id:"creating-the-update-permission",level:2},{value:"Setting up authorization for the update permission",id:"setting-up-authorization-for-the-update-permission",level:2},{value:"Adding support for conditional decisions",id:"adding-support-for-conditional-decisions",level:2},{value:"Provide utilities for policy authors",id:"provide-utilities-for-policy-authors",level:2},{value:"Test the authorized update endpoint",id:"test-the-authorized-update-endpoint",level:2}],u={toc:c};function d(e){var{components:t}=e,n=i(e,["components"]);return(0,o.kt)("wrapper",r({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"When performing updates (or other operations) on specific ",(0,o.kt)("a",r({parentName:"p"},{href:"/docs/permissions/concepts#resources-and-rules"}),"resources"),", the permissions framework allows for the decision to be based on characteristics of the resource itself. This means that it's possible to write policies that (for example) allow the operation for users that own a resource, and deny the operation otherwise."),(0,o.kt)("h2",r({},{id:"creating-the-update-permission"}),"Creating the update permission"),(0,o.kt)("p",null,"Let's add a new permission to the file ",(0,o.kt)("inlineCode",{parentName:"p"},"plugins/todo-list-common/src/permissions.ts")," from ",(0,o.kt)("a",r({parentName:"p"},{href:"/docs/permissions/plugin-authors/02-adding-a-basic-permission-check"}),"the previous section"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",r({parentName:"pre"},{className:"language-ts",metastring:'title="plugins/todo-list-common/src/permissions.ts"',title:'"plugins/todo-list-common/src/permissions.ts"'}),"import { createPermission } from '@backstage/plugin-permission-common';\n\n/* highlight-add-next-line */\nexport const TODO_LIST_RESOURCE_TYPE = 'todo-item';\n\nexport const todoListCreatePermission = createPermission({\n  name: 'todo.list.create',\n  attributes: { action: 'create' },\n});\n\n/* highlight-add-start */\nexport const todoListUpdatePermission = createPermission({\n  name: 'todo.list.update',\n  attributes: { action: 'update' },\n  resourceType: TODO_LIST_RESOURCE_TYPE,\n});\n/* highlight-add-end */\n\n/* highlight-remove-next-line */\nexport const todoListPermissions = [todoListCreatePermission];\n/* highlight-add-next-line */\nexport const todoListPermissions = [\n  todoListCreatePermission,\n  todoListUpdatePermission,\n];\n")),(0,o.kt)("p",null,"Notice that unlike ",(0,o.kt)("inlineCode",{parentName:"p"},"todoListCreatePermission"),", the ",(0,o.kt)("inlineCode",{parentName:"p"},"todoListUpdatePermission")," permission contains a ",(0,o.kt)("inlineCode",{parentName:"p"},"resourceType")," field. This field indicates to the permission framework that this permission is intended to be authorized in the context of a resource with type ",(0,o.kt)("inlineCode",{parentName:"p"},"'todo-item'"),". You can use whatever string you like as the resource type, as long as you use the same value consistently for each type of resource."),(0,o.kt)("h2",r({},{id:"setting-up-authorization-for-the-update-permission"}),"Setting up authorization for the update permission"),(0,o.kt)("p",null,"To start, let's edit ",(0,o.kt)("inlineCode",{parentName:"p"},"plugins/todo-list-backend/src/service/router.ts")," in the same manner as we did in the previous section:"),(0,o.kt)("pre",null,(0,o.kt)("code",r({parentName:"pre"},{className:"language-ts",metastring:'title="plugins/todo-list-backend/src/service/router.ts"',title:'"plugins/todo-list-backend/src/service/router.ts"'}),"/* highlight-remove-next-line */\nimport { todoListCreatePermission } from '@internal/plugin-todo-list-common';\n/* highlight-add-next-line */\nimport {\n  todoListCreatePermission,\n  todoListUpdatePermission,\n} from '@internal/plugin-todo-list-common';\n\nrouter.put('/todos', async (req, res) => {\n  /* highlight-add-start */\n  const token = getBearerTokenFromAuthorizationHeader(\n    req.header('authorization'),\n  );\n  /* highlight-add-end */\n\n  if (!isTodoUpdateRequest(req.body)) {\n    throw new InputError('Invalid payload');\n  }\n  /* highlight-add-start */\n  const decision = (\n    await permissions.authorize(\n      [{ permission: todoListUpdatePermission, resourceRef: req.body.id }],\n      {\n        token,\n      },\n    )\n  )[0];\n\n  if (decision.result !== AuthorizeResult.ALLOW) {\n    throw new NotAllowedError('Unauthorized');\n  }\n  /* highlight-add-end */\n\n  res.json(update(req.body));\n});\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Important:")," Notice that we are passing an extra ",(0,o.kt)("inlineCode",{parentName:"p"},"resourceRef")," field, with the ",(0,o.kt)("inlineCode",{parentName:"p"},"id")," of the todo item as the value."),(0,o.kt)("p",null,"This enables decisions based on characteristics of the resource, but it's important to note that policy authors will not have access to the resource ref inside of their permission policies. Instead, the policies will return conditional decisions, which we need to now support in our plugin."),(0,o.kt)("h2",r({},{id:"adding-support-for-conditional-decisions"}),"Adding support for conditional decisions"),(0,o.kt)("p",null,"Install the missing module:"),(0,o.kt)("pre",null,(0,o.kt)("code",r({parentName:"pre"},{className:"language-bash"}),"$ yarn workspace @internal/plugin-todo-list-backend add @backstage/plugin-permission-node zod\n")),(0,o.kt)("p",null,"Create a new ",(0,o.kt)("inlineCode",{parentName:"p"},"plugins/todo-list-backend/src/service/rules.ts")," file and append the following code:"),(0,o.kt)("pre",null,(0,o.kt)("code",r({parentName:"pre"},{className:"language-typescript",metastring:'title="plugins/todo-list-backend/src/service/rules.ts"',title:'"plugins/todo-list-backend/src/service/rules.ts"'}),"import { makeCreatePermissionRule } from '@backstage/plugin-permission-node';\nimport { TODO_LIST_RESOURCE_TYPE } from '@internal/plugin-todo-list-common';\nimport { z } from 'zod';\nimport { Todo, TodoFilter } from './todos';\n\nexport const createTodoListPermissionRule = makeCreatePermissionRule<\n  Todo,\n  TodoFilter,\n  typeof TODO_LIST_RESOURCE_TYPE\n>();\n\nexport const isOwner = createTodoListPermissionRule({\n  name: 'IS_OWNER',\n  description: 'Should allow only if the todo belongs to the user',\n  resourceType: TODO_LIST_RESOURCE_TYPE,\n  paramsSchema: z.object({\n    userId: z.string().describe('User ID to match on the resource'),\n  }),\n  apply: (resource: Todo, { userId }) => {\n    return resource.author === userId;\n  },\n  toQuery: ({ userId }) => {\n    return {\n      property: 'author',\n      values: [userId],\n    };\n  },\n});\n\nexport const rules = { isOwner };\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"makeCreatePermissionRule")," is a helper used to ensure that rules created for this plugin use consistent types for the resource and query."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Note: To support custom rules defined by Backstage integrators, you must export ",(0,o.kt)("inlineCode",{parentName:"p"},"createTodoListPermissionRule")," from the backend package and provide some way for custom rules to be passed in before the backend starts, likely via ",(0,o.kt)("inlineCode",{parentName:"p"},"createRouter"),".")),(0,o.kt)("p",null,"We have created a new ",(0,o.kt)("inlineCode",{parentName:"p"},"isOwner")," rule, which is going to be automatically used by the permission framework whenever a conditional response is returned in response to an authorized request with an attached ",(0,o.kt)("inlineCode",{parentName:"p"},"resourceRef"),".\nSpecifically, the ",(0,o.kt)("inlineCode",{parentName:"p"},"apply")," function is used to understand whether the passed resource should be authorized or not."),(0,o.kt)("p",null,"Let's skip the ",(0,o.kt)("inlineCode",{parentName:"p"},"toQuery")," function for now, we'll come back to that in the next section."),(0,o.kt)("p",null,"Now, let's create the new endpoint by editing ",(0,o.kt)("inlineCode",{parentName:"p"},"plugins/todo-list-backend/src/service/router.ts"),". This uses the ",(0,o.kt)("inlineCode",{parentName:"p"},"createPermissionIntegrationRouter")," helper to add the APIs needed by the permission framework to your plugin. You'll need to supply:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"getResources"),": a function that accepts an array of ",(0,o.kt)("inlineCode",{parentName:"li"},"resourceRefs")," in the same format you expect to be passed to ",(0,o.kt)("inlineCode",{parentName:"li"},"authorize"),", and returns an array of the corresponding resources."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"resourceType"),": the same value used in the permission rule above."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"permissions"),": the list of permissions that your plugin accepts."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"rules"),": an array of all the permission rules you want to support in conditional decisions.")),(0,o.kt)("pre",null,(0,o.kt)("code",r({parentName:"pre"},{className:"language-ts",metastring:'title="plugins/todo-list-backend/src/service/router.ts"',title:'"plugins/todo-list-backend/src/service/router.ts"'}),"/* highlight-remove-next-line */\nimport { add, getAll, update } from './todos';\n/* highlight-add-start */\nimport { add, getAll, getTodo, update } from './todos';\nimport { createPermissionIntegrationRouter } from '@backstage/plugin-permission-node';\nimport { TODO_LIST_RESOURCE_TYPE, todoListPermissions } from '@internal/plugin-todo-list-common';\nimport { rules } from './rules';\n/* highlight-add-end */\n\nexport async function createRouter(\n  options: RouterOptions,\n): Promise<express.Router> {\n  const { logger, identity, permissions } = options;\n\n  /* highlight-add-start */\n  const permissionIntegrationRouter = createPermissionIntegrationRouter({\n    getResources: async resourceRefs => {\n      return resourceRefs.map(getTodo);\n    },\n    resourceType: TODO_LIST_RESOURCE_TYPE,\n    permissions: todoListPermissions,\n    rules: Object.values(rules),\n  });\n  /* highlight-add-end */\n\n  const router = Router();\n  router.use(express.json());\n\n  /* highlight-add-next-line */\n  router.use(permissionIntegrationRouter);\n\n  router.post('/todos', async (req, res) => {\n    // ..\n  }\n  // ..\n}\n")),(0,o.kt)("h2",r({},{id:"provide-utilities-for-policy-authors"}),"Provide utilities for policy authors"),(0,o.kt)("p",null,"Now that we have a new resource type and a corresponding rule, we need to export some utilities for policy authors to reference them."),(0,o.kt)("p",null,"Create a new ",(0,o.kt)("inlineCode",{parentName:"p"},"plugins/todo-list-backend/src/conditionExports.ts")," file and add the following code:"),(0,o.kt)("pre",null,(0,o.kt)("code",r({parentName:"pre"},{className:"language-typescript",metastring:'title="plugins/todo-list-backend/src/conditionExports.ts"',title:'"plugins/todo-list-backend/src/conditionExports.ts"'}),"import { TODO_LIST_RESOURCE_TYPE } from '@internal/plugin-todo-list-common';\nimport { createConditionExports } from '@backstage/plugin-permission-node';\nimport { rules } from './service/rules';\n\nconst { conditions, createConditionalDecision } = createConditionExports({\n  pluginId: 'todolist',\n  resourceType: TODO_LIST_RESOURCE_TYPE,\n  rules,\n});\n\nexport const todoListConditions = conditions;\n\nexport const createTodoListConditionalDecision = createConditionalDecision;\n")),(0,o.kt)("p",null,"Make sure ",(0,o.kt)("inlineCode",{parentName:"p"},"todoListConditions")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"createTodoListConditionalDecision")," are exported from the ",(0,o.kt)("inlineCode",{parentName:"p"},"todo-list-backend")," package by editing ",(0,o.kt)("inlineCode",{parentName:"p"},"plugins/todo-list-backend/src/index.ts"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",r({parentName:"pre"},{className:"language-ts",metastring:'title="plugins/todo-list-backend/src/index.ts"',title:'"plugins/todo-list-backend/src/index.ts"'}),"export * from './service/router';\n/* highlight-add-next-line */\nexport * from './conditionExports';\nexport { exampleTodoListPlugin } from './plugin';\n")),(0,o.kt)("h2",r({},{id:"test-the-authorized-update-endpoint"}),"Test the authorized update endpoint"),(0,o.kt)("p",null,"Let's go back to the permission policy's handle function and try to authorize our new permission with an ",(0,o.kt)("inlineCode",{parentName:"p"},"isOwner")," condition."),(0,o.kt)("pre",null,(0,o.kt)("code",r({parentName:"pre"},{className:"language-ts",metastring:'title="packages/backend/src/plugins/permission.ts"',title:'"packages/backend/src/plugins/permission.ts"'}),"import {\n  BackstageIdentityResponse,\n  IdentityClient\n} from '@backstage/plugin-auth-node';\nimport {\n  PermissionPolicy,\n  PolicyQuery,\n} from '@backstage/plugin-permission-node';\nimport { isPermission } from '@backstage/plugin-permission-common';\n/* highlight-remove-next-line */\nimport { todoListCreatePermission } from '@internal/plugin-todo-list-common';\n/* highlight-add-start */\nimport {\n  todoListCreatePermission,\n  todoListUpdatePermission,\n} from '@internal/plugin-todo-list-common';\nimport {\n  todoListConditions,\n  createTodoListConditionalDecision,\n} from '@internal/plugin-todo-list-backend';\n/* highlight-add-end */\n\n\nasync handle(\n  request: PolicyQuery,\n  /* highlight-remove-next-line */\n  _user?: BackstageIdentityResponse,\n  /* highlight-add-next-line */\n  user?: BackstageIdentityResponse,\n): Promise<PolicyDecision> {\n  if (isPermission(request.permission, todoListCreatePermission)) {\n    return {\n      result: AuthorizeResult.ALLOW,\n    };\n  }\n  /* highlight-add-start */\n  if (isPermission(request.permission, todoListUpdatePermission)) {\n    return createTodoListConditionalDecision(\n      request.permission,\n      todoListConditions.isOwner({\n        userId: user?.identity.userEntityRef ?? '',\n      }),\n    );\n  }\n  /* highlight-add-end */\n\n  return {\n    result: AuthorizeResult.ALLOW,\n  };\n}\n")),(0,o.kt)("p",null,"For any incoming update requests, we now return a ",(0,o.kt)("em",{parentName:"p"},"Conditional Decision"),". We are saying:"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Hey permission framework, I can't make a decision alone. Please go to the plugin with id ",(0,o.kt)("inlineCode",{parentName:"p"},"todolist")," and ask it to apply these conditions.")),(0,o.kt)("p",null,"To check that everything works as expected, you should now see an error in the UI whenever you try to edit an item that wasn\u2019t created by you. Success!"))}d.isMDXComponent=!0},862525:e=>{var t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable;function r(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var o={};return"abcdefghijklmnopqrst".split("").forEach((function(e){o[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},o)).join("")}catch(r){return!1}}()?Object.assign:function(e,i){for(var s,a,l=r(e),p=1;p<arguments.length;p++){for(var c in s=Object(arguments[p]))n.call(s,c)&&(l[c]=s[c]);if(t){a=t(s);for(var u=0;u<a.length;u++)o.call(s,a[u])&&(l[a[u]]=s[a[u]])}}return l}},541535:(e,t,n)=>{var o=n(862525),r=60103,i=60106;var s=60109,a=60110,l=60112;var p=60115,c=60116;if("function"==typeof Symbol&&Symbol.for){var u=Symbol.for;r=u("react.element"),i=u("react.portal"),u("react.fragment"),u("react.strict_mode"),u("react.profiler"),s=u("react.provider"),a=u("react.context"),l=u("react.forward_ref"),u("react.suspense"),p=u("react.memo"),c=u("react.lazy")}var d="function"==typeof Symbol&&Symbol.iterator;function m(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g={};function f(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||h}function k(){}function y(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||h}f.prototype.isReactComponent={},f.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(m(85));this.updater.enqueueSetState(this,e,t,"setState")},f.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},k.prototype=f.prototype;var b=y.prototype=new k;b.constructor=y,o(b,f.prototype),b.isPureReactComponent=!0;var v={current:null},w=Object.prototype.hasOwnProperty,O={key:!0,ref:!0,__self:!0,__source:!0};function C(e,t,n){var o,i={},s=null,a=null;if(null!=t)for(o in void 0!==t.ref&&(a=t.ref),void 0!==t.key&&(s=""+t.key),t)w.call(t,o)&&!O.hasOwnProperty(o)&&(i[o]=t[o]);var l=arguments.length-2;if(1===l)i.children=n;else if(1<l){for(var p=Array(l),c=0;c<l;c++)p[c]=arguments[c+2];i.children=p}if(e&&e.defaultProps)for(o in l=e.defaultProps)void 0===i[o]&&(i[o]=l[o]);return{$$typeof:r,type:e,key:s,ref:a,props:i,_owner:v.current}}function P(e){return"object"==typeof e&&null!==e&&e.$$typeof===r}var N=/\/+/g;function T(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function x(e,t,n,o,s){var a=typeof e;"undefined"!==a&&"boolean"!==a||(e=null);var l=!1;if(null===e)l=!0;else switch(a){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case r:case i:l=!0}}if(l)return s=s(l=e),e=""===o?"."+T(l,0):o,Array.isArray(s)?(n="",null!=e&&(n=e.replace(N,"$&/")+"/"),x(s,t,n,"",(function(e){return e}))):null!=s&&(P(s)&&(s=function(e,t){return{$$typeof:r,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(s,n+(!s.key||l&&l.key===s.key?"":(""+s.key).replace(N,"$&/")+"/")+e)),t.push(s)),1;if(l=0,o=""===o?".":o+":",Array.isArray(e))for(var p=0;p<e.length;p++){var c=o+T(a=e[p],p);l+=x(a,t,n,c,s)}else if(c=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=d&&e[d]||e["@@iterator"])?e:null}(e),"function"==typeof c)for(e=c.call(e),p=0;!(a=e.next()).done;)l+=x(a=a.value,t,n,c=o+T(a,p++),s);else if("object"===a)throw t=""+e,Error(m(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return l}function E(e,t,n){if(null==e)return e;var o=[],r=0;return x(e,o,"","",(function(e){return t.call(n,e,r++)})),o}function R(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var j={current:null};function _(){var e=j.current;if(null===e)throw Error(m(321));return e}},827378:(e,t,n)=>{n(541535)}}]);