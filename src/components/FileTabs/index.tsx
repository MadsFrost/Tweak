import React from "react";
import { useAppSelector } from "../../hooks";
import { useAppDispatch } from "../../hooks";
import { selectFile, closeFile } from "../../state/files";
import { IoMdClose } from "react-icons/io";

const FileTabs = () => {
  const { files, selectedFile } = useAppSelector((state) => state.files);
  const dispatch = useAppDispatch();
  const handleSelectFile = (path: string) => {
    dispatch(selectFile(path));
  };

  return (
    <div className="w-full" data-tauri-drag-region>
      {files.map((file) => {
        return (
          <div
            onClick={() => handleSelectFile(file.path)}
            className={`
                cursor-pointer flex flex-row items-center space-x-2
                    ${selectedFile?.path === file.path ? "font-bold" : ""}
                text-sm font-mono max-w-min shadow-xl
                `}
          >
            <IoMdClose onClick={() => dispatch(closeFile(file.path))} />
            <span>{file.name}</span>
          </div>
        );
      })}
    </div>
  );
};

export default FileTabs;
