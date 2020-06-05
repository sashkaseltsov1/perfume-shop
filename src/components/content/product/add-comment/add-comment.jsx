import React from "react";
import styles from './add-comment.module.css';
import {Field, reduxForm} from "redux-form";
import {renderTextarea} from "../../authentificatin/helpers/field-with-validators";



const AddComment = (props)=>{
    return(
            <form onSubmit={props.handleSubmit(values => {
                let productId=props.match.params.id;
                props.reset();
                return props.addCommentThunkCreator(productId, values.message, values.stars)
            }
            )} className={styles.body}>
                <div className={styles.stars}>
                    <span >Рейтинг: </span>
                    <Field name="stars" component="select" >
                        <option />
                        <option value="5">5</option>
                        <option value="4">4</option>
                        <option value="3">3</option>
                        <option value="2">2</option>
                        <option value="1">1</option>
                    </Field>
                </div>
                <div >
                    <Field name="message" component={renderTextarea} type="text"
                           placeholder={'Введите комментарий...'} />
                </div>
                <button type="submit" disabled={props.submitting} className={styles.button} >
                    <span>Добавить комментарий</span>
                </button>
                {props.error && <div className={styles.error}><span >{props.error}</span></div>}
            </form>

    )
};

export default reduxForm({form: 'addComment'})(AddComment);