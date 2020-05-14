import React, {Suspense, useEffect, useRef} from "react";
import {connect} from "react-redux";
import {ac, useResource} from "../../../store/reducers/test";
import {createSelector} from "reselect";

/*const mapStateToProps = (state)=>{
    return {
        fil1:state.test.fil1,
        fil2:state.test.fil2,
    }
};*/



const mapStateToProps = (state)=>{
    return {
        state:state.test
    }
};
const mapDispatchToProps =(dispatch)=>{
    return{
        update:(state)=>dispatch(ac(state))
    }
}
const Posts = (props)=>{
console.log(props)
    const posts = props.resource.posts.read();

    useEffect(()=>{
        /*props.update(posts)*/
    },[])
    /*()=>props.update(props.item.id)*/
    return(
        <div >
            <h2>ssss</h2>
            {/*{props.state.data.map(item=><div>{item.title}</div>)}*/}
        </div>
    )
}
const Test = (props)=>{
    const resource = useResource()
    const Post = connect(mapStateToProps, mapDispatchToProps)(Posts)
    return(
     <div>
         Main
         <Suspense fallback={<div>Loading...</div>}>
             <Post resource={resource} />
         </Suspense>

     </div>
    )
};

export default Test;

