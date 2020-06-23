import React, {useEffect} from "react";
import TextWithLine from "../../templates/text-with-line/text-with-line";
import {connect, useDispatch} from "react-redux";
import SwiperContainer from "../../templates/swiper/swiper-container";
import {
    getDiscountProductsThunkCreator,
    getNoveltyProductsThunkCreator
} from "../../../store/thunk-creators/main-page-thunks";
import config from "../../../config/config";
import MainBanner from "../../templates/main-banner/main-banner";
import SimpleSwiper from "../../templates/swiper/swiper";
import CategoriesContainer from "./categories/categories-container";
import {setInitialActionCreator} from "../../../store/action-creators/main-page-actions";
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
        return ()=>dispatch(setInitialActionCreator());
        //eslint-disable-next-line
    },[]);
    let Novelty = connect((state)=>({items:state.mainPage.noveltyProducts}),
        {getItems:getNoveltyProductsThunkCreator})(SwiperContainer);
    let Discount = connect((state)=>({items:state.mainPage.discountProducts}),
        {getItems:getDiscountProductsThunkCreator})(SwiperContainer);
    return(
        <div >
            <div style={{marginTop:'20px'}}>
                <SimpleSwiper slides={items} portion={1} space={1} />
            </div>
            <CategoriesContainer />

            <br/>
            <TextWithLine name={'Новинки'} />
            <Novelty/>
            <br/>
            <TextWithLine name={'Скидки'} />
            <Discount />
            <br/>
            <div style={{fontSize:'small', color:'#9a9a9a'}}>
                Ресурс находится в разработке и представляет собой демонстрационную версию. Проект не используется
                в коммерческих целях, не интегрирован с платежными системами и API служб доставки. При использовании
                форм регистрации не сообщайте данному ресурсу критически важные данные: личный номер телефона, e-mail,
                адрес проживания.
            </div>
        </div>
    )
};

export default Main;

