"use strict";(self.webpackChunkhel_doc=self.webpackChunkhel_doc||[]).push([[3802],{6663:function(t,e,n){function r(t){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(t)}function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){return u(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==n)return;var r,o,a=[],i=!0,u=!1;try{for(n=n.call(t);!(i=(r=n.next()).done)&&(a.push(r.value),!e||a.length!==e);i=!0);}catch(c){u=!0,o=c}finally{try{i||null==n.return||n.return()}finally{if(u)throw o}}return a}(t,e)||s(t,e)||p()}function i(t){return function(t){if(Array.isArray(t))return l(t)}(t)||c(t)||s(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(t){if(Array.isArray(t))return t}function c(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}function s(t,e){if(t){if("string"==typeof t)return l(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?l(t,e):void 0}}function l(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function p(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}n.r(e),n.d(e,{DEFAULT_ONLINE_VER:function(){return rt},allowLog:function(){return at},default:function(){return Dt},getAppMeta:function(){return St},getAppPlatform:function(){return Mt},getAppStyleStr:function(){return Ct},getGlobalThis:function(){return ut},getHelDebug:function(){return it},getHelEventBus:function(){return st},getPlatform:function(){return tt},getPlatformConfig:function(){return gt},getPlatformHost:function(){return vt},getSharedCache:function(){return lt},getVerApp:function(){return yt},getVerLib:function(){return Lt},getVerLoadStatus:function(){return Nt},getVerStyleStrStatus:function(){return Vt},getVersion:function(){return Pt},helEvents:function(){return et},helLoadStatus:function(){return nt},initPlatformConfig:function(){return ht},isSubApp:function(){return X},libReady:function(){return dt},log:function(){return ot},setAppMeta:function(){return At},setAppPlatform:function(){return It},setAppStyleStr:function(){return Ft},setEmitApp:function(){return bt},setEmitLib:function(){return _t},setGlobalThis:function(){return ct},setVerLoadStatus:function(){return wt},setVerStyleStrStatus:function(){return Et},setVersion:function(){return Ot},tryGetAppName:function(){return ft},tryGetVersion:function(){return pt},trySetMasterAppLoadedSignal:function(){return Z}});var f=null;function d(){if(f)return f;try{if("undefined"!=typeof window)return window;if("undefined"!=typeof self)return self;if(void 0!==n.g)return n.g;throw new Error("opps")}catch(t){throw new Error("unable to locate global object")}}function v(){return d()}var m=!1,h=!1;function g(){if(!0!==h){h=!0;var t=d();void 0===t.__MASTER_APP_LOADED__&&(t.__MASTER_APP_LOADED__=!0,m=!0)}}var b,y,S="__default_online_ver__",A="unpkg",_="hel",L={NOT_LOAD:0,LOADING:1,LOADED:2},w=v().__HEL_MICRO_DEBUG__;function N(){return w}function E(){return 0!==I()}function V(t){N().logMode=t}function I(){return N().logMode}function M(t){N().logFilter=t}function P(){return N().logFilter}if(w||(w={logMode:0,logFilter:"",isInit:!1},v().__HEL_MICRO_DEBUG__=w),!N().isInit){N().isInit=!0;var O=(b=function(){try{var t,e;return(null===(t=d().top)||void 0===t||null===(e=t.location)||void 0===e?void 0:e.search)||""}catch(o){var n,r;return(null===(n=d())||void 0===n||null===(r=n.location)||void 0===r?void 0:r.search)||""}}(),y={},b&&b.startsWith("?")?(b.substring(1).split("&").forEach((function(t){var e=a(t.split("="),2),n=e[0],r=e[1];y[n]=r})),y):y),C=O.hellog,F=O.hellogf;"1"==C?V(1):"2"==C&&V(2),F&&M(F)}var D="  %c--\x3e HEL LOG:",R="color:#ad4e00;font-weight:600";function G(){if(E()){for(var t=1===I()?console.log:console.trace||console.log,e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];var o=n[0],a=n.slice(1);if("string"==typeof o){var u=P(),c=["".concat(D," ").concat(o),R].concat(i(a));return u?void(o.includes(u)&&t.apply(void 0,i(c))):void t.apply(void 0,i(c))}t.apply(void 0,[D,R].concat(n))}}function x(){var t="";try{throw new Error("getJsRunLocation")}catch(n){var e=n.stack.split("\n");t=e[e.length-1]||""}return t}function T(t,e,n,r){k(t,e)[n]=r}function k(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=t[e];return r||(r=n,t[e]=r),r}var H=v().__HEL_MICRO_SHARED__;function j(t){return{isConfigOverwrite:!1,isInnerConfigOverwrite:!1,platform:t,initPack:"out",apiMode:"jsonp",apiPrefix:"",apiSuffix:"",strictMatchVer:!0,apiPathOfApp:"/openapi/v1/app/info",apiPathOfAppVersion:"",getSubAppAndItsVersionFn:null,getSubAppVersionFn:null,onFetchMetaFailed:null,userLsKey:"",getUserName:null,appName2Comp:{},appName2Lib:{},appName2isLibAssigned:{},appName2EmitApp:{},appName2verLoadStatus:{},appName2verEmitLib:{},appName2verEmitApp:{},appName2verStyleStr:{},appName2verStyleFetched:{},appName2verAppVersion:{},appName2app:{},appName2appVersion:{},appName2styleStr:{},appGroupName2firstVer:{}}}function U(){return H}function B(){return U().cacheRoot.platform}function J(t){var e=t||B(),n=W(),r=n.caches[e];return r||(n.caches[e]=j(t)),r}function W(){return U().cacheRoot}function q(t,e){return!e||((null==t?void 0:t.online_version)===e||(null==t?void 0:t.build_version)===e)}var K=["ht","tps",":/","/foo","tpri","nt.q","q.c","om/"].join("");function z(t){return t===A?"https://unpkg.com":function(t){return"".concat(K).concat(t)}()}G("hel-micro-core ver ".concat("3.7.3")),g(),function(){if(H){var t=H.cacheRoot;k(t,"appGroupName2platform");var e=t.caches;Object.keys(e).forEach((function(t){k(e[t],"appGroupName2firstVer")}))}else H=function(){var t,e={},n=j(_),r=j(A),a={platform:_,appName2platform:{},appGroupName2platform:{},caches:(t={},o(t,_,n),o(t,A,r),t)};return{createFeature:x(),eventBus:{on:function(t,n){var r=e[t];if(!r){var o=[];e[t]=o,r=o}r.push(n)},emit:function(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];var a=e[t];a&&a.forEach((function(t){return t.apply(void 0,r)}))},off:function(t,n){var r=e[t];if(r)for(var o=0,a=r.length;o<a;o++)if(r[o]===n){r.splice(o,1);break}}},cacheRoot:a,unpkgCache:r,helCache:n,dev:{setLogMode:V,setLogFilter:M}}}(),v().__HEL_MICRO_SHARED__=H}();var Y=function(t,e,n,r){var o=r||{},a=o.versionId;T(lt(o.platform)[n],t,a||S,e)},$=function(t,e,n){var r,o=n||{},a=o.versionId,i=lt(o.platform)[e],u=a||S;return(null===(r=i[t])||void 0===r?void 0:r[u])||L.NOT_LOAD},Q=function(t,e,n){if(!t[S]){var r=St(e,n),o=t[null==r?void 0:r.online_version];o&&(t[S]=o)}},X=function(){return!m},Z=g,tt=B,et={SUB_APP_LOADED:"subAppLoaded",SUB_LIB_LOADED:"SubLibLoaded",STYLE_STR_FETCHED:"StyleStrFetched"},nt=L,rt=S,ot=G,at=E,it=N,ut=d,ct=function(t){f=t};function st(){return U().eventBus}function lt(t){return J(t)}function pt(t,e){var n=x();G("[[tryGetVersion]] may include source > ".concat(n));var r=lt(e).appGroupName2firstVer[t]||"";if(n.includes("https://")||n.includes("http://")){var o=a(n.split("//"),2)[1].split("/");if(r){if(e===A&&o.some((function(t){return t.includes(r)})))return r;if(o.includes(r))return r}return e===A?o[1].split("@")[1]||r:o[2]||r}return r}function ft(t,e){if(t.includes("_")){var n=t.split("_");return u(r=n)||c(r)||s(r)||p(),t.substring(0,t.length-15)}var r;return e||""}function dt(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=n.platform||Mt(t),o=pt(t,r),a=ft(o,t),i={platform:r,appName:a,appGroupName:t,versionId:o,appProperties:e,Comp:function(){},lifecycle:{}};_t(a,i,{appGroupName:t,platform:r});var u=st();u.emit(et.SUB_LIB_LOADED,i)}function vt(t){var e=t||tt(),n=lt(e).apiPrefix;return n||z(e)}function mt(t){return{apiMode:t.apiMode,apiPrefix:t.apiPrefix,apiSuffix:t.apiSuffix,apiPathOfApp:t.apiPathOfApp,apiPathOfAppVersion:t.apiPathOfAppVersion,getSubAppAndItsVersionFn:t.getSubAppAndItsVersionFn,getSubAppVersionFn:t.getSubAppVersionFn,onFetchMetaFailed:t.onFetchMetaFailed,strictMatchVer:t.strictMatchVer,getUserName:t.getUserName,userLsKey:t.userLsKey,platform:t.platform}}function ht(t,e){var n,r,o=J(e),a=mt(t);o.isConfigOverwrite||(o.isConfigOverwrite=!0,n=o,r=a,Object.keys(r).forEach((function(t){var e=r[t];[null,void 0,""].includes(e)||(n[t]=e)})))}function gt(t){return mt(J(t))}function bt(t,e){var n=e.versionId,r=lt(e.platform),o=r.appName2verEmitApp,a=r.appName2Comp,i=r.appName2EmitApp;q(r.appName2app[t],n)&&(a[t]=e.Comp,i[t]=e,T(o,t,S,e)),n&&T(o,t,n,e)}function yt(t,e){var n,r=e||{},o=r.versionId,a=r.platform,i=lt(a),u=i.appName2verEmitApp,c=i.appName2Comp,s=i.strictMatchVer,l=i.appName2EmitApp,p=null!==(n=e.strictMatchVer)&&void 0!==n?n:s,f=k(u,t);Q(f,t,a);var d=f[o||S],v=c[t],m=v?{Comp:v}:null,h=p?null:l[t]||m,g=d||h||null;return ot("[[ getVerApp ]] appName,options,result",t,e,g),g}function St(t,e){return lt(e).appName2app[t]}function At(t,e){lt(e).appName2app[t.name]=t}function _t(t,e,n){var o=(n||{}).appGroupName,a=e.versionId,i=e.appProperties,u=e.platform||n.platform,c=lt(u),s=c.appName2verEmitLib,l=c.appName2Lib,p=c.appName2isLibAssigned,f=St(t,u),d=function(t){var e=l[t];e?"object"===r(e)&&0===Object.keys(e).length&&Object.assign(e,i):l[t]=i,p[t]=!0};d(t),o?d(o):f&&d(f.app_group_name),ot("[[ setEmitLib ]] appMeta",f),q(f,a)&&T(s,t,S,i),a&&T(s,t,a,i)}function Lt(t,e){var n,r=e||{},o=e.versionId,a=lt(e.platform),i=a.appName2verEmitLib,u=a.appName2Lib,c=a.strictMatchVer,s=a.appName2isLibAssigned,l=null!==(n=r.strictMatchVer)&&void 0!==n?n:c,p=k(i,t);Q(p,t);var f=p[o||S],d=s[t]?u[t]:null,v=f||(l?null:d)||null;return ot("[[ getVerLib ]] appName,options,result",t,r,v),v}function wt(t,e,n){Y(t,e,"appName2verLoadStatus",n)}function Nt(t,e){return $(t,"appName2verLoadStatus",e)}function Et(t,e,n){Y(t,e,"appName2verStyleFetched",n)}function Vt(t,e){return $(t,"appName2verStyleFetched",e)}function It(t,e){return W().appGroupName2platform[t]=e,Mt(t)}function Mt(t){return W().appGroupName2platform[t]||B()}function Pt(t,e){var n,r=e||{},o=r.platform,a=r.versionId,i=lt(o),u=i.appName2verAppVersion,c=i.appName2appVersion[t]||null;return a&&(null===(n=u[t])||void 0===n?void 0:n[a])||c}function Ot(t,e,n){var r=(n||{}).platform,o=lt(r),a=o.appName2verAppVersion,i=o.appName2appVersion,u=o.appName2app,c=o.appGroupName2firstVer,s=e.sub_app_version,l=St(t,r);q(u[t],s)&&(i[t]=e,T(a,t,S,e)),T(a,t,s,e),c[l.app_group_name]=s}function Ct(t,e){var n,r=e||{},o=r.platform,a=r.versionId,i=lt(o),u=i.appName2verStyleStr,c=i.appName2styleStr[t]||"";return a?(null===(n=u[t])||void 0===n?void 0:n[a])||c||"":c}function Ft(t,e,n){var r=n||{},o=r.platform,a=r.versionId,i=lt(o),u=i.appName2verStyleStr,c=i.appName2verStyleFetched,s=i.appName2styleStr;a?(T(u,t,a,e),T(c,t,a,nt.LOADED)):s[t]=e}var Dt={DEFAULT_ONLINE_VER:S,helLoadStatus:L,helEvents:et,isSubApp:X,trySetMasterAppLoadedSignal:g,getHelEventBus:st,getHelDebug:N,getSharedCache:lt,getPlatform:B,getPlatformHost:vt,getPlatformConfig:gt,getAppPlatform:Mt,setAppPlatform:It,getVerApp:yt,setEmitApp:bt,getVerLib:Lt,setEmitLib:_t,getAppMeta:St,setAppMeta:At,getVersion:Pt,setVersion:Ot,getAppStyleStr:Ct,setAppStyleStr:Ft,getVerLoadStatus:Nt,setVerLoadStatus:wt,getVerStyleStrStatus:Vt,setVerStyleStrStatus:Et,tryGetVersion:pt,tryGetAppName:ft,initPlatformConfig:ht,libReady:dt,log:G,allowLog:E,getGlobalThis:d,setGlobalThis:ct}},3802:function(t,e,n){n.r(e),n.d(e,{appParamSrv:function(){return nt},appStyleSrv:function(){return pt},bindExternals:function(){return wt},bindReactRuntime:function(){return Nt},core:function(){return r},default:function(){return It},emitApp:function(){return tt},fetchAppAndVersion:function(){return X},getExtraData:function(){return _t},getFakeHelContext:function(){return dt},getMetaDataUrl:function(){return Et},init:function(){return Vt},isSubApp:function(){return o},preFetchApp:function(){return St},preFetchLib:function(){return yt},setExtraData:function(){return Lt}});var r=n(6663),o=r.isSubApp,a=function(){return a=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},a.apply(this,arguments)};function i(t,e,n,r){return new(n||(n=Promise))((function(o,a){function i(t){try{c(r.next(t))}catch(e){a(e)}}function u(t){try{c(r.throw(t))}catch(e){a(e)}}function c(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(i,u)}c((r=r.apply(t,e||[])).next())}))}function u(t,e){var n,r,o,a,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function u(a){return function(u){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,r&&(o=2&a[0]?r.return:a[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,a[1])).done)return o;switch(r=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return i.label++,{value:a[1],done:!1};case 5:i.label++,r=a[1],a=[0];continue;case 7:a=i.ops.pop(),i.trys.pop();continue;default:if(!(o=i.trys,(o=o.length>0&&o[o.length-1])||6!==a[0]&&2!==a[0])){i=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){i.label=a[1];break}if(6===a[0]&&i.label<o[1]){i.label=o[1],o=a;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(a);break}o[2]&&i.ops.pop(),i.trys.pop();continue}a=e.call(t,i)}catch(u){a=[6,u],r=0}finally{n=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,u])}}}function c(){var t,e={getItem:function(){},setItem:function(){}};try{return(null===(t=(0,r.getGlobalThis)())||void 0===t?void 0:t.localStorage)||e}catch(n){return e}}function s(t,e,n){if(t&&"string"!=typeof t)return t;try{return JSON.parse(t)}catch(r){if(void 0!==e)return e;if(n)throw new Error(n);throw r}}function l(t){return i(this,void 0,void 0,(function(){var e,n,r;return u(this,(function(o){switch(o.label){case 0:return[4,p("https://unpkg.com/".concat(t,"@latest/").concat(Date.now(),"_").concat(t))];case 1:return e=o.sent(),n=e.split("@"),r=n[1],[2,r.split("/")[0]]}}))}))}function p(t,e){return void 0===e&&(e=!0),i(this,void 0,void 0,(function(){var n;return u(this,(function(o){switch(o.label){case 0:return[4,(0,r.getGlobalThis)().fetch(t)];case 1:return 404===(n=o.sent()).status?[2,n.url]:e?[4,n.json()]:[3,3];case 2:return[2,o.sent()];case 3:return[4,n.text()];case 4:return[2,o.sent()]}}))}))}function f(t,e){return i(this,void 0,void 0,(function(){var n,r,o,a;return u(this,(function(i){switch(i.label){case 0:return[4,fetch("".concat(e,"/index.html?_t=").concat(Date.now()),{mode:"cors"})];case 1:return[4,i.sent().text()];case 2:return n=i.sent(),r=/(?<=(src="))[^"]*?(?=")/gi,o=n.match(r)||[],a=[],o.map((function(t){t.startsWith(e)&&a.push({tag:"script",attrs:{src:t}})})),[2,{app:{name:t,app_group_name:t,online_version:"",build_version:""},version:{sub_app_name:t,sub_app_version:"",src_map:{headAssetList:[],bodyAssetList:a}}}]}}))}))}function d(t,e){var n=t.src,r=function(t){var e=t.split("//"),n=e[0],r=e[1].split("/");return"".concat(n,"//").concat(r[0],"/")}(t.baseURI),o=n;return n.startsWith(r)&&(o=n.substring(r.length-1)),o===e}function v(t,e,n,o){if(void 0===n&&(n=!0),e){var a=(0,r.getGlobalThis)().document,i=function(t){return"helScript_".concat(t)}(t);if(function(t,e){for(var n=(0,r.getGlobalThis)().document.querySelectorAll("#".concat(t)),o=n.length,a=!1,i=0;i<o;i++){var u=n[i];if("SCRIPT"===u.nodeName&&d(u,e)){a=!0;break}}return a}(i,e))return!1;var u=a.createElement("script");return u.id=i,u.src=e,o&&(u.onload=o),n?a.body.appendChild(u):a.head.appendChild(u),!0}}function m(t,e,n){void 0===e&&(e=!1);var o=n.href,a=n.rel,i=n.as,u=(0,r.getGlobalThis)().document;if(o){var c=u.createElement("link");c.id=function(t){return"helLink_".concat(t)}(t),c.rel=a,c.href=o,i&&(c.as=i),e?u.body.appendChild(c):u.head.appendChild(c)}}function h(t,e,n){var r=n.appendToBody,o=n.appendCss,a=n.webDirPath,i=n.cssAppendTypes,u=n.excludeCssList;e.forEach((function(e){var n=e.tag,c=e.attrs;if(function(t,e){return"link"===t}(n)){var s=c.href;if(s.endsWith(".ico"))return;if(s.endsWith(".css"))return void(o&&i.includes(function(t,e){return e.startsWith(t)?"build":"static"}(a,s))&&!u.includes(s)&&m(t,r,c));m(t,r,c)}else if(function(t,e){return"script"===t}(n)){var l=c.src;v(t,l,r)}}))}function g(t){return r.getPlatformConfig(t)}function b(t){return r.getPlatformHost(t)}var y={now:function(){return(new Date).getTime()},rand:function(){return Math.random().toString().substring(6)},removeElem:function(t){var e=t.parentNode;e&&11!==e.nodeType&&e.removeChild(t)},parseData:function(t){var e="";if("string"==typeof t)e=t;else if("object"==typeof t)for(var n in t)e+="".concat(e,"&").concat(n,"=").concat(encodeURIComponent(t[n]));return e=(e+="&_t=".concat(y.now())).substring(1)},getJSON:function(t,e){return new Promise((function(n){var o="",a=t;a=a+(-1===a.indexOf("?")?"?":"&")+y.parseData(e);var i=/callback=(\w+)/.exec(a);o=(null==i?void 0:i[1])?i[1]:"helJsonp_".concat(y.now(),"_").concat(y.rand()),a=a.includes("?")?"".concat(a,"&callback=").concat(o):"".concat(a,"?callback=").concat(o);var u=(0,r.getGlobalThis)(),c=u.document,s=c.createElement("script");s.type="text/javascript",s.src=a,s.id=o,u[o]=function(t){delete u[o];var e=c.getElementById(o);return e&&y.removeElem(e),n(t)};var l=c.getElementsByTagName("head");(null==l?void 0:l[0])&&l[0].appendChild(s)}))}},S=y.getJSON,A="HelUserRtxName",_="getSubAppAndItsVersion",L="getSubAppAndItsFullVersion",w="getSubAppVersion",N="getSubAppFullVersion",E="/openapi/v1/app/info",V="unpkg";function I(t,e){return i(this,void 0,Promise,(function(){var n,o,a,i,c,s,l;return u(this,(function(u){switch(u.label){case 0:return n=null,o=e.isFullVersion,a=e.platform,i=e.onlyVersion,c=a===V?"get":e.apiMode,s="request ".concat(t),f=s,(0,r.allowLog)()&&console.time(f),"get"!==c?[3,2]:[4,p(t)];case 1:return n=u.sent(),[3,4];case 2:return[4,S(t)];case 3:n=u.sent(),u.label=4;case 4:return function(t){(0,r.allowLog)()&&console.timeEnd(t)}(s),a===V?(l=n.version,i&&(n=l),o||null==l||delete l.html_content,[2,{data:n,code:"0"}]):[2,n]}var f}))}))}function M(t){var e=a({},t);return e.additional_scripts=s(e.additional_scripts,[]),e.additional_body_scripts=s(e.additional_body_scripts,[]),e}function P(t){var e=a({},t);return e.src_map=s(e.src_map,{}),e}function O(t,e,n){return i(this,void 0,void 0,(function(){var r;return u(this,(function(o){switch(o.label){case 0:return(r=n)?[3,2]:[4,l(e)];case 1:r=o.sent(),o.label=2;case 2:return[2,"".concat(t,"/").concat(e,"@").concat(r,"/hel_dist/hel-meta.json?_t=").concat(Date.now())]}}))}))}function C(t,e){void 0===e&&(e={});var n=e.versionId,r=e.platform,o=e.apiMode,a=e.isFullVersion,i=b(r),u=g(r),s=u.apiSuffix,l=u.apiPathOfApp,p=u.platform,f=u.getUserName,d=u.userLsKey,v=(null==f?void 0:f({platform:p,appName:t}))||c().getItem(d||A)||"",m="",h="get"===o?"":"Jsonp",y="".concat(a?L:_).concat(h),S=l||E;return m="".concat(i).concat(S,"/").concat(y,"?name=").concat(t),v&&(m+="&userName=".concat(v)),n&&(m+="&version=".concat(n)),s&&(m+=s),{url:m,userName:v}}function F(t,e){return void 0===e&&(e={}),i(this,void 0,void 0,(function(){var n,r;return u(this,(function(o){switch(o.label){case 0:return n=e.versionId,r=e.platform,[4,O(b(r),t,n)];case 1:return[2,o.sent()]}}))}))}function D(t,e){return void 0===e&&(e={}),i(this,void 0,void 0,(function(){var n,r,o,a,i;return u(this,(function(u){switch(u.label){case 0:return n=e.platform,r=g(n).platform,o="",a="",r!==V?[3,2]:[4,F(t,e)];case 1:return a=u.sent(),[3,3];case 2:i=C(t,e),a=i.url,o=i.userName,u.label=3;case 3:return[2,{url:a,userName:o}]}}))}))}function R(t,e){return i(this,void 0,void 0,(function(){var n,r,o,a,i,c,s,l,p,f,d,v,m,h,y;return u(this,(function(u){switch(u.label){case 0:return n=e.platform,r=e.apiMode,o=e.appName,a=e.isFullVersion,i=void 0!==a&&a,c=b(n),s=g(n),l=s.apiSuffix,p=s.apiPathOfApp,f=s.apiPathOfAppVersion,d=s.platform,v="",d!==V?[3,2]:[4,O(c,o,t)];case 1:return v=u.sent(),[3,3];case 2:m="get"===r?"":"Jsonp",h="".concat(i?N:w).concat(m),y=f||p||E,v="".concat(c).concat(y,"/").concat(h,"?ver=").concat(t),l&&(v+=l),u.label=3;case 3:return[2,v]}}))}))}function G(t,e){return void 0===e&&(e={}),i(this,void 0,void 0,(function(){var n,r,o,a,c,s,l,p,f,d,v,m=this;return u(this,(function(h){switch(h.label){case 0:return n=e.versionId,r=e.platform,o=e.apiMode,a=g(r),c=a.getSubAppAndItsVersionFn,s=a.platform,[4,D(t,e)];case 1:return l=h.sent(),p=l.url,f=l.userName,d=function(t,e){return i(m,void 0,void 0,(function(){var n;return u(this,(function(r){switch(r.label){case 0:return[4,I(t||p,{apiMode:e||o,platform:s})];case 1:if(n=r.sent(),0!==parseInt(n.code))throw new Error(n.msg);return[2,{app:M(n.data.app),version:P(n.data.version)}]}}))}))},c?[4,Promise.resolve(c({platform:s,appName:t,userName:f,versionId:n,url:p,innerRequest:d}))]:[3,3];case 2:return[2,{app:M((v=h.sent()).app),version:P(v.version)}];case 3:return[4,d()];case 4:return[2,h.sent()]}}))}))}function x(t,e){return i(this,void 0,void 0,(function(){var n,r,o,a,c,s,l,p,f,d,v=this;return u(this,(function(m){switch(m.label){case 0:return n=e.platform,r=e.apiMode,o=e.appName,a=e.isFullVersion,c=void 0!==a&&a,s=g(n),l=s.getSubAppVersionFn,p=s.platform,[4,R(t,e)];case 1:return f=m.sent(),d=function(t,e){return i(v,void 0,void 0,(function(){var n;return u(this,(function(o){switch(o.label){case 0:return[4,I(t||f,{apiMode:e||r,isFullVersion:c,platform:p})];case 1:if(n=o.sent(),0!==parseInt(n.code))throw new Error(n.msg||"ver not found");return[2,P(n.data)]}}))}))},l?[4,Promise.resolve(l({platform:p,appName:o,versionId:t,url:f,innerRequest:d}))]:[3,3];case 2:return[2,P(m.sent())];case 3:return[4,d()];case 4:return[2,m.sent()]}}))}))}var T="HelAppCache",k="3.7.4",H=!1,j="HelExtraData";function U(t){var e=r.getPlatformConfig(t.platform);return t.onFetchMetaFailed||e.onFetchMetaFailed}function B(t,e){var n=function(t){return t||r.getPlatform()}(t),o=function(t,e){var n=g(t).apiMode;return e||n}(n,e);return{platform:n,apiMode:o}}function J(t){return"".concat(T,".").concat(t)}function W(t){return s(c().getItem(J(t))||"",null)}function q(t,e,n,o){return i(this,void 0,void 0,(function(){var a,i;return u(this,(function(u){switch(u.label){case 0:return a=t.sub_app_name,e?[4,x(e,{platform:n,apiMode:o,appName:a})]:[3,2];case 1:if(!(i=u.sent()))throw new Error("\u7248\u672c".concat(e,"\u4e0d\u5b58\u5728"));return r.setVersion(a,i),[2,i];case 2:return[2,t]}}))}))}function K(t,e){return i(this,void 0,void 0,(function(){var n,o,i,c,s,l,p,d,v,m,h,g,b,y,S,A,_,L,w;return u(this,(function(u){switch(u.label){case 0:return n=null,o=e.enableDiskCache,i=void 0===o?H:o,c=e.versionId,s=void 0===c?"":c,l=e.isFirstCall,p=void 0===l||l,(d=e.custom)?(v=d.enable,m=void 0===v||v,(h=d.host)&&m?[4,f(t,h)]:[3,2]):[3,2];case 1:return[2,{appInfo:(g=u.sent()).app,appVersion:g.version}];case 2:b=B(e.platform,e.apiMode),y=b.platform,S=b.apiMode,A=r.getAppMeta(t,y),_=r.getVersion(t,{platform:y}),u.label=3;case 3:return u.trys.push([3,12,,13]),A&&_?(n={appInfo:A,appVersion:_},[3,10]):[3,4];case 4:return i?(n=W(t))?[3,6]:[4,$(t,y,S,s)]:[3,8];case 5:return n=u.sent(),[3,7];case 6:Y(n.appInfo,n.appVersion,y,!1),$(t,y,S,s).catch((function(t){return t})),u.label=7;case 7:return[3,10];case 8:return[4,$(t,y,S,s)];case 9:n=u.sent(),u.label=10;case 10:return r.setAppPlatform(t,y),[4,q(L=n.appVersion,s,y,S)];case 11:return L=u.sent(),[2,a(a({},n),{appVersion:L})];case 12:if((w=u.sent()).message.includes("ver not found")&&U(e)){if(p)throw w;return[2,{appInfo:null,appVersion:null}]}if(n=W(t),p||!n)throw w;return[2,n];case 13:return[2]}}))}))}function z(t,e){return void 0===e&&(e={}),i(this,void 0,void 0,(function(){var n,r,o,a,i,c,s,l,p;return u(this,(function(u){switch(u.label){case 0:return n=e.versionId,r=e.isFullVersion,o=void 0!==r&&r,a=B(e.platform,e.apiMode),i=a.platform,c=a.apiMode,[4,G(t,{versionId:n,platform:i,apiMode:c,isFullVersion:o})];case 1:if(s=u.sent(),l=s.app,!(p=s.version))throw new Error("\u7248\u672c".concat(l.online_version,"\u4e0d\u5b58\u5728"));return[2,{appInfo:l,appVersion:p}]}}))}))}function Y(t,e,n,o){void 0===o&&(o=!0);var a=t.name;o&&c().setItem(J(a),JSON.stringify({appInfo:t,appVersion:e})),r.setAppMeta(t,n),r.setVersion(a,e,{platform:n})}function $(t,e,n,r){return i(this,void 0,void 0,(function(){var o,a,i;return u(this,(function(u){switch(u.label){case 0:return[4,z(t,{platform:e,apiMode:n,versionId:r})];case 1:return o=u.sent(),a=o.appInfo,i=o.appVersion,Y(a,i,e),[2,o]}}))}))}function Q(t,e){return void 0===e&&(e={}),i(this,void 0,Promise,(function(){var n,r,o,i,c,s,l,p,f,d,g;return u(this,(function(u){switch(u.label){case 0:n=e.isFirstCall,r=void 0===n||n,o=e.controlLoadAssets,i=void 0!==o&&o,u.label=1;case 1:return u.trys.push([1,5,,8]),[4,K(t,e)];case 2:return c=u.sent(),s=c.appInfo,l=c.appVersion,!(!s||!l)||r?[3,4]:(p=U(e))?[4,Promise.resolve(p({appName:t}))]:[3,4];case 3:(f=u.sent())&&(s=f.app,l=f.version),u.label=4;case 4:if(!s)throw new Error("\u5e94\u7528".concat(t,"\u4e0d\u5b58\u5728"));if(!l)throw new Error("\u5e94\u7528".concat(t,"\u7684\u7248\u672c\u4e0d\u5b58\u5728"));return function(t,e){t&&"function"==typeof e.onAppVersionFetched&&e.onAppVersionFetched(t)}(l,e),d=function(){var t,n=null===(t=e.appendCss)||void 0===t||t;!function(t,e,n){var r=t.name,o=t.additional_scripts,i=void 0===o?[]:o,u=t.additional_body_scripts,c=void 0===u?[]:u,s=e.src_map,l=s.headAssetList,p=void 0===l?[]:l,f=s.bodyAssetList,d=void 0===f?[]:f,g=s.webDirPath,b=s.chunkCssSrcList,y=n.useAdditionalScript,S=void 0!==y&&y,A=n.appendCss,_=void 0===A||A,L=n.cssAppendTypes,w=void 0===L?["static","build"]:L,N=n.getExcludeCssList,E=(null==N?void 0:N(b,{version:e}))||[],V=function(t,e){if(t)for(var n=0,o=t;n<o.length;n++){var a=o[n];a.endsWith(".css")?m(r,e,{href:a,rel:"stylesheet"}):v(r,a,e)}};S&&(V(i,!1),V(c,!0));var I={excludeCssList:E,webDirPath:g,appendCss:_,cssAppendTypes:w};h(r,p,a({appendToBody:!1},I)),h(r,d,a({appendToBody:!0},I))}(s,l,{useAdditionalScript:!1,appendCss:n})},i?[2,d]:(d(),[2,null]);case 5:return g=u.sent(),r?(console.error("loadApp err and try one more time: ",g),[4,Q(t,a(a({},e),{isFirstCall:!1}))]):[3,7];case 6:return[2,u.sent()];case 7:throw g;case 8:return[2]}}))}))}function X(t,e){var n;return i(this,void 0,void 0,(function(){var r;return u(this,(function(o){switch(o.label){case 0:return(r=a({},e||{})).isFullVersion=null===(n=r.isFullVersion)||void 0===n||n,[4,z(t,r)];case 1:return[2,o.sent()]}}))}))}var Z=(0,r.getHelEventBus)();function tt(t){var e=t.Comp,n=t.appGroupName,o=t.lifecycle,a=t.platform||(0,r.getAppPlatform)(n),i=(0,r.tryGetVersion)(n,a),u=(0,r.tryGetAppName)(i,n),c={Comp:e,appName:u,appGroupName:n,lifecycle:o,platform:a,versionId:i,isLib:!1};(0,r.setEmitApp)(u,c),Z.emit(r.helEvents.SUB_APP_LOADED,c)}function et(t,e){var n=e||{},o=n.platform,a=n.versionId,i=a||"";if(!a){var u=r.getAppMeta(t,o);i=(null==u?void 0:u.online_version)||(null==u?void 0:u.build_version)||""}return{platform:o||r.getPlatform(),versionId:i}}var nt=Object.freeze({__proto__:null,getPlatAndVer:et,getGroupedStyleList:function(t,e){var n={static:[],build:[]},o=r.getVersion(t,e);if(o){var a=o.src_map,i=a.webDirPath;a.chunkCssSrcList.forEach((function(t){t.startsWith(i)?n.static.push(t):n.build.push(t)}))}return n}});function rt(t,e,n,o){var a=(0,r.getAppMeta)(t,e);return n?o?n===o:n===(null==a?void 0:a.online_version)||n===(null==a?void 0:a.build_version):((0,r.log)("[[ isEmitVerMatchInputVer ]] emitVer should not be null"),!0)}var ot=r.helLoadStatus,at=ot.LOADED,it=ot.LOADING,ut=r.getHelEventBus(),ct=r.helEvents.STYLE_STR_FETCHED,st={},lt={isStyleStatusMatch:function(t,e,n){var o,a=et(t,n),i=a.platform,u=a.versionId,c=r.getSharedCache(i).appName2verStyleFetched,s=u||r.DEFAULT_ONLINE_VER;return(null===(o=c[t])||void 0===o?void 0:o[s])===e},getStyleUrlList:function(t,e){var n,o=et(t,e),a=r.getVersion(t,o);return a&&(null===(n=a.src_map)||void 0===n?void 0:n.chunkCssSrcList)||[]},fetchStyleStr:function(t){return i(this,void 0,void 0,(function(){var e,n,r,o,a;return u(this,(function(i){switch(i.label){case 0:e="",n=0,r=t.length,i.label=1;case 1:return n<r?(o=t[n],(a=st[o])?[3,3]:[4,p(o,!1)]):[3,5];case 2:a=i.sent(),i.label=3;case 3:e+=a,i.label=4;case 4:return n++,[3,1];case 5:return[2,e]}}))}))},waitStyleReady:function(t,e){return i(this,void 0,void 0,(function(){var n;return u(this,(function(r){switch(r.label){case 0:return n=null,[4,new Promise((function(r){n=function(n){var o=n.appName,a=n.platform,i=n.versionId,u=e.versionId,c=e.platform;o===t&&a===c&&rt(t,c,i,u)&&r(!0)},ut.on(ct,n)}))];case 1:return r.sent(),n&&ut.off(ct,n),[2]}}))}))},fetchAndCacheAppStyleStr:function(t,e){var n;return i(this,void 0,void 0,(function(){var o,i,c,s,l,p,f,d;return u(this,(function(u){switch(u.label){case 0:return o=et(t,e),(i=r.getAppStyleStr(t,o))?[2,i]:lt.isStyleStatusMatch(t,at,e)?[2,""]:lt.isStyleStatusMatch(t,it,e)?[4,lt.waitStyleReady(t,o)]:[3,2];case 1:return u.sent(),[2,r.getAppStyleStr(t,o)];case 2:return r.setVerStyleStrStatus(t,it,o),c=e.extraCssUrlList,s=void 0===c?[]:c,l=(l=lt.getStyleUrlList(t,e)).concat(s),p=(null===(n=e.getExcludeCssList)||void 0===n?void 0:n.call(e,l,{version:r.getVersion(t,o)}))||[],f=l.filter((function(t){return!p.includes(t)})),[4,lt.fetchStyleStr(f)];case 3:return d=u.sent(),r.setAppStyleStr(t,d,o),r.setVerStyleStrStatus(t,at,o),ut.emit(ct,a({appName:t},o)),[2,d]}}))}))}};var pt=Object.freeze({__proto__:null,fetchStyleStr:function(t,e){return i(this,void 0,Promise,(function(){return u(this,(function(n){switch(n.label){case 0:return[4,lt.fetchAndCacheAppStyleStr(t,e)];case 1:return[2,n.sent()]}}))}))},fetchStyleByUrlList:function(t){return i(this,void 0,void 0,(function(){return u(this,(function(e){switch(e.label){case 0:return[4,lt.fetchStyleStr(t)];case 1:return[2,e.sent()]}}))}))},getStyleStr:function(t,e){var n=et(t,e);return r.getAppStyleStr(t,n)},getStyleUrlList:function(t,e){return lt.getStyleUrlList(t,e)},isStyleFetched:function(t,e){return lt.isStyleStatusMatch(t,at,e)}});function ft(t){var e;return"string"==typeof t?null===(e=(0,r.getGlobalThis)())||void 0===e?void 0:e.document.getElementById(t):t}function dt(t,e){return{name:t,platform:(null==e?void 0:e.platform)||(0,r.getAppPlatform)(t),versionId:(null==e?void 0:e.versionId)||"",getShadowAppRoot:ft,getShadowBodyRoot:ft}}function vt(t,e,n){var o,i=n.platform,u=void 0===i?(0,r.getPlatform)():i,c=n.versionId,s=void 0===c?"":c,l=null!==(o=n.strictMatchVer)&&void 0!==o?o:(0,r.getPlatformConfig)(u).strictMatchVer,p=a(a({},n),{strictMatchVer:l});if(e){var f=(0,r.getVerLib)(t,p),d=(0,r.getAppMeta)(t);return f?{appName:t,appGroupName:(null==d?void 0:d.app_group_name)||"",platform:u,appProperties:f,isLib:!0,versionId:s,Comp:null,lifecycle:void 0}:null}return(0,r.getVerApp)(t,p)||null}var mt=(0,r.getHelEventBus)();function ht(t,e){var n="string"==typeof e?{versionId:e}:a({},e||{});return n.platform=n.platform||V,n.isLib=t,n}function gt(t,e,n){return i(this,void 0,void 0,(function(){var o,a,i,c,s,l,p;return u(this,(function(u){switch(u.label){case 0:return o=e.platform,a=e.isLib,i=e.loadAssetsStarter,c=e.versionId,s=e.strictMatchVer,l=a?r.helEvents.SUB_LIB_LOADED:r.helEvents.SUB_APP_LOADED,p=null,[4,new Promise((function(e){p=function(i){!function(t,e,n){(0,r.log)("[[ judgeAppReady ]] receive emitApp",t);var o=e.versionId,a=void 0===o?"":o,i=e.appName,u=e.platform,c=e.next,s=e.strictMatchVer,l=t.appName,p=t.appGroupName,f=t.platform,d=void 0===f?(0,r.getPlatform)():f,v=t.versionId,m="".concat(u,"/").concat(i,"/").concat(a),h=(0,r.getAppMeta)(i,u),g=u||(0,r.getPlatform)();!1===s&&(null==h?void 0:h.app_group_name)===p&&g===d&&((0,r.log)("[[ judgeAppReady ]] treat emitApp as wanted under strictMatchVer === false",t),c());var b=n.custom;if(b){var y=b.enable,S=void 0===y||y,A=b.host,_=b.appGroupName;S&&A&&(p===i||p===_)&&c()}i===l&&d===u&&rt(i,u,v,a)?c():(0,r.log)("still wait ".concat(m," emitted"),t,e)}(i,{appName:t,platform:o,versionId:c,isLib:a,next:e,strictMatchVer:s},n)},mt.on(l,p),i&&i()}))];case 1:return u.sent(),p&&mt.off(l,p),[2,vt(t,a,{platform:o,versionId:c,strictMatchVer:s})]}}))}))}function bt(t,e){var n;return i(this,void 0,void 0,(function(){var o,i,c,s,l,p,f,d,v,m,h,g,b;return u(this,(function(u){switch(u.label){case 0:o=null,u.label=1;case 1:return u.trys.push([1,7,,8]),c=(i=e).isLib,s=void 0!==c&&c,l=i.versionId,p=i.platform,f=(0,r.getPlatformConfig)(p),d=null!==(n=i.strictMatchVer)&&void 0!==n?n:f.strictMatchVer,v={platform:p,isLib:s,versionId:l,strictMatchVer:d},(o=vt(t,s,m={platform:p,versionId:l,strictMatchVer:d}))&&(!l||l&&o.versionId===l)?((0,r.log)("[[ preFetch ]] hit cached app",t,e),[2,o]):(h=null,(g=(0,r.getVerLoadStatus)(t,m))!==r.helLoadStatus.LOADED?[3,3]:[4,gt(t,v,e)]);case 2:return o=u.sent(),(0,r.log)("[[ preFetch ]] return emit app",t,e),[2,o];case 3:return g===r.helLoadStatus.LOADING?[3,5]:((0,r.setVerLoadStatus)(t,r.helLoadStatus.LOADING,m),[4,Q(t,a(a({},i),{controlLoadAssets:!0}))]);case 4:h=u.sent(),u.label=5;case 5:return[4,gt(t,a(a({},v),{loadAssetsStarter:h}),e)];case 6:return o=u.sent(),(0,r.log)("[[ preFetch ]] return fetch&emit app",t,e),[2,o];case 7:return b=u.sent(),(0,r.log)("[[ preFetch ]] err",b),[2,o];case 8:return[2]}}))}))}function yt(t,e){return i(this,void 0,Promise,(function(){var n,r;return u(this,(function(o){switch(o.label){case 0:return n=ht(!0,e),[4,bt(t,n)];case 1:if(!(r=o.sent()))throw new Error("preFetchLib ".concat(t," fail, it may be an invalid module!"));return[2,r.appProperties]}}))}))}function St(t,e){return i(this,void 0,void 0,(function(){var n;return u(this,(function(r){switch(r.label){case 0:return n=ht(!1,e),[4,bt(t,n)];case 1:return[2,r.sent()]}}))}))}function At(t){return"".concat(j,".").concat(t)}function _t(t,e){var n,o,a=null!=e&&e,i=null!==(o=null===(n=(0,r.getGlobalThis)().localStorage)||void 0===n?void 0:n.getItem(At(t)))&&void 0!==o?o:null;return i?a?JSON.parse(i):i:null}function Lt(t,e,n){var o,a=null!=n&&n?JSON.stringify(e):e;null===(o=(0,r.getGlobalThis)().localStorage)||void 0===o||o.setItem(At(t),a)}function wt(t){var e=(0,r.getGlobalThis)();Object.keys(t).forEach((function(n){e[n]=t[n]}))}function Nt(t){var e={LEAH_React:t.React,LEAH_ReactDOM:t.ReactDOM,LEAH_ReactIs:null,LEAH_ReactReconciler:null};t.ReactIs&&(e.LEAH_ReactIs=t.ReactIs),t.ReactReconciler&&(e.LEAH_ReactReconciler=t.ReactReconciler),wt(e)}function Et(t,e){var n=e||{},r=n.versionId,o=n.platform,a=n.apiMode;return C(t,{platform:o,versionId:r,apiMode:void 0===a?"get":a}).url}function Vt(t){var e=t.platform,n=function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(t);o<r.length;o++)e.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(t,r[o])&&(n[r[o]]=t[r[o]])}return n}(t,["platform"]);r.initPlatformConfig(n,e)}r.log("hel-micro ".concat(k));var It={preFetchLib:yt,preFetchApp:St,appStyleSrv:pt,appParamSrv:nt,fetchAppAndVersion:X,getMetaDataUrl:Et,emitApp:tt,init:Vt,isSubApp:o,getFakeHelContext:dt,getExtraData:_t,setExtraData:Lt,bindExternals:wt,bindReactRuntime:Nt,core:r}}}]);