import {ProductItem} from "./product";

export interface Order {
    address?: string,
    createdAt: string
    state: string
    totalPrise: number
    _id: string
}
export interface OrderWithFullInfo extends Order{
    deliveryType:string
    history:{
        date:string
        state:string
        _id:string
    }
    paymentType:string
    products:Array<ProductItem>
    updatedAt:string
    user:string
}