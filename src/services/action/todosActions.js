import axios from "axios"
import {
  GET_TODOS_FAILED,
  GET_TODOS_REQUEST,
  GET_TODOS_SUCCESS
} from "../constants/todosConst"

const getAllTodos = () => async (dispatch) => {
  dispatch({
    type: GET_TODOS_REQUEST
  })
  const res = await axios.get(`https://jsonplaceholder.typicode.com/todos`)
  try {
    dispatch({ type: GET_TODOS_SUCCESS, payload: exports.data })
  } catch (error) {
    dispatch({ type: GET_TODOS_FAILED, payload: error.message })
  }
}
