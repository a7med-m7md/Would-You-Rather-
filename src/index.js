import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux'
import store from './store/store'
import Login from './components/Login'
import { BrowserRouter } from 'react-router-dom'


ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <Login authedUser='sarahedo'/>
    </Provider>
  </BrowserRouter>
,
  document.getElementById('root')
);
