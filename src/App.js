import React, {useEffect} from 'react'
import Header from "./components/header/header";
import Content from "./components/content/content";
import {BrowserRouter} from "react-router-dom";
import Footer from "./components/footer/footer";
import AdaptiveNavbar from "./components/navbar/adaptive-navbar";
import {useDispatch} from "react-redux";
import {authenticate} from "./store/thunk-creators/auth-thunks";
import ScrollToTop from "./components/content/helpers/scroll-to-top";
import Bar from "./components/bar/bar";
import {setCartThunkCreator} from "./store/thunk-creators/cart-thunks";

const App = () => {
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(authenticate());
        dispatch(setCartThunkCreator());
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
