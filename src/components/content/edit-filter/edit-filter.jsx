import React, {useState} from "react";
import styles from './edit-filter.module.css';
import Button from "../../templates/button/button";
import close from '../../../images/close.svg';
const EditFilter = (props)=>{
    const [text, setText] = useState('');
    return(
        <div className={styles.filter}>
            <div><span>Категория:</span> <span>{props.category}</span></div>
            <div><span>Название:</span> <span>{props.name}</span></div>
            <div >
                {props.items.map(item=>{
                    return <div key={item._id} className={styles.option}
                                onClick={()=>props.removeFilterThunkCreator(props.match.params.category,item._id)}>
                        <div className={styles.title}>{item.type}</div>
                        <div className={styles.remove}>
                            <img src={close} alt={'close'}/>
                        </div>
                    </div>
                })}
                <div className={styles.input}>
                    <input type={'text'} placeholder={'Введите название...'} value={text} onChange={e=>{
                        setText(e.target.value);
                    }}/>
                    <Button title={'Добавить'}
                            style={{height:'100%', width:'100%'}}
                            callback={()=>{
                                let newOption = text;
                                setText('');
                                props.addFilterThunkCreator(props.match.params.category,newOption)}}/>
                </div>
            </div>
        </div>
    )
};

export default EditFilter;