import React from 'react';
import SettingWrapper from "../SettingWrapper";
import ThemeSetting from "../Settings/Theme";

export type SettingsType = 'theme';
const SettingsLayout = () => {
    const [settingType, setSettingType] = React.useState<SettingsType>();
    return (
        <div className='flex flex-col w-full h-full'>
            <div className="
            flex flex-col 
            min-w-fit w-20 max-h-fit">
                <div className='hover:font-medium cursor-pointer'>
                    <span className={`${settingType === "theme" && 'font-bold'} select-none`} onClick={() => setSettingType('theme')}> {'>'} Theme</span>
                </div>
            </div>
            <div className="min-w-fit w-full min-h-full py-6">
                {settingType === "theme" && <SettingWrapper>
                    <ThemeSetting />
                </SettingWrapper>}
            </div>
        </div>
    )
}

export default SettingsLayout;