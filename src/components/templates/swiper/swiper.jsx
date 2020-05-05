import React from 'react';
import Swiper from 'react-id-swiper';
import './swiper.css';
import 'swiper/css/swiper.css';
import Item from "../item/item";
import arrow from "../../../images/slider-arrow.svg";

const SimpleSwiper = (props) => {

    const params = {

        spaceBetween: 20,
        breakpoints: {
            750: {
                slidesPerView: 4,
            },
        },
        slidesPerView: 2,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        },
        renderPrevButton: () => <img src={arrow} alt={arrow} className="swiper-button-prev"/>,
        renderNextButton: () => <img src={arrow} alt={arrow} className="swiper-button-next"/>,
    };

    return (
        <Swiper {...params} >
            {props.items.map(item => (<div><Item item={item}/></div>))}
        </Swiper>
    )
};

export default SimpleSwiper;

