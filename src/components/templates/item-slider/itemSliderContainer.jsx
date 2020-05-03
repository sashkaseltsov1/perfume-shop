import {useMediaQuery} from "react-responsive";
import React, {useEffect, useRef, useState} from "react";
import smoothscroll from "smoothscroll-polyfill";
import ItemSlider from "./itemSlider";

const ItemSliderContainer = (props)=>{
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 750px)' },undefined, ()=>handleMediaQueryChange());

    const setItemsCount=()=>{
        let portion=isTabletOrMobile? 2:4;
        return props.items.length<portion? portion:props.items.length;
    };

    let itemsCount = setItemsCount();

    const [scrollBarWidth, setScrollBarWidth] = useState({style: {'--scroll-bar-width': 0}});
    useEffect(()=>{
        smoothscroll.polyfill();
        let scrollWidth = mainRef.current.clientHeight - targetRef.current.clientHeight;
        setScrollBarWidth({style: {'--scroll-bar-width': scrollWidth+'px'}})
    }, []);
    const handleMediaQueryChange = ()=>{
        itemsCount = setItemsCount();
    };
    const mainRef = useRef();
    const targetRef = useRef();

    const scrollHandle=(isScrollRight)=>{

        let scrollWidth = targetRef.current.scrollWidth+20;
        let offsetX = Math.floor(scrollWidth/itemsCount);
        let position = targetRef.current.scrollLeft;

        const scrollLeft = ()=>{
            let item=Math.floor(position/offsetX);
            if(item>0)
            {
                let middleValue = targetRef.current.children[0].children[item]?.offsetLeft+offsetX/2;
                item = middleValue>=position?item-1: item;
                let offsetLeft = targetRef.current.children[0].children[item]?.offsetLeft;
                targetRef.current.scrollTo({top: 0,left: offsetLeft,behavior: 'smooth'});
            }else
            {
                targetRef.current.scrollLeft=0;
                targetRef.current.scrollTo({top: 0,left: 0,behavior: 'smooth'});
            }
        };

        const scrollRight = ()=>{
            let newPosition = (position%offsetX)?Math.ceil(position/offsetX):position/offsetX+1;
            let offsetLeft = targetRef.current.children[0].children[newPosition]?.offsetLeft;
            targetRef.current.scrollTo({top: 0,left: offsetLeft,behavior: 'smooth'});
        };
        isScrollRight? scrollRight():scrollLeft();
    };

    return (<ItemSlider mainRef={mainRef}
                    scrollBarWidth={scrollBarWidth}
                    scrollHandle={scrollHandle}
                    targetRef={targetRef}
                    itemsCount={itemsCount}
                    items={props.items}/> )
};
export default ItemSliderContainer;