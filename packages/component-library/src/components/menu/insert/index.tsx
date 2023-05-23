import { Component, State, Prop, h } from '@stencil/core';
import { Editor } from '@tiptap/core';

@Component({
  tag: 'div-menu-insert',
  styleUrl: 'index.css',
  shadow: true,
})
export class DivMenuInsert {
  @Prop() editor: Editor;
  @State() subMenuShow = false;
  toggleItalic = () => {
    
  }
  toggleListShow = (event) => {
    this.subMenuShow = !this.subMenuShow;
    event.stopPropagation();
  }
  listHidden = () => {
    this.subMenuShow = false;
  }
  connectedCallback() {
    document.addEventListener('click', this.listHidden);
  }
  disconnectedCallback() {
    document.removeEventListener('click', this.listHidden);
  }
  render() {
    return <div class="insert" onClick={this.toggleItalic}>
      <div onClick={this.toggleListShow} class="insertMenu">
        <svg class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8682" width="18" height="18"><path d="M512 992C246.912 992 32 777.088 32 512 32 246.912 246.912 32 512 32c265.088 0 480 214.912 480 480 0 265.088-214.912 480-480 480z m0-64c229.76 0 416-186.24 416-416S741.76 96 512 96 96 282.24 96 512s186.24 416 416 416z" fill="#000000" p-id="8683"></path><path d="M256 544a32 32 0 0 1 0-64h512a32 32 0 0 1 0 64H256z" fill="#000000" p-id="8684"></path><path d="M480 256a32 32 0 0 1 64 0v512a32 32 0 0 1-64 0V256z" fill="#000000" p-id="8685"></path></svg>
        <span>插入</span>
        <svg class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3617" width="16" height="16"><path d="M787.2 380.8c-9.6-9.6-22.4-12.8-35.2-12.8l-480 3.2c-12.8 0-25.6 3.2-35.2 12.8-19.2 19.2-19.2 48 0 67.2l240 240c0 0 0 0 0 0 0 0 0 0 0 0 3.2 3.2 9.6 6.4 12.8 9.6 0 0 3.2 3.2 3.2 3.2 16 6.4 38.4 3.2 51.2-9.6l240-243.2C806.4 428.8 803.2 400 787.2 380.8z" p-id="3618" fill="#707070"></path></svg>
      </div>
      {
        this.subMenuShow ? <div class="list">
        <div-menu-image class="item" editor={this.editor}></div-menu-image>
        <div-menu-divider class="item" editor={this.editor}></div-menu-divider>
      </div> : null
      }
    </div>
  }
}
