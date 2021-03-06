import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import LifeSpan from './page/demo/LifeSpan';
// import Admin from './Admin';
// import Home from './page/route_demo/route1/Home';
// import Home from './page/route_demo/VIVO/Home';
// import Router from './page/route_demo/VIVO2/Router';
// import Router from './page/route_demo/route2/router';
// import Router from './page/route_demo/route3/router';
import Routers from './router'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Routers />, document.getElementById('root'));
// ReactDOM.render(<Router />, document.getElementById('root'));
// ReactDOM.render(<Admin />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
