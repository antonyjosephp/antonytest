'use client';

import { HomeOutlined, LockFilled, WarningFilled, WechatFilled } from '@ant-design/icons';
import React from 'react';

interface Iprops {
    iconName: string;
}

const SwitchIcon = ({ iconName }: Iprops) => {
    let icon: any = null;
    switch (iconName) {
        case 'LockFilled':
            icon = <LockFilled />;
            break;
        case 'WarningFilled':
            icon = <WarningFilled />;
            break;
        case 'WechatFilled':
            icon = <WechatFilled />;
            break;
        default:
            icon = <HomeOutlined />;
    }

    return <div>{icon}</div>;
};

export default SwitchIcon;
