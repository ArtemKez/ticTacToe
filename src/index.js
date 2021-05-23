import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import Game from './components/Game';
import store from "./store/index";
import {Provider, connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        id: 50,
        history: [{
            squares: Array(9).fill(null),
        }],
        stepNumber: 0,
        xIsNext: true,
    };
}

const Container = connect(mapStateToProps)(Game)

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <Container/>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

reportWebVitals();


