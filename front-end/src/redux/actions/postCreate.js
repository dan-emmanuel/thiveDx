import axios from "axios";

export const CHANGE_A_VALUE = "CHANGE_A_VALUE",
    NEW_POST = "NEW_POST"



export const change_a_value = (e) => {
    try {
        return {
            type: CHANGE_A_VALUE,
            payload: e
        }
    } catch (error) {
        console.log(error)

    }
}



export const submit_form = (e) => async (dispatch) => {
    try {
        let cats = await axios({
            method: 'post',
            url: `${process.env.REACT_APP_SRV_URL}newPost`,
            data: e
        });
        dispatch({
            type: NEW_POST,
            payload: cats.data
        })
    } catch (error) {
        console.log(error)
    }

    
}