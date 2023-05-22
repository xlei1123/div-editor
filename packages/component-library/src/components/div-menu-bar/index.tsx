import { Component, Prop, h } from '@stencil/core';
import { Editor } from '@tiptap/core';
import remixiconUrl from 'remixicon/fonts/remixicon.symbol.svg';
import 'remixicon/fonts/remixicon.css';

@Component({
  tag: 'div-menu-bar',
  styleUrl: 'index.css',
  shadow: true,
})
export class DivMenuBar {
  @Prop() editor: Editor

  items = [
    {
      icon: 'bold',
      title: '加粗',
      action: () => this.editor?.chain().focus().toggleBold().run(),
      isActive: () => this.editor?.isActive('bold'),
    },
    {
      icon: 'italic',
      title: '斜体',
      action: () => this.editor?.chain().focus().toggleItalic().run(),
      isActive: () => this.editor?.isActive('italic'),
    },
    {
      icon: 'code-view',
      title: 'Code',
      action: () => this.editor?.chain().focus().toggleCode().run(),
      isActive: () => this.editor?.isActive('code'),
    },
    {
      icon: 'strikethrough',
      title: '删除线',
      action: () => this.editor?.chain().focus().toggleStrike().run(),
      isActive: () => this.editor?.isActive('strike'),
    },
    {
      icon: 'mark-pen-line',
      title: '高亮',
      action: () => this.editor?.chain().focus().toggleHighlight().run(),
      isActive: () => this.editor?.isActive('highlight'),
    },
    {
      type: 'divider',
    },
    {
      icon: 'h-1',
      title: 'Heading 1',
      action: () => this.editor?.chain().focus().unsetFontSize().toggleHeading({ level: 1 }).run(),
      isActive: () => this.editor?.isActive('heading', { level: 1 }),
    },
    {
      icon: 'h-2',
      title: 'Heading 2',
      action: () => this.editor?.chain().focus().unsetFontSize().toggleHeading({ level: 2 }).run(),
      isActive: () => this.editor?.isActive('heading', { level: 2 }),
    },
    {
      icon: 'paragraph',
      title: '段落',
      action: () => this.editor?.chain().focus().setParagraph().run(),
      isActive: () => this.editor?.isActive('paragraph'),
    },
    {
      icon: 'list-unordered',
      title: '项目符号',
      action: () => this.editor?.chain().focus().toggleBulletList().run(),
      isActive: () => this.editor?.isActive('bulletList'),
    },
    {
      icon: 'list-ordered',
      title: '数字编号',
      action: () => this.editor?.chain().focus().toggleOrderedList().run(),
      isActive: () => this.editor?.isActive('orderedList'),
    },
    {
      icon: 'list-check-2',
      title: '代办',
      action: () => this.editor?.chain().focus().toggleTaskList().run(),
      isActive: () => this.editor?.isActive('taskList'),
    },
    {
      icon: 'code-box-line',
      title: '代码块',
      action: () => this.editor?.chain().focus().toggleCodeBlock().run(),
      isActive: () => this.editor?.isActive('codeBlock'),
    },
    {
      type: 'divider',
    },
    {
      icon: 'double-quotes-l',
      title: '块引用',
      action: () => this.editor?.chain().focus().toggleBlockquote().run(),
      isActive: () => this.editor?.isActive('blockquote'),
    },
    {
      icon: 'separator',
      title: '分割线',
      action: () => this.editor?.chain().focus().setHorizontalRule().run(),
    },
    {
      type: 'divider',
    },
    {
      icon: 'text-wrap',
      title: '强制换行',
      action: () => this.editor?.chain().focus().setHardBreak().run(),
    },
    {
      icon: 'format-clear',
      title: '清除格式',
      action: () => this.editor?.chain().focus().clearNodes().unsetAllMarks()
        .run(),
    },
    {
      type: 'divider',
    },
    {
      icon: 'arrow-go-back-line',
      title: '撤销',
      action: () => this.editor?.chain().focus().undo().run(),
    },
    {
      icon: 'arrow-go-forward-line',
      title: '重做',
      action: () => this.editor?.chain().focus().redo().run(),
    },
  ]

  componentDidRender() {

  }
  connectedCallback() {

  }
  disconnectedCallback() {

  }
  render() {
    return <div class="menuBar">
      <div-menu-font-family editor={this.editor} class="componentMenu"></div-menu-font-family>
      <div-menu-font-size editor={this.editor} class="componentMenu"></div-menu-font-size>
      {this.items.map((item, index) => {
        return <div key={index}>
          {
            item.type === 'divider' ? <div class="divider" /> :
              <button
                class={`menu-item${item.isActive && item.isActive() ? ' is-active' : ''}`}
                onClick={item.action}
                title={item.title}
              >
                <svg class="remix">
                  <use xlinkHref={`${remixiconUrl}#ri-${item.icon}`} />
                </svg>
              </button>
          }
        </div>
      })
      }

    </div>
  }
}
