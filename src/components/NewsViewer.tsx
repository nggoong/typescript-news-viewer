import React, { useState, useEffect } from 'react';
import { NewsType } from '../actions/NewsActionsType';
import NewsItem from './NewsItem';
import { LocalStar } from '../model'

interface NewsViewerProps {
    datas: NewsType[];
    index: number;
    
}




const NewsViewer: React.FC<NewsViewerProps> = ({ datas, index }) => {

    const [items, setItems] = useState<NewsType[]>([]);
    const [starList, setStarList] = useState<LocalStar[]>([]);
    

    useEffect(() => {
        setItems(datas.slice(0, index));
    }, [datas, index])


    return (
        <>
            {items.map((item, index) => <NewsItem starList={starList} setStarList={setStarList} key={index} item={item} />)}
        </>
    )
}

export default NewsViewer;