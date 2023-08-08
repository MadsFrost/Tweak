import { Extensions } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

// Code block language highlightning
import { lowlight } from "lowlight/lib/core";
import css from 'highlight.js/lib/languages/css'
import js from 'highlight.js/lib/languages/javascript'
import ts from 'highlight.js/lib/languages/typescript'
import html from 'highlight.js/lib/languages/xml'
import python from 'highlight.js/lib/languages/python'

// Tiptap extensions
import TaskList from "@tiptap/extension-task-list";
import TaskItem from "@tiptap/extension-task-item";
import CodeBlockLowlight from "@tiptap/extension-code-block-lowlight";
import './index.css';
lowlight.registerLanguage('html', html);
lowlight.registerLanguage('js', js);
lowlight.registerLanguage('ts', ts);
lowlight.registerLanguage('css', css);
lowlight.registerLanguage('py', python);

const Extensions: Extensions = [
    StarterKit.configure({ 
      codeBlock: false
      }
    ),
    CodeBlockLowlight.configure({
      lowlight: lowlight,
      exitOnArrowDown: true,
      defaultLanguage: 'ts',
      exitOnTripleEnter: true,
      HTMLAttributes: {
        className: "bg-red-500/20"
      }
    }),
    TaskList.configure({
      HTMLAttributes: {
        className: "taskList"
      }
    }),
    TaskItem.configure({
      HTMLAttributes: {
        className: "taskItem !flex !flex-row bg-green-500",
        style: "display: flex; flex-direction: row; align-items: center; margin: 0; p: 0; "
      },
      nested: true
    }),
]

export default Extensions;