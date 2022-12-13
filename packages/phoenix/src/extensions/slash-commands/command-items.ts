import { CommandItem } from "./types";

export const commandItems: (props: { query: string }) => CommandItem[] = ({
  query,
}) => {
  const options: CommandItem[] = [
    {
      title: "H1",
      command: ({ editor, range }) => {
        editor
          .chain()
          .focus()
          .deleteRange(range)
          .setNode("heading", { level: 1 })
          .run();
      },
    },
    {
      title: "H2",
      command: ({ editor, range }) => {
        editor
          .chain()
          .focus()
          .deleteRange(range)
          .setNode("heading", { level: 2 })
          .run();
      },
    },
    {
      title: "H3",
      command: ({ editor, range }) => {
        editor
          .chain()
          .focus()
          .deleteRange(range)
          .setNode("heading", { level: 3 })
          .run();
      },
    },
    {
      title: "Paragraph",
      command: ({ editor, range }) => {
        editor.chain().focus().deleteRange(range).setNode("paragraph").run();
      },
    },
    {
      title: "Image",
      command: ({ editor }) => {
        const url = window.prompt("Enter the URL of the image:");

        if (url) {
          editor.chain().focus().setImage({ src: url }).run();
        }
      },
    },
  ];

  return options
    .filter((item) => item.title.toLowerCase().startsWith(query.toLowerCase()))
    .slice(0, 10);
};
