import AppLayout from "./components/AppLayout";
import Editor from "./components/Editor";
import { useEffect } from "react";
import "./tailwind.css";
import "highlight.js/styles/github-dark.css";
import useKeyDown from "./components/hooks/useKeyDown";
import { useDispatch } from "react-redux";
import { toggleCommand } from "./state/command";
import { useAppSelector } from "./hooks";
import Overview from "./components/Overview";
import Command from "./components/Command";
import Settings from "./pages/ClientSettings";
import Introduction from "./pages/Introduction";
import handleFiles from "./utils/commandMaps/handleFiles";
import { addFile } from "./state/files";
import type { File } from "./state/files";
function App() {
  const dispatch = useDispatch();
  const { isCommandOpen, command } = useAppSelector((state) => state.command);
  const { selectedFile } = useAppSelector((state) => state.files);
  const userNew = useAppSelector((state) => state.client.isUserNew);

  const handleOpenFiles = (files: File[]) => {
    dispatch(addFile(files));
  };
  useKeyDown(
    () => {
      dispatch(toggleCommand());
    },
    ["k"],
    true
  );

  useKeyDown(() => {
    if (isCommandOpen) {
      dispatch(toggleCommand());
    }
  }, ["Enter"]);

  useEffect(() => {
    if (!isCommandOpen && command) {
      handleFiles({
        openCallback: handleOpenFiles,
        command,
      });
    }
  }, [isCommandOpen, command]);
  return (
    <div className="bg-transparent">
      <Command />
      <AppLayout>
        {userNew && <Introduction />}
        {!selectedFile && !userNew && <Overview />}
        {selectedFile && !userNew && <Editor />}
      </AppLayout>
    </div>
  );
}

export default App;
