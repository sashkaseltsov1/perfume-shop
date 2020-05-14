const axios = require('axios');
const fetchPosts = ()=>{
    return axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10');
}
export function useResource() {
    return{
        posts:wrapPromise(fetchPosts())
    }
}


const TEST_ACTION = 'TEST_ACTION';

const initial = {

}

const TestReducer = (state=initial, action)=>{
    switch (action.type) {
        case TEST_ACTION:
            return {...action.state}
        default:
            return state;
    }
};
export const ac = (state)=>{
    return {
        type:TEST_ACTION,
        state:state
    }
};
const wrapPromise = (promise)=>{
    let status='pending';
    let result;
    const suspender=promise.then(r=>{
        result=r;
        status='success'
    }, e=>{
        result=e;
        status='error'
    })

    return{
        read(){
            if(status==='pending') throw suspender; else
                if(status==='error') throw result; else
                    if(status==='success') get(result)
        }
    }
}

export const get = (state)=>{
    return (dispatch)=>{
        dispatch(ac(state))
    }
};


export default TestReducer;