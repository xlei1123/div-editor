## 常用命令

本富文本是基于tiptap封装的，所以tiptap支持的命令都可以在这里使用。

具体请查看https://tiptap.dev/api/commands，如果发现调用时报错，请检查是否注册了对应的插件。例如，你想调用` this.editor.chain().focus().toggleBold().run();` 请先确保注册了`TextStyle`插件， 目前所有可以调用的插件以及命令对应关系请查看[命令菜单](../menu.md)