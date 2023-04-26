import React from 'react';
import classes from './Subtitle.module.css';

const Text = ({ children, ...props })  => {
    return (
        <span className={classes.text}>
                               {children}

</span>
    );
};

export default Text;