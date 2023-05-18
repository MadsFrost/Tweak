import React from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import EditorElementSelect from './EditorElementSelect';
import { useAppSelector } from '../../hooks';
import ClientSettingsPage from '../../pages/ClientSettings';
import Extensions from './EditorSettings/extensions';
const Editor = () => {
  const { background, text } = useAppSelector((state) => state.client.options.editor.style);
  const { isPersonalOpen } = useAppSelector((state) => state.client);
  const isCommandOpen = useAppSelector((state) => state.command.isCommandOpen);

  const editor = useEditor({
    extensions: Extensions,
    content: localStorage.getItem('document') ?? '<h1>Test</h1> <h2>Test</h2>',
    onTransaction: (editor) => {
      localStorage.setItem('document', editor.editor.getHTML());
    },
    editorProps: {
      attributes: {
        class: `h-full min-h-screen prose sm:prose-base lg:prose-lg xl:prose-2xl m-5 focus:outline-none`
      },
    },
    autofocus: true
  });

  React.useEffect(() => {
    if (editor && !isCommandOpen) {
      editor.setEditable(true);
      editor.chain().focus();
    } else {
      editor?.setEditable(false);
    }
  }, [editor, isCommandOpen]);

    return (
      <>
        <ClientSettingsPage />
        <div id="editorParent" className={`${isPersonalOpen ? '!hidden' : '!block'} w-full h-full px-2 py-4`} style={{
          backgroundColor: background,
          color: text
        }}>
          <EditorElementSelect editor={editor} />
          <EditorContent style={{
            height: "100%"
          }} id="editorID" editor={editor} />
        </div>
      </>
    )
  }

  export default Editor;