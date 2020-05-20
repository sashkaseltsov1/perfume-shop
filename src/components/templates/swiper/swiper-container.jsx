import React, {useEffect} from "react";
import SimpleSwiper from "./swiper";

const SwiperContainer = (props)=>{

    useEffect(()=>{
        props.getItems();
        console.log('ssss')
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return(
        <SimpleSwiper items={props.items} />
    )
};
export default SwiperContainer;