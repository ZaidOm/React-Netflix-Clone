import React from 'react';
import { render } from 'react-dom';
import 'normalize.css';
import App from './app';
import {GlobalStyles} from './global-styles';
import { firebase } from './lib/firebase.prod';
import { FireBaseContext } from './context/firebase';

render(
<>
    <FireBaseContext.Provider value={{ firebase }}>
        <GlobalStyles />
        <App />
    </FireBaseContext.Provider>
</>,document.getElementById('root'));
