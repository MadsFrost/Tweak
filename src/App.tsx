import "./tailwind.css";
import "highlight.js/styles/github-dark.css";
import AppLayout from "./components/AppLayout";
import Editor from "./components/Editor";
import Overview from "./components/Overview";
import Command from "./components/Command";
import Introduction from "./pages/Introduction";
import ClientSettings from "./pages/ClientSettings";
import { useEffect } from "react";
import useKeyDown from "./components/hooks/useKeyDown";
import handleFiles from "./utils/commandMaps/handleFiles";
import { addFile } from "./state/files";
import { useDispatch } from "react-redux";
import { toggleCommand } from "./state/command";
import { useAppSelector } from "./hooks";
import type { File } from "./state/files";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
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

  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      errorElement: <div>Error</div>,
      children: [
        {
          index: true,
          element: <Overview />,
        },
        {
          path: "edit/:filePath",
          element: <Editor />,
        },
        {
          path: "/introduction",
          element: <Introduction />,
        },
        {
          path: "/settings",
          element: <ClientSettings />,
        },
      ],
    },
  ]);

  return (
    <div className="bg-transparent">
      <Command />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
