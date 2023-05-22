import { Component, Prop, h, State } from '@stencil/core';
import { Editor } from '@tiptap/core';
import colorPicker from 'tui-color-picker';
import remixiconUrl from 'remixicon/fonts/remixicon.symbol.svg';

@Component({
  tag: 'div-menu-font-background',
  styleUrl: 'index.css',
  shadow: true,
})
export class DivMenuFontBackground {
  @Prop() editor: Editor
  @State() isActive: boolean = false

  colorPickerEl: HTMLDivElement;
  colorPickerInstance: colorPicker
  colorPickerShow = (event) => {
    this.colorPickerEl.style.visibility = 'visible';
    event.stopPropagation();
  }
  pickerHidden = () => {
    this.colorPickerEl.style.visibility = 'hidden';
  }
  setBgColor = () => {
    const color = this.colorPickerInstance.getColor();
    this.editor.commands.setBackground(color);
    return color;
  }
  componentDidRender() {
    if(this.colorPickerInstance) return;
    this.colorPickerInstance = colorPicker.create({
      container: this.colorPickerEl,
    });
    this.colorPickerEl.style.visibility = 'hidden';
  }
  connectedCallback() {
    document.addEventListener('click', this.pickerHidden);
  }
  disconnectedCallback() {
    document.removeEventListener('click', this.pickerHidden);
  }
 
  render() {
    return <div class="fontBackground" onClick={this.colorPickerShow}>
      <button
          class={`is-active menu-item`}
          title="背景色"
        >
          <svg class="remix">
            <use xlinkHref={`${remixiconUrl}#ri-mark-pen-line`} />
          </svg>
        </button>
      <div class="colorPicker" ref={(el) => this.colorPickerEl = el as HTMLDivElement} onClick={this.setBgColor}></div>
    </div>
  }
}
