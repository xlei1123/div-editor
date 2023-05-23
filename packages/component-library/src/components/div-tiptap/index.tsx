import { Component, Prop, h, Event, EventEmitter } from '@stencil/core';
import { Editor } from '@tiptap/core';
import StarterKit from '@tiptap/starter-kit';

@Component({
  tag: 'div-tiptap',
  styleUrl: 'index.css',
  shadow: false,
})
export class DivTiptap {
  @Prop() height: string;
  @Prop() extensions: any[] = [];
  @Event() editorInit: EventEmitter<Editor>
  divTiptap!: HTMLDivElement;
  editor: Editor;

  componentDidLoad() {
    if(this.editor) return;
    this.divTiptap.style.height = this.height;
    this.editor = new Editor({
      element: this.divTiptap,
      extensions: [
        StarterKit,
        ...this.extensions
      ],
      content: '',
    });
    this.editorInit.emit(this.editor);
  }
  connectedCallback() {
    
  }
  disconnectedCallback() {
   
  }
  render() {
    return <div class="divTiptap" ref={(el) => this.divTiptap = el as HTMLDivElement}></div>
  }
}
