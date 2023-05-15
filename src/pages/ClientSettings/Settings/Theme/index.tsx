import { SliderPicker, ColorResult } from "react-color";
import { useAppSelector } from "../../../../hooks";
import AppBarSetting from "./AppBarSetting";
import AppFooterSetting from "./AppFooterSetting";
import AppEditorSetting from "./AppEditorSetting";
const ThemeSetting = () => {
    return (
        <div className='w-full'>
            <h1 className='font-bold'>Customize Theme</h1>
            <div className='gap-4 grid grid-cols-1 p-4'>
                <AppBarSetting />
                <AppFooterSetting />
                <AppEditorSetting />
            </div>
        </div>
    )
}

export default ThemeSetting;