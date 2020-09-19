import React from 'react';
import classes from './Logo.module.css';
import logoImage from '../../assets/images/burger-logo.png';

const logo = (props) => (
    <div className={classes.Logo}>
        <img src={logoImage} alt=""/>
    </div>
);

export default logo;