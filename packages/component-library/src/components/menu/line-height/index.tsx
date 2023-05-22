import { Component, Prop, State, h } from '@stencil/core';
import { Editor } from '@tiptap/core';
import remixiconUrl from 'remixicon/fonts/remixicon.symbol.svg';

@Component({
  tag: 'div-menu-line-height',
  styleUrl: 'index.css',
  shadow: true,
})
export class DivMenuLineHeight {
  @Prop() editor: Editor
  @State() showList: Boolean = false
  toggleLineHeight = (event) => {
    this.showList = !this.showList;
    event.stopPropagation();
  }
  lineHList = [1, 1.15, 1.3, 1.5, 2, 3]
  seclineH = (lineH) => {
    this.editor.commands.setLineHeight(lineH);
  }
  listHidden = () => {
    this.showList = false;
  }
  connectedCallback() {
    document.addEventListener('click', this.listHidden);
  }
  disconnectedCallback() {
    document.removeEventListener('click', this.listHidden);
  }
  render() {
    return <button
    class={`is-active menu-item`}
    onClick={this.toggleLineHeight}
    title="行高"
  >
    <svg class="remix">
      <use xlinkHref={`${remixiconUrl}#ri-line-height`} />
    </svg>
    {
      this.showList ? <div class="lineHList">
      {this.lineHList.map((size) => <div class="lineH" onClick={() => this.seclineH(size)}>{size}</div>)}
    </div> : null
    }
  </button>
  }
}
