import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import { store } from './redux/store';
import { Global } from './styled/Global-styled';

ReactDOM.render(
    <Provider store={store}>
        <Global />
        <App />
    </Provider>,
    document.getElementById('root')
);
