import React from 'react';
import Swiper from 'react-id-swiper';
import './swiper.css';
import 'swiper/css/swiper.css';
import arrow from "../../../images/slider-arrow.svg";
import Item from "../item/item";


const SimpleSwiper = (props) => {
    const params = {

        spaceBetween: 20,
        breakpoints: {
            750: {
                slidesPerView: 4,
            },
        },
        observer: true,
        slidesPerView: 2,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        },
        renderPrevButton: () => <img src={arrow} alt={arrow} className="swiper-button-prev"/>,
        renderNextButton: () => <img src={arrow} alt={arrow} className="swiper-button-next"/>,
    };
    const slides = props.items.map(item => (<div key={item._id} className={'slide'}><Item item={item}/></div>));
    return (
        <Swiper {...params} >
            {slides}
        </Swiper>
    )
};

export default SimpleSwiper;

