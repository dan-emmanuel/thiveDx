import {
  CHANGE_A_VALUE
} from '../actions/postCreate'

const initState = {
  title:undefined,
  category:undefined,
  tag:undefined,
  content:undefined,
  img:undefined,

}


export const postCreateReducers = (state = initState, action) => {
  switch (action.type) {
    case CHANGE_A_VALUE : return { ...state,[action.payload.name]:action.payload.value }

    default: return { ...state }
  }
}


export default postCreateReducers