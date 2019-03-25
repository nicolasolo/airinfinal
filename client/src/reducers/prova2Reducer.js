import { GET_PROVA2, ADD_PROVA2, DELETE_PROVA2, PROVA2_LOADING } from '../actions/types';
const initialState = {
    prova2: [],
    loading: false
};

export default function (state = initialState, action) {
    switch (action.type) {

        case GET_PROVA2:
            return {
                ...state,
                prova2: action.payload,
                loading: false
            };

        case DELETE_PROVA2:
            return {
                ...state,
                prova2: state.prova2.filter(prova2 => prova2._id !== action.payload)
            };

        case ADD_PROVA2:
            return {
                ...state,
                prova2: [action.payload, ...state.prova2]
            };

        case PROVA2_LOADING:
            return {
                ...state,
                loading: true
            };
        default: return state;
    }
}