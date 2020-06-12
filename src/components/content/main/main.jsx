import React, {useEffect} from "react";
import Categories from "./categories/categories";
import TextWithLine from "../../templates/text-with-line/text-with-line";
import {connect, useDispatch} from "react-redux";
import SwiperContainer from "../../templates/swiper/swiper-container";
import {
    getDiscountProductsThunkCreator,
    getNoveltyProductsThunkCreator, setInitialThunkCreator
} from "../../../store/thunks/main-page-thunks";
import config from "../../../config/config";
import MainBanner from "../../templates/main-banner/main-banner";
import SimpleSwiper from "../../templates/swiper/swiper";
const slides = [
    {
        image:`${config.apiUrl}banners/banner6.jpg`,
        path:'../shop/catalog'
    },
    {
        image:`${config.apiUrl}banners/banner7.jpg`,
        path:'../shop/catalog'
    },
    {
        image:`${config.apiUrl}banners/banner5.jpg`,
        path:'../shop/catalog'
    },
    {
        image:`${config.apiUrl}banners/banner3.jpg`,
        path:'../shop/catalog'
    }
];
const items = slides.map(item=><div key={item.image}><MainBanner image={item.image} path={item.path}/></div>);
const Main = ()=>{
    let dispatch = useDispatch();
    useEffect(()=>{
        return ()=>dispatch(setInitialThunkCreator());
        //eslint-disable-next-line
    },[]);
    let Novelty = connect((state)=>({items:state.mainPage.noveltyProducts}),
        {getItems:getNoveltyProductsThunkCreator})(SwiperContainer);
    let Discount = connect((state)=>({items:state.mainPage.discountProducts}),
        {getItems:getDiscountProductsThunkCreator})(SwiperContainer);
    return(
        <div>

            <Categories />
            <SimpleSwiper slides={items} portion={1} space={1}/>
            <br/>
            <TextWithLine name={'Новинки'} />
            <Novelty/>
            <br/>
            <TextWithLine name={'Скидки'} />
            <Discount />
            <br/>

        </div>
    )
};

export default Main;

