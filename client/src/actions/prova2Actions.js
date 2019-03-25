import axios from 'axios';
import { GET_PROVA2, ADD_PROVA2, DELETE_PROVA2, PROVA2_LOADING } from './types';


export const getProva2 = () => dispatch => {

    dispatch(setProva2Loading());
    axios
        .get('/api/prova2')
        .then(res =>
            dispatch({
                type: GET_PROVA2,
                payload: res.data
            })
        )

};


export const addprova2 = prova2 => dispatch => {
    axios
        .post('/api/prova2', prova2)
        .then(res =>
            dispatch({
                type: ADD_PROVA2,
                payload: res.data
            })
        )
};


export const deleteProva2 = id => dispatch => {
    axios
        .delete(`/api/prova2/${id}`)
        .then(res =>
            dispatch({
                type: DELETE_PROVA2,
                payload: id
            })
        );
};



export const setProva2Loading = () => {
    return {
        type: PROVA2_LOADING
    };
};





