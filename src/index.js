import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import Game from './components/Game';


ReactDOM.render(
    <React.StrictMode>
        <Game/>
    </React.StrictMode>,
    document.getElementById('root')
);

reportWebVitals();


