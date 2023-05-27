import { Component, State, Prop, h } from '@stencil/core';
import { Editor } from '@tiptap/core';
import remixiconUrl from 'remixicon/fonts/remixicon.symbol.svg';

@Component({
  tag: 'div-menu-quote',
  styleUrl: 'index.css',
  shadow: true,
})
export class DivMenuQuote {
  @Prop() editor: Editor
  @State() isActive: boolean = false

  toggleQuote = () => {
    this.editor.chain().focus().toggleBlockquote().run()
    this.isActive = this.editor?.isActive('blockquote')
  }
  componentWillRender() {
    this.isActive = this.editor?.isActive('blockquote')
  }
  render() {
    return <button
    class={`is-active menu-item`}
    onClick={this.toggleQuote}
    title="引用"
  >
    <svg class="remix">
      <use xlinkHref={`${remixiconUrl}#ri-double-quotes-r`} />
    </svg>
  </button>
  }
}
