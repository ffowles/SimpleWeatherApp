import React from 'react';
import './App.scss';
import PageContent from './components/PageContent';

// params
// storage
// tests
// readme
// cacheing

const App: React.FC = () => {
    // useEffect(() => {
    //     navigator.geolocation.getCurrentPosition((position) => {
    //         const coordinates: Coordinates = {
    //             lat: position.coords.latitude,
    //             long: position.coords.longitude,
    //         };
    //         getForecast(null, coordinates);
    //     });
    // }, []);

    return (
        <div className="App">
            <header className="App-header">Simple Weather App</header>
            <div className="App-header-border" />
            <PageContent />
            <footer className="App-footer"></footer>
        </div>
    );
};

export default App;
