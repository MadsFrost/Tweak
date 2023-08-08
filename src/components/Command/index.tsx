import React from "react";
import { useAppSelector } from "../../hooks";
import { useAppDispatch } from "../../hooks";
import { updateCommand } from "../../state/command";
import { FiSearch } from "react-icons/fi";
import SearchList from "./SearchList";
import useKeyDown from "../hooks/useKeyDown";
import { toggleCommand } from "../../state/command";
const Command = () => {
  const commandRef = React.createRef<HTMLInputElement>();
  const [command, setCommand] = React.useState<string>("");
  const dispatch = useAppDispatch();
  const editorText = useAppSelector(
    (state) => state.client.options.editor.style.text
  );

  const { isCommandOpen } = useAppSelector((state) => state.command);

  const handleQuery = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCommand(event.currentTarget.value);
  };

  const handleCommand = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      dispatch(updateCommand(event.currentTarget.value));
      setCommand("");
    }
  };
  React.useEffect(() => {
    commandRef?.current?.focus();
  }, [commandRef]);

  useKeyDown(() => {
    if (isCommandOpen) {
      dispatch(toggleCommand());
    }
  }, ["Escape"]);

  return (
    <>
      {isCommandOpen && (
        <div className="fixed top-0 left-0 z-[1000] w-full h-full flex flex-col justify-center items-center text-md">
          <div className="w-2/3 max-h-fit transition-all duration-300 rounded-lg border-2 border-black/10 shadow-xl">
            <div
              className={`bg-gray-900/80 rounded-tr-xl rounded-tl-xl text-white/100 flex flex-row p-4 items-center space-x-2 border-b-2 border-gray-600/80`}
            >
              <FiSearch className="text-xl" />
              <input
                ref={commandRef}
                className="focus:outline-none bg-transparent placeholder:text-gray-100 w-full text-lg"
                placeholder="Search commands.."
                onChange={handleQuery}
                onKeyDown={handleCommand}
                style={{
                  color: editorText,
                }}
              />
            </div>
            <SearchList query={command} />
          </div>
        </div>
      )}
    </>
  );
};

export default Command;
