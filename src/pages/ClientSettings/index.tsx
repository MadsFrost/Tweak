import { useAppSelector } from "../../hooks";
import SettingsLayout from "./SettingsLayout";
const ClientSettingsPage = () => {
    const { isPersonalOpen: isOpen, options }= useAppSelector((state) => state.client);

    return (
        <>
            {isOpen && <div className="
            z-20 
            mt-6 mb-8 min-w-2/4 right-0
            fixed flex flex-col w-2/4 max-[800px]:min-w-full max-[800px]:w-full h-full
            overflow-scroll p-6
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