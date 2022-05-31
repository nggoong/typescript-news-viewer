import React, { useState, useEffect } from 'react';
import { NewsType } from '../actions/NewsActionsType';
import { LocalStar } from '../model'

interface NewsItemProps {
    item: NewsType
    setPage: React.Dispatch<React.SetStateAction<number>>
    index: number
    length: number
}

const slicePublishedAt = (value: string) => {
    return value.slice(0, 10)
}

const authorRename = (value: any) => {
    let result = value || 'unknown';
    return result;
}


const NewsItem: React.FC<NewsItemProps> = ({ item, setPage, index, length }) => {
    const [target, setTarget] = useState<HTMLDivElement | null>(null);

    const onIntersect = ([entry]: any, observer: any) => {
        if (entry.isIntersecting) {
            setPage(page => page + 1)
            // 데이터를 불러오고 화면에 렌더링 되기 전까지 계속 요건을 충족하므로 page가 무한대로 증가하는 경우 방지
            // 기존의 target을 unobserve함으로써 page가 한 번만 증가하게끔 함
            observer.unobserve(entry.target);
        }
    }

    useEffect(() => {
        let observer: IntersectionObserver;
        if (target) {
            observer = new IntersectionObserver(onIntersect, { threshold: 0.3 });
            observer.observe(target);
        }

        return (() => {
            observer && observer.disconnect();
        })
    }, [target])

    /* 즐겨찾기 버튼 눌렀을 때 */
    const clickHandler = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!(e.target as Element).classList.contains('star')) {
            window.open(item.url);
        }
        else {
            if (localStorage.getItem('isLogin') !== 'true') alert('로그인이 필요합니다.');
            /* 로그인 되어있는 상태 */
            else {
                let loginId = localStorage.getItem('loginId') || "";
                let localItem = localStorage.getItem(loginId);
                let newData: LocalStar = { title: item.title, url: item.url, content: item.content };
                if (localItem === null) {
                    let tempArray = [newData];
                    localStorage.setItem(loginId, JSON.stringify(tempArray));
                    alert('즐겨찾기에 추가하였습니다.');
                }
                else if (localItem !== null) {
                    let tempArray = JSON.parse(localItem);
                    for (let i of tempArray) {
                        if (i.url === item.url) {
                            alert('이미 추가한 항목입니다.');
                            return;
                        }
                    }
                    tempArray.push(newData);
                    localStorage.setItem(loginId, JSON.stringify(tempArray));
                    alert('즐겨찾기에 추가하였습니다.');
                }
            }
        }
    }

    return (
        <>

            <div className='news-item-wrapper' onClick={clickHandler} ref={index === length - 1 ? setTarget : null}>
                <img src={item.urlToImage} alt="no image" />
                <div className="news-item-body">
                    <div className='article-info'>
                        <h1>{item.title}</h1>
                        <p className='news-item-content'>{item.content}</p>
                    </div>
                    <div className='news-info'>
                        <p>Author : {authorRename(item.author)}</p>
                        <p>Published : {slicePublishedAt(item.publishedAt)}</p>
                        <p>Source : {item.source.name}</p>
                    </div>

                </div>
                <div className='star-area'>
                    <p className='star'>☆</p>
                </div>
            </div>

        </>
    )
}

export default NewsItem;