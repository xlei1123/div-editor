import { Component, Prop, h } from '@stencil/core';
import { Editor } from '@tiptap/core';

@Component({
  tag: 'div-menu-alignment',
  styleUrl: 'index.css',
  shadow: true,
})
export class DivMenuAlignment {
  @Prop() editor: Editor
  toggleAlign = () => {
    
  }
  render() {
    return <div class="alignment" onClick={this.toggleAlign}>
      <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg"><g fill="#222" fill-rule="evenodd"><path d="M5.5 13.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM12 13.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM18.5 13.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path></g></svg>
    </div>
  }
}
