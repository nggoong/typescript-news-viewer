// 액션 타입 정의
export const NEWS_SUCCESS = 'NEWS_SUCCESS';
export const NEWS_FAIL = 'NEWS_FAIL';
export const ADD_SUCCESS = 'ADD_SUCCESS';
export const ADD_FAIL = 'ADD_FAIL';

// 받아올 데이터의 모양
export type ArticleType = {
    articles:NewsType[]
}
// 

export type NewsType = {
    source:{
        id:any;
        name:string
    };
    author:string;
    title:string;
    description:string;
    url:string;
    urlToImage:string;
    publishedAt:string;
    content:string
}




// 액션 객체 모양 정의
export interface newsSuccessDispatch {
    type: typeof NEWS_SUCCESS;
    // 리듀서에 payload라는 이름으로 데이터 넘김
    payload: {
        articles:NewsType[];
    }
}

export interface newsFailDispatch {
    type: typeof NEWS_FAIL;
}

export interface addSuccessDispatch {
    type:typeof ADD_SUCCESS;
    payload: {
        articles:NewsType[];
    }
}

export interface addFailDispatch {
    type: typeof ADD_FAIL;
}

export type newsDispatchType = newsSuccessDispatch | newsFailDispatch | addSuccessDispatch | addFailDispatch;
