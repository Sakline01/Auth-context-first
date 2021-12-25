import React, { useState } from 'react';
import { useContext } from 'react';
import styled from 'styled-components';
import { ThemeContext } from '../../App';
import Loginout from './LogInOut';
import style from './nav.module.css';

const Nav = () => {
    const theme = useContext(ThemeContext);
    const [themes, setThemes] = useState(theme.light)
    console.log(themes);
    const Div = styled.div`
    color: ${themes.color};
    background-color: ${themes.background};
    text-align: center;
    height: 100vh;
    width: 100%;
    `;
    const Button = styled.button`
    height: 30px;
    width: 80px;
    color: ${themes.color};
    background-color: ${themes.background};
    margin-top: 5px;
    font-size: large;
    border-radius: 7px;
    `;
    const handleTheme = () => {
        setThemes(t => t = themes.color === "black" ? theme.dark : theme.light);
    }
    return (
        <Div>
            <div className={style.nav}>
                <Button onClick={handleTheme}>{themes.color === "black" ? "Dark" : "Light"}</Button>
            </div>
            <Loginout />
        </Div>
    );
}

export default Nav;
