import { useState } from "react"
import { useDispatch } from "react-redux";
import { createPokemon } from "../actions/actions";



export const useFormulario = (initialForm, validateForm) => {


    const [form, setForm] = useState(initialForm);
    const [errors, setErrors] = useState({});
    
    const dispatch = useDispatch();


    const handleChange = (e) => {
        
        if (e.target.name === 'type') {
            if (!form.type.includes(e.target.value)) { 
              


                let aux = [];
                aux.push(e.target.value)
                let aux2 = [...form.type, ...aux]
               
                setForm({
                    ...form,
                    type: aux2
                })

            }
        } else {

            setForm({
                ...form,
                [e.target.name]: e.target.value
            })
        }

    };
    const handleBlur = (e) => {
        handleChange(e);
        setErrors(validateForm(form));

    };
    const handleSubmit = (e) => {
        e.preventDefault();
        
       if(Object.values(errors).length >= 1){
        alert(Object.values(errors));
       }
       else if(form.name?.length === 0){
        alert('Complete los campos')
       }else{
        dispatch(createPokemon(form));
     
       alert('creado')
       setForm(initialForm)
       }
       
    };
    const handleEliminate = (eliminado) => {
        setForm({
            ...form,
            type: form.type.filter(t => t !== eliminado)
        })
    }
    return {
        form,
        errors,
        handleBlur,
        handleChange,
        handleSubmit,
        handleEliminate
    }
}
