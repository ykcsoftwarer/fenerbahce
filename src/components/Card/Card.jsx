import React from 'react'
import data from '../../assests/data'
import "./Card.css"




const Card = ({name, number, position, photo}) => {    //!({}) süslü parantez ile havada yakalama yapılmaktadır.
  return (
    <div className='container_main'>
     <div className="card">
            <img src={photo} alt="photo" />
            <div className="background">
              <div className="text"> 
                 <h1 className="name">{name}</h1>
                 <h3 className="number">{number}</h3>
                 <p className="position">{position}</p>
              </div>
            </div> 
        </div>
    </div>
  )
}

export default Card