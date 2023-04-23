import classNames from 'classnames';

interface Props {
    label: string;
    onLabel: string;
    offLabel: string;
    toggle: boolean;
    setToggle: React.Dispatch<React.SetStateAction<boolean>>;
}

const Toggle = ({ label, onLabel, offLabel, toggle, setToggle }: Props) => {
    var onClasses = classNames({ selected: toggle });
    var offClasses = classNames({ selected: !toggle });
    return (
        <button className="toggle embeded-button" type="button" onClick={() => setToggle(!toggle)}>
            <div className="toggle-label">{label}</div>
            <div className="toggle-selection-labels">
                <span className={onClasses}>{onLabel}</span> /{' '}
                <span className={offClasses}>{offLabel}</span>
            </div>
        </button>
    );
};

export default Toggle;
