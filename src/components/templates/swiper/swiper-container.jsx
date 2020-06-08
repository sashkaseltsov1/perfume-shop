import React, {useEffect} from "react";
import SimpleSwiper from "./swiper";
import Item from "../item/item";
import initialImage from "../../../images/loading-image.jpg";
 export const getInitialItems = ()=>{
    let items=[];
    for (let i=0;i<1;i++){
        items.push({
            isInitial:true,
            fullPrise:'',
            image:initialImage,
            isDiscount:false,
            isNovelty:false,
            name:'',
            perfumeType:{type:''},
            _id:i})}
    return items;
};
const SwiperContainer = ({getItems, items})=>{
    const slides = items? items.map((item, index) => (<div key={item._id+index} className={'slide'}><Item item={item}/></div>)):
        getInitialItems().map(item => (<div key={item._id} className={'slide'}><Item item={item}/></div>));
    useEffect(()=>{
        getItems();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return(
        <SimpleSwiper slides={slides} />
    )
};
export default SwiperContainer;