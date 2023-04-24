import { render, screen } from '@testing-library/react';
import App from '../App';

describe('App tests', () => {
    it('should contains the header text', () => {
        render(<App />);
        const heading = screen.getByText(/Simple Weather App/i);
        expect(heading).toBeInTheDocument();
    });
});
