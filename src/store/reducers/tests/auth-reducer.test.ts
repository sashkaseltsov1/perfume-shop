import AuthReducer, {initialState, UserData} from "../auth-reducer";
import {signinActionCreator, signoutActionCreator} from "../../action-creators/auth-actions";

describe('AuthReducer',()=>{
    test('Should be authorized', ()=>{
        let newUser:UserData = {
            address:'New York City',
            exp:1234567,
            iat:1234567,
            name:'Sergey',
            role:'User',
            tokenType:'access',
            _id:'1qer134efd'
        }
        let state = AuthReducer(initialState, signinActionCreator(newUser));
        expect(state.isAuthorized).toBe(true);
    })
    test('Should be unauthorized', ()=>{
        let state = AuthReducer(initialState, signoutActionCreator());
        expect(state.isAuthorized).toBe(false);
    })
})