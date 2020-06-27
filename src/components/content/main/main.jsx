import React, {useEffect} from "react";
import TextWithLine from "../../templates/text-with-line/text-with-line";
import {connect, useDispatch} from "react-redux";
import SwiperContainer from "../../templates/swiper/swiper-container";
import MainBanner from "../../templates/main-banner/main-banner";
import SimpleSwiper from "../../templates/swiper/swiper";
import CategoriesContainer from "./categories/categories-container";
import { fetchProductsForSlidersActionCreator,
    setInitialActionCreator
} from "../../../store/action-creators/main-page-actions";
import b6 from '../../../images/banners/banner6.jpg';
import b7 from '../../../images/banners/banner7.jpg';
import b5 from '../../../images/banners/banner5.jpg';
import b3 from '../../../images/banners/banner3.jpg';

const slides = [
    {
        image:b6,
        path:'../shop/catalog'
    },
    {
        image:b7,
        path:'../shop/catalog'
    },
    {
        image:b5,
        path:'../shop/catalog'
    },
    {
        image:b3,
        path:'../shop/catalog'
    }
];
const items = slides.map(item=><div key={item.image}><MainBanner image={item.image} path={item.path}/></div>);
const Main = ()=>{
    let dispatch = useDispatch();
    useEffect(()=>{
        dispatch(fetchProductsForSlidersActionCreator());
        return ()=>dispatch(setInitialActionCreator());
        //eslint-disable-next-line
    },[]);
    let Novelty = connect((state)=>({items:state.mainPage.noveltyProducts}))(SwiperContainer);
    let Discount = connect((state)=>({items:state.mainPage.discountProducts}))(SwiperContainer);
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

