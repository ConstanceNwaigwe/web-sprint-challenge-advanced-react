// write your custom hook here to control your checkout form
import { useState } from "react";

const useForm = (initialValues) => {
    const [values, setValues] = useState(initialValues);
    
    const handleChanges = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.values,
        })
    }
    
    return [values, handleChanges];
}

export default useForm;