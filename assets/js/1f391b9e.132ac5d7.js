"use strict";(self.webpackChunkhel_doc=self.webpackChunkhel_doc||[]).push([[3085],{3889:(e,a,t)=>{t.r(a),t.d(a,{default:()=>o});var l=t(9231),n=t(9841),c=t(3237),s=t(7629),i=t(7088),m=t(7203);const r="mdxPageWrapper_I_Ye";function o(e){const{content:a}=e,{metadata:{title:t,description:o,frontMatter:d}}=a,{wrapperClassName:v,hide_table_of_contents:_}=d;return l.createElement(m.FG,{className:(0,n.Z)(v??m.kM.wrapper.mdxPages,m.kM.page.mdxPage)},l.createElement(m.d,{title:t,description:o}),l.createElement(c.Z,null,l.createElement("main",{className:"container container--fluid margin-vert--lg"},l.createElement("div",{className:(0,n.Z)("row",r)},l.createElement("div",{className:(0,n.Z)("col",!_&&"col--8")},l.createElement(s.Z,null,l.createElement(a,null))),!_&&a.toc&&l.createElement("div",{className:"col col--2"},l.createElement(i.Z,{toc:a.toc,minHeadingLevel:d.toc_min_heading_level,maxHeadingLevel:d.toc_max_heading_level}))))))}},7088:(e,a,t)=>{t.d(a,{Z:()=>m});var l=t(2203),n=t(9231),c=t(9841),s=t(4922);const i="tableOfContents_gnd5";function m(e){let{className:a,...t}=e;return n.createElement("div",{className:(0,c.Z)(i,"thin-scrollbar",a)},n.createElement(s.Z,(0,l.Z)({},t,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))}},4922:(e,a,t)=>{t.d(a,{Z:()=>i});var l=t(2203),n=t(9231),c=t(7203);function s(e){let{toc:a,className:t,linkClassName:l,isChild:c}=e;return a.length?n.createElement("ul",{className:c?void 0:t},a.map((e=>n.createElement("li",{key:e.id},n.createElement("a",{href:`#${e.id}`,className:l??void 0,dangerouslySetInnerHTML:{__html:e.value}}),n.createElement(s,{isChild:!0,toc:e.children,className:t,linkClassName:l}))))):null}function i(e){let{toc:a,className:t="table-of-contents table-of-contents__left-border",linkClassName:i="table-of-contents__link",linkActiveClassName:m,minHeadingLevel:r,maxHeadingLevel:o,...d}=e;const v=(0,c.LU)(),_=r??v.tableOfContents.minHeadingLevel,g=o??v.tableOfContents.maxHeadingLevel,u=(0,c.b9)({toc:a,minHeadingLevel:_,maxHeadingLevel:g}),N=(0,n.useMemo)((()=>{if(i&&m)return{linkClassName:i,linkActiveClassName:m,minHeadingLevel:_,maxHeadingLevel:g}}),[i,m,_,g]);return(0,c.Si)(N),n.createElement(s,(0,l.Z)({toc:u,className:t,linkClassName:i},d))}}}]);