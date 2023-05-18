import { Extensions } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

// Code block language highlightning
import { lowlight } from "lowlight/lib/core";
import css from 'highlight.js/lib/languages/css'
import js from 'highlight.js/lib/languages/javascript'
import ts from 'highlight.js/lib/languages/typescript'
import html from 'highlight.js/lib/languages/xml'
// Tiptap extensions
import TaskList from "@tiptap/extension-task-list";
import TaskItem from "@tiptap/extension-task-item";
import CodeBlockLowlight from "@tiptap/extension-code-block-lowlight";

lowlight.registerLanguage('html', html);
lowlight.registerLanguage('js', js);
lowlight.registerLanguage('ts', ts);
lowlight.registerLanguage('css', css);
const Extensions: Extensions = [
    StarterKit.configure({ 
      codeBlock: false
      }
    ),
    CodeBlockLowlight.configure({
      lowlight: lowlight,
      exitOnArrowDown: true,
      defaultLanguage: 'ts',
      HTMLAttributes: {
        className: "testCodeBlock"
      }
    }),
    TaskList,
    TaskItem.configure({
      nested: true,
    }),
]

export default Extensions;