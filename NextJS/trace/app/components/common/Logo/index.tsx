'use client';

import './logo.scss';

import Image from 'next/image';
import React, { useEffect, useState } from 'react';

import logo from '../../../../public/assets/images/logo.png';

interface Props {
    isCollapsed: boolean;
}

const Logo = ({ isCollapsed }: Props) => {
    const [displayText, setDisplayText] = useState(false);

    useEffect(() => {
        setDisplayText(isCollapsed);
    }, [isCollapsed]);

    return (
        <div data-testid="logoComponent">
            <div className="logo">
                <Image className="img-responsive" src={logo} alt="P&G" height={45} />
            </div>
            {!displayText ? (
                <div className="logo-text" data-testid="logoTest">
                    Integrated Media <br /> Solutions
                </div>
            ) : null}
            <div className="horizontal-line"></div>
        </div>
    );
};
export default Logo;
