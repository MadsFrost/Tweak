import { Editor } from "@tiptap/react"
import { Command } from "../../state/command"

const insertEditor = (editor: Editor | null, command: Command | string) => {
    console.log("Insert to Editor props", editor, command);
    if (editor !== null) {
        switch (command) {
            case "tl":
                console.log("command is tl", command)
                editor.commands.toggleTaskList();
                break;
            case "ts":
                editor.commands.toggleCodeBlock({language: 'ts' });
                break;
            case "py":
                editor.commands.toggleCodeBlock({ language: 'py' });
                break;
        }
    }

}

export default insertEditor;