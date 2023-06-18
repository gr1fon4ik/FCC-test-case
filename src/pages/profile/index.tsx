import React, { useState } from "react";

import SocialItem from "./components/social/SocialItem.tsx";
import { socialData } from "./config.ts";
import styles from "./styles.module.scss"
import Modal from "../../components/modal/Modal.tsx";
import Form from "./components/form/Form.tsx";



const ProfilePage = () => {

    

    const SocialElements = socialData.map((item) => (
        <SocialItem href={item.href} link={item.link} />
    ));

    return (
        <div className={styles.wrapper}>



            <div className={styles.profilePage}>
                <div className={styles.content}>
                    <div className={styles.profileHeader}>
                        <div className={styles.nameBox}>
                            <div className={styles.text}>ГД</div>
                        </div>
                        <div className={styles.infoContainer}>
                            <div className={styles.name}> Рухлов Григорий</div>
                            <div className={styles.socialsContainer}>
                                {SocialElements}
                            </div>
                        </div>
                    </div>
                    <hr className={styles.line} />
                    <div className={styles.contactInfoContainer}>
                        <Form />
                    </div> 
                </div>
            </div>
            {/*<Modal active={modalActive} setActive={setModalActive}/>*/}
        </div>
    );
};

export default ProfilePage;