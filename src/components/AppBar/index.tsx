import React from "react";
import { appWindow } from "@tauri-apps/api/window";
import { IoMdClose } from "react-icons/io";
import { VscChromeMinimize } from "react-icons/vsc";
import { CgMaximize } from "react-icons/cg";
import { useAppSelector } from "../../hooks";
import FileTabs from "../FileTabs";

const AppBar = () => {
  const { background: bg, text } = useAppSelector(
    (state) => state.client.options.appBar.style
  );

  const { files } = useAppSelector((state) => state.files);
  const { hideAppBars } = useAppSelector((state) => state.client);
  const [show, setShow] = React.useState(true);
  const docRef = React.useRef(document.documentElement);

  React.useEffect(() => {
    const handleScroll = () => {
      if (docRef.current.scrollTop === 0) {
        // User is scrolled to the absolute top
        setShow(true);
      } else {
        // User is not at the top
        if (show !== false) setShow(false);
      }
    };

    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      data-tauri-drag-region
      className={`py-2 px-4 rounded-tl-xl rounded-tr-md fixed max-h-min items-center min-w-screen w-full text-white flex ${
        files && hideAppBars ? "justify-between" : "justify-end pt-2"
      }`}
      style={{
        backgroundColor: bg,
        color: text,
      }}
    >
      {files && hideAppBars && <FileTabs />}
      <div className={`flex space-x-2 px-2`}>
        <VscChromeMinimize onClick={() => appWindow.minimize()} />
        <CgMaximize onClick={() => appWindow.maximize()} />
        <IoMdClose onClick={() => appWindow.close()} />
      </div>
    </div>
  );
};

export default AppBar;
