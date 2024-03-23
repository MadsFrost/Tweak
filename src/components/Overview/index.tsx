import { VscNewFile, VscNewFolder } from "react-icons/all";
import { addFile } from "../../state/files";
import { useAppSelector } from "../../hooks";
import { useDispatch } from "react-redux";
import handleOpenFiles from "../../utils/handleOpenFiles";

const Overview = () => {
  return (
    <div className="text-white py-14 px-8 min-h-screen w-full flex flex-col justify-center items-center select-none">
      <div className="text-sm font-medium">
        <span className="border-white/30 border-2 border-solid px-4 py-3 font-bold rounded-md ml-4">
          CMD
        </span>
        <span className="px-2 text-xl">+</span>
        <span className="border-white/30 border-2 border-solid px-4 py-3 font-bold rounded-md mr-2">
          K
        </span>
      </div>
    </div>
  );
};

export default Overview;
