import React, { useState, useEffect } from 'react';
import '../styles.css';
import { Link, useLocation, useNavigate } from 'react-router-dom'

interface HeaderProps {
    modal: boolean;
    setModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header: React.FC<HeaderProps> = ({ modal, setModal }) => {
    const [loginText, setLoginText] = useState<string>('로그인');
    const location = useLocation();
    const navigate = useNavigate()

    const loginClickHandler = () => {
        if (localStorage.getItem('isLogin') === 'true') {
            alert('로그아웃 되었습니다.');
            localStorage.setItem('isLogin', 'false');
            localStorage.setItem('loginId', "");
            setLoginText('로그인');
            if (location.pathname !== '/') navigate('/');

        }
        else {
            setModal(!modal);
        }
    }

    const favoriteClickHandler = () => {
        if(localStorage.getItem('isLogin') !== 'true') {
            alert('로그인 후 이용해주세요');
        }
        else {
            navigate('favorite');
        }
    }

    useEffect(() => {
        if (localStorage.getItem('isLogin') === 'true') {
            setLoginText('로그아웃')
        }
    })

    return (
        <>
            <div className="header-wrapper">
                <div className="header-contents">
                    <div className='header-logo-area'><Link to={'/'}>News Viewer</Link></div>
                    <div className="actions-area">
                        <p className='action-login' onClick={loginClickHandler}>
                            {loginText}
                        </p>
                        <p onClick={favoriteClickHandler}>즐겨찾기</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header;