import React from 'react';

import classes from './Color.module.css';

const Color = (props) => {
    const { colors, currentSelectedColorID, onColorSelectedChange, className } =
        props;

    return (
        <div className={className}>
            <div className={classes.title}>Color</div>
            <div className={classes.colorContainer}>
                {colors.map((color) => {
                    return (
                        <div
                            key={color.id}
                            className={
                                currentSelectedColorID === color.id
                                    ? classes.colorSelected
                                    : classes.colorUnSelected
                            }
                        >
                            <div
                                className={classes.color}
                                style={{
                                    backgroundColor: color.hex,
                                    opacity: color.opacity,
                                }}
                                onClick={() => onColorSelectedChange(color)}
                            ></div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Color;
