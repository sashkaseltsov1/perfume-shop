import React from "react";
import styles from './comments.module.css';
import star from '../../../../images/star.svg';
import {useDispatch} from "react-redux";
import {changeCommentStateActionCreator} from "../../../../store/action-creators/product-actions";


const Comments = ({comments, productId, role})=>{

    const dispatch = useDispatch();
    return(
        <div className={styles.comments}>
            {comments?.length>0 && comments.map(comment=>{
                let stars=[];
                if(comment){
                    let starCount = Math.round(comment.stars);
                    for (let i=0;i<starCount;i++) stars.push(i);
                }
                return <div className={styles.comment} key={comment._id}>
                    {role==='Admin' && comment.isRemoved===false &&
                    <div className={styles.remove} onClick={()=>{
                        dispatch(changeCommentStateActionCreator(productId, comment._id, true))
                    }}><span>Удалить</span></div>}

                    {role==='Admin' && comment.isRemoved===true &&
                    <div className={styles.remove} onClick={()=>{
                        dispatch(changeCommentStateActionCreator(productId, comment._id, false))
                    }}><span>Восстановить</span></div>}
                    {comment.isRemoved===false && <div className={styles.description}>
                        <div>
                            <span className={styles.username}>
                            {comment.username+', '}
                        </span>
                            <span className={styles.date}>
                            {new Date(comment.createdAt).toLocaleString()}
                        </span>
                        </div>
                        <div className={styles.stars}>
                            {
                                stars.map(item=><img src={star} alt={star} key={item}/>)
                            }
                        </div>
                    </div>}
                    {comment.isRemoved===false &&<div>
                        {comment.message}
                    </div>}
                    {comment.isRemoved===true &&<div>
                        Комментарий удалён...
                    </div>}
            </div>})}
        </div>
    )
};

export default Comments;
