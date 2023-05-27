import { Extension } from '@tiptap/core';

declare module '@tiptap/core' {
  interface Commands<ReturnType> {
    lineHeight: {
      /**
       * Set the font lineHeight
       */
      setLineHeight: (fontSize: number) => ReturnType,
      /**
       * Unset the font family
       */
      unsetLineHeight: () => ReturnType,
    }
  }
}
/**
 * LineHeight - Custom Extension
 * editor.commands.setLineHeight() :set the line-height.
 */

export const LineHeight = Extension.create({
  name: 'lineHeight',
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
          lineHeight: {
            default: null,
            parseHTML: element => element.style.lineHeight.replace(/['"]+/g, ''),
            renderHTML: attributes => {
              if (!attributes.lineHeight) {
                return {};
              }
              return {
                style: `line-height: ${attributes.lineHeight}`,
              };
            },
          },
        },
      },
    ];
  },
  addCommands() {
    return {
      setLineHeight: lineHeight => ({ chain }) => {
        return chain()
          .setMark('textStyle', { lineHeight: lineHeight })
          .run();
      },
      unsetLineHeight: () => ({ chain }) => {
        return chain()
          .setMark('textStyle', { lineHeight: null })
          .removeEmptyTextStyle()
          .run();
      },
    };
  },
});