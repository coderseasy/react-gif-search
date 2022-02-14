import { useState } from "react";
import PropTypes from 'prop-types';

const Add=(props)=> {
    const [value, setValue] = useState("");
    const valueChange=(e)=>{
        setValue(e.target.value)
    }
    const onSubmit=(e)=>{
        e.preventDefault()
        if(value.length > 2){
            props.setCategories( cats => [...cats, value]);
            setValue('');
        }
    }
    return (
        <>
            <form onSubmit={onSubmit}>
                <input type="text" className="form-control form-control-sm" value={value} onChange={valueChange} placeholder="nombre de categoria"/>
            </form> 
        </>
    );
}
  
Add.propTypes={
    setCategories: PropTypes.func.isRequired
}

export default Add;