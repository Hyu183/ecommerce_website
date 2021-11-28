import React from 'react';

import classes from './Size.module.css';

const Size = (props) => {
    const { sizes, selectedSizeID, onSizeSelectedChange, className } = props;
    // const [selectedSizeID, setSelectedSizeID] = useState(0);

    return (
        <div className={className}>
            <div className={classes.title}>Size</div>
            <div className={classes.sizeContainer}>
                {sizes.map((size) => {
                    return (
                        <div
                            key={size.id}
                            className={
                                classes.size +
                                ` ${
                                    size.id === selectedSizeID
                                        ? classes.sizeSelected
                                        : classes.sizeUnSelected
                                }`
                            }
                            onClick={() => onSizeSelectedChange(size)}
                        >
                            {size.name}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Size;
