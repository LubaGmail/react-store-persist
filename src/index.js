import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

// PersistGate delays the rendering of your app's UI until your persisted state 
//  has been retrieved and saved to redux. 
import { PersistGate } from 'redux-persist/integration/react';
import { UserProvider } from './contexts/user-context';

import App from './App';
import { store, persistor } from './store/store'

import reportWebVitals from './reportWebVitals';

import './index.scss';

/**
  public/index.html     <div id="root"></div>
*/
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      
        <BrowserRouter>
          <UserProvider>
            <App />
          </UserProvider>
        </BrowserRouter>
     
      </PersistGate>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
