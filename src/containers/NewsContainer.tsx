import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootReducerType } from '../Store';
import NewsInput from '../components/NewsInput';
import NewsViewer from '../components/NewsViewer';
import { fetchNewsData } from '../actions/NewsActions';
import { NewsType } from '../actions/NewsActionsType';

const sortDataByPublished = (items: NewsType[]) => {
    let tempData = Array.from(items);
    tempData = tempData.sort((a: any, b: any) => {
        return Number(b.publishedAt.slice(0, 10).replace(/-/g, '')) -
            Number(a.publishedAt.slice(0, 10).replace(/-/g, ''));
    })
    return tempData;
}



const NewsContainer: React.FC = () => {
    const [index, setIndex] = useState<number>(10);
    const newsReducer = useSelector((state: RootReducerType) => state.NewsReducer);
    const dispatch = useDispatch();
    const goButtonTapped = (keyword: string) => {
        dispatch<any>(fetchNewsData(keyword));
        setIndex(10);
    }


    const scrollHandler = () => {
        let YOffset = window.pageYOffset;
        let scrollHeight = document.body.scrollHeight;
        let height = window.innerHeight;


        if (YOffset >= (scrollHeight - height) - 10) {
            setIndex(index => index + 10);
        }
    }

    const throttling = () => {
        let timer;
        if (!timer) {
            timer = setTimeout(() => {
                timer = null;
                scrollHandler();
            }, 1000)
        }
    }


    useEffect(() => {
        function addScrollEvent() {
            window.addEventListener('scroll', throttling);
        }
        addScrollEvent();

        return (() => {
            window.removeEventListener('scroll', throttling);
        })
    });

    return (
        <>
            <div className='news-app-wrapper'>
                <NewsInput goButtonTapped={goButtonTapped}></NewsInput>
                <div className='news-app-viewer'>
                    {!newsReducer.articles?.articles.length ? <div className='no-data'><h1>No data😂</h1><h1>Search news by typing keywords!</h1></div>
                        : <NewsViewer index={index} datas={sortDataByPublished(newsReducer.articles?.articles)}></NewsViewer>}

                </div>
            </div>
        </>
    )
}

export default NewsContainer;