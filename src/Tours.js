import React from 'react'
import Tour from './Tour'

const Tours = ({tours,removeTour}) => {
    return(
        <>
        <section >
            <div className="title">
                <h1>Tours Offered</h1>
            </div>
            <div className="underline"></div>
            <div className="box"> 
                {tours.map((tour)=>{
                    return(
                        <div><Tour tour={tour} key={tour.id} removeTour={removeTour}/></div>
                    )
                })}
            </div>
        </section>
        </>
    )

    
   
}

export default Tours
