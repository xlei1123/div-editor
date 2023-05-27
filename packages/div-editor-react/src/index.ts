import { mergeAttributes, Node } from '@tiptap/core';

type ComponentType =
  React.ComponentClass |
  React.FunctionComponent |
  React.ForwardRefExoticComponent<React.PropsWithoutRef<any> & React.RefAttributes<any>>;

export * from './components';
export interface ReactNode {
  name: string;
  tag?: string;
  component: ComponentType;
}
export const toExtention = (node: ReactNode, createElement: Function, render: Function) => Node.create({
  name: node.name,
  group: 'block',
  atom: true,
  selectable: true,
  isolating: true,
  allowGapCursor: true,
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
    return [node.name, mergeAttributes(HTMLAttributes)]
  },

  addNodeView() {
    return ({HTMLAttributes}) => {
      let dom = document.createElement('div');
      dom.className = node.name;
      render(createElement(node.component, HTMLAttributes), dom);
      return {
        dom
      }
    }
  },
});