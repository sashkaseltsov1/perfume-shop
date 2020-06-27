import React from "react";
import styles from './contacts.module.css';
import vk from '../../../images/contacts/vk.svg';
import inst from '../../../images/contacts/instagram.svg';
import facebook from '../../../images/contacts/facebook.svg';
import telegram from '../../../images/contacts/telegram.svg';
import twitter from '../../../images/contacts/twitter.svg';
import Image from "../../templates/image/image";

export const contacts=[
    {
        name:'vk.com/perfume_shop',
        image:vk
    },
    {
        name:'instagram.com/perfume_shop',
        image:inst
    },
    {
        name:'twitter.com/perfume_shop',
        image:twitter
    },
    {
        name:'telegram.im/perfume_shop',
        image:telegram
    },
    {
        name:'facebook.com/perfume_shop',
        image:facebook
    },
];

const Contacts = ()=>{
    return (
        <div className={styles.contacts}>
            <div className={styles.title}><h3>Мы в социальных сетях:</h3></div>
            {contacts.map(contact=><a key={contact.name} href={'/'}>
                <div className={styles.contact}>
                    <div className={styles.img}>
                        <Image image={contact.image}/>
                    </div>
                    <div className={styles.name}>
                        {contact.name}
                    </div>
                </div>
            </a>)}
        </div>
    )
};

export default Contacts;