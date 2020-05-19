import React from "react";
import styles from './pages.module.css'
import arrow from '../../../../images/slider-arrow.svg'
import cn from 'classnames'
import { createBrowserHistory } from "history";
const getPages = (page, count)=>{
    let pages=[];
    if(count<=5) {
        for (let i=1; i<=count;i++) pages.push(i)
    }else
    {
        if(page<=3){
            for (let i=1; i<=5;i++) pages.push(i)
        }else if (page>=count-2){
            for (let i=count-4; i<=count;i++) pages.push(i)
        }else{
            for (let i=page-2; i<=page+2;i++) pages.push(i)
        }
    }
    return pages;
};

const getQueryWithPage = (pageNumber) =>{
    let search = createBrowserHistory().location.search;
    let result = search.match(/page=[0-9]+/);
    if(result) {
        let [left, right] = search.split(result[0]);
        return left+'page='+pageNumber+right;
    }
    return search+'&page='+pageNumber;

};
const Page = (props)=>{
    return (
        <div className={cn(styles.page, props.isActive && styles.activePage)} onClick={()=>{
            !props.isActive && props.callback(getQueryWithPage(props.value))
        }}>
            <span>{props.value}</span>
        </div>
    )
};
const Arrow = (props)=>{
    return (
        <div className={styles.arrow} onClick={()=>{
            props.callback(getQueryWithPage(props.value))
        }}>
            <img src={arrow} alt={arrow}/>
        </div>
    )
};
const Pages = (props)=>{
    return (
        <div className={styles.main}>
            <div className={styles.pages}>
                {props.page-1>=1 && <Arrow value={props.page-1}
                                           callback ={props.getProductsThunkCreator}/>}
                {props.pageCount>5 &&props.page-2>1 && <Page value={1}
                                                             isActive={false}
                                                             callback ={props.getProductsThunkCreator}/>}
                {props.pageCount>5 &&props.page-2>1 && <div className={styles.etc}>...</div>}
                {getPages(props.page, props.pageCount).map(item=><Page key={item}
                                                       value={item}
                                                       isActive={item===props.page}
                                                       callback ={props.getProductsThunkCreator}/>)}
                {props.pageCount>5 && props.page+2<props.pageCount && <div className={styles.etc}>...</div>}
                {props.pageCount>5 && props.page+2<props.pageCount && <Page value={props.pageCount}
                                                                        isActive={false}
                                                                        callback ={props.getProductsThunkCreator}/>}
                {props.page+1<=props.pageCount && <Arrow value={props.page+1}
                                                         callback ={props.getProductsThunkCreator}/>}
            </div>
        </div>
    )
};

export default Pages;