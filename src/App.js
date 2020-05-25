import React, {useEffect} from 'react'
import Header from "./components/header/header";
import Content from "./components/content/content";
import {BrowserRouter} from "react-router-dom";
import Footer from "./components/footer/footer";
import AdaptiveNavbar from "./components/navbar/adaptive-navbar";
import {connect} from "react-redux";
import {withAuthThunk} from "./store/thunks/auth-thunks";

const App = (props) => {
    useEffect(()=>props.withAuthThunk(),[]);
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

export default connect(null, {withAuthThunk})(App);
