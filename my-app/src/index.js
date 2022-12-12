import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const close = 18;
let today = new Date();
let hours = today.getHours();
let text = "GoodBye~ Closed";
if (hours < close) {
    text = "Now Opened!";
}

function Myfunc() {
    return(
        <p>{text}</p>
    );
}

function Artist(props) {
    return(
        <h3>{props.name} is the Best Artist!</h3>
    );
}

function Best(props) {
    return(
        <>
            <p>Who is the Best Singer?</p>
            <Artist name={props.who}/>
        </>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
        <Myfunc/>
        <Best who="iKON"/>
    </React.StrictMode>
);
