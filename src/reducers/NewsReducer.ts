import { NEWS_FAIL, NEWS_SUCCESS, ArticleType, newsDispatchType, ADD_SUCCESS, NewsType } from '../actions/NewsActionsType';

interface InitialState {
    success: boolean;
    articles: any; //처음 값 null 값
}

// 초기 state값
const initialState = {
    success: false,
    articles: {
        article:[]
    }
}

// 리듀서 함수()현재 상태와 액션 객체를 받아, 필요하다면 새로운 상태를 리턴하는 함수이다.
const NewsReducer = (state: InitialState = initialState, action: newsDispatchType) => {
    switch (action.type) {
        case NEWS_FAIL:
            return {
                ...state,
                success: false
            }

        case NEWS_SUCCESS:
            const { articles } = action.payload;
            return {
                ...state,
                success: true,
                articles: {
                    articles
                }
            }
        default:
            return state;
    }
}

export default NewsReducer;