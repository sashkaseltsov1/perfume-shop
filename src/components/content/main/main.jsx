import React from "react";
import Categories from "./categories/categories";

import TextWithLine from "../../templates/text-width-line/text-with-line";

import SimpleSwiper from "../../templates/swiper/swiper";
import arr from "../../templates/array/arr";
import Filters from "../catalog/filters/filters";
import Test from "./test";





const Main = ()=>{
    return(
        <div>
            <Test/>
            <Categories />
            <br/>
            <TextWithLine name={'Новинки'} />
            <SimpleSwiper items={arr}/>


            <br/>
            <TextWithLine name={'Скидки'} />
            <SimpleSwiper items={arr}/>
            <br/>
            <TextWithLine name={'Популярные'} />
            <SimpleSwiper items={arr}/>
        </div>

    )
};

export default Main;

