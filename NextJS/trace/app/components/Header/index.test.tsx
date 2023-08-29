import { render, screen } from '@testing-library/react';

import HeaderComp from '.';
const jsonData = {
    dataProps: [
        {
            promoContent: 'Request Access',
            promoIcon: 'LockFilled',
            promoLink: '/',
        },
        {
            promoContent: 'Report an incident',
            promoIcon: 'WarningFilled',
            promoLink: '/',
        },
        {
            promoContent: 'Request a Training',
            promoIcon: 'WechatFilled',
            promoLink: '/',
        },
    ],
};

describe('Test: Checking Header component', () => {
    it('Check Header is rendered or not', () => {
        render(<HeaderComp title={'Baby Care US'} promoDetails={jsonData} />);

        expect(screen.getByTestId('header-info')).toBeInTheDocument();
    });
});
