import React, {useEffect, useState} from "react";
import MenuItems from "./menu-items";

const MenuItemsContainer = (props)=>{
    useEffect(() => {
        if(props.menuItemsState) setCatalogState(true)
    }, [props.menuItemsState]);

    const [catalogState, setCatalogState] = useState(true)

    return <MenuItems menuButtonClickHandler={props.menuButtonClickHandler}
                      setCatalogState={setCatalogState}
                      catalogState={catalogState}
                      targetRef={props.targetRef} />
};

export default MenuItemsContainer