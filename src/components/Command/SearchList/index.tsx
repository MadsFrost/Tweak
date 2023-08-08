import React from "react";
import availableCommands, { Command } from "../../../utils/availableCommands";
import { Icon } from "../../Icon";

export interface SearchListProps {
  query: string;
}

const SearchList: React.FC<SearchListProps> = ({ query }) => {
  const commands = availableCommands();
  const [filteredCommands, setFilteredCommands] = React.useState<Command[]>([
    ...commands.editor,
    ...commands.files,
  ]);
  const [exactMatch, setExactMatch] = React.useState<boolean>(false);

  React.useEffect(() => {
    const search = query?.toLowerCase();
    if (!query) {
      setFilteredCommands([...commands.editor, ...commands.files]);
    }
    if (search.length > 0) {
      const filteredEditor = commands.editor.filter(
        (editorCommand) =>
          editorCommand.key.toLowerCase().includes(search) ||
          editorCommand.name.toLowerCase().includes(search) ||
          editorCommand.key.toLowerCase().indexOf(search) !== -1 ||
          editorCommand.name.toLowerCase().indexOf(search) !== -1
      );

      const filteredFiles = commands.files.filter(
        (fileCommand) =>
          fileCommand.key.toLowerCase().includes(search) ||
          fileCommand.name.toLowerCase().includes(search) ||
          fileCommand.key.toLowerCase().indexOf(search) !== -1 ||
          fileCommand.name.toLowerCase().indexOf(search) !== -1
      );

      setFilteredCommands([...filteredEditor, ...filteredFiles]);
    }
  }, [query]);

  React.useEffect(() => {
    if (filteredCommands?.length === 1) {
      if (
        filteredCommands[0].key === query ||
        filteredCommands[0].name === query
      ) {
        setExactMatch(true);
      } else {
        setExactMatch(false);
      }
    } else {
      setExactMatch(false);
    }
  }, [filteredCommands, query]);

  const highlightText = (text: string, query: string): JSX.Element => {
    const regex = new RegExp(`(${query})`, "gi");
    const parts = text.split(regex);
    return (
      <span>
        {parts.map((part, index) =>
          part.toLowerCase() === query.toLowerCase() ? (
            <span className="text-blue-500" key={index}>
              {part}
            </span>
          ) : (
            <span key={index}>{part}</span>
          )
        )}
      </span>
    );
  };

  if (exactMatch && filteredCommands) {
    const command = filteredCommands[0];
    return (
      <div className="flex flex-row items-center justify-between bg-gray-700/40 text-white rounded-br-xl rounded-bl-xl">
        <div className="flex flex-row items-center space-x-2 py-2 px-4 justify-between w-full">
          <div className="justify-between flex flex-row items-center space-x-4">
            <Icon
              nameIcon={command.icon}
              propsIcon={{
                className: "text-2xl",
              }}
            />
            <div className="flex flex-col font-bold">
              {highlightText(command.name, query)}
              <span className="font-normal text-sm text-gray-400">
                {command.desc}
              </span>
            </div>
          </div>
          <Icon
            nameIcon="RxEnter"
            propsIcon={{
              className: "text-xl",
            }}
          />
        </div>
      </div>
    );
  }

  return (
    <>
      {filteredCommands && filteredCommands.length > 0 && (
        <div className="h-2/3 text-white">
          {filteredCommands.map((command, index) => {
            return index !== filteredCommands.length - 1 ? (
              <div
                className="flex flex-row items-center justify-between bg-gray-900/80"
                key={index}
              >
                <div className="flex flex-row items-center space-x-2 py-2 px-4 justify-between w-full">
                  <div className="justify-between flex flex-row items-center space-x-4">
                    <Icon
                      nameIcon={command.icon}
                      propsIcon={{
                        className: "text-2xl",
                      }}
                    />
                    <div className="flex flex-col font-bold">
                      {highlightText(command.name, query)}
                      <span className="font-normal text-sm text-gray-400">
                        {command.desc}
                      </span>
                    </div>
                  </div>
                  <pre>{highlightText(command.key, query)}</pre>
                </div>
              </div>
            ) : (
              <div
                className="flex flex-row items-center justify-between bg-gray-900/80 rounded-br-xl rounded-bl-xl"
                key={index}
              >
                <div className="flex flex-row items-center space-x-2 py-2 px-4 justify-between w-full">
                  <div className="justify-between flex flex-row items-center space-x-4">
                    <Icon
                      nameIcon={command.icon}
                      propsIcon={{
                        className: "text-2xl",
                      }}
                    />
                    <div className="flex flex-col font-bold">
                      {highlightText(command.name, query)}
                      <span className="font-normal text-sm text-gray-400">
                        {command.desc}
                      </span>
                    </div>
                  </div>
                  <pre>{highlightText(command.key, query)}</pre>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default SearchList;
