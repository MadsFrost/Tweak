import React from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit'
import { lowlight } from 'lowlight/lib/core'
import CodeBlockLowlight from '@tiptap/extension-code-block-lowlight';
import TaskItem from '@tiptap/extension-task-item'
import TaskList from '@tiptap/extension-task-list'
import css from 'highlight.js/lib/languages/css'
import js from 'highlight.js/lib/languages/javascript'
import ts from 'highlight.js/lib/languages/typescript'
import html from 'highlight.js/lib/languages/xml'
import EditorElementSelect from './EditorElementSelect';
import { useAppSelector } from '../../hooks';
import ClientSettingsPage from '../../pages/ClientSettings';
import useKeyPress from '../hooks/useKeyDown';

const Editor = () => {
  const { background, text } = useAppSelector((state) => state.client.options.editor.style);
  const { isPersonalOpen } = useAppSelector((state) => state.client);
  const isCommandOpen = useAppSelector((state) => state.command.isCommandOpen);
  lowlight.registerLanguage('html', html);
  lowlight.registerLanguage('js', js);
  lowlight.registerLanguage('ts', ts);
  lowlight.registerLanguage('css', css);

  const editor = useEditor({
    extensions: [
      StarterKit.configure({ codeBlock: false }),
      CodeBlockLowlight.configure({
        lowlight,
        exitOnArrowDown: true,
        defaultLanguage: 'ts'
      }),
      TaskList,
      TaskItem.configure({
        nested: true,
      }),
    ],
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
            color: text,
            height: "100%"
          }} id="editorID" editor={editor} />
        </div>
      </>
    )
  }

  export default Editor;