import React from 'react';

interface Props {
    id: string;
    value: string;
    setValue: React.Dispatch<React.SetStateAction<string>>;
    placeholder: string;
}

const BasicInput = ({ id, value, setValue, placeholder }: Props) => {
    return (
        <input
            id={id}
            className="input"
            type="input"
            placeholder={placeholder}
            value={value}
            onChange={(e) => setValue(e.target.value)}
        />
    );
};

export default BasicInput;
