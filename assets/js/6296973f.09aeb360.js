/*! For license information please see 6296973f.09aeb360.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[222903],{603905:(e,t,r)=>{r.d(t,{Zo:()=>f,kt:()=>y});var n=r(667294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},f=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},l="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,f=p(e,["components","mdxType","originalType","parentName"]),l=u(r),d=o,y=l["".concat(c,".").concat(d)]||l[d]||s[d]||a;return r?n.createElement(y,i(i({ref:t},f),{},{components:r})):n.createElement(y,i({ref:t},f))}));function y(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p[l]="string"==typeof e?e:o,i[1]=p;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},555491:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>s,frontMatter:()=>i,metadata:()=>c,toc:()=>f});r(827378);var n=r(603905);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o.apply(this,arguments)}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const i={id:"backend-app-api.defaultroothttprouteroptions.indexpath",title:"DefaultRootHttpRouterOptions.indexPath",description:"API reference for DefaultRootHttpRouterOptions.indexPath"},p=void 0,c={unversionedId:"reference/backend-app-api.defaultroothttprouteroptions.indexpath",id:"reference/backend-app-api.defaultroothttprouteroptions.indexpath",title:"DefaultRootHttpRouterOptions.indexPath",description:"API reference for DefaultRootHttpRouterOptions.indexPath",source:"@site/../docs/reference/backend-app-api.defaultroothttprouteroptions.indexpath.md",sourceDirName:"reference",slug:"/reference/backend-app-api.defaultroothttprouteroptions.indexpath",permalink:"/docs/reference/backend-app-api.defaultroothttprouteroptions.indexpath",draft:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/backend-app-api.defaultroothttprouteroptions.indexpath.md",tags:[],version:"current",frontMatter:{id:"backend-app-api.defaultroothttprouteroptions.indexpath",title:"DefaultRootHttpRouterOptions.indexPath",description:"API reference for DefaultRootHttpRouterOptions.indexPath"}},u={},f=[],l={toc:f};function s(e){var{components:t}=e,r=a(e,["components"]);return(0,n.kt)("wrapper",o({},l,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("a",o({parentName:"p"},{href:"/docs/reference/"}),"Home")," ",">"," ",(0,n.kt)("a",o({parentName:"p"},{href:"/docs/reference/backend-app-api"}),(0,n.kt)("inlineCode",{parentName:"a"},"@backstage/backend-app-api"))," ",">"," ",(0,n.kt)("a",o({parentName:"p"},{href:"/docs/reference/backend-app-api.defaultroothttprouteroptions"}),(0,n.kt)("inlineCode",{parentName:"a"},"DefaultRootHttpRouterOptions"))," ",">"," ",(0,n.kt)("a",o({parentName:"p"},{href:"/docs/reference/backend-app-api.defaultroothttprouteroptions.indexpath"}),(0,n.kt)("inlineCode",{parentName:"a"},"indexPath"))),(0,n.kt)("p",null,"The path to forward all unmatched requests to. Defaults to '/api/app' if not given. Disables index path behavior if false is given."),(0,n.kt)("b",null,"Signature:"),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{className:"language-typescript"}),"indexPath?: string | false;\n")))}s.isMDXComponent=!0},862525:e=>{var t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;function o(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(o){return!1}}()?Object.assign:function(e,a){for(var i,p,c=o(e),u=1;u<arguments.length;u++){for(var f in i=Object(arguments[u]))r.call(i,f)&&(c[f]=i[f]);if(t){p=t(i);for(var l=0;l<p.length;l++)n.call(i,p[l])&&(c[p[l]]=i[p[l]])}}return c}},541535:(e,t,r)=>{var n=r(862525),o=60103,a=60106;var i=60109,p=60110,c=60112;var u=60115,f=60116;if("function"==typeof Symbol&&Symbol.for){var l=Symbol.for;o=l("react.element"),a=l("react.portal"),l("react.fragment"),l("react.strict_mode"),l("react.profiler"),i=l("react.provider"),p=l("react.context"),c=l("react.forward_ref"),l("react.suspense"),u=l("react.memo"),f=l("react.lazy")}var s="function"==typeof Symbol&&Symbol.iterator;function d(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h={};function b(e,t,r){this.props=e,this.context=t,this.refs=h,this.updater=r||y}function m(){}function v(e,t,r){this.props=e,this.context=t,this.refs=h,this.updater=r||y}b.prototype.isReactComponent={},b.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(d(85));this.updater.enqueueSetState(this,e,t,"setState")},b.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},m.prototype=b.prototype;var O=v.prototype=new m;O.constructor=v,n(O,b.prototype),O.isPureReactComponent=!0;var g={current:null},k=Object.prototype.hasOwnProperty,j={key:!0,ref:!0,__self:!0,__source:!0};function w(e,t,r){var n,a={},i=null,p=null;if(null!=t)for(n in void 0!==t.ref&&(p=t.ref),void 0!==t.key&&(i=""+t.key),t)k.call(t,n)&&!j.hasOwnProperty(n)&&(a[n]=t[n]);var c=arguments.length-2;if(1===c)a.children=r;else if(1<c){for(var u=Array(c),f=0;f<c;f++)u[f]=arguments[f+2];a.children=u}if(e&&e.defaultProps)for(n in c=e.defaultProps)void 0===a[n]&&(a[n]=c[n]);return{$$typeof:o,type:e,key:i,ref:p,props:a,_owner:g.current}}function P(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var x=/\/+/g;function _(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function S(e,t,r,n,i){var p=typeof e;"undefined"!==p&&"boolean"!==p||(e=null);var c=!1;if(null===e)c=!0;else switch(p){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case o:case a:c=!0}}if(c)return i=i(c=e),e=""===n?"."+_(c,0):n,Array.isArray(i)?(r="",null!=e&&(r=e.replace(x,"$&/")+"/"),S(i,t,r,"",(function(e){return e}))):null!=i&&(P(i)&&(i=function(e,t){return{$$typeof:o,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(i,r+(!i.key||c&&c.key===i.key?"":(""+i.key).replace(x,"$&/")+"/")+e)),t.push(i)),1;if(c=0,n=""===n?".":n+":",Array.isArray(e))for(var u=0;u<e.length;u++){var f=n+_(p=e[u],u);c+=S(p,t,r,f,i)}else if(f=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=s&&e[s]||e["@@iterator"])?e:null}(e),"function"==typeof f)for(e=f.call(e),u=0;!(p=e.next()).done;)c+=S(p=p.value,t,r,f=n+_(p,u++),i);else if("object"===p)throw t=""+e,Error(d(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return c}function R(e,t,r){if(null==e)return e;var n=[],o=0;return S(e,n,"","",(function(e){return t.call(r,e,o++)})),n}function D(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var E={current:null};function C(){var e=E.current;if(null===e)throw Error(d(321));return e}},827378:(e,t,r)=>{r(541535)}}]);