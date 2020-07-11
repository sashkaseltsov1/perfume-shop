import CatalogReducer, {Catalog, initialState} from "../catalog-reducer";
import {
    setErrorActionCreator,
    setInitialProductsActionCreator, setLoaderActionCreator,
    setProductsActionCreator
} from "../../action-creators/catalog-actions";

describe('CatalogReducer',()=>{
    test('Set initial products',()=>{
        let newCatalog = CatalogReducer(initialState, setInitialProductsActionCreator())
        expect(newCatalog).toStrictEqual(initialState)
    })
    test('Should return state with error',()=>{
        let newCatalog = CatalogReducer(initialState, setErrorActionCreator())
        expect(newCatalog.error).toBe('some error.ts')
    })
    test('Should return state with loading',()=>{
        let newCatalog = CatalogReducer(initialState, setLoaderActionCreator(true))
        expect(newCatalog.isLoading).toBe(true)
    })
    test('Should be equal fetched products',()=>{
        let products:Catalog = {
            isLoading: false,
            count: 1,
            pageCount: 1,
            page: 1,
            error: undefined,
            products: [
                {
                    name:'Some product',
                    fullPrise:4000,
                    isDiscount:true,
                    isNovelty:false,
                    _id:'Some id',
                    perfumeType:{
                        _id:'Some id',
                        type:'Eau de Perfume'
                    },
                    isInitial:false
                }
            ]
        }
        let newCatalog = CatalogReducer(initialState, setProductsActionCreator(products))
        expect(newCatalog).toStrictEqual(products)
    })
})