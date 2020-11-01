import React from 'react';
import propTypes from 'prop-types';
import styles from './ListItem.module.scss';
import Title from '../../Title/title';
import Button from '../../Button/Button';

const ListItem = ({
    name,
    image,
    description,
    twitterLink
}) =>{

    const ImageTag = image ? 'img':'div';

    return (
        <li className={styles.wrapper}>
            <ImageTag
            src={image}
            alt={image} 
            className = {image ? styles.image : styles.imageNone}
            />
            <div>
                <Title>{name}</Title>
                <p className={styles.description}>{description}</p>
                <Button href={twitterLink}>Visit Twitter Page</Button>
            </div>
        </li>
    )
}

ListItem.propTypes ={
    image:propTypes.string,
    name:propTypes.string.isRequired,
    description: propTypes.string,
    twitterLink:propTypes.string.isRequired
};

ListItem.defaultProps = {
    image:null,
    description:"One of the React creators",
}

export default ListItem;