import React from "react";
import EditProduct from "./edit-product";
import {useSelector} from "react-redux";
import AccessError from "../../templates/private-routes/access-error";


const EditProductContainer = ()=>{
    const role = useSelector(state=>state.auth.role);
    return role==='Admin'? <EditProduct/>:<AccessError/>
};

export default EditProductContainer;