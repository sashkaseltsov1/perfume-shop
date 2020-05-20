import React from 'react'
import styles from './App.module.css'
import Header from "./components/header/header";

import Content from "./components/content/content";
import {BrowserRouter} from "react-router-dom";
import Footer from "./components/footer/footer";
import AdaptiveNavbar from "./components/navbar/adaptive-navbar";

const App = () => {
    return (
        <BrowserRouter>
            <div className={styles.App}>

                <Header />
                <AdaptiveNavbar />
                <Content/>
                <Footer/>
            </div>
        </BrowserRouter>
    );
}

export default App;
