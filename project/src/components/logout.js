import { Navigate } from 'react-router-dom'

export const logout = () => {
        fetch('/api/users/logout', {
            method: 'POST',
            url: "http://localhost:3001/api/users/logout"
        }).then(() => localStorage.removeItem('auth-token'))
        // .then(() => {
        //     return <Navigate to="/welcome-page-not-registered"/>
        // });
       
    }
    
