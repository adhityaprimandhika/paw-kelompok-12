import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Order from './Order';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cart from './components/cart/index';

ReactDOM.render(
	<BrowserRouter>
		{/* <App /> */}
		{/* <Order /> */}
		<Cart />
	</BrowserRouter>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
