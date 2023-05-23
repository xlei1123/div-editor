import { Component, Prop, h } from '@stencil/core';
import { Editor } from '@tiptap/core';
import remixiconUrl from 'remixicon/fonts/remixicon.symbol.svg';

@Component({
  tag: 'div-menu-divider',
  styleUrl: 'index.css',
  shadow: true,
})
export class DivMenuDivider {
  @Prop() editor: Editor
  insertDivider = () => {
    this.editor.commands.insertContent({
      type: 'divider'
    })
  }
  connectedCallback() {
    
  }
  disconnectedCallback() {
    
  }
  render() {
    return <span
      class={`is-active menu-item`}
      title="插入分割线"
      onClick={this.insertDivider}
    >
      <svg class="remix">
        <use xlinkHref={`${remixiconUrl}#ri-divide-line`} />
      </svg>
      分割线
  </span>
  }
}
