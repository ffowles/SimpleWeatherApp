import { fireEvent, render, screen } from '@testing-library/react';
import BasicInput from '../../components/BasicInput';

describe('BasicInput tests', () => {
    const mockId = 'test-id';
    const mockValue = '40509';
    const mockSetValue = jest.fn();
    const mockPlaceHolder = 'Test placeholder';

    it('should display the given value', () => {
        render(
            <BasicInput
                id={mockId}
                value={mockValue}
                setValue={mockSetValue}
                placeholder={mockPlaceHolder}
            />
        );
        const valueInput = screen.getByDisplayValue(mockValue);

        expect(valueInput).toBeInTheDocument();
    });

    it('should display the placeholder', () => {
        render(
            <BasicInput
                id={mockId}
                value={''}
                setValue={mockSetValue}
                placeholder={mockPlaceHolder}
            />
        );
        const placeholder = screen.getByPlaceholderText(mockPlaceHolder);
        expect(placeholder).toBeInTheDocument();
    });

    it('should call setValue on change', async () => {
        render(
            <BasicInput
                id={mockId}
                value={mockValue}
                setValue={mockSetValue}
                placeholder={mockPlaceHolder}
            />
        );
        const valueInput = screen.getByDisplayValue(mockValue) as HTMLInputElement;
        const newZip = '90078';
        fireEvent.change(valueInput, {
            target: { value: newZip } as unknown as EventTarget,
        } as Event);
        expect(mockSetValue).toHaveBeenCalledWith(newZip);
    });
});
