import { useState } from "react";
import { invoke } from "@tauri-apps/api/tauri";
import AppLayout from "./components/AppLayout";
import Editor from "./components/Editor";
import './tailwind.css';
import 'highlight.js/styles/github-dark.css';
import useKeyDown from "./components/hooks/useKeyDown";
import { useDispatch } from "react-redux";
import { toggleCommand } from "./state/command";
import { useAppSelector } from "./hooks";

function App() {
  const [greetMsg, setGreetMsg] = useState("");
  const [name, setName] = useState("");
  const dispatch = useDispatch();
  const isCommandOpen = useAppSelector((state) => state.command.isCommandOpen);

  async function greet() {
    // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
    setGreetMsg(await invoke("greet", { name }));
  }

  useKeyDown(() => {
    dispatch(toggleCommand())
  }, ["Escape"])

  useKeyDown(() => {
    if (isCommandOpen) {
      dispatch(toggleCommand())
    }
  }, ["Enter"])
  return (
    <div className='bg-transparent'>
      <AppLayout>
        <Editor />
      </AppLayout>
    </div>
  );
}

export default App;
