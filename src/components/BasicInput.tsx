import React from 'react';

interface Props {
    value: string;
    setValue: React.Dispatch<React.SetStateAction<string>>;
    placeholder: string;
}

const BasicInput = ({ value, setValue, placeholder }: Props) => {
    return (
        <input
            className="input"
            type="input"
            placeholder={placeholder}
            value={value}
            onChange={(e) => setValue(e.target.value)}
        />
    );
};

export default BasicInput;
