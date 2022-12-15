import StarterKit from "@tiptap/starter-kit";
import { useEditor, EditorContent } from "@tiptap/react";
import Image from "@tiptap/extension-image";
import {
  SlashCommands,
  items as slashCommandItems,
  render as renderSlashCommandItems,
} from "./extensions/slash-commands";
import {
  Variable,
  items as variableItems,
  render as renderVariableItems,
} from "./extensions/variable";

export const Phoenix = () => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Image,
      SlashCommands.configure({
        suggestion: {
          items: slashCommandItems,
          render: renderSlashCommandItems,
        },
      }),
      Variable.configure({
        suggestion: {
          items: variableItems,
          render: renderVariableItems,
        },
        HTMLAttributes: {
          class: "variable",
        },
        renderLabel({ node }) {
          return `${node.attrs.label ?? node.attrs.id}`;
        },
      }),
    ],
    content: "<p>Hello World!</p>",
    editorProps: {
      attributes: {
        class: "phoenix phoenix-neutral",
      },
    },
  });

  if (!editor) {
    return null;
  }

  return <EditorContent editor={editor} />;
};
