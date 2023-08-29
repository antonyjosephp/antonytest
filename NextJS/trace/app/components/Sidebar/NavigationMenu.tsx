'use client';

import { AppstoreOutlined, HomeOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import Link from 'next/link';
import React, { useState } from 'react';

import MediaIcon from '../../assets/icons/MediaIcon';

type MenuItem = Required<MenuProps>['items'][number];

const NavigationMenu = () => {
    const [activeLink, setActiveLink] = useState('1');
    const onMenuClick: MenuProps['onClick'] = (e: any) => {
        setActiveLink(e.key);
    };

    const getItem = (
        label: React.ReactNode,
        key?: React.Key | null,
        icon?: React.ReactNode,
        children?: MenuItem[],
        type?: 'group'
    ): MenuItem => {
        return {
            key,
            icon,
            children,
            label,
            type,
        } as MenuItem;
    };

    const items: MenuItem[] = [
        getItem(<Link href="/">Home</Link>, '1', <HomeOutlined rev={undefined} />),
        getItem(<Link href="/ims-boilerplate">IMS Boilerpalte</Link>, '2', <AppstoreOutlined rev={undefined} />),
        getItem(<span className="submenu-name">Submenu</span>, 'sub1', <MediaIcon />, [
            getItem(<Link href="#">Option 1</Link>, '3', null, [
                getItem(<Link href="#">Sub Option 1</Link>, '31'),
                getItem(<Link href="#">Sub Option 2</Link>, '32'),
            ]),
            getItem(<Link href="#">Option 2</Link>, '4'),
        ]),
    ];

    return (
        <Menu
            theme="dark"
            mode="inline"
            items={items}
            onClick={onMenuClick}
            defaultSelectedKeys={['1']}
            selectedKeys={[activeLink]}
        />
    );
};

export default NavigationMenu;
