import { Component, Prop, h } from '@stencil/core';
import { Editor } from '@tiptap/core';
import remixiconUrl from 'remixicon/fonts/remixicon.symbol.svg';

@Component({
  tag: 'div-menu-todo',
  styleUrl: 'index.css',
  shadow: true,
})
export class DivMenuTodo {
  @Prop() editor: Editor
  toggleTodo = () => {
    this.editor.chain().focus().toggleTaskList().run()
  }
  render() {
    return <button
    class={`is-active menu-item`}
    onClick={this.toggleTodo}
    title="待办"
  >
    <svg class="remix">
      <use xlinkHref={`${remixiconUrl}#ri-task-line`} />
    </svg>
  </button>
  }
}
