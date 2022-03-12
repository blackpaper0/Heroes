import React from 'react'
import {Link} from 'react-router-dom'
const heroImages = require.context('../../assets/heroes')

const HeroCard = ({
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters
}) => {

    return (
        <div className="col">
            <div className="card">
                <div className="row no-gutters animate__animated animate__fadeInUp ">
                   <div className="col-4">
                        <img src={heroImages(`./${id}.jpg`)} className="card-img" alt={superhero} />
                   </div>
                   <div className="col-8 card-body"> 
                        <h5 className="card-title">{superhero}</h5>
                        <p className="card-text">{alter_ego}</p>
                        
                        <p className="text-muted">
                            <small>{first_appearance}</small>
                        </p>

                        <Link to={`/hero/${id}`}>mas...</Link>
                   </div>
                </div>
            </div>
        </div>
    )
}

export default HeroCard