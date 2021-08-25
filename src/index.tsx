import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App';

import { store } from './redux/store';
import { Global } from './styled/Global-styled';

ReactDOM.render(
    <Provider store={store}>
        <Global />
        <App />
    </Provider>,
    document.getElementById('root')
);
