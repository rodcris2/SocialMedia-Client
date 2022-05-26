import { loginFailure, loginStart, loginSuccess } from "./AuthActions"
import { userlogin } from '../routes/auth'

export const login = async (user, dispatch) => {
    dispatch(loginStart());

    userlogin(user).then((response) => {
        if(response.data.user.isAdmin === true){
            localStorage.setItem("_45744549826894_admin_kjgshwf", JSON.stringify(response.data.user.isAdmin))
        }
        dispatch(loginSuccess(response.data));
    }).catch((error) => {
        dispatch(loginFailure());
    });
}