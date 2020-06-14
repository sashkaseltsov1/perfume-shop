
import React from "react";

const Checkboxes = ({category, title, callback})=>{

    return (
        <div>
            <div style={{
                color: '#4949e7',
                marginTop: '20px',
                marginBottom: '5px'
            }}>{title}:</div>
            <div>
                {category.map((option) => {
                    return <div key={option._id}>
                        <label>
                            <input type="checkbox"
                                   value={option.state}
                                   checked={option.state}
                                   onChange={()=>callback(option)}
                            />
                            {option.type}
                        </label>
                    </div>
                })}
            </div>
        </div>

    )
};
export default Checkboxes;