export const themeData = JSON.parse("{\"navbar\":[{\"text\":\"介绍\",\"link\":\"/\"},{\"text\":\"快速开始\",\"link\":\"/start/\"},{\"text\":\"文档\",\"link\":\"/guide/\"},{\"text\":\"版本更新\",\"link\":\"/version/\"},{\"text\":\"Github\",\"link\":\"https://github.com/xlei1123/div-editor\"},{\"text\":\"相关链接\",\"children\":[{\"text\":\"stencil\",\"link\":\"https://stenciljs.com/docs/introduction\"},{\"text\":\"Vue与Web Components\",\"link\":\"https://cn.vuejs.org/guide/extras/web-components.html\"}]}],\"sidebar\":{\"/start/\":[{\"text\":\"快速开始\",\"collapsible\":false,\"children\":[\"/start/README.md\"]}],\"/guide/\":[{\"text\":\"文档\",\"collapsible\":false,\"children\":[{\"text\":\"富文本\",\"collapsible\":false,\"children\":[{\"text\":\"核心\",\"link\":\"/guide/tiptap/README.md\"},{\"text\":\"常用命令\",\"link\":\"/guide/tiptap/commands.md\"}]},\"/guide/menu.md\",{\"text\":\"自定义插件\",\"collapsible\":false,\"children\":[\"/guide/custom/react.md\",\"/guide/custom/vue.md\"]},\"/guide/style.md\",\"/guide/other/index.md\"]}]},\"sidebarDepth\":1,\"locales\":{\"/\":{\"selectLanguageName\":\"English\"}},\"colorMode\":\"auto\",\"colorModeSwitch\":true,\"logo\":null,\"repo\":null,\"selectLanguageText\":\"Languages\",\"selectLanguageAriaLabel\":\"Select language\",\"editLink\":true,\"editLinkText\":\"Edit this page\",\"lastUpdated\":true,\"lastUpdatedText\":\"Last Updated\",\"contributors\":true,\"contributorsText\":\"Contributors\",\"notFound\":[\"There's nothing here.\",\"How did we get here?\",\"That's a Four-Oh-Four.\",\"Looks like we've got some broken links.\"],\"backToHome\":\"Take me home\",\"openInNewWindow\":\"open in new window\",\"toggleColorMode\":\"toggle color mode\",\"toggleSidebar\":\"toggle sidebar\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
