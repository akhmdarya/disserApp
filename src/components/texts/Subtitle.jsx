import React from 'react';
import classes from './Subtitle.module.css';

const Subtitle = ({ children, ...props })  => {
    return (
        <span className={classes.title}>
                               {children}

</span>
    );
};

export default Subtitle;