import React from 'react';
import PropTypes from 'prop-types';
import styles from './Input.module.scss';

const Input = ({tag: Tag,name,label,maxLength}) =>(
    <div className={styles.formItem}>
            <Tag
            type="text"
            name={name} 
            id={name}
            required={!(name === "Image")}
            maxLength={maxLength}
            placeholder = " "
            className={Tag === "textarea" ? styles.textarea : styles.input}
            />
            <label
            className ={styles.label}
            htmlFor={name}>{label}</label>
            <div className={styles.formItemBar}></div>
        </div>
)

Input.propTypes = {
    tag:PropTypes.string,
    name: PropTypes.string.isRequired,
    maxLength: PropTypes.number.isRequired,
    label: PropTypes.string.isRequired,
}

Input.defaultProps = {
    tag: 'input',
    maxLength: 200,
}

export default Input;