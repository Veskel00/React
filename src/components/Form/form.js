import React from 'react';
import Button from '../Button/Button.js';
import Input from '../Input/input';
import Title from '../Title/title.js';
import styles from './form.module.scss';

const Form = ({submitForm}) => (
    <div className={styles.wrapper}>
    <Title>Add a new twitter account</Title>
        <form autoComplete="off" onSubmit={submitForm} className={styles.form}>
        <Input
            name = "name"
            label = "Name"
            maxLength = {30}
        />
        <Input
            name = "link"
            label = "Twitter-Link"
        />
        <Input
            name = "Image"
            label = "Image"
        />
        <Input
            tag="textarea"
            name = "Description"
            label = "Description"
        />
        <Button>Add new item</Button>
        </form>
    </div>
)

export default Form;