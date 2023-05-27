import { Extension } from '@tiptap/core';

declare module '@tiptap/core' {
  interface Commands<ReturnType> {
    background: {
      /**
       * Set the background
       */
      setBackground: (background: any) => ReturnType,
      /**
       * Unset the background
       */
      unsetBackground: () => ReturnType,
    }
  }
}
/**
 * background - Custom Extension
 * editor.commands.setBackground() :set the background.
 */

export const Background = Extension.create({
  name: 'background',
  addOptions() {
    return {
      types: ['textStyle'],
    };
  },
  addGlobalAttributes() {
    return [
      {
        types: this.options.types,
        attributes: {
          background: {
            default: null,
            parseHTML: element => element.style.background.replace(/['"]+/g, ''),
            renderHTML: attributes => {
              if (!attributes.background) {
                return {};
              }
              return {
                style: `background: ${attributes.background}`,
              };
            },
          },
        },
      },
    ];
  },
  addCommands() {
    return {
      setBackground: background => ({ chain }) => {
        return chain()
          .setMark('textStyle', { background: background })
          .run();
      },
      unsetBackground: () => ({ chain }) => {
        return chain()
          .setMark('textStyle', { background: null })
          .removeEmptyTextStyle()
          .run();
      },
    };
  },
});