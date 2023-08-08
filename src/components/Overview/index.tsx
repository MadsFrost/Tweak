import { VscNewFile, VscNewFolder } from "react-icons/all";
import { addFile } from "../../state/files";
import { useAppSelector } from "../../hooks";
import { useDispatch } from "react-redux";
import handleOpenFiles from "../../utils/handleOpenFiles";

const Overview = () => {
  const dispatch = useDispatch();
  const { files } = useAppSelector((state) => state.files);

  const addFiles = async () => {
    const retrievedFiles = await handleOpenFiles();
    console.log(retrievedFiles);
    dispatch(addFile(retrievedFiles));
  };

  return (
    <div className="py-14 px-8 min-h-screen w-full">
      <div className="text-white pb-8">
        <h1 className="text-3xl font-bold">Tweak</h1>
        <h2 className="text-gray-400">Lightweight and powerful notes.</h2>
      </div>
      <div className="flex flex-col text-white space-y-2">
        <h2 className="text-lg font-semibold">Start</h2>
        <button className="bg-black/10 hover:bg-black/20 rounded-lg flex flex-row items-center max-w-fit space-x-2 text-sm">
          <VscNewFile /> <span>New File...</span>
        </button>
        <button
          onClick={addFiles}
          className="bg-black/10 hover:bg-black/20 rounded-lg flex flex-row items-center max-w-fit space-x-2 text-sm"
        >
          <VscNewFolder /> <span>Open...</span>
        </button>
      </div>
      <pre className="text-white">{JSON.stringify(files)}</pre>
      <div className="flex flex-col text-white space-y-2 pt-8">
        <h2 className="text-lg font-semibold">Recent</h2>
        <span className="text-xs text-blue-500">
          my-todo-notes <span className="text-white">~/Documents/Notes</span>
        </span>
      </div>
    </div>
  );
};

export default Overview;
