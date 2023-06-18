import React from "react";
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom";

import styles from "./styles.module.scss"


interface FormInput {
    PhoneNumber: string;
    Email: string;
};

const maskPhone = (value) => {
    var maskedValue = "+7 (___) ___-__-__",
        i = 0;
    for (i = 0; value.lenght; i++) {

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
        navigate("/create", { replace: true })
    };

    console.log(errors, formState);

    return (
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.inputMaster}>
                <label className={styles.label}>Номер телефона</label>
                <input
                    type="number"
                    placeholder="+7 (000) 000-00-00"
                    className={styles.inputArea}


                    {...register("PhoneNumber",
                        {
                            required: 'Поле не заполнено',
                            valueAsNumber: true,
                        })}

                /*onChange={(e)=>{
                   const value =e.target
                   e.target.value= maskPhone(value)
               }}*/
                />
            </div>
            <div className={styles.inputMaster}>
                <label className={styles.label}>Email</label>
                <input
                    type="text"
                    placeholder="Email"
                    className={styles.inputArea}
                    {...register("Email",
                        { required: 'Поле не заполнено' })}
                />
            </div>
            <button className={styles.startButton} id="button-start" type="submit" >Начать</button>
        </form>
    );
};

export default Form;