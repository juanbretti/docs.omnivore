import{_ as a,c as r,a as e,b as i,t as o,d as p,o as l}from"./app.408bd521.js";const g=JSON.parse('{"title":"导入数据","description":"","frontmatter":{"title":"导入数据","editLink":true},"headers":[{"level":2,"title":"从 Matter 导入数据","slug":"从-matter-导入数据","link":"#从-matter-导入数据","children":[]},{"level":2,"title":"使用 API 导入","slug":"使用-api-导入","link":"#使用-api-导入","children":[]},{"level":2,"title":"导入网址时遇到的问题","slug":"导入网址时遇到的问题","link":"#导入网址时遇到的问题","children":[]}],"relativePath":"zh/using/importing.md","lastUpdated":1686232124000}'),n={name:"zh/using/importing.md"},c={id:"frontmatter-title",tabindex:"-1"},d=e("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),s=p('<p>Omnivore 允许从其他数据源导入数据。 使用导入 API 时，每天只能导入三次。</p><p>导入的最大文件大小为 10MB。如果您的导入文件超过此大小，请发送电子邮件至 <a href="mailto:feedback@omnivore.app" target="_blank" rel="noreferrer">feedback@omnivore.app</a> 寻求帮助。</p><nav class="table-of-contents"><ul><li><a href="#从-matter-导入数据">从 Matter 导入数据</a></li><li><a href="#使用-api-导入">使用 API 导入</a></li><li><a href="#导入网址时遇到的问题">导入网址时遇到的问题</a></li></ul></nav><h2 id="从-matter-导入数据" tabindex="-1">从 Matter 导入数据 <a class="header-anchor" href="#从-matter-导入数据" aria-hidden="true">#</a></h2><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>Matter 数据导入器目前处于测试阶段，如果您遇到任何问题，请通过以下方式通知我们 <a href="mailto:feedback@omnivore.app" target="_blank" rel="noreferrer">feedback@omnivore.app</a></p></div><p>Omnivore 支持上传通过从Matter应用程序导出数据生成的 <code>Archive.zip</code> 文件。</p><p>使用 <a href="https://omnivore.app/tools/import/matter-archive" target="_blank" rel="noreferrer">Import Matter Archive Tool</a>导入您的事务数据。</p><p>要从 Matter 导出数据，请转到“我的帐户”，然后选择“导出” 数据，这将向您发送一封电子邮件，其中包含您的数据在文件中 <code>Archive.zip</code>。使用此页面上的上传程序上传该文件。</p><p>导入程序将提取 <code>_matter_history.csv</code> 文件中列出的 URL。如果存档包含 URL 的 HTML 内容条目，则将使用提供的内容。否则，Omnivore 将尝试重新获取该URL。</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>目前导入器不支持从 Matter 导入荧光笔高亮显示和注释。</p></div><h2 id="使用-api-导入" tabindex="-1">使用 API 导入 <a class="header-anchor" href="#使用-api-导入" aria-hidden="true">#</a></h2><p>使用 API 导入数据时，如果要导入大量 URL，最好使用 <code>uploadImportFile</code> 而不是 <code>savePage</code> API。</p><p>使用 <code>uploadImportFile</code> API 导入的示例可以在此处找到: <a href="https://github.com/omnivore-app/import-demo" target="_blank" rel="noreferrer">https://github.com/omnivore-app/import-demo</a></p><h2 id="导入网址时遇到的问题" tabindex="-1">导入网址时遇到的问题 <a class="header-anchor" href="#导入网址时遇到的问题" aria-hidden="true">#</a></h2><p>导入时，根据数据的格式，Omnivore可能会重新获取网址。无法再在线获取 URL。在这种情况下，应将仅包含 URL 的空条目添加到文库中。</p>',15);function h(t,m,_,f,v,u){return l(),r("div",null,[e("h1",c,[i(o(t.$frontmatter.title)+" ",1),d]),s])}const k=a(n,[["render",h]]);export{g as __pageData,k as default};
