import { mergeAttributes, Node } from '@tiptap/core';

export * from './proxies';
export * from './vue-component-lib/plugin';

export interface VueNode {
  name: string;
  tag?: string;
  component: any;
}
export const toExtention = (node: VueNode, h: Function, render: Function) => Node.create({
  name: node.name,

  group: 'block',

  atom: true,

  addAttributes() {
    return {}
  },

  parseHTML() {
    return [
      {
        tag: node.tag || node.name,
      },
    ]
  },

  renderHTML({ HTMLAttributes }) {
    return [node.tag || node.name, mergeAttributes(HTMLAttributes)]
  },

  addNodeView() {
    // editor, node, getPos, HTMLAttributes, decorations, extension
    return ({HTMLAttributes}) => {
      console.log('HTMLAttributes===>', HTMLAttributes);
      let dom = document.createElement('div');
      dom.className = node.name;
      // @ts-ignore
      const vnode = h(
        'div',
        [
          h(node.component, {...HTMLAttributes})
        ]
      )
      render(vnode, dom); 
      return {
        dom
      }
    }
  }
});