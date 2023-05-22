import { Extension } from '@tiptap/core';

declare module '@tiptap/core' {
  interface Commands<ReturnType> {
    textDecoration: {
      /**
       * Set the textDecoration
       */
      setTextDecoration: (textDecoration: String) => ReturnType,
      /**
       * Unset the textDecoration
       */
      unsetTextDecoration: () => ReturnType,
    }
  }
}
/**
 * textDecoration - Custom Extension
 * editor.commands.setTextDecoration() :set the textDecoration.
 */

export const TextDecoration = Extension.create({
  name: 'textDecoration',
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
          textDecoration: {
            default: null,
            parseHTML: element => element.style.textDecoration.replace(/['"]+/g, ''),
            renderHTML: attributes => {
              if (!attributes.textDecoration) {
                return {};
              }
              return {
                style: `text-decoration: ${attributes.textDecoration}`,
              };
            },
          },
        },
      },
    ];
  },
  addCommands() {
    return {
      setTextDecoration: textDecoration => ({ chain }) => {
        return chain()
          .setMark('textStyle', { 'textDecoration': textDecoration })
          .run();
      },
      unsetTextDecoration: () => ({ chain }) => {
        return chain()
          .setMark('textStyle', { 'textDecoration': null })
          .removeEmptyTextStyle()
          .run();
      },
    };
  },
});