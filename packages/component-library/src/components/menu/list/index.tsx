import { Component, Prop, h } from '@stencil/core';
import { Editor } from '@tiptap/core';
import remixiconUrl from 'remixicon/fonts/remixicon.symbol.svg';

@Component({
  tag: 'div-menu-list',
  styleUrl: 'index.css',
  shadow: true,
})
export class DivMenuList {
  @Prop() editor: Editor
  toggleList = () => {
    this.editor.chain().focus().toggleBulletList().run();
  }
  render() {
    return <button
    class={`is-active menu-item`}
    onClick={this.toggleList}
    title="项目符号"
  >
    <svg class="remix">
      <use xlinkHref={`${remixiconUrl}#ri-list-check`} />
    </svg>
  </button>
  }
}
