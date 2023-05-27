import { Component, State, Prop, h } from '@stencil/core';
import { Editor } from '@tiptap/core';
import remixiconUrl from 'remixicon/fonts/remixicon.symbol.svg';

@Component({
  tag: 'div-menu-font-delline',
  styleUrl: 'index.css',
  shadow: true,
})
export class DivMenuFontDelline {
  @Prop() editor: Editor
  @State() isActive: boolean = false
  toggleDelLine = () => {
    this.editor.commands.setTextDecoration('line-through');
  }
  render() {
    return <button
    class={`is-active menu-item`}
    onClick={this.toggleDelLine}
    title="删除线"
  >
    <svg class="remix">
      <use xlinkHref={`${remixiconUrl}#ri-strikethrough`} />
    </svg>
  </button>
  }
}
