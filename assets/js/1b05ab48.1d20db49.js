"use strict";(self.webpackChunkhel_doc=self.webpackChunkhel_doc||[]).push([[1144],{6570:function(t){t.exports=JSON.parse('{"blogPosts":[{"id":"hel-remote-call","metadata":{"permalink":"/hel/blog/hel-remote-call","editUrl":"http://localhost:3000/hel/blog/blog/2022-05-05-hel-remote-call.mdx","source":"@site/blog/2022-05-05-hel-remote-call.mdx","title":"show hel remote call","description":"show hel","date":"2022-05-05T00:00:00.000Z","formattedDate":"May 5, 2022","tags":[{"label":"hel","permalink":"/hel/blog/tags/hel"}],"readingTime":0.76,"truncated":false,"authors":[{"name":"fantasticsoul","title":"hel-micro maintainer","url":"https://github.com/fantasticsoul","imageURL":"https://avatars.githubusercontent.com/u/7334950?v=4","key":"fantasticsoul"}],"frontMatter":{"slug":"hel-remote-call","title":"show hel remote call","authors":["fantasticsoul"],"tags":["hel"]},"nextItem":{"title":"fantasticsoul intro","permalink":"/hel/blog/change1"}},"content":"show hel\\n\\n:::tip\\n\\nUse the power of React to create interactive blog posts.\\n\\n```js\\n<button onClick={async function(){\\n  const helMicro = await import(\'hel-micro\');\\n  const lib = await helMicro.preFetchLib(\'hel-remote-lib-tpl\');\\n  alert(lib.num.random(22));\\n}}>Click me to call remote method!</button>\\n\\n<button onClick={async function(){\\n  const helMicro = await import(\'hel-micro\');\\n  const lib = await helMicro.preFetchLib(\\n    \'hel-remote-lib-tpl\', { versionId:\'hel-remote-lib-tpl_20220505181705\' },\\n  );\\n  alert(lib.num.random(22));\\n}}>\u8c03\u7528\u7248\u672c1</button>\\n\\n<button onClick={async function(){\\n  const helMicro = await import(\'hel-micro\');\\n  const lib = await helMicro.preFetchLib(\\n    \'hel-remote-lib-tpl\', { versionId:\'hel-remote-lib-tpl_20220505181324\' },\\n  );\\n  alert(lib.num.random(22));\\n}}>\u9009\u62e9\u7248\u672c2</button>\\n\\n```\\n\\n\\n<button onClick={async function(){\\n  const helMicro = await import(\'hel-micro\');\\n  const lib = await helMicro.preFetchLib(\'hel-remote-lib-tpl\');\\n  alert(lib.num.random(22));\\n}}>Click me to call remote method!</button>\\n\\n<button onClick={async function(){\\n  const helMicro = await import(\'hel-micro\');\\n  const lib = await helMicro.preFetchLib(\'hel-remote-lib-tpl\', { versionId:\'hel-remote-lib-tpl_20220505181705\' });\\n  alert(lib.num.random(22));\\n}}>\u8c03\u7528\u7248\u672c1</button>\\n\\n<button onClick={async function(){\\n  const helMicro = await import(\'hel-micro\');\\n  const lib = await helMicro.preFetchLib(\'hel-remote-lib-tpl\', { versionId:\'hel-remote-lib-tpl_20220505181324\' });\\n  alert(lib.num.random(22));\\n}}>\u9009\u62e9\u7248\u672c2</button>\\n\\n\\n:::"},{"id":"change1","metadata":{"permalink":"/hel/blog/change1","editUrl":"http://localhost:3000/hel/blog/blog/fancy-intro.md","source":"@site/blog/fancy-intro.md","title":"fantasticsoul intro","description":"\u66f4\u65b0","date":"2022-05-04T11:33:53.000Z","formattedDate":"May 4, 2022","tags":[{"label":"hel-micro","permalink":"/hel/blog/tags/hel-micro"}],"readingTime":0.05,"truncated":false,"authors":[{"name":"fantasticsoul","title":"tencent frontend engineer","url":"https://github.com/fantasticsoul","imageURL":"https://avatars.githubusercontent.com/u/7334950?v=4"}],"frontMatter":{"slug":"change1","title":"fantasticsoul intro","author":"fantasticsoul","author_title":"tencent frontend engineer","author_url":"https://github.com/fantasticsoul","author_image_url":"https://avatars.githubusercontent.com/u/7334950?v=4","tags":["hel-micro"]},"prevItem":{"title":"show hel remote call","permalink":"/hel/blog/hel-remote-call"}},"content":"## \u66f4\u65b0\\n\u4e3b\u8981\u505a\u4e86 xxx \u66f4\u65b0"}]}')}}]);