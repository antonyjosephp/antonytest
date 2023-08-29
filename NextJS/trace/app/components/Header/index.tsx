'use client';

import './header.scss';

import { Layout } from 'antd';
import React from 'react';

const HeaderComp = ({ title = 'Baby Care US' }: any) => {
    const { Header } = Layout;

    return (
        <Header data-testid={'header-info'} className="top-header">
            <div className="header-logo-container">
                <div className={`headerlogo header-split`} data-testid="header-title">
                    {title}
                </div>
            </div>
        </Header>
    );
};
export default HeaderComp;
