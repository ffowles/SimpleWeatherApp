import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.scss';
import PageContent from './components/PageContent';

const App: React.FC = () => {
    return (
        <div className="App">
            <header className="App-header">Simple Weather App</header>
            <div className="App-header-border" />
            <BrowserRouter>
                <PageContent />
            </BrowserRouter>
            <footer className="App-footer"></footer>
        </div>
    );
};

export default App;
