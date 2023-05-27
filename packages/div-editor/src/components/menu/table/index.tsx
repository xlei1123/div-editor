import { Component, Prop, h } from '@stencil/core';
import { Editor } from '@tiptap/core';
import remixiconUrl from 'remixicon/fonts/remixicon.symbol.svg';

@Component({
  tag: 'div-menu-table',
  styleUrl: 'index.css',
  shadow: true,
})
export class DivMenuTable {
  @Prop() editor: Editor
  insertTable = () => {
    
  }
  connectedCallback() {
    
  }
  disconnectedCallback() {
    
  }
  render() {
    return <span
      class={`is-active menu-item`}
      title="插入表格"
      onClick={this.insertTable}
    >
      <svg class="remix">
        <use xlinkHref={`${remixiconUrl}#ri-table-2`} />
      </svg>
    表格
  </span>
  }
}
