import React from 'react';
import styles from './Button.module.scss';

const Button = ({children,href}) =>(
    <>
    {
        href ? 
        (<a 
        href = {href}
        className={styles.buttonLink} target="_blank" rel="noopener noreferrer">{children}</a>)
        :
        (<button className={styles.button}>{children}</button>)
    }
    </>
)

export default Button;