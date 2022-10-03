"use strict";(self.webpackChunkhel_doc=self.webpackChunkhel_doc||[]).push([[1799],{4852:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>u});var n=r(9231);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},m=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),d=l(r),u=a,h=d["".concat(p,".").concat(u)]||d[u]||s[u]||o;return r?n.createElement(h,i(i({ref:t},m),{},{components:r})):n.createElement(h,i({ref:t},m))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},1928:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>s,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var n=r(2203),a=(r(9231),r(4852));const o={sidebar_position:1},i="hel-micro-react",c={unversionedId:"api/hel-micro-react/index",id:"api/hel-micro-react/index",title:"hel-micro-react",description:"hel-micro-react sdk \u662f\u57fa\u4e8e hel-micro \u5c01\u88c5\u5e76\u9002\u914d react \u6846\u67b6\u7684\u9002\u914d\u5c42",source:"@site/docs/api/hel-micro-react/index.md",sourceDirName:"api/hel-micro-react",slug:"/api/hel-micro-react/",permalink:"/hel/docs/api/hel-micro-react/",editUrl:"https://github.com/tnfe/hel/doc/docs/api/hel-micro-react/index.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"api",previous:{title:"preFetchApp",permalink:"/hel/docs/api/hel-micro/prefetch-app"},next:{title:"useRemoteComp",permalink:"/hel/docs/api/hel-micro-react/useRemoteComp"}},p={},l=[],m={toc:l};function s(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"hel-micro-react"},"hel-micro-react"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"hel-micro-react")," sdk \u662f\u57fa\u4e8e ",(0,a.kt)("inlineCode",{parentName:"p"},"hel-micro")," \u5c01\u88c5\u5e76\u9002\u914d ",(0,a.kt)("inlineCode",{parentName:"p"},"react")," \u6846\u67b6\u7684\u9002\u914d\u5c42"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u83b7\u53d6 ",(0,a.kt)("inlineCode",{parentName:"li"},"Hel Pack")," \u4e91 hel \u6a21\u5757\u670d\u52a1\u6216\u5176\u5b83\u4e91 hel \u6a21\u5757\u670d\u52a1\u63d0\u4f9b\u7684\u8fdc\u7a0b react \u7ec4\u4ef6"),(0,a.kt)("li",{parentName:"ul"},"\u652f\u6301\u7ec4\u4ef6\u58f0\u660e\u65b9\u5f0f\u61d2\u52a0\u8f7d\u8fdc\u7a0b react \u7ec4\u4ef6"),(0,a.kt)("li",{parentName:"ul"},"\u652f\u6301\u4ee5\u94a9\u5b50\u51fd\u6570\u7684\u5f62\u5f0f\u61d2\u52a0\u8f7d\u8fdc\u7a0b react \u7ec4\u4ef6"),(0,a.kt)("li",{parentName:"ul"},"\u63d0\u4f9b\u7ec4\u4ef6\u6837\u5f0f\u9694\u79bb"),(0,a.kt)("li",{parentName:"ul"},"\u63d0\u4f9b",(0,a.kt)("inlineCode",{parentName:"li"},"renderApp"),"\u63a5\u53e3\u8ba9\u7528\u6237\u5c06\u6574\u4e2a react \u5e94\u7528\u5f39\u5c04\u7ed9\u8c03\u7528\u8005\uff0c\u8c03\u7528\u8005\u53ea\u9700\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"li"},"MicroApp")," \u5b9e\u4f8b\u5316\u5e94\u7528\u5373\u53ef\uff0c\u4ee5\u4fbf\u642d\u5efa\u6210\u4e3a ",(0,a.kt)("inlineCode",{parentName:"li"},"one react runtime"),"\u7684\u5fae\u524d\u7aef\u67b6\u6784\uff0c\u5177\u4f53\u4f8b\u5b50\u53ef\u53c2\u8003",(0,a.kt)("a",{parentName:"li",href:"https://www.to-be-added.com/coming-soon"},"hel-react-app"))),(0,a.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"react \u9002\u914d\u5c42\u662f\u53ef\u9009\u7684")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"\u5982\u4e0d\u9700\u8981\u6837\u5f0f\u9694\u79bb\u7279\u6027\u548c\u61d2\u52a0\u8f7d\u673a\u5236\uff0c\u76f4\u63a5\u57fa\u4e8e ",(0,a.kt)("inlineCode",{parentName:"p"},"hel-micro")," \u62c9\u53d6\u8fdc\u7a0b react \u7ec4\u4ef6\u5373\u53ef"))),(0,a.kt)("p",null,"\u65e0\u9700\u6837\u5f0f\u9694\u79bb\u548c\u7ec4\u4ef6\u61d2\u52a0\u8f7d\u65f6\uff0c\u4f7f\u7528",(0,a.kt)("a",{parentName:"p",href:"/docs/api/hel-micro/prefetch-lib#%E5%9F%BA%E7%A1%80%E7%94%A8%E6%B3%95"},"preFetchLib"),"\u5373\u53ef\uff0c\u4ee3\u7801\u5f62\u5982"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import { Button } from 'remote-tdesign-react';\n\nfunction HiRemoteButton() {\n  return <Button theme=\"danger\">prefetched remote tdesign button</Button>;\n}\n")),(0,a.kt)("p",null,"\u793a\u4f8b\u89c1",(0,a.kt)("a",{parentName:"p",href:"https://www.to-be-added.com/coming-soon"},"demo-use-remote-tdesign-react"),"\u7ad9\u70b9\uff0c\u7ad9\u70b9\u6e90\u7801\u89c1",(0,a.kt)("a",{parentName:"p",href:"https://www.to-be-added.com/coming-soon"},"git")),(0,a.kt)("p",null,"\u6587\u6863\u6b63\u5728\u62fc\u547d\u5efa\u8bbe\u4e2d\uff0c\u6709\u7591\u95ee\u53ef\u8054\u7cfb ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/fantasticsoul"},"fantasticsoul")," \u6216\u63d0 ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/tnfe/hel/issues"},"issue")," ...."))}s.isMDXComponent=!0}}]);