import {Order} from "./order";

export interface User{
    address?:string
    email:string
    lastname:string
    name:string
    orders:Array<Order>
    phone?:string
    role?:'Admin'|'User'
}