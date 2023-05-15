import React from 'react';
import AppBarSetting from "./AppBarSetting";
import AppFooterSetting from "./AppFooterSetting";
import AppEditorSetting from "./AppEditorSetting";
const ThemeSetting = () => {
    const [selectedTheme, setSelectedTheme] = React.useState<'App Bar' | 'App Footer' | 'Editor'>("App Bar");
    return (
        <div className='w-full'>
            <h1 className='font-bold select-none text-2xl'>Theme: {selectedTheme} </h1>
            <div className="flex flex-row space-x-4">
                <span onClick={() => setSelectedTheme("App Bar")} 
                      className={`${selectedTheme === "App Bar" && "font-medium"} cursor-pointer`}>Bar</span>
                <span onClick={() => setSelectedTheme("App Footer")}
                      className={`${selectedTheme === "App Footer" && "font-medium"} cursor-pointer`}>Footer</span>
                <span onClick={() => setSelectedTheme("Editor")}
                      className={`${selectedTheme === "Editor" && "font-medium"} cursor-pointer`}>Editor</span>
            </div>
            <div className='gap-4 grid grid-cols-1 p-4'>
                {selectedTheme === "App Bar" && <AppBarSetting />}
                {selectedTheme === "App Footer" && <AppFooterSetting />}
                {selectedTheme === "Editor" && <AppEditorSetting />}
            </div>
        </div>
    )
}

export default ThemeSetting;