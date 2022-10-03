"use strict";(self.webpackChunkhel_doc=self.webpackChunkhel_doc||[]).push([[3089],{8351:(e,t,a)=>{a.d(t,{Z:()=>E});var l=a(9231),r=a(9841),n=a(3237),i=a(3093);const m="sidebar_wI6L",s="sidebarItemTitle_dIT7",o="sidebarItemList_CE7d",c="sidebarItem_aylZ",d="sidebarItemLink_fwvH",g="sidebarItemLinkActive_gi7j";var u=a(5014);function p(e){let{sidebar:t}=e;return 0===t.items.length?null:l.createElement("nav",{className:(0,r.Z)(m,"thin-scrollbar"),"aria-label":(0,u.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},l.createElement("div",{className:(0,r.Z)(s,"margin-bottom--md")},t.title),l.createElement("ul",{className:o},t.items.map((e=>l.createElement("li",{key:e.permalink,className:c},l.createElement(i.Z,{isNavLink:!0,to:e.permalink,className:d,activeClassName:g},e.title))))))}function E(e){const{sidebar:t,toc:a,children:i,...m}=e,s=t&&t.items.length>0;return l.createElement(n.Z,m,l.createElement("div",{className:"container margin-vert--lg"},l.createElement("div",{className:"row"},s&&l.createElement("aside",{className:"col col--3"},l.createElement(p,{sidebar:t})),l.createElement("main",{className:(0,r.Z)("col",{"col--7":s,"col--9 col--offset-1":!s}),itemScope:!0,itemType:"http://schema.org/Blog"},i),a&&l.createElement("div",{className:"col col--2"},a))))}},8045:(e,t,a)=>{a.r(t),a.d(t,{default:()=>u});var l=a(9231),r=a(6307),n=a(8351),i=a(6e3),m=a(5838),s=a(7203),o=a(6010),c=a(9841);function d(e){const{metadata:t}=e,{siteConfig:{title:a}}=(0,r.Z)(),{blogDescription:n,blogTitle:i,permalink:m}=t,c="/"===m?a:i;return l.createElement(l.Fragment,null,l.createElement(s.d,{title:c,description:n}),l.createElement(o.Z,{tag:"blog_posts_list"}))}function g(e){const{metadata:t,items:a,sidebar:r}=e;return l.createElement(n.Z,{sidebar:r},a.map((e=>{let{content:t}=e;return l.createElement(i.Z,{key:t.metadata.permalink,frontMatter:t.frontMatter,assets:t.assets,metadata:t.metadata,truncated:t.metadata.truncated},l.createElement(t,null))})),l.createElement(m.Z,{metadata:t}))}function u(e){return l.createElement(s.FG,{className:(0,c.Z)(s.kM.wrapper.blogPages,s.kM.page.blogListPage)},l.createElement(d,e),l.createElement(g,e))}},5838:(e,t,a)=>{a.d(t,{Z:()=>i});var l=a(9231),r=a(5014),n=a(8137);function i(e){const{metadata:t}=e,{previousPage:a,nextPage:i}=t;return l.createElement("nav",{className:"pagination-nav","aria-label":(0,r.I)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"})},l.createElement("div",{className:"pagination-nav__item"},a&&l.createElement(n.Z,{permalink:a,title:l.createElement(r.Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)"},"Newer Entries")})),l.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},i&&l.createElement(n.Z,{permalink:i,title:l.createElement(r.Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)"},"Older Entries")})))}},6e3:(e,t,a)=>{a.d(t,{Z:()=>k});var l=a(9231),r=a(9841),n=a(5014),i=a(3093),m=a(8675),s=a(7203),o=a(855),c=a(7629),d=a(638);const g="blogPostTitle_XNzG",u="blogPostData_SU1e",p="blogPostDetailsFull_sM_i";var E=a(7178);const h="image_gu_E";function b(e){return e.href?l.createElement(i.Z,e):l.createElement(l.Fragment,null,e.children)}function v(e){let{author:t}=e;const{name:a,title:r,url:n,imageURL:i,email:m}=t,s=n||m&&`mailto:${m}`||void 0;return l.createElement("div",{className:"avatar margin-bottom--sm"},i&&l.createElement("span",{className:"avatar__photo-link avatar__photo"},l.createElement(b,{href:s},l.createElement("img",{className:h,src:i,alt:a}))),a&&l.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},l.createElement("div",{className:"avatar__name"},l.createElement(b,{href:s,itemProp:"url"},l.createElement("span",{itemProp:"name"},a))),r&&l.createElement("small",{className:"avatar__subtitle",itemProp:"description"},r)))}const _="authorCol_nkg7",f="imageOnlyAuthorRow_NzBT",Z="imageOnlyAuthorCol_OfIl";function N(e){let{authors:t,assets:a}=e;if(0===t.length)return null;const n=t.every((e=>{let{name:t}=e;return!t}));return l.createElement("div",{className:(0,r.Z)("margin-top--md margin-bottom--sm",n?f:"row")},t.map(((e,t)=>l.createElement("div",{className:(0,r.Z)(!n&&"col col--6",n?Z:_),key:t},l.createElement(v,{author:{...e,imageURL:a.authorsImageUrls[t]??e.imageURL}})))))}function k(e){const t=function(){const{selectMessage:e}=(0,s.c2)();return t=>{const a=Math.ceil(t);return e(a,(0,n.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:a}))}}(),{withBaseUrl:a}=(0,m.C)(),{children:h,frontMatter:b,assets:v,metadata:_,truncated:f,isBlogPostPage:Z=!1}=e,{date:k,formattedDate:P,permalink:T,tags:w,readingTime:I,title:L,editUrl:y,authors:M}=_,A=v.image??b.image,C=!Z&&f,U=w.length>0,R=Z?"h1":"h2";return l.createElement("article",{className:Z?void 0:"margin-bottom--xl",itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},l.createElement("header",null,l.createElement(R,{className:g,itemProp:"headline"},Z?L:l.createElement(i.Z,{itemProp:"url",to:T},L)),l.createElement("div",{className:(0,r.Z)(u,"margin-vert--md")},l.createElement("time",{dateTime:k,itemProp:"datePublished"},P),void 0!==I&&l.createElement(l.Fragment,null," \xb7 ",t(I))),l.createElement(N,{authors:M,assets:v})),A&&l.createElement("meta",{itemProp:"image",content:a(A,{absolute:!0})}),l.createElement("div",{id:Z?o.blogPostContainerID:void 0,className:"markdown",itemProp:"articleBody"},l.createElement(c.Z,null,h)),(U||f)&&l.createElement("footer",{className:(0,r.Z)("row docusaurus-mt-lg",Z&&p)},U&&l.createElement("div",{className:(0,r.Z)("col",{"col--9":C})},l.createElement(E.Z,{tags:w})),Z&&y&&l.createElement("div",{className:"col margin-top--sm"},l.createElement(d.Z,{editUrl:y})),C&&l.createElement("div",{className:(0,r.Z)("col text--right",{"col--3":U})},l.createElement(i.Z,{to:_.permalink,"aria-label":(0,n.I)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:L})},l.createElement("b",null,l.createElement(n.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More"))))))}},638:(e,t,a)=>{a.d(t,{Z:()=>c});var l=a(9231),r=a(5014),n=a(2203),i=a(9841);const m="iconEdit_SoIr";function s(e){let{className:t,...a}=e;return l.createElement("svg",(0,n.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,i.Z)(m,t),"aria-hidden":"true"},a),l.createElement("g",null,l.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))}var o=a(7203);function c(e){let{editUrl:t}=e;return l.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:o.kM.common.editThisPage},l.createElement(s,null),l.createElement(r.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},8137:(e,t,a)=>{a.d(t,{Z:()=>n});var l=a(9231),r=a(3093);function n(e){const{permalink:t,title:a,subLabel:n}=e;return l.createElement(r.Z,{className:"pagination-nav__link",to:t},n&&l.createElement("div",{className:"pagination-nav__sublabel"},n),l.createElement("div",{className:"pagination-nav__label"},a))}},8722:(e,t,a)=>{a.d(t,{Z:()=>o});var l=a(9231),r=a(9841),n=a(3093);const i="tag_Tg7U",m="tagRegular_KIqZ",s="tagWithCount_vQzQ";function o(e){const{permalink:t,name:a,count:o}=e;return l.createElement(n.Z,{href:t,className:(0,r.Z)(i,o?s:m)},a,o&&l.createElement("span",null,o))}},7178:(e,t,a)=>{a.d(t,{Z:()=>o});var l=a(9231),r=a(9841),n=a(5014),i=a(8722);const m="tags_Dwk3",s="tag_tqak";function o(e){let{tags:t}=e;return l.createElement(l.Fragment,null,l.createElement("b",null,l.createElement(n.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),l.createElement("ul",{className:(0,r.Z)(m,"padding--none","margin-left--sm")},t.map((e=>{let{label:t,permalink:a}=e;return l.createElement("li",{key:a,className:s},l.createElement(i.Z,{name:t,permalink:a}))}))))}}}]);