import classNames from 'classnames';

interface Props {
    value: string | undefined;
    options: [string, string];
    onChange: (value: string) => void;
}

const Toggle = ({ value, options, onChange }: Props) => {
    const option1Classes = classNames({ selected: options[0] === value });
    const option2Classes = classNames({ selected: options[1] === value });
    const toggle = () => {
        if (options[0] === value) {
            onChange(options[1]);
        } else {
            onChange(options[0]);
        }
    };
    return (
        <div className="toggle" onClick={toggle}>
            <span className={option1Classes}>{options[0]}</span> /{' '}
            <span className={option2Classes}>{options[1]}</span>
        </div>
    );
};

export default Toggle;
