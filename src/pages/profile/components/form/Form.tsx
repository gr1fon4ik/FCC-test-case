import React from "react";
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom";

import styles from "./styles.module.scss"

interface FormInput {
    PhoneNumber: string;
    Email: string;
};

const maskPhone = (value) => {
    var maskedValue= "+7 (___) ___-__-__",
        i=0;
    for (i=0; value.lenght; i++) {

    }
    return maskedValue
};

function Form() {
    const { register, handleSubmit, formState: { errors }, formState } = useForm<FormInput>({
        mode: 'onBlur'
    });

    const navigate = useNavigate();

    const onSubmit = data => {
        console.log(data);
        navigate("/create",{replace:true})
    };

    console.log(errors, formState);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label >Номер телефона</label>
            <input
                type="number"
                placeholder="+7 (000) 000-00-00"
                className="f"
                

                {...register("PhoneNumber",
                { required: 'Поле не заполнено',
                valueAsNumber:true,
                 })}

                 /*onChange={(e)=>{
                    const value =e.target
                    e.target.value= maskPhone(value)
                }}*/
            />
            <label >Email</label>
            <input
                type="text"
                placeholder="Email"
                className="f"
                {...register("Email",
                {required:'Поле не заполнено'})} 
            />
            <button className='{styles.startButton}' id="button-start" type="submit" >Начать</button>
        </form>
    );
};

export default Form;