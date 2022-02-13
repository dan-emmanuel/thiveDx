import { combineReducers } from "redux";
import { postsReadReducers } from "./reducers/postsRead";
import { postCreateReducers } from "./reducers/postCreate";


const rootReducer = combineReducers({
    postsRead : postsReadReducers,
    postCreate : postCreateReducers,
})

export default rootReducer