// HTML
// import './index.html';
// To use custom globals
// import GLOBALS from '../global.config.json'; 
import "./scss/style.scss"; // STYLE
import * as ReactDOM from "react-dom"; // DEPENDENCIES
import * as React from "react";
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
ReactDOM.render( <App />, document.body ); //react initiation

