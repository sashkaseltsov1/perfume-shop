import React, {useEffect, useRef, useState} from "react";
import styles from './categories.module.css'
import nicheImg from '../../../images/niche-pefume.jpg'
import menImg from '../../../images/men-perfume.jpg'
import womenImg from '../../../images/women-perfume.jpg'
import allImg from '../../../images/all.jpg'
import CategoryButton from "./categoryButton";
import TextWithLine from "../../templates/text-width-line/text-with-line";
import arrow from '../../../images/slider-arrow.svg'
import {useMediaQuery} from "react-responsive";
import smoothscroll from 'smoothscroll-polyfill';
import alive from '../../../images/items/alive.jpg'
import amber from '../../../images/items/amber.jpg'
import lacoste from '../../../images/items/lacoste.jpg'
import varvatos from '../../../images/items/varvatos.jpg'

import newItem from '../../../images/offer-items/new.svg'
import discount from '../../../images/offer-items/discount.svg'
const Categories = ()=>{

    const arr=[
        {
            title: 'Hugo Boss Alifum333',
            description:'Парфюмерная вода',
            img:alive,
            cost:'3956 руб',
            isNew:false,
            isDiscount:true,
        },

        {
            title: 'Hugo Boss Alive Eau de ParfumHugo Boss Alive Eau de ParfumHugo Boss Alive Eau de Parfum',
            description:'Парфюмерная вода',
            img:alive,
            cost:'3956 руб',
            isNew:true,
            isDiscount:true,
        },
        {
            title: '222',
            description:'Парфюмерная вода',
            img:alive,
            cost:'3956 руб',
            isNew:true,
            isDiscount:false,
        },
        {
            title: 'Hugo Boss Alifum333',
            description:'Парфюмерная вода',
            img:alive,
            cost:'3956 руб',
            isNew:false,
            isDiscount:true,
        },
        {
            title: '4',
            description:'Парфюмерная вода',
            img:alive,
            cost:'3956 руб',
            isNew:false,
            isDiscount:true,
        },
        {
            title: '5',
            description:'Парфюмерная вода',
            img:alive,
            cost:'3956 руб',
            isNew:false,
            isDiscount:true,
        },
        {
            title: '6',
            description:'Парфюмерная вода',
            img:alive,
            cost:'3956 руб',
            isNew:false,
            isDiscount:true,
        },
        {
            title: 'Hugo Boss Alive Eau de ParfumHugo Boss Alive Eau de ParfumHugo Boss Alive Eau de Parfum',
            description:'Парфюмерная вода',
            img:alive,
            cost:'3956 руб',
            isNew:true,
            isDiscount:true,
        },
        {
            title: '222',
            description:'Парфюмерная вода',
            img:alive,
            cost:'3956 руб',
            isNew:true,
            isDiscount:false,
        },




    ];
    return(
        <div>
            <div className={styles.title}>
                <TextWithLine name={'Категории'} />
            </div>
            <div className={styles.gridContainer} >
                <CategoryButton image={allImg} name={'Все'} bgColor={'#161616'} />
                <CategoryButton image={menImg} name={'Для мужчин'} bgColor={'#6495ed'} />
                <CategoryButton image={womenImg} name={'Для женщин'} bgColor={'#e7a9bc'} />
                <CategoryButton image={nicheImg} name={'Ниша'} bgColor={'#9593d9'} />
            </div>


            <ItemSlider items={arr}/>

        </div>

    )
}
const ItemSlider = (props)=>{
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 750px)' },undefined, ()=>handleMediaQueryChange());

    const setItemsCount=()=>{
        let portion=isTabletOrMobile? 2:4;
        return props.items.length<portion? portion:props.items.length;
    };

    let itemsCount = setItemsCount();

    const [scrollBarWidth, setScrollBarWidth] = useState({style: {'--scroll-bar-width': 0}});
    useEffect(()=>{
        smoothscroll.polyfill();
        let scrollWidth = mainRef.current.clientHeight - targetRef.current.clientHeight;

         setScrollBarWidth({style: {'--scroll-bar-width': scrollWidth+'px'}})

    }, []);
    const handleMediaQueryChange = ()=>{
        itemsCount = setItemsCount();
    };
    const mainRef = useRef();
    const targetRef = useRef();

    const scrollHandle=(isScrollRight)=>{

        let scrollWidth = targetRef.current.scrollWidth+20;
        let offsetX = Math.floor(scrollWidth/itemsCount);
        let position = targetRef.current.scrollLeft;

        const scrollLeft = ()=>{
            let item=Math.floor(position/offsetX);
            if(item>0)
            {
                let middleValue = targetRef.current.children[0].children[item]?.offsetLeft+offsetX/2;
                item = middleValue>=position?item-1: item;
                let offsetLeft = targetRef.current.children[0].children[item]?.offsetLeft;
                targetRef.current.scrollTo({top: 0,left: offsetLeft,behavior: 'smooth'});
            }else
            {
                targetRef.current.scrollLeft=0;
                targetRef.current.scrollTo({top: 0,left: 0,behavior: 'smooth'});
            }
        };

        const scrollRight = ()=>{
            let newPosition = (position%offsetX)?Math.ceil(position/offsetX):position/offsetX+1;
            let offsetLeft = targetRef.current.children[0].children[newPosition]?.offsetLeft;
            targetRef.current.scrollTo({top: 0,left: offsetLeft,behavior: 'smooth'});
        };
        isScrollRight? scrollRight():scrollLeft();
    };


    return(
        <div className={styles.main} ref={mainRef} >
            <div className={styles.hideScroll} style={scrollBarWidth.style}></div>
            <div className={styles.arrowLeft} onClick={()=>scrollHandle(false)}><img src={arrow} alt={arrow}/></div>
            <div className={styles.arrowRight} onClick={()=>scrollHandle(true)}><img src={arrow} alt={arrow} /></div>
            <div className={styles.wrapper} ref={targetRef} >


                <div  className={styles.items} style={{'--item-count':itemsCount}} >
                    {props.items.map(item=>
                        <div key={item.title} >
                            <div >
                                <div className={styles.offers}>
                                    {item.isNew && <img src={newItem} alt={newItem} />}
                                    {item.isDiscount && <img src={discount} alt={discount} />}
                                </div>
                                <div className={styles.itemImg}>
                                    <img src={item.img} alt={item.img}/>
                                </div>
                                <div className={styles.itemTitle}>
                                    <span>{item.title}</span>
                                </div>
                                <div className={styles.itemDescription}>
                                    {item.description}
                                </div>
                                <div className={styles.itemCost}>
                                    {item.cost}
                                </div>
                            </div>
                        </div>)}
                </div>
            </div>
        </div>


    )
};


export default Categories