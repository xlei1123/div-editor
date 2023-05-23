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
  insertImage = (e) => {
    let files = [...e.target.files];
    files.forEach(async (file: File) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = (e) => {
        debugger;
        this.editor.commands.setImage({
          src: e.target.result as any
        })
      }
    });
  }
  render() {
    return  <span
      class={`is-active menu-item`}
      title="插入图片"
    >
      <input type="file" class={'input-file'} onChange={this.insertImage} />
      <svg class="remix">
        <use xlinkHref={`${remixiconUrl}#ri-image-line`} />
      </svg>
      图片
    </span>
  }
}
