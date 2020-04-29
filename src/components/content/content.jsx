import React from 'react'
import wrap from '../wrapper.module.css'
import Categories from "./categories/categories";

const Content = ()=>{
    return <div className={wrap.wrapper}>
        <Categories/>
    </div>
}

export default Content