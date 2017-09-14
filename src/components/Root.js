import React, { Component } from 'react';
import { Provider } from 'react-redux';
import App from './App/App.js';


const Root = ({ store }) => (
  <Provider store={store}>
    <App />
  </Provider>
);



export default Root;