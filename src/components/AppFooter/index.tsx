import { FaUserCog, FaKeyboard } from "react-icons/fa";
import { useAppSelector } from "../../hooks";
import { useDispatch } from "react-redux";
import { togglePersonalSettings } from "../../state/client";
import Command from "../Command";

const AppFooter = () => {
    const { appFooter, editor } = useAppSelector((state) => state.client.options);
    const { background: bg, text } = appFooter.style;
    const isCommandOpen = useAppSelector((state) => state.command.isCommandOpen);
    const dispatch = useDispatch();

    const handleOpenSettings = () => {
        dispatch(togglePersonalSettings());
    }
    return (
        <div className='fixed bottom-0 z-30 w-full max-h-min text-white text-xs py-1 px-2 flex flex-row justify-between' style={{
            backgroundColor: bg,
            color: text
        }}>
            <div>
            {isCommandOpen ? <Command /> : <span style={{ color: editor.style.text}}>9 words.</span>}
            </div>
            <div className="flex flex-row space-x-2">
                <FaUserCog style={{
                    color: editor.style.text,
                    fill: editor.style.text
                }} className="text-[1rem] cursor-pointer" onClick={handleOpenSettings} /> 
                <FaKeyboard style={{
                    color: editor.style.text,
                    fill: editor.style.text
                }} className="text-[1rem] cursor-pointer" />
            </div>
        </div>
    )
}

export default AppFooter;