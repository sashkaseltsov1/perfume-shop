import React from "react";
import styles from './orders.module.css';
import TextWithLine from "../../../templates/text-with-line/text-with-line";
import Order from "./order/order";

const Orders = ({user})=>{
  return(
      <div>
          <TextWithLine name={'Недавние заказы'}/>
          <div className={styles.orders}>
              {user && user.orders.length<1 && <span>У вас пока нет активных заказов</span>}
              {user && user.orders.length>0 &&
              user.orders.map(order=><Order key={order._id} order={order}/>)}
          </div>
      </div>
  )
};

export default Orders;