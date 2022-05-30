import React, { useRef, useEffect, useState } from 'react';
import { NewsType } from '../actions/NewsActionsType';
import NewsItem from './NewsItem';
import { addNewsData, fetchNewsData } from '../actions/NewsActions';

interface NewsViewerProps {
    datas: NewsType[];
    setPage: React.Dispatch<React.SetStateAction<number>>
    // index: number;
}


const NewsViewer: React.FC<NewsViewerProps> = ({ datas, setPage }) => {

    const [target, setTarget] = useState<any>(null);

    const pageUpByScroll = () => {
        setPage(page => page + 1);
    }

    const onIntersect = ([entry]: any, observer: any) => {
        if (entry.isIntersecting) {
            observer.unobserve(entry.target);
            pageUpByScroll();
            observer.observe(entry.target);
        }
    }

    useEffect(() => {
        let observer: any;
        if (target) {
            observer = new IntersectionObserver(onIntersect, { threshold: 0.4 });
            observer.observe(target);
        }

        return (() => {
            observer && observer.disconnect();
        })
    }, [target])

    return (
        <div>
            {datas.map((item, index) => <NewsItem key={index} item={item} />)}
            <div ref={setTarget}>
                End
            </div>
        </div>
    )
}

export default NewsViewer;