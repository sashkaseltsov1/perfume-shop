import {FilterOption} from "./filters";

interface Item {
    fullPrise: number
    image?: string
    name:string
    _id: string
    perfumeType:Omit<FilterOption, 'state'>
}

export interface ProductCartItem extends Item{
    count: number,
}
export interface ProductItem extends Item{
    isDiscount:boolean
    isNovelty:boolean
}
export interface ProductWithFullInfo extends ProductItem,ProductCartItem{
    description?:string
    amount:number
    brand:Omit<FilterOption, 'state'>
    gender:Omit<FilterOption, 'state'>
    fragrance:Array<Omit<FilterOption, 'state'>>
    commentsCount:number
    comments:Array<Comment>
}
export interface Comment {
    _id:string
    stars:number
    message:string
    username:string
    createdAt:string
    updatedAt:string
    isRemoved:boolean
}

