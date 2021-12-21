import React from 'react';
import Loginout from './LogInOut';
import style from './nav.module.css';

const Nav = () => {

    return (
        <div className={style.center}>
            <div className={style.nav}>

            </div>
            <Loginout />
        </div>
    );
}

export default Nav;
