/*! For license information please see 9374.b160fa79.js.LICENSE.txt */
"use strict";(self.webpackChunkhel_doc=self.webpackChunkhel_doc||[]).push([[9374],{9374:(t,e,r)=>{r.r(e),r.d(e,{appMetaSrv:()=>Ae,appParamSrv:()=>Ee,appStyleSrv:()=>Fe,batchPreFetchLib:()=>vr,bindExternals:()=>Te,bindReactRuntime:()=>He,bindVueRuntime:()=>Be,core:()=>n,default:()=>mr,emitApp:()=>Gt,getExtraData:()=>Je,getFakeHelContext:()=>ze,init:()=>Ge,isSubApp:()=>ke,logicSrv:()=>je,preFetchApp:()=>dr,preFetchLib:()=>fr,setExtraData:()=>We});var n={};function o(t){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o(t)}function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function i(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==r)return;var n,o,a=[],i=!0,s=!1;try{for(r=r.call(t);!(i=(n=r.next()).done)&&(a.push(n.value),!e||a.length!==e);i=!0);}catch(c){s=!0,o=c}finally{try{i||null==r.return||r.return()}finally{if(s)throw o}}return a}(t,e)||c(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(t){return function(t){if(Array.isArray(t))return u(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||c(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(t,e){if(t){if("string"==typeof t)return u(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?u(t,e):void 0}}function u(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}r.r(n),r.d(n,{DEFAULT_ONLINE_VER:()=>tt,allowLog:()=>rt,default:()=>Dt,getAppMeta:()=>bt,getAppPlatform:()=>Vt,getAppStyleStr:()=>Ct,getGlobalThis:()=>ot,getHelDebug:()=>nt,getHelEventBus:()=>it,getPlatform:()=>Q,getPlatformConfig:()=>vt,getPlatformHost:()=>lt,getSharedCache:()=>st,getVerApp:()=>ht,getVerExtraCssList:()=>At,getVerLib:()=>St,getVerLoadStatus:()=>Et,getVerStyleStrStatus:()=>wt,getVersion:()=>Ot,helEvents:()=>X,helLoadStatus:()=>Z,initPlatformConfig:()=>dt,isSubApp:()=>Y,libReady:()=>pt,log:()=>et,setAppMeta:()=>yt,setAppPlatform:()=>Nt,setAppStyleStr:()=>Pt,setEmitApp:()=>mt,setEmitLib:()=>gt,setGlobalThis:()=>at,setVerExtraCssList:()=>_t,setVerLoadStatus:()=>Lt,setVerStyleStrStatus:()=>It,setVersion:()=>Mt,tryGetAppName:()=>ut,tryGetVersion:()=>ct,trySetMasterAppLoadedSignal:()=>$});var p="unpkg",l={NOT_LOAD:0,LOADING:1,LOADED:2},f=["ht","tps",":/","/foo","tpri","nt.q","q.c","om/"].join("");function d(t){return t===p?"https://unpkg.com":function(t){return"".concat(f).concat(t)}()}var v=null;function m(){if(v)return v;try{if("undefined"!=typeof window)return window;if("undefined"!=typeof self)return self;if(void 0!==r.g)return r.g;throw new Error("opps")}catch(t){throw new Error("unable to locate global object")}}function h(){return m()}var b,y,g=h().__HEL_MICRO_DEBUG__;function S(){return g}function _(t,e){return e.includes(",")?e.split(",").some((function(e){return t.includes(e)})):t.includes(e)}function A(){return 0!==E()}function L(t){S().logMode=t}function E(){return S().logMode}function I(t){S().logFilter=t}function w(){return S().logFilter}if(g?void 0===g.logMode&&(g.logMode=0,g.logFilter=""):(g={logMode:0,logFilter:"",isInit:!1},h().__HEL_MICRO_DEBUG__=g),!S().isInit){S().isInit=!0;var N=(b=function(){try{var t,e;return(null===(t=m().top)||void 0===t||null===(e=t.location)||void 0===e?void 0:e.search)||""}catch(o){var r,n;return(null===(r=m())||void 0===r||null===(n=r.location)||void 0===n?void 0:n.search)||""}}(),y={},b&&b.startsWith("?")?(b.substring(1).split("&").forEach((function(t){var e=i(t.split("="),2),r=e[0],n=e[1];y[r]=n})),y):y),V=N.hellog,O=N.hellogf;"1"==V?L(1):"2"==V&&L(2),O&&I(O)}var M="  %c--\x3e HEL LOG:",C="color:#ad4e00;font-weight:600";function P(){if(A()){for(var t=1===E()?console.log:console.trace||console.log,e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];var o=r[0],a=r.slice(1);if("string"==typeof o){var i=w(),c=["".concat(M," ").concat(o),C].concat(s(a));return i?void(_(o,i)&&t.apply(void 0,s(c))):void t.apply(void 0,s(c))}t.apply(void 0,[M,C].concat(r))}}function D(){var t="";try{throw new Error("getJsRunLocation")}catch(r){var e=r.stack.split("\n");t=e[e.length-1]||""}return t}function F(t,e,r,n){x(t,e)[r]=n}function x(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=t[e];return n||(n=r,t[e]=n),n}var R=h().__HEL_MICRO_SHARED__;function j(t){return{isConfigOverwrite:!1,isInnerConfigOverwrite:!1,platform:t,initPack:"out",apiMode:"jsonp",apiPrefix:"",apiSuffix:"",strictMatchVer:!0,apiPathOfApp:"/openapi/v1/app/info",apiPathOfAppVersion:"",getSubAppAndItsVersionFn:null,onFetchMetaFailed:null,userLsKey:"",getUserName:null,appName2Comp:{},appName2Lib:{},appName2isLibAssigned:{},appName2EmitApp:{},appName2verLoadStatus:{},appName2verEmitLib:{},appName2verEmitApp:{},appName2verStyleStr:{},appName2verStyleFetched:{},appName2verExtraCssList:{},appName2verAppVersion:{},appName2app:{},appName2appVersion:{},appName2styleStr:{},appGroupName2firstVer:{}}}function G(){return R}function k(){return G().cacheRoot.platform||"unpkg"}function T(t){var e=t||k(),r=H(),n=r.caches[e];if(!n){var o=j(t);r.caches[e]=o,n=o}return n}function H(){return G().cacheRoot}function B(t,e){return!e||((null==t?void 0:t.online_version)===e||(null==t?void 0:t.build_version)===e)}var U=!1,J=!1;function W(){if(!0!==J){J=!0;var t=m();void 0===t.__MASTER_APP_LOADED__&&(t.__MASTER_APP_LOADED__=!0,U=!0)}}P("hel-micro-core ver ".concat("3.9.5")),W(),function(){if(R){var t=R.cacheRoot;x(t,"appGroupName2platform");var e=t.caches;Object.keys(e).forEach((function(t){var r=e[t];x(r,"appGroupName2firstVer"),x(r,"appName2verExtraCssList")}))}else R=function(){var t,e={},r=j("hel"),n=j(p),o={platform:"",appName2platform:{},appGroupName2platform:{},caches:(t={},a(t,"hel",r),a(t,p,n),t)};return{createFeature:D(),eventBus:{on:function(t,r){var n=e[t];if(!n){var o=[];e[t]=o,n=o}n.push(r)},emit:function(t){for(var r=arguments.length,n=new Array(r>1?r-1:0),o=1;o<r;o++)n[o-1]=arguments[o];var a=e[t];a&&a.forEach((function(t){return t.apply(void 0,n)}))},off:function(t,r){var n=e[t];if(n)for(var o=0,a=n.length;o<a;o++)if(n[o]===r){n.splice(o,1);break}}},cacheRoot:o,unpkgCache:n,helCache:r,dev:{setLogMode:L,setLogFilter:I}}}(),h().__HEL_MICRO_SHARED__=R}();var q=function(t,e,r,n){var o=n||{},a=o.versionId;F(st(o.platform)[r],t,a||tt,e)},z=function(t,e,r){var n,o=r||{},a=o.versionId,i=st(o.platform)[e],s=a||tt;return(null===(n=i[t])||void 0===n?void 0:n[s])||l.NOT_LOAD},K=function(t,e,r){if(!t[tt]){var n=bt(e,r),o=t[null==n?void 0:n.online_version];o&&(t[tt]=o)}},Y=function(){return!U},$=W,Q=k,X={SUB_APP_LOADED:"subAppLoaded",SUB_LIB_LOADED:"SubLibLoaded",STYLE_STR_FETCHED:"StyleStrFetched"},Z=l,tt="__default_online_ver__",et=P,rt=A,nt=S,ot=m,at=function(t){v=t};function it(){return G().eventBus}function st(t){return T(t)}function ct(t,e){var r=D();P("[[tryGetVersion]] may include source > ".concat(r));var n=st(e).appGroupName2firstVer[t]||"";if(r.includes("https://")||r.includes("http://")){var o=i(r.split("//"),2)[1].split("/");if(n){if(e===p&&o.some((function(t){return t.includes(n)})))return n;if(o.includes(n))return n}return e===p?o[1].split("@")[1]||n:o[2]||n}return n}function ut(t,e){return t.includes("_")?t.substring(0,t.length-15):e||""}function pt(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=r.platform||Vt(t),o=ct(t,n),a=ut(o,t),i=bt(a,n);i&&i.__fromCust&&(o=i.online_version,a=i.name);var s={platform:n,appName:a,appGroupName:t,versionId:o,appProperties:e,Comp:function(){},lifecycle:{}};gt(a,s,{appGroupName:t,platform:n});var c=it();c.emit(X.SUB_LIB_LOADED,s)}function lt(t){var e=t||Q(),r=st(e).apiPrefix;return r||d(e)}function ft(t){return{apiMode:t.apiMode,apiPrefix:t.apiPrefix,apiSuffix:t.apiSuffix,apiPathOfApp:t.apiPathOfApp,apiPathOfAppVersion:t.apiPathOfAppVersion,getSubAppAndItsVersionFn:t.getSubAppAndItsVersionFn,onFetchMetaFailed:t.onFetchMetaFailed,strictMatchVer:t.strictMatchVer,getUserName:t.getUserName,userLsKey:t.userLsKey,platform:t.platform}}function dt(t,e){var r,n,o=T(e),a=ft(t);o.isConfigOverwrite||(o.isConfigOverwrite=!0,r=o,n=a,Object.keys(n).forEach((function(t){var e=n[t];[null,void 0,""].includes(e)||(r[t]=e)})))}function vt(t){return ft(T(t))}function mt(t,e){var r=e.versionId,n=st(e.platform),o=n.appName2verEmitApp,a=n.appName2Comp,i=n.appName2EmitApp;B(n.appName2app[t],r)&&(a[t]=e.Comp,i[t]=e,F(o,t,tt,e)),r&&F(o,t,r,e)}function ht(t,e){var r,n=e||{},o=n.versionId,a=n.platform,i=st(a),s=i.appName2verEmitApp,c=i.appName2Comp,u=i.strictMatchVer,p=i.appName2EmitApp,l=null!==(r=e.strictMatchVer)&&void 0!==r?r:u,f=x(s,t);K(f,t,a);var d=f[o||tt],v=c[t],m=v?{Comp:v}:null,h=l?null:p[t]||m,b=d||h||null;return et("[[ getVerApp ]] appName,options,result",t,e,b),b}function bt(t,e){return st(e).appName2app[t]}function yt(t,e){st(e).appName2app[t.name]=t}function gt(t,e,r){var n=(r||{}).appGroupName,a=e.versionId,i=e.appProperties,s=e.platform||r.platform,c=st(s),u=c.appName2verEmitLib,p=c.appName2Lib,l=c.appName2isLibAssigned,f=bt(t,s),d=function(t){var e=p[t];e?"object"===o(e)&&0===Object.keys(e).length&&Object.assign(e,i):p[t]=i,l[t]=!0};d(t),n?d(n):f&&d(f.app_group_name),et("[[ setEmitLib ]] appMeta",f);var v=x(u,t);(!f&&!v[tt]||B(f,a))&&F(u,t,tt,i),a&&F(u,t,a,i)}function St(t,e){var r,n=e||{},o=n.versionId,a=st(n.platform),i=a.appName2verEmitLib,s=a.appName2Lib,c=a.strictMatchVer,u=a.appName2isLibAssigned,p=null!==(r=n.strictMatchVer)&&void 0!==r?r:c,l=x(i,t);K(l,t);var f=l[o||tt],d=u[t]?s[t]:null,v=f||(p?null:d)||null;return et("[[ getVerLib ]] appName,options,result",t,n,v),v}function _t(t,e,r){var n=r||{},o=n.versionId,a=n.platform,i=st(a).appName2verExtraCssList,s=bt(t,a);et("[[ setVerExtraCssList ]] cssList",e);var c=x(i,t);(!s&&!c[tt]||B(s,o))&&F(i,t,tt,e),o&&F(i,t,o,e)}function At(t,e){var r=e||{},n=r.versionId,o=x(st(r.platform).appName2verExtraCssList,t),a=o[n]||o[tt]||[];return et("[[ getVerExtraCssList ]] options, cssList",r,a),a}function Lt(t,e,r){q(t,e,"appName2verLoadStatus",r)}function Et(t,e){return z(t,"appName2verLoadStatus",e)}function It(t,e,r){q(t,e,"appName2verStyleFetched",r)}function wt(t,e){return z(t,"appName2verStyleFetched",e)}function Nt(t,e){return H().appGroupName2platform[t]=e,Vt(t)}function Vt(t){return H().appGroupName2platform[t]||k()}function Ot(t,e){var r,n=e||{},o=n.platform,a=n.versionId,i=st(o),s=i.appName2verAppVersion,c=i.appName2appVersion[t]||null;return a&&(null===(r=s[t])||void 0===r?void 0:r[a])||c}function Mt(t,e,r){var n=(r||{}).platform,o=st(n),a=o.appName2verAppVersion,i=o.appName2appVersion,s=o.appName2app,c=o.appGroupName2firstVer,u=e.sub_app_version,p=bt(t,n);B(s[t],u)&&(i[t]=e,F(a,t,tt,e)),F(a,t,u,e),c[p.app_group_name]=u}function Ct(t,e){var r,n=e||{},o=n.platform,a=n.versionId,i=st(o),s=i.appName2verStyleStr,c=i.appName2styleStr[t]||"";return a?(null===(r=s[t])||void 0===r?void 0:r[a])||c||"":c}function Pt(t,e,r){var n=r||{},o=n.platform,a=n.versionId,i=st(o),s=i.appName2verStyleStr,c=i.appName2verStyleFetched,u=i.appName2styleStr;a?(F(s,t,a,e),F(c,t,a,Z.LOADED)):u[t]=e}var Dt={DEFAULT_ONLINE_VER:tt,helLoadStatus:Z,helEvents:X,isSubApp:Y,trySetMasterAppLoadedSignal:$,getHelEventBus:it,getHelDebug:nt,getSharedCache:st,getPlatform:Q,getPlatformHost:lt,getPlatformConfig:vt,getAppPlatform:Vt,setAppPlatform:Nt,getVerApp:ht,setEmitApp:mt,getVerLib:St,setEmitLib:gt,getAppMeta:bt,setAppMeta:yt,getVersion:Ot,setVersion:Mt,getAppStyleStr:Ct,setAppStyleStr:Pt,getVerLoadStatus:Et,setVerLoadStatus:Lt,getVerStyleStrStatus:wt,setVerStyleStrStatus:It,getVerExtraCssList:At,setVerExtraCssList:_t,tryGetVersion:ct,tryGetAppName:ut,initPlatformConfig:dt,libReady:pt,log:et,allowLog:rt,getGlobalThis:ot,setGlobalThis:at},Ft="3.9.3",xt=!1,Rt="HelExtraData",jt=it();function Gt(t){var e=t.Comp,r=t.appGroupName,n=t.lifecycle,o=t.platform||Vt(r),a=ct(r,o),i=ut(a,r),s={Comp:e,appName:i,appGroupName:r,lifecycle:n,platform:o,versionId:a,isLib:!1};mt(i,s),jt.emit(X.SUB_APP_LOADED,s)}var kt=function(){return kt=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var o in e=arguments[r])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},kt.apply(this,arguments)};function Tt(t,e,r,n){return new(r||(r=Promise))((function(o,a){function i(t){try{c(n.next(t))}catch(e){a(e)}}function s(t){try{c(n.throw(t))}catch(e){a(e)}}function c(t){var e;t.done?o(t.value):(e=t.value,e instanceof r?e:new r((function(t){t(e)}))).then(i,s)}c((n=n.apply(t,e||[])).next())}))}function Ht(t,e){var r,n,o,a,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function s(a){return function(s){return function(a){if(r)throw new TypeError("Generator is already executing.");for(;i;)try{if(r=1,n&&(o=2&a[0]?n.return:a[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,a[1])).done)return o;switch(n=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return i.label++,{value:a[1],done:!1};case 5:i.label++,n=a[1],a=[0];continue;case 7:a=i.ops.pop(),i.trys.pop();continue;default:if(!(o=i.trys,(o=o.length>0&&o[o.length-1])||6!==a[0]&&2!==a[0])){i=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){i.label=a[1];break}if(6===a[0]&&i.label<o[1]){i.label=o[1],o=a;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(a);break}o[2]&&i.ops.pop(),i.trys.pop();continue}a=e.call(t,i)}catch(s){a=[6,s],n=0}finally{r=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,s])}}}var Bt="HelUserRtxName",Ut="getSubAppAndItsVersion",Jt="getSubAppAndItsFullVersion",Wt="batchGetSubAppAndItsVersion",qt="batchGetSubAppAndItsFullVersion",zt="getSubAppVersion",Kt="getSubAppFullVersion",Yt="/openapi/v1/app/info",$t="unpkg",Qt={now:function(){return(new Date).getTime()},rand:function(){return Math.random().toString().substring(6)},removeElem:function(t){var e=t.parentNode;e&&11!==e.nodeType&&e.removeChild(t)},parseData:function(t){var e="";if("string"==typeof t)e=t;else if("object"==typeof t)for(var r in t)e+="".concat(e,"&").concat(r,"=").concat(encodeURIComponent(t[r]));return e=(e+="&_t=".concat(Qt.now())).substring(1)},getJSON:function(t,e){return new Promise((function(r){var n="",o=t;o=o+(-1===o.indexOf("?")?"?":"&")+Qt.parseData(e);var a=/callback=(\w+)/.exec(o);n=(null==a?void 0:a[1])?a[1]:"helJsonp_".concat(Qt.now(),"_").concat(Qt.rand()),o=o.includes("?")?"".concat(o,"&callback=").concat(n):"".concat(o,"?callback=").concat(n);var i=ot(),s=i.document,c=s.createElement("script");c.type="text/javascript",c.src=o,c.id=n,i[n]=function(t){delete i[n];var e=s.getElementById(n);return e&&Qt.removeElem(e),r(t)};var u=s.getElementsByTagName("head");(null==u?void 0:u[0])&&u[0].appendChild(c)}))}},Xt=Qt.getJSON;function Zt(t){return vt(t)}function te(t){return lt(t)}function ee(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return t}function re(){var t,e={getItem:function(){},setItem:function(){}};try{return(null===(t=ot())||void 0===t?void 0:t.localStorage)||e}catch(r){return e}}function ne(t,e){t.includes(e)||t.push(e)}function oe(t,e){var r=[];return t.forEach((function(t){return ne(r,t)})),e.forEach((function(t){return ne(r,t)})),r}function ae(t,e,r){if(t&&"string"!=typeof t)return t;try{return JSON.parse(t)}catch(n){if(void 0!==e)return e;if(r)throw new Error(r);throw n}}function ie(t,e){return Tt(this,void 0,void 0,(function(){var r,n,o;return Ht(this,(function(a){switch(a.label){case 0:return[4,se("".concat(e,"/").concat(t,"@latest/").concat(Date.now(),"_").concat(t))];case 1:return r=a.sent().url,n=r.split("@"),o=n[1],[2,o.split("/")[0]]}}))}))}function se(t,e){return void 0===e&&(e=!0),Tt(this,void 0,void 0,(function(){var r,n,o,a,i;return Ht(this,(function(s){switch(s.label){case 0:return[4,ot().fetch(t)];case 1:return r=s.sent(),n=r.status,o=r.url,404===n?[2,{url:o,reply:null}]:e?[4,r.json()]:[3,3];case 2:return a=s.sent(),[2,{url:o,reply:a}];case 3:return[4,r.text()];case 4:return i=s.sent(),[2,{url:o,reply:i}]}}))}))}function ce(t,e){return Tt(this,void 0,void 0,(function(){var r,n,o,a,i,s,c;return Ht(this,(function(u){switch(u.label){case 0:r=Date.now(),u.label=1;case 1:return u.trys.push([1,3,,4]),[4,se("".concat(e,"/hel-meta.json?_t=").concat(r))];case 2:return(n=u.sent().reply)?(n.app.__fromCust=!0,[2,n]):[3,4];case 3:return u.sent(),ee("json parse fail or other error"),[3,4];case 4:return[4,se("".concat(e,"/index.html?_t=").concat(r),!1)];case 5:return o=u.sent(),a=o.reply,i=new RegExp('(?<=(src="))[^"]*?(?=")',"ig"),s=a.match(i)||[],c=[],s.forEach((function(t){t.startsWith(e)&&c.push({tag:"script",attrs:{src:t}})})),[2,{app:{__fromCust:!0,name:t,app_group_name:t,online_version:"",build_version:""},version:{sub_app_name:t,sub_app_version:"",src_map:{headAssetList:[],bodyAssetList:c}}}]}}))}))}function ue(t){var e=t.extraCssList,r=void 0===e?[]:e,n=t.custom;if(n){var o=n.extraCssList,a=void 0===o?[]:o,i=n.cssStrategy,s=void 0===i?"only_cust":i,c=n.enable;return void 0===c||c?"only_cust"===s?a:"only_out"===s?r:oe(r,a):r}return r}function pe(t){return t||$t}function le(t,e){return Tt(this,void 0,Promise,(function(){var r,n,o,a,i,s,c,u;return Ht(this,(function(p){switch(p.label){case 0:return r=null,n=e.isFullVersion,o=e.platform,a=e.onlyVersion,i=o===$t?"get":e.apiMode,s="request ".concat(t),l=s,rt()&&console.time(l),"get"!==i?[3,2]:[4,se(t)];case 1:return c=p.sent(),r=c.reply,[3,4];case 2:return[4,Xt(t)];case 3:r=p.sent(),p.label=4;case 4:return function(t){rt()&&console.timeEnd(t)}(s),o===$t?(u=r.version,a&&(r=u),n||null==u||delete u.html_content,[2,{data:r,code:"0",msg:""}]):[2,r]}var l}))}))}function fe(t){var e=kt({},t);return e.additional_scripts=ae(e.additional_scripts,[]),e.additional_body_scripts=ae(e.additional_body_scripts,[]),e}function de(t){var e=kt({},t);return e.src_map=ae(e.src_map,{}),e}function ve(t,e,r){return Tt(this,void 0,void 0,(function(){var n;return Ht(this,(function(o){switch(o.label){case 0:return(n=r)?[3,2]:[4,ie(e,t)];case 1:n=o.sent(),o.label=2;case 2:return[2,"".concat(t,"/").concat(e,"@").concat(n,"/hel_dist/hel-meta.json?_t=").concat(Date.now())]}}))}))}function me(t,e){var r=e.versionId,n=e.projectId,o=e.platform,a=e.apiMode,i=e.isFullVersion,s=void 0!==i&&i,c=e.versionIdList,u=void 0===c?[]:c,p=e.projectIdList,l=void 0===p?[]:p,f=t,d=f,v=r,m=n,h=!1;Array.isArray(t)&&(f=t[0],d=t.join(","),v=u.join(","),m=l.join(","),h=!0);var b=te(o),y=Zt(o),g=y.apiSuffix,S=y.apiPathOfApp,_=y.platform,A=y.getUserName,L=y.userLsKey,E=(null==A?void 0:A({platform:_,appName:f}))||re().getItem(L||Bt)||"",I="",w="get"===a?"":"Jsonp",N="".concat(h?s?qt:Wt:s?Jt:Ut).concat(w),V=S||Yt;return I="".concat(b).concat(V,"/").concat(N,"?name=").concat(d),E&&(I+="&userName=".concat(E)),v&&(I+="&version=".concat(v)),m&&(I+="&projId=".concat(m)),g&&(I+=g),{url:I,userName:E}}function he(t,e){return Tt(this,void 0,void 0,(function(){var r,n,o;return Ht(this,(function(a){switch(a.label){case 0:return r=e.versionId,n=e.platform,o=e.loadOptions,[4,ve((null==o?void 0:o.apiPrefix)||te(n),t,r||"")];case 1:return[2,a.sent()]}}))}))}function be(t,e){return Tt(this,void 0,void 0,(function(){var r,n,o,a,i;return Ht(this,(function(s){switch(s.label){case 0:return r=e.platform,n=Zt(r).platform,o="",a="",n!==$t?[3,2]:[4,he(t,e)];case 1:return a=s.sent(),[3,3];case 2:i=me(t,e),a=i.url,o=i.userName,s.label=3;case 3:return[2,{url:a,userName:o}]}}))}))}function ye(t,e){return Tt(this,void 0,void 0,(function(){var r,n,o,a,i,s,c,u,p,l,f,d,v,m,h;return Ht(this,(function(b){switch(b.label){case 0:return r=e.platform,n=e.apiMode,o=e.appName,a=e.isFullVersion,i=void 0!==a&&a,s=te(r),c=Zt(r),u=c.apiSuffix,p=c.apiPathOfApp,l=c.apiPathOfAppVersion,f=c.platform,d="",f!==$t?[3,2]:[4,ve(s,o,t)];case 1:return d=b.sent(),[3,3];case 2:v="get"===n?"":"Jsonp",m="".concat(i?Kt:zt).concat(v),h=l||p||Yt,d="".concat(s).concat(h,"/").concat(m,"?ver=").concat(t),o&&(d+="&name=".concat(o)),u&&(d+=u),b.label=3;case 3:return[2,d]}}))}))}function ge(t,e){return Tt(this,void 0,void 0,(function(){var r,n,o,a,i,s,c,u,p,l,f,d,v,m=this;return Ht(this,(function(h){switch(h.label){case 0:return r=e.versionId,n=e.platform,o=e.apiMode,a=e.loadOptions,i=Zt(n),s=i.getSubAppAndItsVersionFn,c=i.platform,[4,be(t,e)];case 1:return u=h.sent(),p=u.url,l=u.userName,f=(null==a?void 0:a.getSubAppAndItsVersionFn)||s,d=function(t,e){return Tt(m,void 0,void 0,(function(){var r;return Ht(this,(function(n){switch(n.label){case 0:return[4,le(t||p,{apiMode:e||o,platform:c})];case 1:if(r=n.sent(),0!==parseInt(r.code))throw new Error(r.msg);return[2,{app:fe(r.data.app),version:de(r.data.version)}]}}))}))},f?[4,Promise.resolve(f({platform:c,appName:t,userName:l,versionId:r,url:p,innerRequest:d}))]:[3,3];case 2:return[2,{app:fe((v=h.sent()).app),version:de(v.version)}];case 3:return[4,d()];case 4:return[2,h.sent()]}}))}))}function Se(t,e){return Tt(this,void 0,void 0,(function(){var r,n,o,a,i,s,c,u,p;return Ht(this,(function(l){switch(l.label){case 0:return r=e.platform,n=e.apiMode,o=e.isFullVersion,a=void 0!==o&&o,i=Zt(r).platform,[4,ye(t,e)];case 1:return[4,le(l.sent(),{apiMode:n,isFullVersion:a,platform:i,onlyVersion:!0})];case 2:if(s=l.sent(),c=s.data,u=s.code,p=s.msg,0!==parseInt(u))throw new Error(p||"ver not found");return[2,de(c)]}}))}))}function _e(t,e){return Tt(this,void 0,void 0,(function(){var r,n,o,a,i;return Ht(this,(function(s){switch(s.label){case 0:return r=e.apiMode,[4,me(t,e)];case 1:return[4,le(s.sent().url,{apiMode:r,platform:pe(e.platform)})];case 2:if(n=s.sent(),o=n.data,a=n.code,i=n.msg,0!==parseInt(a))throw new Error(i||"batch get failed");return[2,o.map((function(t){return{app:fe(t.app),version:de(t.version)}}))]}}))}))}var Ae=Object.freeze({__proto__:null,getSubAppVersion:function(t,e){return Tt(this,void 0,void 0,(function(){return Ht(this,(function(r){switch(r.label){case 0:return[4,Se(t,e)];case 1:return[2,r.sent()]}}))}))},getSubAppMeta:function(t,e){return Tt(this,void 0,Promise,(function(){return Ht(this,(function(r){switch(r.label){case 0:return[4,ge(t,e||{})];case 1:return[2,r.sent()]}}))}))},getMetaDataUrl:function(t,e){var r=e||{},n=r.versionId,o=r.platform,a=r.apiMode;return me(t,{platform:o,versionId:n,apiMode:void 0===a?"get":a}).url}});function Le(t,e){var r=e||{},n=r.platform,o=r.versionId,a=o||"";if(!o){var i=bt(t,n);a=(null==i?void 0:i.online_version)||(null==i?void 0:i.build_version)||""}return{platform:pe(n),versionId:a}}var Ee=Object.freeze({__proto__:null,getPlatAndVer:Le,getGroupedStyleList:function(t,e){var r={static:[],build:[]},n=Ot(t,e);if(n){var o=n.src_map,a=o.webDirPath;o.chunkCssSrcList.forEach((function(t){t.startsWith(a)?r.static.push(t):r.build.push(t)}))}return r}});function Ie(t,e){var r,n=e.platform,o=e.emitVer,a=e.inputVer,i=e.projectId,s=bt(t,n);if(!o)return et("[[ isEmitVerMatchInputVer ]] emitVer should not be null"),!0;if(!a){if(i&&s){var c=((null===(r=s.proj_ver)||void 0===r?void 0:r.map)||{})[i];if(c)return o===c.o||o===c.b}return o===(null==s?void 0:s.online_version)||o===(null==s?void 0:s.build_version)}return o===a}function we(t){if(t){var e=t.enable,r=void 0===e||e;return!(!t.host||!r)}return!1}var Ne=Z,Ve=Ne.LOADED,Oe=Ne.LOADING,Me=it(),Ce=X.STYLE_STR_FETCHED,Pe={},De={isStyleStatusMatch:function(t,e,r){var n,o=Le(t,r),a=o.platform,i=o.versionId,s=st(a).appName2verStyleFetched,c=i||tt;return(null===(n=s[t])||void 0===n?void 0:n[c])===e},getStyleUrlList:function(t,e){var r,n=Le(t,e),o=Ot(t,n),a=At(t,n),i=[];return o&&(i=(null===(r=o.src_map)||void 0===r?void 0:r.chunkCssSrcList)||[]),oe(a,i)},fetchStyleStr:function(t){return Tt(this,void 0,void 0,(function(){var e,r,n,o,a,i,s;return Ht(this,(function(c){switch(c.label){case 0:e="",r=0,n=t.length,c.label=1;case 1:if(!(r<n))return[3,7];if(o=t[r],a=Pe[o])return[3,5];c.label=2;case 2:return c.trys.push([2,4,,5]),[4,se(o,!1)];case 3:return i=c.sent(),a=i.reply,[3,5];case 4:return s=c.sent(),console.error(s),[3,5];case 5:e+=a,c.label=6;case 6:return r++,[3,1];case 7:return[2,e]}}))}))},waitStyleReady:function(t,e){return Tt(this,void 0,void 0,(function(){var r;return Ht(this,(function(n){switch(n.label){case 0:return r=null,[4,new Promise((function(n){r=function(r){var o=r.appName,a=r.platform,i=r.versionId,s=e.versionId,c=e.platform;o===t&&a===c&&Ie(t,{platform:c,emitVer:i,inputVer:s})&&n(!0)},Me.on(Ce,r)}))];case 1:return n.sent(),r&&Me.off(Ce,r),[2]}}))}))},fetchAndCacheAppStyleStr:function(t,e){var r;return Tt(this,void 0,void 0,(function(){var n,o,a,i,s,c,u,p;return Ht(this,(function(l){switch(l.label){case 0:return n=Le(t,e),(o=Ct(t,n))?[2,o]:De.isStyleStatusMatch(t,Ve,e)?[2,""]:De.isStyleStatusMatch(t,Oe,e)?[4,De.waitStyleReady(t,n)]:[3,2];case 1:return l.sent(),[2,Ct(t,n)];case 2:return It(t,Oe,n),a=e.extraCssUrlList,i=void 0===a?[]:a,s=(s=De.getStyleUrlList(t,e)).concat(i),c=(null===(r=e.getExcludeCssList)||void 0===r?void 0:r.call(e,s,{version:Ot(t,n)}))||[],u=s.filter((function(t){return!c.includes(t)})),[4,De.fetchStyleStr(u)];case 3:return p=l.sent(),Pt(t,p,n),It(t,Ve,n),Me.emit(Ce,kt({appName:t},n)),[2,p]}}))}))}};var Fe=Object.freeze({__proto__:null,fetchStyleStr:function(t,e){return Tt(this,void 0,Promise,(function(){return Ht(this,(function(r){switch(r.label){case 0:return[4,De.fetchAndCacheAppStyleStr(t,e)];case 1:return[2,r.sent()]}}))}))},fetchStyleByUrlList:function(t){return Tt(this,void 0,void 0,(function(){return Ht(this,(function(e){switch(e.label){case 0:return[4,De.fetchStyleStr(t)];case 1:return[2,e.sent()]}}))}))},getStyleStr:function(t,e){return Ct(t,Le(t,e))},getStyleUrlList:function(t,e){return De.getStyleUrlList(t,e)},isStyleFetched:function(t,e){return De.isStyleStatusMatch(t,Ve,e)}});function xe(t,e){var r,n=e.platform,o=void 0===n?Q():n,a=e.versionId,i=void 0===a?"":a,s=e.isLib,c=null!==(r=e.strictMatchVer)&&void 0!==r?r:vt(o).strictMatchVer,u=kt(kt({},e),{strictMatchVer:c}),p=t,l=e.custom;we(l)&&(p=l.appGroupName||t);var f=bt(p,o);if(o===$t&&!i&&f&&!0!==f.__setByLatest)return null;if(s){var d=St(p,u);return d?{appName:p,appGroupName:(null==f?void 0:f.app_group_name)||"",platform:o,appProperties:d,isLib:!0,versionId:i,Comp:null,lifecycle:void 0}:null}return ht(p,u)||null}function Re(t,e,r){et("[[ judgeAppReady ]] receive emitApp",t);var n=e.versionId,o=void 0===n?"":n,a=e.projectId,i=e.appName,s=e.platform,c=e.next,u=e.strictMatchVer,p=t.appName,l=t.appGroupName,f=t.platform,d=void 0===f?Q():f,v=t.versionId,m="".concat(s,"/").concat(i,"/").concat(o),h=bt(i,s),b=s||Q();!1===u&&l&&(null==h?void 0:h.app_group_name)===l&&b===d&&(et("[[ judgeAppReady ]] treat emitApp as wanted when strictMatchVer is false",t),c());var y=r.custom;if(y){var g=y.enable,S=void 0===g||g,_=y.host,A=y.appGroupName;S&&_&&l&&(l===i||l===A)&&c()}i===p&&d===s&&Ie(i,{platform:s,emitVer:v,inputVer:o,projectId:a})?c():et("still wait ".concat(m," emitted"),t,e)}var je=Object.freeze({__proto__:null,getLibOrApp:xe,judgeAppReady:Re});function Ge(t){var e=t.platform;dt(function(t,e){var r={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(r[n]=t[n]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(t);o<n.length;o++)e.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(t,n[o])&&(r[n[o]]=t[n[o]])}return r}(t,["platform"]),e)}var ke=Y;function Te(t){var e=ot();Object.keys(t).forEach((function(r){e[r]=t[r]}))}function He(t){var e={LEAH_React:t.React,LEAH_ReactDOM:t.ReactDOM,LEAH_ReactIs:null,LEAH_ReactReconciler:null};t.ReactIs&&(e.LEAH_ReactIs=t.ReactIs),t.ReactReconciler&&(e.LEAH_ReactReconciler=t.ReactReconciler),Te(e)}function Be(t){Te({LEAH_Vue:t.Vue})}function Ue(t){return"".concat(Rt,".").concat(t)}function Je(t,e){var r,n,o=null!=e&&e,a=null!==(n=null===(r=ot().localStorage)||void 0===r?void 0:r.getItem(Ue(t)))&&void 0!==n?n:null;return a?o?JSON.parse(a):a:null}function We(t,e,r){var n,o=null!=r&&r?JSON.stringify(e):e;null===(n=ot().localStorage)||void 0===n||n.setItem(Ue(t),o)}function qe(t){var e;return"string"==typeof t?null===(e=ot())||void 0===e?void 0:e.document.getElementById(t):t}function ze(t,e){return{name:t,platform:(null==e?void 0:e.platform)||Vt(t),versionId:(null==e?void 0:e.versionId)||"",getShadowAppRoot:qe,getShadowBodyRoot:qe}}var Ke="HelAppCache";function Ye(t,e){var r=t.src,n=function(t){var e=t.split("//"),r=e[0],n=e[1].split("/");return"".concat(r,"//").concat(n[0],"/")}(t.baseURI),o=r;return r.startsWith(n)&&(o=r.substring(n.length-1)),o===e}function $e(t,e,r,n){if(void 0===r&&(r=!0),e){var o=ot().document,a=function(t){return"helScript_".concat(t)}(t);if(function(t,e){var r,n=null===(r=ot())||void 0===r?void 0:r.document,o=!1;if(!n)return o;try{for(var a=n.querySelectorAll("#".concat(t)),i=a.length,s=0;s<i;s++){var c=a[s];if("SCRIPT"===c.nodeName&&Ye(c,e)){o=!0;break}}return o}catch(u){return o}}(a,e))return!1;var i=o.createElement("script");return i.id=a,i.src=e,n&&(i.onload=n),r?o.body.appendChild(i):o.head.appendChild(i),!0}}function Qe(t,e,r){void 0===e&&(e=!1);var n=r.href,o=r.rel,a=r.as,i=ot().document;if(n){var s=i.createElement("link");s.id=function(t){return"helLink_".concat(t)}(t),s.rel=o,s.href=n,a&&(s.as=a),e?i.body.appendChild(s):i.head.appendChild(s)}}function Xe(t,e,r){var n=r.appendToBody,o=r.appendCss,a=r.webDirPath,i=r.cssAppendTypes,s=r.excludeCssList;e.forEach((function(e){var r=e.tag,c=e.attrs;if(function(t,e){return ee(e),"link"===t}(r,c)){var u=c.href;if(u.endsWith(".ico"))return;if(u.endsWith(".css"))return void(o&&i.includes(function(t,e){return e.startsWith(t)?"build":"static"}(a,u))&&!s.includes(u)&&Qe(t,n,c));Qe(t,n,c)}else if(function(t,e){return ee(e),"script"===t}(r,c)){var p=c.src;$e(t,p,n)}}))}function Ze(t){var e=vt(t.platform);return t.onFetchMetaFailed||e.onFetchMetaFailed}function tr(t,e){var r=function(t){return t||Q()}(t),n=function(t,e){var r=Zt(t).apiMode;return e||r}(r,e);return{platform:r,apiMode:n}}function er(t){return"".concat(Ke,".").concat(t)}function rr(t){return ae(re().getItem(er(t))||"",null)}function nr(t,e){return Tt(this,void 0,void 0,(function(){var r,n,o,a,i,s,c,u,p,l,f,d,v,m,h,b,y,g,S,_,A,L,E;return Ht(this,(function(I){switch(I.label){case 0:return r=null,n=e.enableDiskCache,o=void 0===n?xt:n,a=e.versionId,i=void 0===a?"":a,s=e.projectId,c=void 0===s?"":s,u=e.isFirstCall,p=void 0===u||u,l=e.custom,f=tr(e.platform,e.apiMode),d=f.platform,v=f.apiMode,we(l)?(m=l.host,[4,ce(t,m)]):[3,2];case 1:return h=I.sent(),b=h.app,y=h.version,ar(b,{appVersion:y,platform:d,toDisk:!1,loadOptions:e}),[2,{appInfo:b,appVersion:y}];case 2:g=bt(t,d),S=Ot(t,{platform:d}),I.label=3;case 3:return I.trys.push([3,13,,14]),_={platform:d,apiMode:v,versionId:i,projectId:c,loadOptions:e},d!==$t&&g&&S&&Ie(t,{platform:d,projectId:c,emitVer:S.sub_app_version,inputVer:i})?(r={appInfo:g,appVersion:S},[3,12]):[3,4];case 4:return o?(r=rr(t))?[3,6]:[4,ir(t,_)]:[3,10];case 5:return r=I.sent(),[3,9];case 6:return A=r.appInfo,L=r.appVersion,i&&L.sub_app_version!==i?[4,ir(t,_)]:[3,8];case 7:return r=I.sent(),[3,9];case 8:ar(A,{appVersion:L,platform:d,toDisk:!1,loadOptions:e}),ir(t,_).catch((function(t){return ee(t)})),I.label=9;case 9:return[3,12];case 10:return[4,ir(t,_)];case 11:r=I.sent(),I.label=12;case 12:return Nt(t,d),[2,r];case 13:if((E=I.sent()).message.includes("ver not found")&&Ze(e)){if(p)throw E;return[2,{appInfo:null,appVersion:null}]}if(r=rr(t),p||!r)throw E;return[2,r];case 14:return[2]}}))}))}function or(t,e){return Tt(this,void 0,void 0,(function(){var r,n,o,a,i,s,c;return Ht(this,(function(u){switch(u.label){case 0:return r=tr(e.platform,e.apiMode),n=r.platform,o=r.apiMode,a=kt(kt({},e),{platform:n,apiMode:o}),[4,ge(t,a)];case 1:if(i=u.sent(),s=i.app,!(c=i.version))throw new Error("ver ".concat(s.online_version," not found"));return[2,{appInfo:s,appVersion:c}]}}))}))}function ar(t,e){var r=e.appVersion,n=e.platform,o=e.toDisk,a=void 0===o||o,i=e.loadOptions,s=t,c=s.name;if(a&&re().setItem(er(c),JSON.stringify({appInfo:t,appVersion:r})),n===$t){var u=bt(c,n);!0!==(null==u?void 0:u.__setByLatest)&&yt(s=i.versionId?s:kt(kt({},s),{__setByLatest:!0}),n)}else yt(t,n);Mt(c,r,{platform:n}),_t(c,ue(i),{platform:n,versionId:r.sub_app_version})}function ir(t,e){return Tt(this,void 0,void 0,(function(){var r,n,o,a,i;return Ht(this,(function(s){switch(s.label){case 0:return r=e.platform,n=e.loadOptions,[4,or(t,e)];case 1:return o=s.sent(),a=o.appInfo,i=o.appVersion,ar(a,{appVersion:i,platform:r,loadOptions:n}),[2,o]}}))}))}function sr(t,e){return void 0===e&&(e={}),Tt(this,void 0,Promise,(function(){var r,n,o,a,i,s,c,u,p,l,f;return Ht(this,(function(d){switch(d.label){case 0:r=e.isFirstCall,n=void 0===r||r,o=e.controlLoadAssets,a=void 0!==o&&o,d.label=1;case 1:return d.trys.push([1,5,,8]),[4,nr(t,e)];case 2:return i=d.sent(),s=i.appInfo,c=i.appVersion,!(!s||!c)||n?[3,4]:(u=Ze(e))?[4,Promise.resolve(u({appName:t}))]:[3,4];case 3:(p=d.sent())&&(s=p.app,c=p.version),d.label=4;case 4:if(!s)throw new Error("\u5e94\u7528".concat(t,"\u4e0d\u5b58\u5728"));if(!c)throw new Error("\u5e94\u7528".concat(t,"\u7684\u7248\u672c\u4e0d\u5b58\u5728"));return function(t,e){t&&"function"==typeof e.onAppVersionFetched&&e.onAppVersionFetched(t)}(c,e),l=function(){!function(t,e,r){var n=t.name,o=t.additional_scripts,a=void 0===o?[]:o,i=t.additional_body_scripts,s=void 0===i?[]:i,c=e.src_map,u=c.headAssetList,p=void 0===u?[]:u,l=c.bodyAssetList,f=void 0===l?[]:l,d=c.webDirPath,v=c.chunkCssSrcList,m=void 0===v?[]:v,h=r.useAdditionalScript,b=void 0!==h&&h,y=r.appendCss,g=void 0===y||y,S=r.cssAppendTypes,_=void 0===S?["static","build"]:S,A=r.getExcludeCssList,L=ue(r),E=oe(L,m),I=(null==A?void 0:A(E,{version:e}))||[],w=function(t,e){if(t)for(var r=0,o=t;r<o.length;r++){var a=o[r];a.endsWith(".css")&&g&&!I.includes(a)?Qe(n,e,{href:a,rel:"stylesheet"}):$e(n,a,e)}};b&&(w(a,!1),w(s,!0)),w(L,!1);var N={excludeCssList:I,webDirPath:d,appendCss:g,cssAppendTypes:_};Xe(n,p,kt({appendToBody:!1},N)),Xe(n,f,kt({appendToBody:!0},N))}(s,c,e)},a?[2,l]:(l(),[2,null]);case 5:return f=d.sent(),n?(console.error("loadApp err and try one more time: ",f),[4,sr(t,kt(kt({},e),{isFirstCall:!1}))]):[3,7];case 6:return[2,d.sent()];case 7:throw f;case 8:return[2]}}))}))}var cr=it();function ur(t,e){var r="string"==typeof e?{versionId:e}:kt({},e||{});return r.platform=pe(r.platform),r.isLib=t,r}function pr(t,e,r){return Tt(this,void 0,void 0,(function(){var n,o,a,i,s,c,u,p;return Ht(this,(function(l){switch(l.label){case 0:return n=e.platform,o=e.isLib,a=void 0!==o&&o,i=e.versionId,s=e.projectId,c=e.strictMatchVer,u=a?X.SUB_LIB_LOADED:X.SUB_APP_LOADED,p=null,[4,new Promise((function(o){p=function(r){Re(r,{appName:t,platform:n,versionId:i,projectId:s,isLib:a,next:o,strictMatchVer:c},e)},cr.on(u,p),r&&r()}))];case 1:return l.sent(),p&&cr.off(u,p),[2,xe(t,e)]}}))}))}function lr(t,e){var r;return Tt(this,void 0,void 0,(function(){var n,o,a,i,s,c,u,p;return Ht(this,(function(l){switch(l.label){case 0:n=null,l.label=1;case 1:return l.trys.push([1,7,,8]),o=e.versionId,a=e.platform,i=kt({},e),s=vt(a),i.strictMatchVer=null!==(r=e.strictMatchVer)&&void 0!==r?r:s.strictMatchVer,(n=xe(t,i))&&(!o||o&&n.versionId===o)?(et("[[ preFetch ]] hit cached app",t,i),[2,n]):(c=null,(u=Et(t,i))!==Z.LOADED?[3,3]:[4,pr(t,i)]);case 2:return n=l.sent(),et("[[ preFetch ]] return emit app",t,i),[2,n];case 3:return u===Z.LOADING?[3,5]:(Lt(t,Z.LOADING,i),[4,sr(t,kt(kt({},i),{controlLoadAssets:!0}))]);case 4:c=l.sent(),l.label=5;case 5:return[4,pr(t,e,c)];case 6:return n=l.sent(),et("[[ preFetch ]] return fetch&emit app",t,i),[2,n];case 7:return p=l.sent(),et("[[ preFetch ]] err",p),[2,n];case 8:return[2]}}))}))}function fr(t,e){return Tt(this,void 0,Promise,(function(){var r,n,o,a;return Ht(this,(function(i){switch(i.label){case 0:return r=ur(!0,e),[4,lr(t,r)];case 1:if(n=i.sent(),!(o=null==n?void 0:n.appProperties)&&r.onLibNull&&(a=r.onLibNull(t,{versionId:r.versionId}))&&(o=a),!o)throw new Error("preFetchLib ".concat(t," fail, it may be an invalid module!"));return[2,o]}}))}))}function dr(t,e){return Tt(this,void 0,void 0,(function(){var r;return Ht(this,(function(n){switch(n.label){case 0:return r=ur(!1,e),[4,lr(t,r)];case 1:return[2,n.sent()]}}))}))}function vr(t,e){return Tt(this,void 0,Promise,(function(){var r,n,o,a,i,s;return Ht(this,(function(c){switch(c.label){case 0:if(r=[],n=[],o=(null==e?void 0:e.preFetchConfigs)||{},a=kt({},(null==e?void 0:e.common)||{}),(i=pe(a.platform))===$t)throw new Error("only support platform hel!");if(t.length>8)throw new Error("only support 8 appName at most!");return t.forEach((function(t){var e=o[t],a={};e&&"string"!=typeof e?e&&(a=e):a.versionId=e||"",r.push(a.versionId||""),n.push(a.projectId||"")})),a.versionIdList=r,a.projectIdList=n,[4,_e(t,a)];case 1:return c.sent().forEach((function(t){var e=t.app,r=t.version;yt(e,i),Mt(e.name,r,{platform:i})})),s=t.map((function(t){return fr(t,o[t])})),[4,Promise.all(s)];case 2:return[2,c.sent()]}}))}))}et("hel-micro ".concat(Ft));var mr={preFetchLib:fr,preFetchApp:dr,batchPreFetchLib:vr,appStyleSrv:Fe,appParamSrv:Ee,appMetaSrv:Ae,logicSrv:je,emitApp:Gt,init:Ge,isSubApp:ke,getFakeHelContext:ze,getExtraData:Je,setExtraData:We,bindExternals:Te,bindVueRuntime:Be,bindReactRuntime:He,core:n}}}]);