import { render, screen } from '@testing-library/react';

import Logo from './index';

describe('Test: Checking Logo component', () => {
    it('Should render Logo component', () => {
        render(<Logo isCollapsed={false} />);

        expect(screen.getByTestId('logoTest')).toBeInTheDocument();
    });

    it('Should not render Logo text', () => {
        render(<Logo isCollapsed={true} />);

        expect(screen.getByTestId('logoComponent')).toBeInTheDocument();
    });
});
