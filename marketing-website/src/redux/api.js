import { errorUser, loading, successUser } from "./userSlice"
import axios from 'axios'
export const addUser = async (user,dispatch) => {
    dispatch(loading)
    try {
        const response = await axios.post('http://localhost:4000/user', user)
        dispatch(successUser(response.data))
    } catch(err) {
        dispatch(errorUser())
    }
}