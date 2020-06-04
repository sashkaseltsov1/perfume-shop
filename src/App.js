import React, {useEffect} from 'react'
import Header from "./components/header/header";
import Content from "./components/content/content";
import {BrowserRouter} from "react-router-dom";
import Footer from "./components/footer/footer";
import AdaptiveNavbar from "./components/navbar/adaptive-navbar";
import {useDispatch} from "react-redux";
import {authenticate} from "./store/thunks/auth-thunks";
import ScrollToTop from "./components/content/helpers/scroll-to-top";

const App = () => {
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(authenticate());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);
    return (
        <BrowserRouter >
            <ScrollToTop/>
            <div>
                <Header />
                <AdaptiveNavbar />
                <Content/>
                <Footer/>
            </div>
        </BrowserRouter>
    );
};

export default App;
