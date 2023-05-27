import { Component, Prop, h } from '@stencil/core';
import { Editor } from '@tiptap/core';
import remixiconUrl from 'remixicon/fonts/remixicon.symbol.svg';

@Component({
  tag: 'div-menu-clear-format',
  styleUrl: 'index.css',
  shadow: true,
})
export class DivMenuClearFormat {
  @Prop() editor: Editor
  clearFormat = () => {
    this.editor.commands.unsetAllMarks();
  }
  render() {
    return <button
    class={`is-active menu-item`}
    onClick={this.clearFormat}
    title="清除样式"
  >
    <svg class="remix">
      <use xlinkHref={`${remixiconUrl}#ri-eraser-line`} />
    </svg>
  </button>
  }
}
