import { Forecast } from '../models/Forecast';

interface Props {
    forecast: Forecast;
}

const locale = 'en-US';
const dateFormat: Intl.DateTimeFormatOptions = {
    month: 'numeric',
    day: 'numeric',
    year: '2-digit',
    hour: 'numeric',
    minute: 'numeric',
};

const ForecastDetail = ({ forecast }: Props) => {
    return (
        <div className="forecast-container">
            <div className="hour">
                {new Date(forecast.hour).toLocaleTimeString(locale, dateFormat)}
            </div>
            <div>
                <div className="icon-wrapper">
                    <img className="icon" src={forecast.icon} alt="icon"></img>
                </div>
                <div className="details">
                    <div className="description">{forecast.shortDescription}</div>
                    <div className="temperature">
                        Temperature: {forecast.temperature} {forecast.temperatureUnit}
                    </div>
                    <div className="wind">
                        Wind speed: {forecast.windSpeed} {forecast.windDirection}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ForecastDetail;
