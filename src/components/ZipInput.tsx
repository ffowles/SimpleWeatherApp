import BasicInput from './BasicInput';
import Toggle from './Toggle';
import './styles.scss';

interface Props {
    zip: string;
    setZip: React.Dispatch<React.SetStateAction<string>>;
    useMetric: boolean;
    setUseMetric: React.Dispatch<React.SetStateAction<boolean>>;
    onSubmit: (e: React.FormEvent) => void;
}

const ZipInput = ({ zip, setZip, useMetric, setUseMetric, onSubmit }: Props) => {
    return (
        <form className="zip-form" onSubmit={onSubmit}>
            <BasicInput value={zip} setValue={setZip} placeholder="Enter a zipcode" />
            <Toggle
                label="Units"
                onLabel="SI"
                offLabel="US"
                toggle={useMetric}
                setToggle={setUseMetric}
            />
            <button className="zip-submit embeded-button" type="submit">
                Submit
            </button>
        </form>
    );
};

export default ZipInput;
