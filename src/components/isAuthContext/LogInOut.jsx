import React, { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../../App';
import Axios from 'axios';
import style from './LogInOut.module.css'
const Loginout = () => {
    const toggle = useContext(AuthContext);
    const [isAuth, setIsAuth] = useState();
    const [token, setToken] = useState("");
    useEffect(() => {
        if (isAuth) {
            Axios.post("https://reqres.in/api/login", {
                "email": "eve.holt@reqres.in",
                "password": "cityslicka"
            })
                .then(res => {
                    console.log(res)
                    setToken(`Token:${res.data.token}`);
                })
        }
        else
            setToken("")

    }, [isAuth]);
    const handleClick = () => {
        if (!isAuth) {
            setToken("")
        }
        toggle.toogleAuth();
        setIsAuth(toggle.isAuth);
    }
    return (
        <>
            <button className={style.btn} onClick={handleClick}>
                {isAuth ? "Log Out" : "Log In"}
            </button>
            <h1>{isAuth ? "Loged In" : "Please Log In"}</h1>
            <h1>{isAuth ? token : null}</h1>
        </>
    );
}

export default Loginout;
