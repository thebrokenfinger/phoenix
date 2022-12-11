import StarterKit from "@tiptap/starter-kit";
import { useEditor, EditorContent } from "@tiptap/react";
import Image from "@tiptap/extension-image";

export const Phoenix = () => {
  const editor = useEditor({
    extensions: [StarterKit, Image],
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
