import React, {useState} from "react";
import styles from './addresses.module.css'
import cn from 'classnames'
import {Field} from "redux-form";
import renderField from "../../../authentificatin/helpers/field-with-validators";
import addressApi from "../../../../../api/address-api";
import fieldStyle from '../edit-profile.module.css'
import usePreventRefetchData from "./use-timeout";
import {change} from 'redux-form';

const AddressField = ({dispatch})=>{
    const [visibility, setVisibility] = useState(false);
    const [suggestions, setSuggestions] = useState([]);
    const getAddressesApiHandler = (query)=>{
        addressApi.getAddresses(query).then((res)=>{
            let addresses = res.data.suggestions.map(item=>item.value);
            setSuggestions(addresses);
        }).catch(()=>{
        })
    };
    const getCandidates = usePreventRefetchData(1000, getAddressesApiHandler);
    return(

        <div className={fieldStyle.field} >
            <Field name="address" component={renderField} type="text"
                   placeholder={'Введите новый адрес...'} onChange={(e)=>{
                if(e.target.value.length>1 && e.target.value.length>e.target.defaultValue.length){
                    getCandidates({'query':e.target.value, 'count':5})
                }
            }}
                    autoComplete={false}
                    onBlur={()=>setVisibility(false)}
                    onFocus={()=>setVisibility(true)}
            />
            <div className={cn(styles.addresses, visibility && styles.show)}>
                {suggestions.map(item=><div key={item} className={styles.address} onMouseDown={()=>{
                    dispatch(change('EditProfile', 'address', item))
                }}
                >
                    <div>

                    </div>
                    <div>
                        {item}
                    </div>
                </div>)}
            </div>
        </div>
    )
};

export default  AddressField;