import React from 'react';
import { useDispatch } from 'react-redux';
import authService from '../../Services/AuthService';
import { logout } from '../../Store/authSlice';

function LogoutBtn() {
    const dispatch = useDispatch()
    const logoutHandler = () => authService.logout().then(() => dispatch(logout()))
    return (
        <div>
            <button
                className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
                onClick={logoutHandler}
            >Logout</button>
        </div>
    );
}

export default LogoutBtn;
