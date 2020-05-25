import authApi, {saveTokens} from "../../api/auth-api";
import jwtDecode from "jwt-decode";
import {signinActionCreator, signoutActionCreator} from "../actions/auth-actions";


/*export const signinThunkCreator = ()=>{

    return (dispatch) =>{
        userApi.signin().then((response)=>{
            console.log('ttt ', response.data.token);
            localStorage.setItem('token', response.data.token)}).catch(err=>console.log(err));

    }
}*/
export const withAuthThunk = (thunkCreator)=>{
    return (dispatch, getState)=>{

        let isAuthorized = getState().auth.isAuthorized;




        authApi.auth().then(response=>{
            let tokens = response.data;
            let decodedToken = jwtDecode(tokens.token);
            isAuthorized!==true && dispatch(signinActionCreator(decodedToken))
            thunkCreator && dispatch(thunkCreator());
        }).catch(err=>{
            isAuthorized!==false && dispatch(signoutActionCreator());
            console.log(err);
        });
    }
};