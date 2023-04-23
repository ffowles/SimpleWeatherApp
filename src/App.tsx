import axios from 'axios';
import classNames from 'classnames';
import React, { useState } from 'react';
import './App.scss';
import ForecastDisplay from './components/ForecastDisplay';
import ZipInput from './components/ZipInput';
import { Coordinates } from './models/Coordinates';
import { Forecast } from './models/Forecast';
import { ForecastParams } from './models/ForecastParams';

// params
// storage
// tests
// readme
// cacheing

const App: React.FC = () => {
    const [zip, setZip] = useState('');
    const [useMetric, setUseMetric] = useState(false);
    const [data, setData] = useState<Forecast[]>([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const zipSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        getForecast(zip);
    };

    // useEffect(() => {
    //     navigator.geolocation.getCurrentPosition((position) => {
    //         const coordinates: Coordinates = {
    //             lat: position.coords.latitude,
    //             long: position.coords.longitude,
    //         };
    //         getForecast(null, coordinates);
    //     });
    // }, []);

    var loadingClasses = classNames({ loading: loading });

    const getForecast = async (zip: string | null, coodinates?: Coordinates) => {
        // validate
        setLoading(true);
        let params: ForecastParams = { units: useMetric ? 'si' : 'us' };
        if (zip) {
            params.zip = zip;
        } else if (coodinates) {
            params = { ...params, ...coodinates };
        }
        axios
            .get('http://localhost:3001/forecast', { params })
            .then((response) => setData(response.data.slice(0, 72) as Forecast[]))
            .catch((error) => setError(error))
            .finally(() => setLoading(false));
    };

    return (
        <div className="App">
            <header className="App-header">Simple Weather App</header>
            <div className="App-header-border" />
            <div className="App-content">
                <ZipInput
                    zip={zip}
                    setZip={setZip}
                    useMetric={useMetric}
                    setUseMetric={setUseMetric}
                    onSubmit={zipSubmit}
                />
                <ForecastDisplay forecasts={data} />
            </div>
            <div className={loadingClasses}></div>
            <footer className="App-footer"></footer>
        </div>
    );
};

export default App;
