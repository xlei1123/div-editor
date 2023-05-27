import { Component, State, Prop, h } from '@stencil/core';
import { Editor } from '@tiptap/core';
import remixiconUrl from 'remixicon/fonts/remixicon.symbol.svg';

@Component({
  tag: 'div-menu-font-bold',
  styleUrl: 'index.css',
  shadow: true,
})
export class DivMenuFontBold {
  @Prop() editor: Editor
  @State() isActive: boolean = false

  toggleBold = () => {
    this.editor.chain().focus().toggleBold().run();
    this.isActive = this.editor?.isActive('bold')
  }
  componentWillRender() {
    this.isActive = this.editor?.isActive('bold')
  }
  render() {
    return <button
    class={`is-active menu-item`}
    onClick={this.toggleBold}
    title="加粗"
  >
    <svg class="remix">
      <use xlinkHref={`${remixiconUrl}#ri-bold`} />
    </svg>
  </button>
  }
}
