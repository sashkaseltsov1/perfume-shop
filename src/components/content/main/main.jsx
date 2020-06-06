import React, {useEffect} from "react";
import Categories from "./categories/categories";
import TextWithLine from "../../templates/text-width-line/text-with-line";
import {connect, useDispatch} from "react-redux";
import SwiperContainer from "../../templates/swiper/swiper-container";
import {
    getDiscountProductsThunkCreator,
    getNoveltyProductsThunkCreator, setInitialThunkCreator
} from "../../../store/thunks/main-page-thunks";

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

