import React, {useEffect} from 'react'
import Header from "./components/header/header";
import Content from "./components/content/content";
import {BrowserRouter} from "react-router-dom";
import Footer from "./components/footer/footer";
import AdaptiveNavbar from "./components/navbar/adaptive-navbar";
import {useDispatch} from "react-redux";
import ScrollToTop from "./components/content/helpers/scroll-to-top";
import Bar from "./components/bar/bar";
import {initCartActionCreator} from "./store/action-creators/cart-actions";
import {authenticateActionCreator} from "./store/action-creators/auth-actions";


const App = () => {
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(authenticateActionCreator());
        dispatch(initCartActionCreator());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);
    return (
        <BrowserRouter >
            <ScrollToTop/>
            <div>
                <Header />
                <AdaptiveNavbar />
                <Bar/>
                <Content/>
                <Footer/>
            </div>
        </BrowserRouter>
    );
};

export default App;
