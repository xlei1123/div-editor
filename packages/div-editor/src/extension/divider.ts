import { Node, mergeAttributes } from '@tiptap/core';

declare module '@tiptap/core' {
  interface Commands<ReturnType> {
    fontSize: {
      /**
       * Set the font family
       */
      setFontSize: (fontSize: number) => ReturnType,
      /**
       * Unset the font family
       */
      unsetFontSize: () => ReturnType,
    }
  }
}
export const Divider = Node.create({
  name: 'divider',

  group: 'block',

  atom: true,

  addAttributes() {
    return {}
  },

  parseHTML() {
    return [
      {
        tag: 'divider',
      },
    ]
  },

  renderHTML({ HTMLAttributes }) {
    return ['divider', mergeAttributes(HTMLAttributes)]
  },

  addNodeView() {
    // editor, node, getPos, HTMLAttributes, decorations, extension
    return ({}) => {
      let dom = document.createElement('div');
      dom.setAttribute('style', 'border-bottom: 1px solid #ccc; width: 100%');
      return {
        dom
      }
    }
  }
})