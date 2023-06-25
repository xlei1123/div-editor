# 命令菜单
**Properties （菜单项属性）** 

| Property | Attribute | Description | Type     | Default     |
| -------- | --------- | ----------- | -------- | ----------- |
| `editor` | --        |             | `Editor` | `undefined` |

**div-editor 内置有如下菜单：**
1. 清除样式 - div-menu-clear-format
> 无
2. 字体 - div-menu-font-family
> 依赖插件：FontFamily
3. 字号 - div-menu-font-size
> FontSize
```js
editor.commands.setFontSize(fontsize)
```
4. 字体颜色 - div-menu-font-color
> 依赖插件：Color
```js
editor.commands.setColor(color)
```
5. 字体高亮背景色 - div-menu-font-background
> 依赖插件：Background
```js
editor.commands.setBackground(color)
```
6. 斜体 - div-menu-font-italic
> 依赖插件：TextStyle
```js
editor.commands.toggleItalic()
```
7. 字体加粗 - div-menu-font-bold
> 依赖插件：TextStyle
```js
editor.chain().focus().toggleBold().run();
```
8. 字体中划线 - div-menu-font-delline
> 依赖插件：TextDecoration
```js
editor.commands.setTextDecoration('line-through');
```
9. 字体下划线 - div-menu-font-underline
> 依赖插件：TextDecoration
```js
editor.commands.setTextDecoration('underline');
```
10. 字体间距 - div-menu-letter-space
> 依赖插件：LetterSpacing
```js
/**
 * params letterSp 
 */
editor.commands.setLetterSpacing(letterSp);
```
11. 行高 - div-menu-line-height
> 依赖插件：Highlight
```js
editor.commands.setLineHeight(lineH)
```
12. 待办 - div-menu-todo
> 依赖插件：TaskItem&TaskList
```js
editor.chain().focus().toggleTaskList().run()
```
13. 项目符号 - div-menu-list
> 依赖插件：BulletList&ListItem
```js
editor.chain().focus().toggleBulletList().run();
```
14. 数字编号 - div-menu-number-list
> 依赖插件：OrderedList&ListItem
```js
editor.chain().focus().toggleOrderedList().run()
```
15. 代码 - div-menu-code
> 依赖插件：CodeBlock
```js
editor.commands.toggleCodeBlock();
```
16. 引用 - div-menu-quote
> 依赖插件：Blockquote
```js
editor.chain().focus().toggleBlockquote().run()
```
17. 分割线 - div-menu-divider
> 依赖插件：Divider
```js
this.editor.commands.insertContent({
  type: 'divider'
})
```
18. 插入图片 - div-menu-image
> 依赖插件：Image
```js
this.editor.commands.setImage({
  src: ''
});
```
