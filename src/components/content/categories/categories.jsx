import React, {useRef} from "react";
import styles from './categories.module.css'
import nicheImg from '../../../images/niche-pefume.jpg'
import menImg from '../../../images/men-perfume.jpg'
import womenImg from '../../../images/women-perfume.jpg'
import allImg from '../../../images/all.jpg'
import CategoryButton from "./categoryButton";
import TextWithLine from "../../templates/text-width-line/text-with-line";
import arrow from '../../../images/arrow.png'
import {useMediaQuery} from "react-responsive";


const Categories = ()=>{

    const arr=[
        'item1',
        'item2',
        'item3',
        'item4',
        'item5',

        /*'item7',
        'item8',
        'item9',
        'item10',
        'item11',
        'item12',
        'item13',
        'item14',
        'item15',*/



    ]
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

    const handleMediaQueryChange = ()=>{
        itemsCount = setItemsCount();
    };

    const targetRef = useRef();

    const scrollHandle=(isScrollRight)=>{
        let scrollWidth = targetRef.current.scrollWidth+20;
        let offsetX = Math.floor(scrollWidth/itemsCount);
        let position = targetRef.current.scrollLeft;

        const scrollLeft = ()=>{
            let item=Math.floor(position/offsetX);
            if(item>0)
            {
                let middleValue = targetRef.current.children[0].children[item].offsetLeft+offsetX/2;
                item = middleValue>=position?item-1: item;
                let offsetLeft = targetRef.current.children[0].children[item].offsetLeft
                targetRef.current.scrollLeft=offsetLeft;
            }else
            {
                targetRef.current.scrollLeft=0;
            }
        };

        const scrollRight = ()=>{
            let newPosition = (position%offsetX)?Math.ceil(position/offsetX):position/offsetX+1;
            let offsetLeft = targetRef.current.children[0].children[newPosition].offsetLeft

            targetRef.current.scrollLeft=offsetLeft;
        };

        isScrollRight? scrollRight():scrollLeft();
    };

    return(
        <div className={styles.wrapper}>
            <div className={styles.arrowLeft} onClick={()=>scrollHandle(false)}><img src={arrow} alt={arrow}/></div>
            <div className={styles.arrowRight} onClick={()=>scrollHandle(true)}><img src={arrow} alt={arrow} /></div>
            <div className={styles.itemSlider} ref={targetRef} >
                <div  className={styles.items} style={{'--item-count':itemsCount}}>
                    {props.items.map(item=><div key={item}><div>{item}</div></div>)}
                </div>
            </div>
        </div>

    )
};

export default Categories