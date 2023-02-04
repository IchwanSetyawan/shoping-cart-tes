import { getData } from "./Api";
export const SET_DATA = 'SET_DATA';

const setData = (payload) => dispatch => {
    dispatch({
        type: SET_DATA,
        payload,
    })
}

export const handleGetData = () => dispatch => {
    getData().then(res => {
        const newData = res.data?.map(val => {
            val.isDelete = false;
            val.isLike = false;
            return val
        })
        dispatch(setData(newData))
    }).catch(({response}) => {
        console.log('error', response);
    })
}
