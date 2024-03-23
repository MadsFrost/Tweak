import { open } from "@tauri-apps/api/dialog";
import { readTextFile } from "@tauri-apps/api/fs";
import type { File } from "../state/files";

export interface HandleOpenFilesProps {
  callback: (files: File[]) => void;
}

const handleOpenFiles = async (
  props: HandleOpenFilesProps
): Promise<File[] | undefined> => {
  const res = await open({
    multiple: true,
    filters: [
      {
        name: "Markdown and HTML",
        extensions: ["md", "html"],
      },
    ],
  });

  if (res === null) {
    return undefined;
  }

  if (Array.isArray(res)) {
    const filePromises = res.map(async (file) => {
      const fileContent = await readTextFile(file);
      return {
        name: file.split("/").pop() || "Unnamed File",
        content: fileContent,
        path: file,
        created: Date.now(),
      };
    });

    const files = await Promise.all(filePromises);
    props.callback(files);

    return files;
  }

  return undefined;
};

export default handleOpenFiles;
