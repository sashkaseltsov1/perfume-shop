import {useState} from "react";

const usePreventRefetchData = (time, func)=>{
    const [timeoutId, setTimeoutId] = useState(undefined);
    return (params)=>{
        clearTimeout(timeoutId);
        let id = setTimeout(()=>{
            func(params);
        }, time);
        setTimeoutId(id);
    }
};

export default usePreventRefetchData;