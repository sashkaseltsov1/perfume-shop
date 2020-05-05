import React, {useState} from "react";
import {useMediaQuery} from "react-responsive";

import MobileMenu from "./mobile-menu";


const MobileMenuContainer=()=>{

    const [menuItemsState, setMenuItemsState] = useState(false);

    const  handleMediaQueryChange  = () => {!isTabletOrMobile && setMenuItemsState(false)};

    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1120px)' },undefined, handleMediaQueryChange);

    const menuButtonClickHandler = ()=>{
        window.scroll(0,0);
        setMenuItemsState(!menuItemsState);
    };

    return <MobileMenu menuItemsState={menuItemsState}
                       menuButtonClickHandler={menuButtonClickHandler}
                       isTabletOrMobile={isTabletOrMobile}
                        />

}
export default MobileMenuContainer