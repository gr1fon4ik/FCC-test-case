import React, { useState } from "react";
import { useForm } from "react-hook-form"
import FormHeader from "./components/FormHeader/FormHeader.tsx";
import { useNavigate } from "react-router-dom";

import styles from "./styles.module.scss"

const state={
    step:1,
    counter:0
}

enum Gender {
    man = "man",
    woman = "woman"

}

interface FormInput {
    Nickname: string;
    Name: string;
    Surname: string;
    sex: Gender;
    //text:[string[]];
    checkbox1: boolean;
    checkbox2: boolean;
    checkbox3: boolean;
    radio1: boolean;
    radio2: boolean;
    radio3: boolean;
    about:string;
};

function BigForm() {
    const { register, handleSubmit, formState: { errors }, formState } = useForm<FormInput>({
        mode: 'onBlur'
    });

    const letterCounter=(value)=>{
        var count=value.split(" ").join("").length;
        console.log(count)
        state.counter=count;
    };
    
    const navigate = useNavigate();

    const onSubmit = data => { console.log(data); };
    console.log(errors, formState);

    const [value, setValue]=useState([""]);
    const handleAdd = () =>{
        setValue([...value,""]);
    };
    const handleChange = (onChangeValue,i) =>  {
        const inputData:string[]=[...value];
        inputData[i]=onChangeValue.target.value;
        setValue(inputData);
    };

    const hadleDelete = (i)=>{
        const deleteValue=[...value];
        deleteValue.splice(i,1);
        setValue(deleteValue);
    };

    console.log(value,"data-")

    const previousStep = ()=>{
        state.step>1 ? state.step-=1 :  navigate("/",{replace:true});
    };

    const nextStep = () => {
        state.step+=1;
    };

    if (state.step === 1) {
        return (<form onSubmit={handleSubmit(onSubmit)}>
            <FormHeader step={state.step}/>
            <label >Nickname</label>
            <input
                type="text"
                placeholder="Nickname"
                className="f"
                id="field-nickname"
                {...register("Nickname",
                    {
                        required: 'Поле не заполнено',
                        maxLength: 30
                    })}
            />
            <div>Tip</div>
            <label >Name</label>
            <input
                type="text"
                placeholder="Name"
                className="f"
                id="field-name"
                {...register("Name",
                    {
                        required: 'Поле не заполнено',
                        maxLength: 50
                    })}
            />
            <div>Tip</div>
            <label >Surname</label>
            <input
                type="text"
                placeholder="Surname"
                className="f"
                id="field-name"
                {...register("Surname",
                    {
                        required: 'Поле не заполнено',
                        maxLength: 50
                    })}
            />
            <div>Tip</div>
            <select {...register("sex")}>
                <option value="man">female</option>
                <option value="woman">male</option>
            </select>
            <button className='{styles.backButton}' id="button-back" onClick={previousStep}>Назад</button>
            <button className='{styles.nextButton}' id="button-next" onClick={nextStep} >Далее</button>
        </form>)
    } else if (state.step=== 2) {
        return (
            <form onSubmit={handleSubmit(onSubmit)}>
                <FormHeader step={state.step}/>

                {value.map((data,i) => {
                    return(
                        <div>
                            <input type="text"  onChange={e=>handleChange(e,i)} value={data} />
                            <button type="button" onClick={()=>hadleDelete(i)}>x</button>
                        </div>
                    )
                })}
                <button onClick={()=>handleAdd()}>+</button>

                <div className="{styles.checkboxGroup}">
                    <label> Checkbox group</label>
                    <input type="checkbox" {...register("checkbox1")} name="checkbox1" id="field-checkbox-group-option-1" />
                    <label htmlFor="field-checkbox-group-option-1">1</label>
                    <input type="checkbox" {...register("checkbox2")} name="checkbox2" id="field-checkbox-group-option-2" />
                    <label>2</label>
                    <input type="checkbox" {...register("checkbox3")} name="checkbox3" id="field-checkbox-group-option-3" />
                    <label>3</label>
                </div>

                <div className="{styles.radioGroup}">
                    <label >Radio group</label>
                    <input type="radio" {...register("radio1")} id="field-radio-group-option-1" name="option" value="1" />
                    <label htmlFor="field-radio-group-option-1">1</label>
                    <input type="radio" {...register("radio2")} id="field-radio-group-option-2" name="option" value="2" />
                    <label htmlFor="field-radio-group-option-2">2</label>
                    <input type="radio" {...register("radio3")} id="field-radio-group-option-3" name="option" value="3" />
                    <label htmlFor="field-radio-group-option-3">3</label>
                </div>

                <button className='{styles.backButton}' id="button-back" onClick={previousStep}>Назад</button>
                <button className='{styles.nextButton}' id="button-next" onClick={nextStep} >Далее</button>
            </form>
        )
    } else if (state.step=== 3) {
        return (
            <form onSubmit={handleSubmit(onSubmit)}>
                <FormHeader step={state.step}/>
                <label> About </label>
                <input type="textarea" id="field-about"
                        {...register("about",
                    {
                        maxLength: 200
                    })}
                    onChange={(e)=>{
                        const value =e.target.value
                        letterCounter(value)
                    }}
                    />

                <button className='{styles.backButton}' id="button-back"  onClick={previousStep}>Назад</button>
                <button className='{styles.nextButton}' id="button-send"  >Отправить</button>
            </form>
        )
    }


}

export default BigForm;