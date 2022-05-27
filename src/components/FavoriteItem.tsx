import React from 'react';
import '../styles.css';
import { AiFillEdit } from 'react-icons/ai'
import { BsTrashFill } from 'react-icons/bs'
import { LocalStar } from '../model';

interface FavoriteItemProps {
    title: string;
    content: string;
    url: string;
    localItem: LocalStar[];
    setLocalItem: React.Dispatch<React.SetStateAction<LocalStar[]>>
}

const FavoriteItem: React.FC<FavoriteItemProps> = ({ title, content, url, localItem, setLocalItem }) => {

    const itemBodyClickHandler = () => {
        window.open(url);
    }

    const editActionHandler = () => {
        let newItem = Array.from(localItem);
        let editText = prompt('수정할 내용을 입력하세요');
        if (editText) {
            for (let i of newItem) {
                if (i.url === url) {
                    i.content = editText;
                    break;
                }
            }
        }

        setLocalItem(newItem);

    }

    const deleteActionHandler = () => {
        alert('삭제되었습니다.');
        let newItem = localItem.filter((element: any) => element.url !== url);
        setLocalItem(newItem);

    }

    return (
        <>
            <div className='favorite-item-wrapper' >
                <div className="favorite-item-body" onClick={itemBodyClickHandler}>
                    <h1>{title}</h1>
                    <p>{content}</p>
                </div>
                <div className="favorite-item-actions" >
                    <p className='edit-icon icon' onClick={editActionHandler}><AiFillEdit /></p>
                    <p className='delete-icon icon' onClick={deleteActionHandler}><BsTrashFill /></p>
                </div>
            </div>
        </>
    )
}

export default FavoriteItem;