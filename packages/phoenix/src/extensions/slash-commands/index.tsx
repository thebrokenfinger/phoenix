import { Extension } from "@tiptap/core";
import Suggestion from "@tiptap/suggestion";
import { SlashCommandsOptions } from "./types";

export const SlashCommands = Extension.create<SlashCommandsOptions>({
  name: "slashCommands",

  addOptions() {
    return {
      suggestion: {
        char: "/",
        startOfLine: false,
        command: ({ editor, range, props }) => {
          props.command({ editor, range });
        },
      },
    };
  },

  addProseMirrorPlugins() {
    return [
      Suggestion({
        ...this.options.suggestion,
        editor: this.editor,
      }),
    ];
  },
});

export { commandItems as items } from "./command-items";
export { renderCommandList as render } from "./render-command-list";
