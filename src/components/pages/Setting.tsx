import React, { FC } from 'react';

interface SettingProps {
    title?: string;
}

const Setting: FC<SettingProps> = ({ title }) => {
    return (
        <>
            <h1>Setting</h1>
        </>
    );
};

export default Setting;