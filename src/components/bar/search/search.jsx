import React, {useState} from "react";
import styles from './search.module.css';
import {connect} from "react-redux";
import {
    filterThunkCreator,
    setSearchFilterThunkCreator
} from "../../../store/thunks/filter-thunks";
import {useHistory} from 'react-router-dom';

const Search = (props)=>{
    const history = useHistory();
    const findHandler = ()=>{
        if (history.location.pathname==='/shop/catalog'){
            props.filterThunkCreator()
        }else{
            history.push('/shop/catalog?find='+props.search)
        }
    };
    const handleKeyPress = (event)=> {
        if(event.key === 'Enter') findHandler();
    };
    return (
        <div className={styles.search}>
            <input placeholder='Поиск по каталогу...' autoComplete='off' type='text' className={styles.input}
                   onKeyPress={handleKeyPress}
                   value={props.search}
                   onChange={(e)=>props.setSearchFilterThunkCreator(e.target.value)}/>
            <div className={styles.button} onClick={findHandler} >Поиск</div>
        </div>
    )
};

export default connect(state=>({search:state.filters.search}),
    {setSearchFilterThunkCreator, filterThunkCreator})(Search);