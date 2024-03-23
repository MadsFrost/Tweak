export interface Command {
  type: "editor" | "fileSystem";
  name: string;
  key: string;
  icon: string;
  desc: string;
}

export interface AvailableCommands {
  files: Command[];
  editor: Command[];
  shortcuts: Command[];
}

const availableCommands = (): AvailableCommands => {
  return {
    files: [
      {
        type: "fileSystem",
        name: "Open File",
        key: "open",
        icon: "MdFileOpen",
        desc: "Open a new .md file from finder or explorer.",
      },
      {
        type: "fileSystem",
        name: "New File",
        key: "new",
        icon: "FaFile",
        desc: "Create a new .md file.",
      },
    ],
    editor: [
      {
        type: "editor",
        name: "Codeblock TypeScript",
        key: "ts",
        icon: "SiTypescript",
        desc: "Create a new TypeScript language code block.",
      },
      {
        type: "editor",
        name: "Codeblock Python",
        key: "py",
        icon: "FaPython",
        desc: "Create a new Python language code block.",
      },
    ],
    shortcuts: [],
  };
};

export default availableCommands;
