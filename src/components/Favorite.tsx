import React, { useEffect, useState } from 'react';
import FavoriteItem from './FavoriteItem';
import { LocalStar } from '../model';
import { useNavigate } from 'react-router-dom';


const Favorite: React.FC = () => {
    const navigate = useNavigate();
    const [localItem, setLocalItem] = useState<LocalStar[]>(() =>
        JSON.parse(localStorage.getItem(localStorage.getItem('loginId') || "dummyuserID") || "[]"));

    useEffect(() => {
        localStorage.setItem(localStorage.getItem('loginId') || "dummyuserID", JSON.stringify(localItem));
    }, [localItem])

    useEffect(() => {
        if (localStorage.getItem('isLogin') !== 'true') {
            alert('로그인 후 이용해주세요.');
            navigate('/');
        }
    })

    return (
        <>
            <div className="favorite-content">
                {localItem.map((item: any) => <FavoriteItem title={item.title} content={item.content}
                    url={item.url} key={item.url} localItem={localItem} setLocalItem={setLocalItem} ></FavoriteItem>)}
            </div>

        </>
    )
}
export default Favorite;