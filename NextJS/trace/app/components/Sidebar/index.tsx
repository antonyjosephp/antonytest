'use client';

import '../../styles/globals.scss';
import './sidebar.scss';

import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { Layout } from 'antd';
import dynamic from 'next/dynamic';
import React from 'react';

import NavigationMenu from './NavigationMenu';

const Logo = dynamic(() => import('../common/Logo'), {
    ssr: false,
});

const Sidebar = ({ isCollapsed, setIsCollapsed }: any) => {
    const collapseMenu = (curState: boolean) => {
        setIsCollapsed(curState);
    };

    const { Sider } = Layout;

    return (
        <div data-testid={'sidebar'} className={!isCollapsed ? 'sidebar' : 'sidebar sidebar-collapsed'}>
            <Sider trigger={null} collapsible collapsed={isCollapsed}>
                <div className={!isCollapsed ? 'logoContainer' : 'logoContainer logo-collapsed'}>
                    <Logo isCollapsed={isCollapsed} />
                </div>

                <NavigationMenu />

                {React.createElement(isCollapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                    className: 'trigger',
                    rev: { undefined },
                    onClick: () => collapseMenu(!isCollapsed),
                })}
            </Sider>
        </div>
    );
};

export default Sidebar;
