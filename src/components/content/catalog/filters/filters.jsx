import React, {useEffect, useRef} from "react";
import styles from './filters.module.css'
import close from '../../../../images/close.svg'
import cn from 'classnames'
import {disableBodyScroll, enableBodyScroll} from "body-scroll-lock";
import {useMediaQuery} from "react-responsive";
import Filter from "./filter/filter";
const arr=[
    {
        title:'Особые предложения',
        options:[
            {
                title:'Новинки',
                state:true
            },
            {
                title:'Скидки',
                state:false
            },
        ]
    },
    {
        title:'Наличие товаров',
        options:[
            {
                title:'Доставка',
                state:true
            },
            {
                title:'Самовывоз',
                state:false
            },
        ]
    },
    {
        title:'Аромат',
        options:[
            {
                title:'Цветочные фруктовые',
                state:false
            },
            {
                title:'Древесные пряные',
                state:false
            },
            {
                title:'Пудровые',
                state:false
            },
            {
                title:'Восточные',
                state:false
            },
            {
                title:'Удовые',
                state:false
            },
            {
                title:'Кожанные',
                state:false
            },
            {
                title:'Амбровые',
                state:true
            },
        ]
    },
    {
        title:'Для кого',
        options:[
            {
                title:'Мужские',
                state:false
            },
            {
                title:'Женские',
                state:false
            },
            {
                title:'Нишевые',
                state:false
            },
        ]
    },
    {
        title:'Тип парфюма',
        options:[
            {
                title:'Парфюмерная вода',
                state:false
            },
            {
                title:'Туалетная вода',
                state:false
            },
            {
                title:'Духи',
                state:false
            },
            {
                title:'Одеколон',
                state:false
            },
        ]
    },
    {
        title:'Бренды',
        options:[
            {
                title:'Channel',
                state:false
            },
            {
                title:'Armani',
                state:false
            },
            {
                title:'Tom ford',
                state:false
            },
            {
                title:'Iv sent Lourent',
                state:true
            },
        ]
    },
];

const Filters = (props)=>{


    const  handleMediaQueryChange  = () => {!isTabletOrMobile && props.setFilterState(true)};

    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 750px)' },undefined, handleMediaQueryChange);

    const targetRef = useRef();

    const getScrollbarWidth = ()=> {
        return window.innerWidth - document.documentElement.clientWidth;
    };

    useEffect(()=>{
        if(!props.filterState) disableBodyScroll(targetRef.current, {reserveScrollBarGap: true});
        else enableBodyScroll(targetRef.current);
    }, [props.filterState]);

    return (
        <div className={cn(styles.filters, (isTabletOrMobile && props.filterState &&  styles.hideFilters))}
             ref={targetRef}
             style={{'--scroll-bar-width': getScrollbarWidth()+'px'}}>
            <div ><img src={close} alt={close} onClick={()=>props.setFilterState(true)}/></div>
            {
                arr.map(item=><Filter item={item} key={item.title}/>)
            }
            <div className={styles.filterButton} onClick={()=>{}}>Фильтровать</div>
            <div className={styles.padding}/>
        </div>
    )
};

export default Filters;