import CartReducer, {Cart, initialState} from "../cart-reducer";
import {setCartActionCreator} from "../../action-creators/cart-actions";

describe('CartReducer',()=>{
    test('Cart should be initialized',()=>{
        let cart:Cart = {
            products:[
                {
                    _id:'1',
                    count:2,
                    fullPrise:6000,
                    name:'Perfume name',
                    perfumeType:{
                        _id:'ade2e1',
                        type:'Eau de toilette'
                    },
                    image:'Some image'
                }
            ],
            totalCount:2,
            totalPrise:12000
        }
        let newCart = CartReducer(initialState, setCartActionCreator(cart))
        expect(newCart).toStrictEqual(cart)
    })
})