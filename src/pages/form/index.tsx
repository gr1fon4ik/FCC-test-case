import React, { useState } from "react";
import { useForm } from "react-hook-form"
import FormHeader from "./components/FormHeader/FormHeader.tsx";
import { useNavigate } from "react-router-dom";

import styles from "./styles.module.scss"
import deleteicon from "../../assets/icons/Delete.svg"
import plusicon from "../../assets/icons/Plus.svg"
import Modal from "../../components/modal/Modal.tsx";

const state = {
    step: 1
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
    about: string;
};

function BigForm() {
    const { register, handleSubmit, formState: { errors }, formState } = useForm<FormInput>({
        mode: 'onBlur'
    });

    const letterCounter = (value) => {
        var count = value.split(" ").join("").length;
        console.log(count)
        document.querySelector('output').textContent=count;//useref
    };

    const navigate = useNavigate();

    const onSubmit = data => { console.log(data); };
    console.log(errors, formState);

    const [value, setValue] = useState([""]);
    const handleAdd = () => {
        setValue([...value, ""]);
    };
    const handleChange = (onChangeValue, i) => {
        const inputData: string[] = [...value];
        inputData[i] = onChangeValue.target.value;
        setValue(inputData);
    };

    const hadleDelete = (i) => {
        const deleteValue = [...value];
        deleteValue.splice(i, 1);
        setValue(deleteValue);
    };

    console.log(value, "data-")

    const previousStep = () => {
        state.step > 1 ? state.step -= 1 : navigate("/", { replace: true });
    };

    const nextStep = () => {
        state.step += 1;
    };

    const [modalActive, setModalActive] = useState(true);

    const modalOpener = (fail) => {
        fail=0
        return (
            fail === 0 ?
                <Modal active={modalActive} setActive={setModalActive} fail={fail}/> :
                <Modal active={modalActive} setActive={setModalActive} fail={1}/>
        )
    }

    if (state.step === 1) {
        return (
            <form className={styles.formStep1} onSubmit={handleSubmit(onSubmit)}>
                <FormHeader step={state.step} />
                <div className={styles.inputMaster}>
                    <label className={styles.label}>Nickname</label>
                    <input
                        placeholder="Nickname"
                        className={styles.inputArea}
                        id="field-nickname"
                        {...register("Nickname",
                            {
                                required: 'Поле не заполнено',
                                maxLength: 30,
                                pattern: /[^!@#$%^&*()_]/
                            })}
                    />
                    <div className={styles.tip}>Tip</div>
                </div>


                <div className={styles.inputMaster}>
                    <label className={styles.label} >Name</label>
                    <input
                        type="text"
                        placeholder="Name"
                        className={styles.inputArea}
                        id="field-name"
                        {...register("Name",
                            {
                                required: 'Поле не заполнено',
                                maxLength: 50,
                                pattern: /[A-Za-z]/
                            })}
                    />
                    <div className={styles.tip}>Tip</div>
                </div>


                <div className={styles.inputMaster}>
                    <label className={styles.label}>Surname</label>
                    <input
                        type="text"
                        placeholder="Surname"
                        className={styles.inputArea}
                        id="field-name"
                        {...register("Surname",
                            {
                                required: 'Поле не заполнено',
                                maxLength: 50
                            })}
                    />
                    <div className={styles.tip}>Tip</div>
                </div>

                <div className={styles.selectMaster}>
                    <label className={styles.label}>Sex</label>
                    <select
                        className={styles.selectArea}
                        id="field-sex"
                        {...register("sex")}>
                        <option value="" disabled selected hidden>Не выбрано</option>
                        <option className={styles.option} value="man">female</option>
                        <option className={styles.option} value="woman">male</option>
                    </select>
                </div>

                <div className={styles.buttonBox}>
                    <button className={styles.backButton} id="button-back" onClick={previousStep}>Назад</button>
                    <button className={styles.nextButton} id="button-next" onClick={nextStep} >Далее</button>
                </div>

            </form>)
    } else if (state.step === 2) {
        return (
            <form className={styles.formStep2} onSubmit={handleSubmit(onSubmit)}>
                <FormHeader step={state.step} />
                <div className={styles.advantagesMaster}>
                    <label className={styles.label}> Advantages</label>
                    {value.map((data, i) => {
                        return (
                            <div>
                                <input className={styles.inputArea} type="text" onChange={e => handleChange(e, i)} value={data} />
                                <img className={styles.binIcon} src={deleteicon} onClick={() => hadleDelete(i)} />
                            </div>
                        )
                    })}
                    <img src={plusicon} className={styles.newAreaButton} onClick={() => handleAdd()} />
                </div>


                <div className={styles.checkboxGroup}>
                    <label className={styles.label}> Checkbox group</label>
                    <input type="checkbox" {...register("checkbox1")} name="checkbox1" id="field-checkbox-group-option-1" />
                    <label htmlFor="field-checkbox-group-option-1">1</label>
                    <input type="checkbox" {...register("checkbox2")} name="checkbox2" id="field-checkbox-group-option-2" />
                    <label htmlFor="field-checkbox-group-option-2">2</label>
                    <input type="checkbox" {...register("checkbox3")} name="checkbox3" id="field-checkbox-group-option-3" />
                    <label htmlFor="field-checkbox-group-option-3">3</label>
                </div>

                <div className={styles.radioGroup}>
                    <label className={styles.label}>Radio group</label>
                    <input type="radio" {...register("radio1")} id="field-radio-group-option-1" name="option" value="1" />
                    <label htmlFor="field-radio-group-option-1">1</label>
                    <input type="radio" {...register("radio2")} id="field-radio-group-option-2" name="option" value="2" />
                    <label htmlFor="field-radio-group-option-2">2</label>
                    <input type="radio" {...register("radio3")} id="field-radio-group-option-3" name="option" value="3" />
                    <label htmlFor="field-radio-group-option-3">3</label>
                </div>
                <div className={styles.buttonBox}>
                    <button className={styles.backButton} id="button-back" onClick={previousStep}>Назад</button>
                    <button className={styles.nextButton} id="button-next" onClick={nextStep} >Далее</button>
                </div>
            </form>
        )
    } else if (state.step === 3) {
        return (
            <form className={styles.formStep3} onSubmit={handleSubmit(onSubmit)}>
                <FormHeader step={state.step} />
                <div className={styles.aboutMaster}>
                    <label className={styles.label}> About </label>
                    <input className={styles.aboutInput} type="textarea" id="field-about" placeholder=""
                        {...register("about",
                            {
                                maxLength: 200
                            })}
                        onChange={(e) => {
                            const value = e.target.value
                            letterCounter(value)
                        }}
                    />
                    <output className={styles.counter} >0</output>
                    <div className={styles.tip}>Tip</div>
                </div>
                <div className={styles.buttonBox}>
                    <button className={styles.backButton} id="button-back" onClick={previousStep}>Назад</button>
                    <button className={styles.sendButton} id="button-send" onClick={modalOpener} >Отправить</button>
                </div>
                {/*<Modal active={modalActive} setActive={setModalActive} />*/}
            </form>
        )
    }


}

export default BigForm;