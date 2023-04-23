import { groupBy } from 'lodash-es';
import { Forecast } from '../models/Forecast';
import ForecastDetail from './ForecastDetail';

interface Props {
    forecasts: Forecast[];
}

interface Dictionary<T> {
    [index: string]: T;
}

const getDayString = (daysFromToday: number) => {
    // Get date at start of day & add a multiple of the total milliseconds in a day to get a specific day
    return new Date(+new Date().setHours(0, 0, 0, 0) + 86400000 * daysFromToday).toDateString();
};

const ForecastDisplay = ({ forecasts }: Props) => {
    if (!forecasts || !forecasts.length) {
        return null;
    }
    const mappedForecasts: Dictionary<Forecast[]> = groupBy(forecasts, (forecast) =>
        new Date(forecast.hour).toDateString()
    );
    const today = getDayString(0);
    const tomorrow = getDayString(1);
    const dayAfter = getDayString(2);
    return (
        <div className="forecasts">
            <div>
                <p>Today</p>
                <div className="day">
                    {mappedForecasts[today]?.map((forecast) => (
                        <ForecastDetail forecast={forecast} key={forecast.hour} />
                    ))}
                </div>
            </div>
            <div>
                <p>Tomorrow</p>
                <div className="day">
                    {mappedForecasts[tomorrow]?.map((forecast) => (
                        <ForecastDetail forecast={forecast} key={forecast.hour} />
                    ))}
                </div>
            </div>
            <div>
                <p>{dayAfter}</p>
                <div className="day">
                    {mappedForecasts[dayAfter]?.map((forecast) => (
                        <ForecastDetail forecast={forecast} key={forecast.hour} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ForecastDisplay;
