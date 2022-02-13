import axios from "axios";

export const GET_TAGS = "GET_TAGS",
    CHANGE_CURRENT_TAG = "CHANGE_CURRENT_TAG",
    GET_CATS="GET_CATS",
    CHANGE_CURRENT_CAT = "CHANGE_CURRENT_CAT",
    GET_ARTS="GET_ARTS"

export const getTags = () => async (dispatch) => {
    try {
        let tags = await axios({
            method: 'get',
            url: `${process.env.REACT_APP_SRV_URL}tags`,
        });
        dispatch({
            type: GET_TAGS,
            payload: tags.data
        })
    } catch (error) {
        console.log(error)
    }
}
export const getPosts = () => async(dispatch)=>{
    try {
        let tags = await axios({
            method: 'get',
            url: `${process.env.REACT_APP_SRV_URL}articles`,
        });
        dispatch({
            type: GET_ARTS,
            payload: tags.data
        })
    } catch (error) {
        console.log(error)
    }
}
export const getCats = () => async (dispatch) => {
    try {
        let cats = await axios({
            method: 'get',
            url: `${process.env.REACT_APP_SRV_URL}cats`,
        });
        dispatch({
            type: GET_CATS,
            payload: cats.data
        })
    } catch (error) {
        console.log(error)
    }
}
export const changeCurrentCat = (e) =>  {
    try {
        
        return {
            type: CHANGE_CURRENT_CAT,
            payload: e
        }
    } catch (error) {
        console.log(error)

    }
}

export const changeCurrentTag = (e) =>  {
    try {

        return {
            type: CHANGE_CURRENT_TAG,
            payload: e
        }
    } catch (error) {
        console.log(error)

    }
}

