import React from 'react';
import ReactDOM from 'react-dom';

import "./style.css"
/* 
component in react should be name in pascal format TemporaryName
and while calling use <TemporaryName/>
*/
import Header from "../src/components/Header"
import Footer from "../src/components/Footer"
import Content from "../src/components/Content"

function Page() {
    return (
        <div>
            <Header />
            <Content />
            <Footer />
        </div>
    )
};



ReactDOM.render(<Page />, document.getElementById("root"))