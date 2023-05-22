import { Component, State, Prop, h } from '@stencil/core';
import { Editor } from '@tiptap/core';
import remixiconUrl from 'remixicon/fonts/remixicon.symbol.svg';

@Component({
  tag: 'div-menu-font-italic',
  styleUrl: 'index.css',
  shadow: true,
})
export class DivMenuFontItalic {
  @Prop() editor: Editor
  @State() isActive: boolean = false
  toggleItalic = () => {
    this.editor.chain().focus().toggleItalic().run();
  }
  render() {
    return <button
        class={`is-active menu-item`}
        onClick={this.toggleItalic}
        title="斜体"
      >
        <svg class="remix">
          <use xlinkHref={`${remixiconUrl}#ri-italic`} />
        </svg>
      </button>
  }
}
