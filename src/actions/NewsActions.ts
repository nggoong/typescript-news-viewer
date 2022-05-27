import axios from 'axios';
import { Dispatch } from 'redux';
import { newsDispatchType, NEWS_SUCCESS, NEWS_FAIL } from './NewsActionsType';
import { EndPoint, key } from '../key';

// 데이터를 불러오는 리덕스 액션 함수
export const fetchNewsData = (keyword: string) => async (dispatch: Dispatch<newsDispatchType>) => {
    try {
        const res = await axios.get(`${EndPoint}?apikey=${key}&q=${keyword}`);
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