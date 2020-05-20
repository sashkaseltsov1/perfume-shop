import React, {useEffect, useRef, useState} from "react";
import {useMediaQuery} from "react-responsive";
import {disableBodyScroll, enableBodyScroll} from "body-scroll-lock";
import Navbar from "./navbar";

const AdaptiveNavbar=()=>{
    const [menuItemsState, setMenuItemsState] = useState(false);
    const  handleMediaQueryChange  = () => {!isTabletOrMobile && setMenuItemsState(false)};
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1120px)' },undefined, handleMediaQueryChange);
    const menuItemClickHandler = ()=>{
        if(menuItemsState) setMenuItemsState(false);
    };
    const menuButtonClickHandler = ()=>{
        window.scroll(0,0);
        setMenuItemsState(!menuItemsState);
    };
    const targetRef = useRef();

    useEffect(()=>{
        !menuItemsState? enableBodyScroll(targetRef.current):
            disableBodyScroll(targetRef.current, {reserveScrollBarGap: true})
    }, [menuItemsState]);
    return <Navbar menuItemsState={menuItemsState}
                   menuButtonClickHandler={menuButtonClickHandler}
                   isTabletOrMobile={isTabletOrMobile}
                   menuItemClickHandler={menuItemClickHandler}
                   targetRef={targetRef}
    />

}
export default AdaptiveNavbar