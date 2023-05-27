import { Component, State, Prop, h } from '@stencil/core';
import { Editor } from '@tiptap/core';
import remixiconUrl from 'remixicon/fonts/remixicon.symbol.svg';

@Component({
  tag: 'div-menu-font-underline',
  styleUrl: 'index.css',
  shadow: true,
})
export class DivMenuFontUnderline {
  @Prop() editor: Editor
  @State() isActive: boolean = false
  toggleUnderline = () => {
    this.editor.commands.setTextDecoration('underline');
  }
  render() {
    return <button
    class={`is-active menu-item`}
    onClick={this.toggleUnderline}
    title="下划线"
  >
    <svg class="remix">
      <use xlinkHref={`${remixiconUrl}#ri-underline`} />
    </svg>
  </button>
  }
}
