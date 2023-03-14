/*! For license information please see 7b89de4b.2a774c32.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[532978],{603905:(e,r,t)=>{t.d(r,{Zo:()=>f,kt:()=>y});var n=t(667294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=n.createContext({}),l=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},f=function(e){var r=l(e.components);return n.createElement(p.Provider,{value:r},e.children)},u="mdxType",s={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,f=i(e,["components","mdxType","originalType","parentName"]),u=l(t),d=o,y=u["".concat(p,".").concat(d)]||u[d]||s[d]||a;return t?n.createElement(y,c(c({ref:r},f),{},{components:t})):n.createElement(y,c({ref:r},f))}));function y(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,c=new Array(a);c[0]=d;var i={};for(var p in r)hasOwnProperty.call(r,p)&&(i[p]=r[p]);i.originalType=e,i[u]="string"==typeof e?e:o,c[1]=i;for(var l=2;l<a;l++)c[l]=t[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},324305:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>i,default:()=>s,frontMatter:()=>c,metadata:()=>p,toc:()=>f});t(827378);var n=t(603905);function o(){return o=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},o.apply(this,arguments)}function a(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}const c={id:"backend-app-api.middlewarefactoryoptions.logger",title:"MiddlewareFactoryOptions.logger",description:"API reference for MiddlewareFactoryOptions.logger"},i=void 0,p={unversionedId:"reference/backend-app-api.middlewarefactoryoptions.logger",id:"reference/backend-app-api.middlewarefactoryoptions.logger",title:"MiddlewareFactoryOptions.logger",description:"API reference for MiddlewareFactoryOptions.logger",source:"@site/../docs/reference/backend-app-api.middlewarefactoryoptions.logger.md",sourceDirName:"reference",slug:"/reference/backend-app-api.middlewarefactoryoptions.logger",permalink:"/docs/reference/backend-app-api.middlewarefactoryoptions.logger",draft:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/backend-app-api.middlewarefactoryoptions.logger.md",tags:[],version:"current",frontMatter:{id:"backend-app-api.middlewarefactoryoptions.logger",title:"MiddlewareFactoryOptions.logger",description:"API reference for MiddlewareFactoryOptions.logger"}},l={},f=[],u={toc:f};function s(e){var{components:r}=e,t=a(e,["components"]);return(0,n.kt)("wrapper",o({},u,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("a",o({parentName:"p"},{href:"/docs/reference/"}),"Home")," ",">"," ",(0,n.kt)("a",o({parentName:"p"},{href:"/docs/reference/backend-app-api"}),(0,n.kt)("inlineCode",{parentName:"a"},"@backstage/backend-app-api"))," ",">"," ",(0,n.kt)("a",o({parentName:"p"},{href:"/docs/reference/backend-app-api.middlewarefactoryoptions"}),(0,n.kt)("inlineCode",{parentName:"a"},"MiddlewareFactoryOptions"))," ",">"," ",(0,n.kt)("a",o({parentName:"p"},{href:"/docs/reference/backend-app-api.middlewarefactoryoptions.logger"}),(0,n.kt)("inlineCode",{parentName:"a"},"logger"))),(0,n.kt)("b",null,"Signature:"),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{className:"language-typescript"}),"logger: LoggerService;\n")))}s.isMDXComponent=!0},862525:e=>{var r=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;function o(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var r={},t=0;t<10;t++)r["_"+String.fromCharCode(t)]=t;if("0123456789"!==Object.getOwnPropertyNames(r).map((function(e){return r[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(o){return!1}}()?Object.assign:function(e,a){for(var c,i,p=o(e),l=1;l<arguments.length;l++){for(var f in c=Object(arguments[l]))t.call(c,f)&&(p[f]=c[f]);if(r){i=r(c);for(var u=0;u<i.length;u++)n.call(c,i[u])&&(p[i[u]]=c[i[u]])}}return p}},541535:(e,r,t)=>{var n=t(862525),o=60103,a=60106;var c=60109,i=60110,p=60112;var l=60115,f=60116;if("function"==typeof Symbol&&Symbol.for){var u=Symbol.for;o=u("react.element"),a=u("react.portal"),u("react.fragment"),u("react.strict_mode"),u("react.profiler"),c=u("react.provider"),i=u("react.context"),p=u("react.forward_ref"),u("react.suspense"),l=u("react.memo"),f=u("react.lazy")}var s="function"==typeof Symbol&&Symbol.iterator;function d(e){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)r+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g={};function b(e,r,t){this.props=e,this.context=r,this.refs=g,this.updater=t||y}function m(){}function v(e,r,t){this.props=e,this.context=r,this.refs=g,this.updater=t||y}b.prototype.isReactComponent={},b.prototype.setState=function(e,r){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(d(85));this.updater.enqueueSetState(this,e,r,"setState")},b.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},m.prototype=b.prototype;var h=v.prototype=new m;h.constructor=v,n(h,b.prototype),h.isPureReactComponent=!0;var O={current:null},w=Object.prototype.hasOwnProperty,k={key:!0,ref:!0,__self:!0,__source:!0};function j(e,r,t){var n,a={},c=null,i=null;if(null!=r)for(n in void 0!==r.ref&&(i=r.ref),void 0!==r.key&&(c=""+r.key),r)w.call(r,n)&&!k.hasOwnProperty(n)&&(a[n]=r[n]);var p=arguments.length-2;if(1===p)a.children=t;else if(1<p){for(var l=Array(p),f=0;f<p;f++)l[f]=arguments[f+2];a.children=l}if(e&&e.defaultProps)for(n in p=e.defaultProps)void 0===a[n]&&(a[n]=p[n]);return{$$typeof:o,type:e,key:c,ref:i,props:a,_owner:O.current}}function P(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var _=/\/+/g;function S(e,r){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var r={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return r[e]}))}(""+e.key):r.toString(36)}function E(e,r,t,n,c){var i=typeof e;"undefined"!==i&&"boolean"!==i||(e=null);var p=!1;if(null===e)p=!0;else switch(i){case"string":case"number":p=!0;break;case"object":switch(e.$$typeof){case o:case a:p=!0}}if(p)return c=c(p=e),e=""===n?"."+S(p,0):n,Array.isArray(c)?(t="",null!=e&&(t=e.replace(_,"$&/")+"/"),E(c,r,t,"",(function(e){return e}))):null!=c&&(P(c)&&(c=function(e,r){return{$$typeof:o,type:e.type,key:r,ref:e.ref,props:e.props,_owner:e._owner}}(c,t+(!c.key||p&&p.key===c.key?"":(""+c.key).replace(_,"$&/")+"/")+e)),r.push(c)),1;if(p=0,n=""===n?".":n+":",Array.isArray(e))for(var l=0;l<e.length;l++){var f=n+S(i=e[l],l);p+=E(i,r,t,f,c)}else if(f=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=s&&e[s]||e["@@iterator"])?e:null}(e),"function"==typeof f)for(e=f.call(e),l=0;!(i=e.next()).done;)p+=E(i=i.value,r,t,f=n+S(i,l++),c);else if("object"===i)throw r=""+e,Error(d(31,"[object Object]"===r?"object with keys {"+Object.keys(e).join(", ")+"}":r));return p}function x(e,r,t){if(null==e)return e;var n=[],o=0;return E(e,n,"","",(function(e){return r.call(t,e,o++)})),n}function C(e){if(-1===e._status){var r=e._result;r=r(),e._status=0,e._result=r,r.then((function(r){0===e._status&&(r=r.default,e._status=1,e._result=r)}),(function(r){0===e._status&&(e._status=2,e._result=r)}))}if(1===e._status)return e._result;throw e._result}var N={current:null};function M(){var e=N.current;if(null===e)throw Error(d(321));return e}},827378:(e,r,t)=>{t(541535)}}]);