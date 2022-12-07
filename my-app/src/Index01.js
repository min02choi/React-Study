import React from 'react';
import ReactDOM from 'react-dom/client';

const now = "2020년대";
const old = "1990년대";

const Index01 = () => {
    return (
        <div>
            <h3><input type="radio" name="idol" />Black Pink : { now } </h3>
            <h3><input type="radio" name="idol" />Fin.K.L : { old } </h3>
            응원글 : <input type="text" />
        </div>
    )
}

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(myfavor);

export default Index01;