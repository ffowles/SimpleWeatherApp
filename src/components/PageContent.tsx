import React, { useEffect, useState } from 'react';
import { Forecast } from '../models/Forecast';
import { Units } from '../models/Units';
import forecastServiceFactory from '../services/Forecast.service';
import localStorageService from '../services/LocalStorage.service';
import ForecastDisplay from './ForecastDisplay';
import ZipInput from './ZipInput';

const PageContent = () => {
    const [zip, setZip] = useState('');
    const [units, setUnits] = useState<Units>('us');
    const [data, setData] = useState<Forecast[]>([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const forecastService = forecastServiceFactory({ setData, setError, setLoading });

    const zipSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        forecastService.forecast(zip, units);
    };

    useEffect(() => {
        // Check localStorage for previously used values
        const storedParams = localStorageService.getParams();
        if (storedParams?.zip && storedParams.units) {
            console.log(storedParams);
            setZip(storedParams.zip);
            setUnits(storedParams.units);
            forecastService.forecast(storedParams.zip, storedParams.units);
        }
    }, []);

    return (
        <div className="App-content">
            <ZipInput
                zip={zip}
                setZip={setZip}
                units={units}
                setUnits={setUnits}
                onSubmit={zipSubmit}
            />
            <ForecastDisplay forecasts={data} loading={loading} error={error} />
        </div>
    );
};

export default PageContent;
