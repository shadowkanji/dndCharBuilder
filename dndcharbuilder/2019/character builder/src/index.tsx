// HTML
// import './index.html';
// To use custom globals
// import GLOBALS from '../global.config.json'; 
import "./scss/style.scss"; // STYLE
import { h, render, Component } from "preact"; // DEPENDENCIES
import { Provider } from "redux-zero/preact"; // STORAGE

import LoginPage from './pages/login';

declare const module: any;

// Create APP
const App = () => (
    <div id="st-wrapper">
        <div id="st-welcome">
            <LoginPage />
        </div>
        
    </div>
);

// // Render all in document body
let ref = render( <App />, document.body ); //react initiation


// HMR
if ( module.hot ) {
    module.hot.accept();
    module.hot.dispose( function () {
        // Clean document for refresh
        render( null, document.body, ref );
    } );
}