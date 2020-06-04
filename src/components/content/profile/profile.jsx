import React, {useState} from "react";
import Orders from "./orders/orders";
import ReadProfile from "./read-profile/read-profile";
import EditProfile from "./edit-profile/edit-profile";
import styles from "./profile.module.css";
import {signoutThunkCreator} from "../../../store/thunks/auth-thunks";
import {useDispatch} from "react-redux";



const Profile = (props)=>{
    const [isEditing, setState] = useState(true);
    const dispatch = useDispatch();
    return (
        <div >
            <div className={styles.button} onClick={()=>{
                dispatch(signoutThunkCreator());
            }}>
                <span>Выйти</span>
            </div>
            <fieldset className={styles.profile}>
                <legend className={styles.legend}><h3>Профиль</h3></legend>
                {isEditing?<ReadProfile user={props.profile.user}
                                    error={props.profile.error}
                                    setState={setState}/>:
                                    <EditProfile user={props.profile.user}
                                                 setState={setState}/>}
            </fieldset>

            <Orders user={props.profile.user}/>

        </div>
    )
};
export default Profile;