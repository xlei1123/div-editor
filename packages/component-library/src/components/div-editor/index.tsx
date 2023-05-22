import { Component, State, Prop, h, Event, EventEmitter } from '@stencil/core';
import { Editor } from '@tiptap/core';
@Component({
  tag: 'div-editor',
  styleUrl: './index.css',
  shadow: false,
})
export class DivEditor {
  @State() editor;
  @Prop() editorExtensions: any[]= [];
  @Event() editorInit: EventEmitter<Editor>
  componentDidRender() {
    console.log('this.editorExtensions====>', this.editorExtensions);
  }
  connectedCallback() {
    
  }
  disconnectedCallback() {
   
  }
  onEditorInit = (ev) => {
    this.editor = ev.detail;
    this.editorInit.emit(this.editor);
  };
  render() {
    return <div>
      <div-menu editor={this.editor} class="div-menu"></div-menu>
      <div class="editorContent">
        <div-tiptap onEditorInit={this.onEditorInit} extensions={this.editorExtensions}></div-tiptap>
      </div>
    </div>
  }
}
