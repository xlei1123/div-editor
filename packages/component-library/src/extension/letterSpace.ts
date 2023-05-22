import { Extension } from '@tiptap/core';

declare module '@tiptap/core' {
  interface Commands<ReturnType> {
    letterSpacing: {
      /**
       * Set the letterSpacing
       */
      setLetterSpacing: (letterSpacing: number) => ReturnType,
      /**
       * Unset the letterSpacing
       */
      unsetLetterSpacing: () => ReturnType,
    }
  }
}
/**
 * LetterSpacing - Custom Extension
 * editor.commands.setLetterSpacing() :set the letterSpacing.
 */

export const LetterSpacing = Extension.create({
  name: 'letterSpacing',
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
          letterSpacing: {
            default: null,
            parseHTML: element => element.style.letterSpacing.replace(/['"]+/g, ''),
            renderHTML: attributes => {
              if (!attributes.letterSpacing) {
                return {};
              }
              return {
                style: `letter-spacing: ${attributes.letterSpacing}`,
              };
            },
          },
        },
      },
    ];
  },
  addCommands() {
    return {
      setLetterSpacing: letterSpacing => ({ chain }) => {
        return chain()
          .setMark('textStyle', { letterSpacing: letterSpacing + 'px' })
          .run();
      },
      unsetLetterSpacing: () => ({ chain }) => {
        return chain()
          .setMark('textStyle', { letterSpacing: null })
          .removeEmptyTextStyle()
          .run();
      },
    };
  },
});