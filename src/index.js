import React from 'react';
import ReactDOM from 'react-dom';
import {Router, browserHistory} from 'react-router';
import routes from './router/routes.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Route} from 'react-router'
import Error from './components/pages/error/error404.jsx'
import {createStore} from 'redux'
import allReducers from './reducers'

import {Provider} from 'react-redux'


const store = createStore(allReducers);

ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>
            {routes}
            <Route path='*' component={Error}/>
        </Router>
    </Provider>
    ,
    document.getElementById('root')
);
