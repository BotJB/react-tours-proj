import React,{useState} from 'react'


const Tour = ({tour,removeTour}) => {
    const [readMore,setReadMore]=useState(false)
    const {id,name,info,image,price}=tour;
    return (
        <div className="card">
            <img src={image} alt={name} />
            <footer>
                <h3>{name}</h3>
                <p>{readMore?info:`${info.substring(0, 200)}...`}</p>
                <button onClick={()=> setReadMore(!readMore)}>{readMore?'Show Less ':'Show More'}</button>
                <h4> Price:{price}</h4>
            </footer>
            <button onClick={() => removeTour(id)}>Not Interested</button>
        </div>
    )
}

export default Tour
