import axios from 'axios';
import { Dispatch } from 'redux';
import { newsDispatchType, NEWS_SUCCESS, NEWS_FAIL, ADD_SUCCESS, ADD_FAIL } from './NewsActionsType';
import { EndPoint, key } from '../key';

// 데이터를 불러오는 리덕스 액션 함수
export const fetchNewsData = (keyword: string, page: number) => async (dispatch: Dispatch<newsDispatchType>) => {
    try {
        const res = await axios.get(`${EndPoint}?apikey=${key}&q=${keyword}&page=${page}&sortBy=publishedAt`);
        const data = res.data;
        dispatch({
            type: NEWS_SUCCESS,
            payload: data
        })
    } catch (err) {
        dispatch({
            type: NEWS_FAIL
        })
    }
}

export const addNewsData = (keyword: string, page: number) => async (dispatch: Dispatch<newsDispatchType>) => {
    try {
        const res = await axios.get(`${EndPoint}?apikey=${key}&q=${keyword}&page=${page}&sortBy=publishedAt`);
        const data = res.data;
        dispatch({
            type: ADD_SUCCESS,
            payload: data
        })
    } catch (err) {
        dispatch({
            type: ADD_FAIL
        })
    }
}

