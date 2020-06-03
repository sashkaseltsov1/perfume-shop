import React from "react";
import styles from "./read-profile.module.css";
import edit from "../../../../images/edit.svg";


const ReadProfile = ({user, error, setState})=>{
    return(
        <div>
            {error &&
            <div className={styles.error}><span >Произошла ошибка!</span></div>
            }
            <div className={styles.profile}>
                <span>Имя:</span><div className={styles.boldText}>{user?.name}</div>
                <div className={styles.edit} onClick={()=>setState(false)}>
                    <img src={edit} alt={edit}/>
                </div>
                <span>Фамилия:</span><div className={styles.boldText}>{user?.lastname}</div>
                <span>E-mail:</span><div className={styles.email}>{user?.email}</div>
                <span>Телефон:</span><div>{user?.phone}</div>
                <span>Адрес:</span><div>{user?.address}</div>
                <span>Роль:</span><div>{user?.role}</div>
            </div>
        </div>
    )
};

export default ReadProfile;