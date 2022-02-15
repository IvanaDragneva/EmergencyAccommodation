import axios from 'axios'

export const logout = () => {
    axios({
        method: "POST",
        withCredentials: true,
        url: "http://localhost:3001/api/users/logout"
    })
    .then(() => localStorage.removeItem('auth-token'))   
}
