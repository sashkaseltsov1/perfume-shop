import React from "react";
import styles from './search.module.css';
import {connect} from "react-redux";
import {filterThunkCreator} from "../../../store/thunk-creators/filter-thunks";
import {useHistory} from 'react-router-dom';
import Button from "../../templates/button/button";
import {setSearchFilterActionCreator} from "../../../store/action-creators/filter-actions";

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
                   value={props.search|| ''}
                   onChange={(e)=>props.setSearchFilterActionCreator(e.target.value)}/>
                   <Button title={'Поиск'} callback={findHandler} style={{
                       backgroundColor:'#161515',
                       width:'70px',
                       height:'32px'
                   }}/>
        </div>
    )
};

export default connect(state=>({search:state.filters.search}),
    {setSearchFilterActionCreator, filterThunkCreator})(Search);