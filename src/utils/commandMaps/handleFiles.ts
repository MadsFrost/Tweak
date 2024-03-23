import { Editor } from "@tiptap/react";
import { Command } from "../../state/command";
import handleOpenFiles from "../handleOpenFiles";
import type { File } from "../../state/files";
export interface HandleFilesProps {
  command: Command | string;
  openCallback: (files: File[]) => void;
}

const handleFiles = (props: HandleFilesProps) => {
  switch (props.command) {
    case "open":
      handleOpenFiles({
        callback: props.openCallback,
      });
      break;
  }
};

export default handleFiles;
