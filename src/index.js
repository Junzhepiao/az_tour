import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootswatch/dist/journal/bootstrap.min.css';
import {Provider} from 'react-redux'
import store from './store'
import { getUsers } from './actions/users';

let newStore = store()

newStore.dispatch(getUsers())


ReactDOM.render(
<Provider store={newStore}>
<App />
</Provider>, document.getElementById('root'));
