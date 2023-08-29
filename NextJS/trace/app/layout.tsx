'use client';

import './styles/globals.scss';

import { Layout } from 'antd';
import dynamic from 'next/dynamic';
import React, { useState } from 'react';

import LayoutStyleProvider from './helpers/LayoutStyleProvider';

const HeaderComp = dynamic(() => import('./components/Header'), {
    loading: () => <p>Loading ...</p>,
});
const Sidebar = dynamic(() => import('./components/Sidebar'));

export default function RootLayout({ children }: { children: React.ReactNode }) {
    const [isCollapsed, setCollapsed] = useState(false);
    return (
        <html lang="en">
            <body>
                <LayoutStyleProvider>
                    <React.StrictMode>
                        <body>
                            <Layout className="layout-outer">
                                <Sidebar isCollapsed={isCollapsed} setIsCollapsed={setCollapsed} />

                                <Layout className={isCollapsed ? 'site-layout sidebar-collapsed' : 'site-layout'}>
                                    <HeaderComp title={'IMS UI Boilerplate'} />
                                    <Layout.Content
                                        className={
                                            isCollapsed ? 'main-content collapsed-wrapper' : 'main-content main-wrapper'
                                        }>
                                        <div>{children}</div>
                                    </Layout.Content>
                                </Layout>
                            </Layout>
                        </body>
                    </React.StrictMode>
                </LayoutStyleProvider>
            </body>
        </html>
    );
}
