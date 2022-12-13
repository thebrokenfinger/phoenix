import { Editor, Range } from "@tiptap/core";
import { SuggestionOptions } from "@tiptap/suggestion";

export type CommandItem = {
  title: string;
  command: (props: { editor: Editor; range: Range }) => void;
};

export interface SlashCommandsOptions {
  suggestion: Pick<
    SuggestionOptions<CommandItem>,
    "char" | "startOfLine" | "command" | "items" | "render"
  >;
}
