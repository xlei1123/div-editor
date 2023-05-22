import { Component, Prop, h } from '@stencil/core';
import { Editor } from '@tiptap/core';

@Component({
  tag: 'div-menu',
  styleUrl: 'index.css',
  shadow: false,
})
export class DivMenu {
  @Prop() editor: Editor

  componentDidRender() {

  }
  connectedCallback() {

  }
  disconnectedCallback() {

  }
  render() {
    return <div class="menuBar">
      <div-menu-clear-format editor={this.editor} class="menuItem"></div-menu-clear-format>
      {/* <div-menu-format-brush editor={this.editor} class="menuItem" /> */}
      <div-util-divider class="menuItem"></div-util-divider>
      <div-menu-insert editor={this.editor} class="menuItem"></div-menu-insert>
      <div-util-divider class="menuItem"></div-util-divider>
      <div-menu-font-family editor={this.editor} class="menuItem"></div-menu-font-family>
      <div-menu-font-size editor={this.editor} class="menuItem"></div-menu-font-size>
      <div-menu-font-color editor={this.editor} class="menuItem"></div-menu-font-color>
      <div-menu-font-background editor={this.editor} class="menuItem"></div-menu-font-background>
      <div-menu-font-italic editor={this.editor} class="menuItem"></div-menu-font-italic>
      <div-menu-font-bold editor={this.editor} class="menuItem"></div-menu-font-bold>
      <div-menu-font-delline editor={this.editor} class="menuItem"></div-menu-font-delline>
      <div-menu-font-underline editor={this.editor} class="menuItem"></div-menu-font-underline>
      <div-menu-letter-space editor={this.editor} class="menuItem"></div-menu-letter-space>
      <div-menu-line-height editor={this.editor} class="menuItem"></div-menu-line-height>
      <div-util-divider class="menuItem"></div-util-divider>
      <div-menu-todo editor={this.editor} class="menuItem"></div-menu-todo>
      <div-menu-list editor={this.editor} class="menuItem"></div-menu-list>
      <div-menu-number-list editor={this.editor} class="menuItem"></div-menu-number-list>
      <div-util-divider class="menuItem"></div-util-divider>
      <div-menu-code editor={this.editor} class="menuItem"></div-menu-code>
      <div-menu-quote editor={this.editor} class="menuItem"></div-menu-quote>
    </div>
  }
}
