import React from 'react';
import { Editor, FloatingMenu } from '@tiptap/react';
import ElementOption from './ElementOption';

export interface EditorElementSelectProps {
    editor: Editor | null | undefined;
}


const EditorElementSelect: React.FC<EditorElementSelectProps> = ({ editor }) => {
    if (!editor) return <div></div>;
    return (
        <>
        {editor && 
            <FloatingMenu editor={editor} tippyOptions={{ duration: 50 }}>
                <button
                onClick={() => editor.chain().focus().toggleBulletList().run()}
                className={editor.isActive('bulletList') ? 'is-active !text-white' : 'text-white/20'}
                >
                    bullet list
                </button>
            </FloatingMenu>
        }
        </>
    )
}

export default EditorElementSelect;