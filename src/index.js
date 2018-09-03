import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import Editor from './components/Editor';
import EditorCanvas from './components/EditorCanvas';
import EditorTools from './components/EditorTools';
import Content from './components/Content';
//import './css/bootstrap-theme.min.css';
//import './css/bootstrap.min.css';
//import './css/dragula.min.css';
//import './css/editor.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap-theme.min.css';
import '../node_modules/bootstrap/dist/css/dragula.min.css';
import '../node_modules/bootstrap/dist/css/editor.css';

import '../node_modules/bootstrap/dist/css/bootstrap.css';



export {Editor, EditorTools, EditorCanvas, Content};

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
