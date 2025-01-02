import { 
    GET_ARTICLES_REQUEST,
    GET_ARTICLES_SUCCESS,
    GET_ARTICLES_FAILURE
  } from '@src/actions/actionTypes';

interface BlogState {
    loading: boolean;
    error: string | null;
}

const initialState: BlogState = {
    loading: false,
    error: null,
};
  
export type BlogAction = 
    | { type: typeof GET_ARTICLES_REQUEST }
    | { type: typeof GET_ARTICLES_SUCCESS }
    | { type: typeof GET_ARTICLES_FAILURE, payload: string }
    ;
  

const blogReducer = (state = initialState, action: BlogAction): BlogState => {
    switch (action.type) {
        case GET_ARTICLES_REQUEST:
            return {
                ...state,
                loading: true,
                error: null
            }
        case GET_ARTICLES_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
            };
        case GET_ARTICLES_FAILURE:
            return {
                ...state,
                error: action.payload,
                loading: false
            };
        default:
            return state;
    }
};

export default blogReducer;
