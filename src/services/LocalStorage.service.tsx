import { ForecastParams } from '../models/ForecastParams';

const key = 'simpleWeatherAppParams';

const localStorageService = {
    storeParams: function (params: ForecastParams): void {
        localStorage.setItem(key, JSON.stringify(params));
    },

    getParams: function (): ForecastParams | null {
        const storedData = localStorage.getItem(key);
        if (storedData) {
            return JSON.parse(storedData);
        } else {
            return null;
        }
    },
};

export default localStorageService;
