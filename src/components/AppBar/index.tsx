import React from 'react';
import { appWindow } from "@tauri-apps/api/window";
import { IoMdClose } from 'react-icons/io';
import { VscChromeMinimize } from 'react-icons/vsc';
import { CgMaximize } from 'react-icons/cg';
import { useAppSelector } from "../../hooks";
const AppBar = () => {
    const { background: bg, text } = useAppSelector((state) => state.client.options.appBar.style);
    const isPersonalOpen = useAppSelector((state) => state.client.isPersonalOpen);
    const [show, setShow] = React.useState(true)
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

        document.addEventListener('scroll', handleScroll);

        return () => {
        document.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div data-tauri-drag-region className={`fixed max-h-min px-2 py-1 min-w-screen w-full text-white flex justify-between`} style={{
            backgroundColor: bg,
            color: text
        }}>
            <h1 className={`text-xs ${show && !isPersonalOpen ? "opacity-100" : "opacity-0"} transition-all duration-500 `}>New document</h1>
            <div className={`flex space-x-2 ${show && !isPersonalOpen ? "opacity-100" : "opacity-0"} transition-all duration-500 `}>
                <VscChromeMinimize onClick={() => appWindow.minimize()} />
                <CgMaximize onClick={() => appWindow.maximize()}/>
                <IoMdClose onClick={() => appWindow.close()}/>
            </div>
        </div>
    )
}

export default AppBar;