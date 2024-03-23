import { FaCog } from "react-icons/fa";
import { useAppSelector } from "../../hooks";
import { useDispatch } from "react-redux";
import { toggleSettings } from "../../state/client";
import clsx from "clsx";

const AppFooter = () => {
  const { appFooter, editor } = useAppSelector((state) => state.client.options);
  const { background: bg, text } = appFooter.style;
  const settingsOpen = useAppSelector((state) => state.client.settingsOpen);
  const dispatch = useDispatch();

  const handleOpenSettings = () => {
    dispatch(toggleSettings());
  };

  const AppFooterStyle = clsx(
    "rounded-br-md rounded-bl-md fixed bottom-0 z-30 w-full text-white text-xs py-1 px-2 flex flex-row justify-between"
  );
  return (
    <div
      className={AppFooterStyle}
      style={{
        backgroundColor: bg,
        color: text,
      }}
    >
      <span style={{ color: editor.style.text }}>9 words.</span>
      <div className="flex flex-row space-x-2">
        <FaCog
          style={{
            color: editor.style.text,
            fill: editor.style.text,
          }}
          className="text-[1rem] cursor-pointer"
          onClick={handleOpenSettings}
        />
      </div>
    </div>
  );
};

export default AppFooter;
