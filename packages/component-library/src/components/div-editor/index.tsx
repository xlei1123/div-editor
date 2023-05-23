import { Component, State, Prop, h, Event, EventEmitter } from '@stencil/core';
import { Editor } from '@tiptap/core';
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
import { Divider } from '../../extension/divider';
import TaskItem from '@tiptap/extension-task-item';
import ListItem from '@tiptap/extension-list-item';
import BulletList from '@tiptap/extension-bullet-list';
import TaskList from '@tiptap/extension-task-list';
import OrderedList from '@tiptap/extension-ordered-list';
import Image from '@tiptap/extension-image';
@Component({
  tag: 'div-editor',
  styleUrl: './index.css',
  shadow: false,
})
export class DivEditor {
  @State() editor;
  @State() extensions: any[] = [];
  @Prop() editorExtensions: any[]= [];
  @Event() editorInit: EventEmitter<Editor>
  componentDidRender() {}
  connectedCallback() {
    this.extensions = [
      ...this.editorExtensions,
      Highlight,
      TextStyle,
      Color,
      Blockquote,
      CodeBlock,
      FontFamily,
      FontSize,
      Background,
      TextDecoration,
      LetterSpacing,
      LineHeight,
      TaskItem,
      ListItem,
      BulletList,
      TaskList,
      OrderedList,
      Image.configure({
        allowBase64: true,
      }),
      Divider,
    ];
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
        <div-tiptap onEditorInit={this.onEditorInit} extensions={this.extensions}></div-tiptap>
      </div>
    </div>
  }
}
