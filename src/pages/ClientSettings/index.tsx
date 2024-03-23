import useKeyDown from "../../components/hooks/useKeyDown";
import { useAppSelector } from "../../hooks";
// import SettingsLayout from "./SettingsLayout";
import { useDispatch } from "react-redux";
import { toggleSettings } from "../../state/client";

const ClientSettingsPage = () => {
  const dispatch = useDispatch();
  const { settingsOpen: isOpen, options } = useAppSelector(
    (state) => state.client
  );

  useKeyDown(
    () => {
      if (isOpen) {
        dispatch(toggleSettings());
      }
    },
    ["Escape"],
    false
  );

  return (
    <div
      data-tauri-drag-region
      className={`z-200
          right-0 transition-opacity
          absolute flex flex-col w-full h-full
           p-10 ${isOpen ? "opacity-100" : "opacity-0 hidden"}`}
      style={{
        background: options.editor.style.background,
        color: options.editor.style.text,
      }}
    >
      {/* <SettingsLayout /> */}
      <h1 className="text-4xl font-bold">Configuration</h1>
    </div>
  );
};

export default ClientSettingsPage;
