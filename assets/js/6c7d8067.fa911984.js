/*! For license information please see 6c7d8067.fa911984.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[721698],{603905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>d});var n=t(667294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function s(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?s(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=n.createContext({}),l=function(e){var r=n.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},u=function(e){var r=l(e.components);return n.createElement(i.Provider,{value:r},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},y=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,s=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=l(t),y=o,d=p["".concat(i,".").concat(y)]||p[y]||f[y]||s;return t?n.createElement(d,a(a({ref:r},u),{},{components:t})):n.createElement(d,a({ref:r},u))}));function d(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var s=t.length,a=new Array(s);a[0]=y;var c={};for(var i in r)hasOwnProperty.call(r,i)&&(c[i]=r[i]);c.originalType=e,c[p]="string"==typeof e?e:o,a[1]=c;for(var l=2;l<s;l++)a[l]=t[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}y.displayName="MDXCreateElement"},497378:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>c,default:()=>f,frontMatter:()=>a,metadata:()=>i,toc:()=>u});t(827378);var n=t(603905);function o(){return o=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},o.apply(this,arguments)}function s(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}const a={id:"plugin-splunk-on-call.listuserresponse",title:"ListUserResponse",description:"API reference for ListUserResponse"},c=void 0,i={unversionedId:"reference/plugin-splunk-on-call.listuserresponse",id:"reference/plugin-splunk-on-call.listuserresponse",title:"ListUserResponse",description:"API reference for ListUserResponse",source:"@site/../docs/reference/plugin-splunk-on-call.listuserresponse.md",sourceDirName:"reference",slug:"/reference/plugin-splunk-on-call.listuserresponse",permalink:"/docs/reference/plugin-splunk-on-call.listuserresponse",draft:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-splunk-on-call.listuserresponse.md",tags:[],version:"current",frontMatter:{id:"plugin-splunk-on-call.listuserresponse",title:"ListUserResponse",description:"API reference for ListUserResponse"}},l={},u=[],p={toc:u};function f(e){var{components:r}=e,t=s(e,["components"]);return(0,n.kt)("wrapper",o({},p,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("a",o({parentName:"p"},{href:"/docs/reference/"}),"Home")," ",">"," ",(0,n.kt)("a",o({parentName:"p"},{href:"/docs/reference/plugin-splunk-on-call"}),(0,n.kt)("inlineCode",{parentName:"a"},"@backstage/plugin-splunk-on-call"))," ",">"," ",(0,n.kt)("a",o({parentName:"p"},{href:"/docs/reference/plugin-splunk-on-call.listuserresponse"}),(0,n.kt)("inlineCode",{parentName:"a"},"ListUserResponse"))),(0,n.kt)("b",null,"Signature:"),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{className:"language-typescript"}),"type ListUserResponse = {\n    users: User[];\n    _selfUrl?: string;\n};\n")),(0,n.kt)("b",null,"References:")," [User](/docs/reference/plugin-splunk-on-call.user)")}f.isMDXComponent=!0},862525:e=>{var r=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;function o(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var r={},t=0;t<10;t++)r["_"+String.fromCharCode(t)]=t;if("0123456789"!==Object.getOwnPropertyNames(r).map((function(e){return r[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(o){return!1}}()?Object.assign:function(e,s){for(var a,c,i=o(e),l=1;l<arguments.length;l++){for(var u in a=Object(arguments[l]))t.call(a,u)&&(i[u]=a[u]);if(r){c=r(a);for(var p=0;p<c.length;p++)n.call(a,c[p])&&(i[c[p]]=a[c[p]])}}return i}},541535:(e,r,t)=>{var n=t(862525),o=60103,s=60106;var a=60109,c=60110,i=60112;var l=60115,u=60116;if("function"==typeof Symbol&&Symbol.for){var p=Symbol.for;o=p("react.element"),s=p("react.portal"),p("react.fragment"),p("react.strict_mode"),p("react.profiler"),a=p("react.provider"),c=p("react.context"),i=p("react.forward_ref"),p("react.suspense"),l=p("react.memo"),u=p("react.lazy")}var f="function"==typeof Symbol&&Symbol.iterator;function y(e){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)r+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var d={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},b={};function m(e,r,t){this.props=e,this.context=r,this.refs=b,this.updater=t||d}function g(){}function v(e,r,t){this.props=e,this.context=r,this.refs=b,this.updater=t||d}m.prototype.isReactComponent={},m.prototype.setState=function(e,r){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(y(85));this.updater.enqueueSetState(this,e,r,"setState")},m.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},g.prototype=m.prototype;var h=v.prototype=new g;h.constructor=v,n(h,m.prototype),h.isPureReactComponent=!0;var O={current:null},k=Object.prototype.hasOwnProperty,j={key:!0,ref:!0,__self:!0,__source:!0};function w(e,r,t){var n,s={},a=null,c=null;if(null!=r)for(n in void 0!==r.ref&&(c=r.ref),void 0!==r.key&&(a=""+r.key),r)k.call(r,n)&&!j.hasOwnProperty(n)&&(s[n]=r[n]);var i=arguments.length-2;if(1===i)s.children=t;else if(1<i){for(var l=Array(i),u=0;u<i;u++)l[u]=arguments[u+2];s.children=l}if(e&&e.defaultProps)for(n in i=e.defaultProps)void 0===s[n]&&(s[n]=i[n]);return{$$typeof:o,type:e,key:a,ref:c,props:s,_owner:O.current}}function P(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var _=/\/+/g;function S(e,r){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var r={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return r[e]}))}(""+e.key):r.toString(36)}function E(e,r,t,n,a){var c=typeof e;"undefined"!==c&&"boolean"!==c||(e=null);var i=!1;if(null===e)i=!0;else switch(c){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case o:case s:i=!0}}if(i)return a=a(i=e),e=""===n?"."+S(i,0):n,Array.isArray(a)?(t="",null!=e&&(t=e.replace(_,"$&/")+"/"),E(a,r,t,"",(function(e){return e}))):null!=a&&(P(a)&&(a=function(e,r){return{$$typeof:o,type:e.type,key:r,ref:e.ref,props:e.props,_owner:e._owner}}(a,t+(!a.key||i&&i.key===a.key?"":(""+a.key).replace(_,"$&/")+"/")+e)),r.push(a)),1;if(i=0,n=""===n?".":n+":",Array.isArray(e))for(var l=0;l<e.length;l++){var u=n+S(c=e[l],l);i+=E(c,r,t,u,a)}else if(u=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=f&&e[f]||e["@@iterator"])?e:null}(e),"function"==typeof u)for(e=u.call(e),l=0;!(c=e.next()).done;)i+=E(c=c.value,r,t,u=n+S(c,l++),a);else if("object"===c)throw r=""+e,Error(y(31,"[object Object]"===r?"object with keys {"+Object.keys(e).join(", ")+"}":r));return i}function U(e,r,t){if(null==e)return e;var n=[],o=0;return E(e,n,"","",(function(e){return r.call(t,e,o++)})),n}function x(e){if(-1===e._status){var r=e._result;r=r(),e._status=0,e._result=r,r.then((function(r){0===e._status&&(r=r.default,e._status=1,e._result=r)}),(function(r){0===e._status&&(e._status=2,e._result=r)}))}if(1===e._status)return e._result;throw e._result}var R={current:null};function C(){var e=R.current;if(null===e)throw Error(y(321));return e}},827378:(e,r,t)=>{t(541535)}}]);