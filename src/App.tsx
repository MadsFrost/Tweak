import { useState } from "react";
import { invoke } from "@tauri-apps/api/tauri";
import AppLayout from "./components/AppLayout";
import Editor from "./components/Editor";
import "./tailwind.css";
import "highlight.js/styles/github-dark.css";
import useKeyDown from "./components/hooks/useKeyDown";
import { useDispatch } from "react-redux";
import { toggleCommand } from "./state/command";
import { useAppSelector } from "./hooks";
import Overview from "./components/Overview";
import Command from "./components/Command";
function App() {
  const dispatch = useDispatch();
  const isCommandOpen = useAppSelector((state) => state.command.isCommandOpen);
  const files = useAppSelector((state) => state.files.files);

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

  return (
    <div className="bg-transparent">
      <Command />
      <AppLayout>
        {!files && <Overview />}
        {files && <Editor />}
      </AppLayout>
    </div>
  );
}

export default App;
