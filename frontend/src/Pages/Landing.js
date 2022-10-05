import React from 'react'
import {useAuthState} from 'react-firebase-hooks/auth';
import { LoginPage } from './LoginPage';
import {auth} from '../config/firebase';
import { Main } from './Main';


export const Landing = () => {
    const [user] = useAuthState(auth);

    return (
        user ? <Main/> : <LoginPage/>
    )
}
