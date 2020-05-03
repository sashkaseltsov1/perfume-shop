import React from "react";
import Categories from "./categories/categories";
import alive from "../../../images/items/alive.jpg";
import lacoste from "../../../images/items/lacoste.jpg";
import amber from "../../../images/items/amber.jpg";
import varvatos from "../../../images/items/varvatos.jpg";
import TextWithLine from "../../templates/text-width-line/text-with-line";
import styles from './main.module.css'
import Item from "../../templates/item/item";
import SimpleSwiper from "../../templates/swiper/swiper";




const arr=[
    {
        id:1,
        title: 'Hugo Boss Alive Eau de Parfum',
        description:'Парфюмерная вода',
        img:alive,
        cost:'3 956 руб',
        isNew:false,
        isDiscount:true,
    },

    {
        id:2,
        title: 'Lacoste L\'Homme Lacoste Timeless Eau de Toilette',
        description:'Туалетная вода',
        img:lacoste,
        cost:'4 200 руб',
        isNew:true,
        isDiscount:true,
    },
    {
        id:3,
        title: 'DS&Durga Amber Teutonic',
        description:'Парфюмерная вода',
        img:amber,
        cost:'13 520 руб',
        isNew:true,
        isDiscount:false,
    },
    {
        id:4,
        title: 'John Varvatos Artisan Eau De Toilette Spray',
        description:'Туалетная вода',
        img:varvatos,
        cost:'4 548 руб',
        isNew:false,
        isDiscount:true,
    },
    {
        id:5,
        title: 'Hugo Boss Alive Eau de Parfum',
        description:'Парфюмерная вода',
        img:alive,
        cost:'3 956 руб',
        isNew:false,
        isDiscount:true,
    },

    {
        id:6,
        title: 'Lacoste L\'Homme Lacoste Timeless Eau de Toilette',
        description:'Туалетная вода',
        img:lacoste,
        cost:'4 200 руб',
        isNew:true,
        isDiscount:true,
    },
    {
        id:7,
        title: 'DS&Durga Amber Teutonic',
        description:'Парфюмерная вода',
        img:amber,
        cost:'13 520 руб',
        isNew:false,
        isDiscount:false,
    },
    {
        id:8,
        title: 'John Varvatos Artisan Eau De Toilette Spray',
        description:'Туалетная вода',
        img:varvatos,
        cost:'4 548 руб',
        isNew:true,
        isDiscount:true,
    },

];

const Main = ()=>{
    return(
        <div>
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
            <div className={styles.grid}>
                {arr.map(item=>(<Item item={item}/>))}
            </div>
        </div>

    )
};

export default Main;

