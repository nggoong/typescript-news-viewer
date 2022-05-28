import React, { useState } from 'react';
import { ModalInputs } from '../model';

interface ModalProps {
    setModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const Modal: React.FC<ModalProps> = ({ setModal }) => {

    const [inputs, setInputs] = useState<ModalInputs>({
        id: '',
        password: ''
    })

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputs({ ...inputs, [e.target.name]: e.target.value });
    }

    const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (inputs.id === 'news' && inputs.password === 'news123') {
            alert('로그인 완료!')
            localStorage.setItem('isLogin', 'true');
            localStorage.setItem('loginId', inputs.id);
            setModal(false);
        }
        else {
            alert('아이디 또는 패스워드가 일치하지 않습니다.');
            setInputs({
                id: '',
                password: ''
            })
        }
    }

    const modalClickHandler = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!(e.target as Element).classList.contains('modal-wrapper')) {
            return;
        }
        else {
            setModal(false);
        }

    }
    return (
        <>
            <div className="modal-wrapper" onClick={modalClickHandler}>
                <div className="modal-inputs-container">
                    <div className="modal-logo-area">
                        <p>로그인</p>
                    </div>
                    <form className='modal-form' onSubmit={submitHandler} >
                        <input type="text" name="id" placeholder='ID' value={inputs.id} onChange={changeHandler} />
                        <input type="password" name="password" placeholder='password' value={inputs.password} onChange={changeHandler} />
                        <button type='submit'>로그인하기</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Modal;