interface Item {
    fullPrise: number
    image?: string
    name:string
    _id: string
    perfumeType:{
        _id:string
        type:string
    }
}

export interface ProductCartItem extends Item{
    count: number,
}
export interface ProductItem extends Item{
    isDiscount:boolean
    isNovelty:boolean
}