import React from 'react';

const CoffeePic = ({data}) => {
    return (
        <div>
            <img src={data.image} alt={data.image} />
        </div>
    );
};

export default CoffeePic;