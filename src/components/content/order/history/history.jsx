import React from "react";
import styles from './history.module.css';

const History = ({history})=>{
    return(
        <div className={styles.history}>

            {history && history.map(item=>(

                    <div key={item.state} className={styles.timePoint}>
                        <div className={styles.graph}>
                            <div className={styles.circle}/>
                        </div>
                        <div>
                            <div className={styles.state}>
                                {item.state}
                            </div>
                            <div className={styles.date}>
                                {new Date(item.date).toLocaleString()}
                            </div>
                        </div>


                    </div>


                )
            )}
        </div>
    )
};

export default History;