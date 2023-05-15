import { useAppSelector } from "../../hooks";
import SettingsLayout from "./SettingsLayout";
const ClientSettingsPage = () => {
    const { isPersonalOpen: isOpen, options }= useAppSelector((state) => state.client);

    return (
        <>
            {isOpen && <div className="
            z-20 
            right-0
            fixed flex flex-col min-w-full w-full h-full
            overflow-scroll p-8
            " style={{
                background: options.editor.style.background,
                color: options.editor.style.text
            }}>
                <SettingsLayout />
            </div>}
        </>
    )
}

export default ClientSettingsPage;