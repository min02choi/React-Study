import React from 'react';
import ReactDOM from 'react-dom/client';

const close = 18;
let today = new Date();
let hour = today.getHours();

let text = "Goodbye! Closed~";
if (hour < close) {
    text = "Welcome! Open~";
}

const Index02 = () => {
    return (
        <div>
            <h3>외부 if 문 : { text }</h3>
            <h3>3항 표현식: { hour < close ? "Open~" : "Closed~"}</h3>
        </div>
    )
}

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(myElement);
export default Index02;