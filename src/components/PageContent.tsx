import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Forecast } from '../models/Forecast';
import { ForecastParams } from '../models/ForecastParams';
import { Units } from '../models/Units';
import forecastServiceFactory from '../services/Forecast.service';
import localStorageService from '../services/LocalStorage.service';
import validationService from '../services/Validation.service';
import ForecastDisplay from './ForecastDisplay';
import ZipInput from './ZipInput';

const PageContent = () => {
    let [searchParams, setSearchParams] = useSearchParams();

    const defaultUnits = 'us';
    const inputId = 'zip-input';

    const [zip, setZip] = useState('');
    const [units, setUnits] = useState<Units>(defaultUnits);
    const [data, setData] = useState<Forecast[]>([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const forecastService = forecastServiceFactory({ setData, setError, setLoading });

    const doForecast = (params?: ForecastParams) => {
        if (!params || !validationService.validateForecastParams(params)) {
            // Use current state if specific params are not supplied
            params = { zip, units };
        }
        if (validationService.validateForecastParams(params)) {
            forecastService.forecast(params);
            setSearchParams({ zip: params.zip, units: params.units });
            localStorageService.storeParams(params);
        }
    };

    const zipSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        doForecast();
        if (document.activeElement?.id === inputId) {
            (document.activeElement as HTMLInputElement).blur();
        }
    };

    // On page load actions
    useEffect(() => {
        // Check for URL search params
        const zipParam = searchParams.get('zip');
        if (zipParam) {
            setZip(zipParam);
        }
        const unitsParam = searchParams.get('units') as Units;
        if (unitsParam) {
            setUnits(unitsParam);
        }
        if (zipParam) {
            doForecast({ zip: zipParam, units: unitsParam || defaultUnits });
        } else {
            // Check for local storage values
            const storedParams = localStorageService.getParams();
            if (storedParams?.zip && storedParams.units) {
                const newUnits = unitsParam || storedParams.units; // prefer search param if present
                setZip(storedParams.zip);
                setUnits(newUnits);
                doForecast({ zip: storedParams.zip, units: newUnits });
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className="App-content">
            <ZipInput
                zip={zip}
                setZip={setZip}
                units={units}
                setUnits={setUnits}
                onSubmit={zipSubmit}
                inputId={inputId}
            />
            <ForecastDisplay forecasts={data} loading={loading} error={error} />
        </div>
    );
};

export default PageContent;
