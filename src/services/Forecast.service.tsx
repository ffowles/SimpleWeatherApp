import { Forecast } from '../models/Forecast';
import { ForecastParams } from '../models/ForecastParams';

interface ForecastService {
    forecast: (params: ForecastParams) => void;
}

interface Parameters {
    setData: React.Dispatch<React.SetStateAction<Forecast[]>>;
    setError: React.Dispatch<React.SetStateAction<null>>;
    setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

const forecastServiceFactory = ({ setData, setError, setLoading }: Parameters) => {
    const forecastService: ForecastService = {
        forecast: async function (params: ForecastParams) {
            console.log('searching with params: ', params);
            //     setLoading(true);
            //     axios
            //         .get('http://localhost:3001/forecast', { params })
            //         .then((response) => setData(response.data.slice(0, 72) as Forecast[]))
            //         .catch((error) => setError(error))
            //         .finally(() => setLoading(false));
        },
    };

    return forecastService;
};

export default forecastServiceFactory;
