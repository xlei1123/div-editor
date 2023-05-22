import { Component, Prop, h, Event, EventEmitter } from '@stencil/core';
import { Editor } from '@tiptap/core';
import StarterKit from '@tiptap/starter-kit';
import Highlight from '@tiptap/extension-highlight';
import TextStyle from '@tiptap/extension-text-style';
import { Color } from '@tiptap/extension-color';
import Blockquote from '@tiptap/extension-blockquote';
import CodeBlock from '@tiptap/extension-code-block';
import FontFamily from '@tiptap/extension-font-family';
import { FontSize } from '../../extension/fontSize';
import { Background } from '../../extension/background';
import { TextDecoration } from '../../extension/textDecoration';
import { LetterSpacing } from '../../extension/letterSpace';
import { LineHeight } from '../../extension/lineHeight';
import TaskItem from '@tiptap/extension-task-item';
import ListItem from '@tiptap/extension-list-item';
import BulletList from '@tiptap/extension-bullet-list';
import TaskList from '@tiptap/extension-task-list';
import OrderedList from '@tiptap/extension-ordered-list';

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
    console.log('this.extensions====>', this.extensions, this.editorInit);
    this.editor = new Editor({
      element: this.divTiptap,
      extensions: [
        StarterKit,
        TaskList,
        TaskItem,
        BulletList,
        ListItem,
        OrderedList,
        Blockquote,
        CodeBlock,
        Highlight,
        TextStyle,
        Color,
        FontFamily,
        FontSize,
        Background,
        TextDecoration,
        LetterSpacing,
        LineHeight,
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
