import { Component, Prop, h } from '@stencil/core';
import { Editor } from '@tiptap/core';
import remixiconUrl from 'remixicon/fonts/remixicon.symbol.svg';

@Component({
  tag: 'div-menu-number-list',
  styleUrl: 'index.css',
  shadow: true,
})
export class DivMenuNumberList {
  @Prop() editor: Editor
  toggleList = () => {
    this.editor.chain().focus().toggleOrderedList().run()
  }
  render() {
    return <button
    class={`is-active menu-item`}
    onClick={this.toggleList}
    title="数字编号"
  >
    <svg class="remix">
      <use xlinkHref={`${remixiconUrl}#ri-list-ordered`} />
    </svg>
  </button>
  }
}
