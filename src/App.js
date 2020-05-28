import React, {useEffect} from 'react'
import Header from "./components/header/header";
import Content from "./components/content/content";
import {BrowserRouter} from "react-router-dom";
import Footer from "./components/footer/footer";
import AdaptiveNavbar from "./components/navbar/adaptive-navbar";
import {useDispatch} from "react-redux";
import {withAuthThunk} from "./store/thunks/auth-thunks";

const App = () => {
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(withAuthThunk());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);
    return (
        <BrowserRouter>
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
