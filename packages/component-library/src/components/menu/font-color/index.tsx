import { Component, Prop, h } from '@stencil/core';
import { Editor } from '@tiptap/core';
import colorPicker from 'tui-color-picker';
import remixiconUrl from 'remixicon/fonts/remixicon.symbol.svg';

@Component({
  tag: 'div-menu-font-color',
  styleUrl: 'index.css',
  shadow: true,
})
export class DivMenuFontColor {
  @Prop() editor: Editor
  colorPickerEl: HTMLDivElement;
  colorPickerInstance: colorPicker
  colorPickerShow = (event) => {
    this.colorPickerEl.style.visibility = 'visible';
    event.stopPropagation();
  }
  pickerHidden = () => {
    this.colorPickerEl.style.visibility = 'hidden';
  }
  setColor = () => {
    const color = this.colorPickerInstance.getColor();
    this.editor.commands.setColor(color);
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
    return <div class="fontColor" onClick={this.colorPickerShow}>
        <button
          class={`is-active menu-item`}
          title="字体颜色"
        >
          <svg class="remix">
            <use xlinkHref={`${remixiconUrl}#ri-font-color`} />
          </svg>
        </button>
      <div class="colorPicker" ref={(el) => this.colorPickerEl = el as HTMLDivElement} onClick={this.setColor}></div>
    </div>
  }
}
