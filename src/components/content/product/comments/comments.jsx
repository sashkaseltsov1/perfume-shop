import React from "react";
import styles from './comments.module.css';
import star from '../../../../images/star.svg';

const Comments = ({comments})=>{

    return(
        <div className={styles.comments}>
            {comments?.length>0 && comments.map(comment=>{
                let stars=[];
                if(comment){
                    let starCount = Math.round(comment.stars);
                    for (let i=0;i<starCount;i++) stars.push(i);
                }
                return <div className={styles.comment} key={comment._id}>
                <div className={styles.description}>
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
                </div>
                <div>
                    {comment.message}
                </div>
            </div>})}
        </div>
    )
};

export default Comments;
