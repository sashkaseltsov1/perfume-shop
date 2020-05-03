import React from 'react'
import styles from './App.module.css'
import Header from "./components/header/header";
import Navbar from "./components/navbar/navbar";
import Content from "./components/content/content";
import {BrowserRouter} from "react-router-dom";
import Footer from "./components/footer/footer";

const App = () => {
    return (
        <BrowserRouter>
            <div className={styles.App}>

                <Header />
                <Navbar/>
                <Content/>
                <Footer/>
            </div>
        </BrowserRouter>
    );
}

export default App;
