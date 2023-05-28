import { Component, Prop, h, Event, EventEmitter } from '@stencil/core';
import { Editor } from '@tiptap/core';
import StarterKit from '@tiptap/starter-kit';

@Component({
  tag: 'div-tiptap',
  styleUrl: 'index.css',
  shadow: false,
})
export class DivTiptap {
  @Prop() minHeight: string;
  @Prop() extensions: any[] = [];
  @Event() editorInit: EventEmitter<Editor>
  divTiptap!: HTMLDivElement;
  editor: Editor;

  componentDidLoad() {
    if(this.editor) return;
    this.divTiptap.style.minHeight = this.minHeight;
    this.editor = new Editor({
      element: this.divTiptap,
      extensions: [
        StarterKit,
        ...this.extensions
      ],
      content: '',
    });
    this.editorInit.emit(this.editor);
    this.editor.commands.focus();
  }
  connectedCallback() {
    
  }
  disconnectedCallback() {
   
  }
  render() {
    return <div class="divTiptap" ref={(el) => this.divTiptap = el as HTMLDivElement}></div>
  }
}
