import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './modules/App';
import './styles/cards.css';
import './styles/custom.css';

ReactDOM.render(
    <div className="fluidContainer">
        <App />
    </div>, document.getElementById('root'));
