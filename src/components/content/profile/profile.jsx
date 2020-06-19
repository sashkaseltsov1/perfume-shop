import React, {useState} from "react";
import Orders from "./orders/orders";
import ReadProfile from "./read-profile/read-profile";
import EditProfile from "./edit-profile/edit-profile";
import styles from "./profile.module.css";
import {signoutThunkCreator} from "../../../store/thunk-creators/auth-thunks";
import {useDispatch} from "react-redux";
import Button from "../../templates/button/button";
import TextWithLine from "../../templates/text-with-line/text-with-line";
import {NavLink} from "react-router-dom";



const Profile = (props)=>{
    const [isEditing, setState] = useState(true);
    const dispatch = useDispatch();
    return (
        <div >
            <div className={styles.button}>
                <Button title={'Выйти'} callback={()=>{
                    dispatch(signoutThunkCreator());
                }} style={{
                    backgroundColor:'#c12020',
                    borderRadius:'2px',
                }}/>
            </div>
            <fieldset className={styles.profile}>
                <legend className={styles.legend}><h3>Профиль</h3></legend>
                {isEditing?<ReadProfile user={props.profile.user}
                                    error={props.profile.error}
                                    setState={setState}/>:
                                    <EditProfile user={props.profile.user}
                                                 setState={setState}/>}
            </fieldset>
            {props.profile.user?.role==='Admin' && <div>
                <TextWithLine name={'Администрирование'}/>
                <div>
                    <NavLink to={'/shop/create-product'} >Добавить продукт</NavLink>
                </div>
                <div>
                    <NavLink to={'/shop/edit-filter/gender'} >Добавить новый пол</NavLink>
                </div>
                <div>
                    <NavLink to={'/shop/edit-filter/brand'} >Добавить новый брэнд</NavLink>
                </div>
                <div>
                    <NavLink to={'/shop/edit-filter/fragrance'} >Добавить новый аромат</NavLink>
                </div>
                <div>
                    <NavLink to={'/shop/edit-filter/perfumeType'} >Добавить новый тип парфюма</NavLink>
                </div>
            </div>}
            <Orders user={props.profile.user}/>

        </div>
    )
};
export default Profile;