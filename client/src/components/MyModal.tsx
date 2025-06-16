import React, { PropsWithChildren } from 'react';
import cl from '../styles/modal.module.css'


type ModalProps = {
    visible: boolean;
    setVisible: React.Dispatch<React.SetStateAction<boolean>>;
};

const MyModal= ({children, visible, setVisible}: PropsWithChildren<ModalProps>) => {

    const rootClasses = [cl.myModal]

    if (visible) {
        console.log(visible)
        rootClasses.push(cl.active);
    }

    return (
        <div className={rootClasses.join(' ')} onClick={() => setVisible(false)}>
            <div className={cl.myModalContent} onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};

export default MyModal;