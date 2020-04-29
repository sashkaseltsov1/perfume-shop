import React, {useEffect, useRef, useState} from "react";
import {useMediaQuery} from "react-responsive";
import {disableBodyScroll, enableBodyScroll} from "body-scroll-lock";
import MobileMenu from "./mobile-menu";

const MobileMenuContainer=()=>{
    const getScrollbarWidth = ()=> {
        return window.innerWidth - document.documentElement.clientWidth;
    }
    const [menuItemsState, setMenuItemsState] = useState(false)
    const [scrollBarWidth, setScrollBarWidth] = useState({style: {'--scroll-bar-width': getScrollbarWidth()+'px'}})
    const targetRef = useRef()
    const [targetElement, setTargetElement] = useState(null)
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 950px)' })

    useEffect(() => {

        setTargetElement(targetRef.current)
    }, []);

    useEffect(() => {
        if(!isTabletOrMobile)
        {
            enableBodyScroll(targetElement)
            setMenuItemsState(false)
        }
    }, [isTabletOrMobile]);

    const menuButtonClickHandler = ()=>{
        !menuItemsState && setScrollBarWidth({style: {'--scroll-bar-width': getScrollbarWidth()+'px'}})
        window.scroll(0,0)
        setMenuItemsState(!menuItemsState)
        menuItemsState? enableBodyScroll(targetElement):disableBodyScroll(targetElement, {reserveScrollBarGap: true})
    }

    return <MobileMenu menuItemsState={menuItemsState}
                       menuButtonClickHandler={menuButtonClickHandler}
                       isTabletOrMobile={isTabletOrMobile}
                       targetRef={targetRef} scrollBarWidth={scrollBarWidth} />

}
export default MobileMenuContainer