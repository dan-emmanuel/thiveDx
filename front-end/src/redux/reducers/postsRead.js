import {
    GET_TAGS,
    CHANGE_CURRENT_TAG,
    GET_CATS,
    CHANGE_CURRENT_CAT,
    GET_ARTS
} from '../actions/postsRead'

const initState = {
    tags: [],
    currentTag: "all",
    cats: [],
    currentCat: 0,
    arts:[],
}


export const postsReadReducers = (state = initState, action) => {
    switch (action.type) {
        case GET_TAGS: return { ...state, tags: action.payload }
        case GET_CATS: return { ...state, cats: action.payload, currentCat: action.payload[0].id }
        case CHANGE_CURRENT_TAG: return { ...state, currentTag: action.payload }
        case CHANGE_CURRENT_CAT: {console.log(action);return { ...state, currentCat: action.payload }}
        case GET_ARTS: return { ...state, arts: action.payload }


        default: return { ...state }
    }
}


export default postsReadReducers