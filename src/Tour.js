import React from 'react'

const Tour = ({tour}) => {
    const {id,name,info,image,price}=tour;
    return (
        <div className="card">
            <img src={image} alt={name} />
            <footer>
                <h3>{name}</h3>
                <p>{info}</p>
                <h4> Price:{price}</h4>
            </footer>
        </div>
    )
}

export default Tour
