import { Units } from '../models/Units';
import BasicInput from './BasicInput';
import Toggle from './Toggle';
import './styles.scss';

interface Props {
    zip: string;
    setZip: React.Dispatch<React.SetStateAction<string>>;
    units: Units;
    setUnits: React.Dispatch<React.SetStateAction<Units>>;
    onSubmit: (e: React.FormEvent) => void;
    inputId: string;
}

const ZipInput = ({ zip, setZip, units, setUnits, onSubmit, inputId }: Props) => {
    const onUnitsChange = (option: string) => setUnits(option as Units);
    return (
        <form className="zip-form" onSubmit={onSubmit}>
            <BasicInput id={inputId} value={zip} setValue={setZip} placeholder="Enter a zipcode" />
            <Toggle value={units} options={['si', 'us']} onChange={onUnitsChange} />
            <button className="zip-submit embeded-button" type="submit">
                Submit
            </button>
        </form>
    );
};

export default ZipInput;
