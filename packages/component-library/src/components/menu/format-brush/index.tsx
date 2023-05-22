import { Component, Prop, h } from '@stencil/core';
import { Editor } from '@tiptap/core';
import remixiconUrl from 'remixicon/fonts/remixicon.symbol.svg';

@Component({
  tag: 'div-menu-format-brush',
  styleUrl: 'index.css',
  shadow: true,
})
export class DivMenuFormatBrush {
  @Prop() editor: Editor
  formatBrush = () => {
    
  }
  render() {
    return <button
    class={`is-active menu-item`}
    onClick={this.formatBrush}
    title="格式刷"
  >
    <svg class="remix">
      <use xlinkHref={`${remixiconUrl}#ri-brush-2-line`} />
    </svg>
  </button>
  }
}
