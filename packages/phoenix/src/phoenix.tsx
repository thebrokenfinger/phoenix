import StarterKit from "@tiptap/starter-kit";
import { useEditor, EditorContent } from "@tiptap/react";
import Image from "@tiptap/extension-image";
import {
  SlashCommands,
  items as slashCommandItems,
  render as slashCommandItemsRender,
} from "./extensions/slash-commands";

export const Phoenix = () => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Image,
      SlashCommands.configure({
        suggestion: {
          items: slashCommandItems,
          render: slashCommandItemsRender,
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
