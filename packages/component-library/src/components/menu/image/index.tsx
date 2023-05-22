import { Component, Prop, h } from '@stencil/core';
import { Editor } from '@tiptap/core';
import remixiconUrl from 'remixicon/fonts/remixicon.symbol.svg';

@Component({
  tag: 'div-menu-image',
  styleUrl: 'index.css',
  shadow: true,
})
export class DivMenuImage {
  @Prop() editor: Editor
  insertImage = () => {
    
  }
  render() {
    return  <span
      class={`is-active menu-item`}
      title="插入图片"
      onClick={this.insertImage}
    >
      <svg class="remix">
        <use xlinkHref={`${remixiconUrl}#ri-image-line`} />
      </svg>
      图片
    </span>
  }
}
