import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootReducerType } from '../Store';
import NewsInput from '../components/NewsInput';
import NewsViewer from '../components/NewsViewer';
import { addNewsData, fetchNewsData } from '../actions/NewsActions';

const NewsContainer: React.FC = () => {
    const [page, setPage] = useState<number>(2);
    const [keyword, setKeyword] = useState<string>("");
    const newsReducer = useSelector((state: RootReducerType) => state.NewsReducer);
    const dispatch = useDispatch();

    const goButtonTapped = (keyword: string) => {
        dispatch<any>(fetchNewsData(keyword, 1));
        setKeyword(keyword);
        setPage(2);
    }

    useEffect(() => {
        if (keyword === "") return;
        dispatch<any>(addNewsData(keyword, page));
    }, [page])
   

    return (
        <>
            <div className='news-app-wrapper'>
                <NewsInput goButtonTapped={goButtonTapped}></NewsInput>
                <div className='news-app-viewer'>
                    {!newsReducer.articles.articles.length ? <div className='no-data'><h1>No data😂</h1><h1>Search news by typing keywords!</h1></div>
                        : <NewsViewer datas={newsReducer.articles.articles} setPage={setPage}></NewsViewer>}
                </div>
            </div>
        </>
    )
}

export default NewsContainer;