import React , {useMemo} from 'react'
import { getHeroByPublisher } from '../selectors/getHeroByPublisher'
import HeroCard from './HeroCard'



const HeroList = ({publisher = 'marvel'}) => {

    const heroes = useMemo(()=> getHeroByPublisher(publisher) , [publisher])

  return (
    <div>
        <h1>Hero List - {publisher}</h1>
        
            <div className="row row-cols-1 row-cols-md-3 g-3 animate__animated animate__fadeInLeft">
                {
                    heroes.map(hero =>(
                        <HeroCard key={hero.id} {...hero}/>
                    ))
                }
            </div>
        

    </div>
  )
}

export default HeroList