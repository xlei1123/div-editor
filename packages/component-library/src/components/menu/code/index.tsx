import { Component, State, Prop, h } from '@stencil/core';
import { Editor } from '@tiptap/core';
import remixiconUrl from 'remixicon/fonts/remixicon.symbol.svg';

@Component({
  tag: 'div-menu-code',
  styleUrl: 'index.css',
  shadow: true,
})
export class DivMenuCode {
  @Prop() editor: Editor
  @State() isActive: boolean = false

  toggleCodeBlock = () => {
    this.editor.commands.toggleCodeBlock();
    this.isActive = this.editor?.isActive('codeBlock')
  }
  componentWillRender() {
    this.isActive = this.editor?.isActive('codeBlock')
  }
  render() {
    return <button
    class={`is-active menu-item`}
    onClick={this.toggleCodeBlock}
    title="代码"
  >
    <svg class="remix">
      <use xlinkHref={`${remixiconUrl}#ri-code-view`} />
    </svg>
  </button>
  }
}
