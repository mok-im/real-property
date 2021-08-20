import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from "react-redux";
import 'bootstrap/dist/css/bootstrap.min.css';
import reportWebVitals from './reportWebVitals';
import { createGlobalStyle } from 'styled-components';
import { store } from './redux/index';


const Global = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background: linear-gradient(to bottom left, #FFFFFF, #3D5F6F);
}
`;

ReactDOM.render(
  <Provider store={store}>
    <Global />
    <App />
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();
