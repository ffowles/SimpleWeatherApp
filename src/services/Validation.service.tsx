import { ForecastParams } from '../models/ForecastParams';

const validationService = {
    /**
     * Return true if params are valid for a search. False if invalid.
     */
    validateForecastParams: function (params: ForecastParams): boolean {
        if (!params || !params.zip || !params.units) {
            return false;
        }
        const zip = params.zip;
        if (zip.length !== 5 || parseInt(zip) !== Number(zip)) {
            return false;
        }
        const units = params.units;
        if (units !== 'us' && units !== 'si') {
            return false;
        }
        return true;
    },
};

export default validationService;
