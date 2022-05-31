import React from 'react';
import { NewsType } from '../actions/NewsActionsType';
import NewsItem from './NewsItem';

interface NewsViewerProps {
    datas: NewsType[];
    setPage: React.Dispatch<React.SetStateAction<number>>
}

const NewsViewer: React.FC<NewsViewerProps> = ({ datas, setPage }) => {


    return (
        <div>
            {datas.map((item, index) => <NewsItem key={index} index={index} length={datas.length} item={item} setPage={setPage} />)}
        </div>
    )
}

export default NewsViewer;