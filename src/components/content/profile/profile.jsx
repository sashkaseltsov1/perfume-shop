import React from "react";
import styles from './profile.module.css'
import edit from '../../../images/edit.svg'

const Profile = (props)=>{
    console.log(props)
    return (
        <fieldset className={styles.main}>
            <legend className={styles.legend}><h3>Профиль</h3></legend>
            {props.profile.error &&
                <div className={styles.error}><span >Произошла ошибка!</span></div>
            }
             <div className={styles.profile}>
                 <span>Имя:</span><div>{props.profile.user?.name}</div><div className={styles.edit}><img src={edit} alt={edit}/></div>
                <span>Фамилия:</span><div>{props.profile.user?.lastname}</div>
                <span>E-mail:</span><div>{props.profile.user?.email}</div>
                <span>Телефон:</span><div>{props.profile.user?.phone}</div>
                <span>Адрес:</span><div>{props.profile.user?.address}</div>
                <span>Роль:</span><div>{props.profile.user?.role}</div>
            </div>
        </fieldset>
    )
};
export default Profile;