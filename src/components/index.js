import React from 'react';
import {render} from 'react-dom';
import './index.css';
import App from './App';
import {Tick} from './Tick';	// named import
import * as serviceWorker from './serviceWorker';
import {Page} from './Conditional';
import {NameForm} from './Forms';
import './redux/redux-standalone.js';	// running redux code without react
import './redux/immutable-state.js';

var x = document.getElementById('root');
render(<App />, x);
render(<Tick />, x);
render(<Page />, document.getElementById('child'));
render(<NameForm />, document.getElementById('sibling'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
