import React from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import EditorElementSelect from "./EditorElementSelect";
import { useAppSelector } from "../../hooks";
import ClientSettingsPage from "../../pages/ClientSettings";
import Extensions from "./EditorSettings/extensions";
import insertEditor from "../../utils/commandMaps/insertEditor";

import "./EditorSettings/index.css";
const Editor = () => {
  const { background, text } = useAppSelector(
    (state) => state.client.options.editor.style
  );
  const { settingsOpen } = useAppSelector((state) => state.client);
  const { isCommandOpen, command } = useAppSelector((state) => state.command);
  const { selectedFile } = useAppSelector((state) => state.files);
  const editor = useEditor({
    extensions: Extensions,
    onTransaction: (editor) => {
      localStorage.setItem("document", editor.editor.getHTML());
    },
    content: selectedFile?.content,
    editorProps: {
      attributes: {
        class: `h-full min-h-screen pb-4 prose sm:prose-base lg:prose-lg xl:prose-2xl m-5 focus:outline-none`,
      },
    },
    autofocus: true,
  });

  React.useEffect(() => {
    if (editor && !isCommandOpen) {
      editor.setEditable(true);
      editor.chain().focus();
    } else {
      editor?.setEditable(false);
    }
  }, [editor, isCommandOpen]);

  React.useEffect(() => {
    if (!isCommandOpen && command) {
      console.log("Command triggered");
      console.log(command, isCommandOpen);
      insertEditor(editor, command);
    }
  }, [isCommandOpen, command]);

  React.useEffect(() => {
    if (selectedFile) {
      editor?.commands.setContent(selectedFile.content);
      editor?.storage.markdown.getMarkdown();
    }
  }, [selectedFile]);
  return (
    <>
      <ClientSettingsPage />
      <div
        id="editorParent"
        className={`${
          settingsOpen ? "!hidden" : "!block"
        } w-full h-full px-2 py-10`}
        style={{
          backgroundColor: background,
          color: text,
        }}
      >
        <EditorElementSelect editor={editor} />
        <EditorContent
          style={{
            height: "100%",
          }}
          id="editorID"
          editor={editor}
        />
      </div>
    </>
  );
};

export default Editor;
