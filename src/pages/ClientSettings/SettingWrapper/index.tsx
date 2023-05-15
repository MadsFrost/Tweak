import React from 'react';

interface SettingProps {
    children: React.ReactNode[] | React.ReactNode;
}

const SettingWrapper: React.FC<SettingProps> = ({ children }) => {
    return (
        <div className='flex w-full'>
            {children}
        </div>
    )
}

export default SettingWrapper;