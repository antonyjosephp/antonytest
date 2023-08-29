'use client';

import './headerNav.scss';

import Link from 'next/link';
import React from 'react';

import SwitchIcon from '../SwitchIcon';
import { removeWhiteSpaces } from './../../../helpers/helperFunctions';

interface IProps {
    promoDetails?: object;
}

const HeaderNavBar = ({ promoDetails }: IProps) => {
    const { dataProps }: any = promoDetails;
    const i = 0;

    return (
        <div className="header-nav-content">
            {typeof dataProps !== 'undefined' &&
                dataProps.map((data: any) => {
                    return (
                        <div
                            key={`${removeWhiteSpaces(data.promoContent)}-${i + 1}`}
                            className={`content`}
                            data-testid="header-title">
                            <div className="promo-title" style={{ display: 'none' }}></div>
                            <div className="promo-content">
                                <Link href={data.promoLink} target="_blank">
                                    <div className="promo-icon">
                                        <SwitchIcon iconName={data.promoIcon} />
                                    </div>
                                    <span className="promo-content-name">{data.promoContent}</span>
                                </Link>
                            </div>
                        </div>
                    );
                })}
        </div>
    );
};
export default HeaderNavBar;
