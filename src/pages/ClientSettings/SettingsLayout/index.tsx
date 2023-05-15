import React from 'react';
import SettingWrapper from "../SettingWrapper";
import ThemeSetting from "../Settings/Theme";

export type SettingsType = 'theme';
const SettingsLayout = () => {
    const [settingType, setSettingType] = React.useState<SettingsType>('theme');
    return (
        <div className='flex flex-col w-full h-full'>
            <div className="border-b-2
            flex flex-col 
            border-white/30
            min-w-fit w-20 max-h-fit">
                <span className="font-bold">Configurations</span>
                <div className=''>
                    <span onClick={() => setSettingType('theme')}>Theme</span>
                </div>
            </div>
            <div className="min-w-fit w-full min-h-full">
                {settingType && <SettingWrapper>
                    <ThemeSetting />
                </SettingWrapper>}
            </div>
        </div>
    )
}

export default SettingsLayout;