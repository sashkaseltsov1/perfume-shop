import React from 'react';
import Swiper from 'react-id-swiper';
import './swiper.css';
import 'swiper/css/swiper.css';
import arrow from "../../../images/slider-arrow.svg";

const SimpleSwiper = ({slides, portion, space}) => {
    const params = {

        spaceBetween: space!==undefined?space:20,
        breakpoints: {
            750: {
                slidesPerView: portion||4,
            },
        },
        observer: true,
        slidesPerView: portion||2,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        },
        renderPrevButton: () => <img src={arrow} alt={arrow} className="swiper-button-prev"/>,
        renderNextButton: () => <img src={arrow} alt={arrow} className="swiper-button-next"/>,
    };
    return (
        <Swiper {...params} >
            {slides}
        </Swiper>
    )
};

export default SimpleSwiper;

