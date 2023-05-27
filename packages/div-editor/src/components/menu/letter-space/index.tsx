import { Component, Prop, State, h } from '@stencil/core';
import { Editor } from '@tiptap/core';
import remixiconUrl from 'remixicon/fonts/remixicon.symbol.svg';

@Component({
  tag: 'div-menu-letter-space',
  styleUrl: 'index.css',
  shadow: true,
})
export class DivMenuLetterSpacing {
  @Prop() editor: Editor
  @State() showInput: boolean = false;
  @State() letterSp: number = 0;
  toggleSpace = () => {
    this.showInput = true;
  }
  letterSpChange = (e) => {
    this.letterSp = e.target.value;
  }
  onConfirm = (e) => {
    // @ts-ignore
    this.editor.commands.setLetterSpacing(this.letterSp);
    this.showInput = false;
    e.cancelBubble = true;
  }

  render() {
    return <button
    class={`is-active menu-item`}
    onClick={this.toggleSpace}
    title="字体间距"
  >
    <svg class="remix">
      <use xlinkHref={`${remixiconUrl}#ri-text-spacing`} />
    </svg>
    {
      this.showInput ? <div class="letterSpacing">
      <input value={this.letterSp} onChange={this.letterSpChange} class="letterSpacingInput" />px
      <span class="confirm" onClick={this.onConfirm}>确定</span>
    </div> : null
    }
  </button>
  }
}
