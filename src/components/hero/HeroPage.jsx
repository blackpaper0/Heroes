import React , {useMemo} from 'react'
import { Navigate, useParams , useNavigate } from 'react-router-dom'
import { getHeroById } from '../selectors/getHeroById';
import batman from '../../assets/heroes/dc-batman.jpg'

const heroimages = require.context('../../assets/heroes' , true)




const HeroPage = () => {

  const { id } = useParams();
  const hero = useMemo(()=>getHeroById(id) , [id]);
  const navigate = useNavigate();
  if (!hero) {
    return <Navigate to='/' />
  }

  const handleReturn = ()=>{
    navigate(-1);
  }

  return (
    <div className='row mt-5'>
      <div className='col-4 animate__animated animate__jackInTheBox'>
        <img 
            //src={`/assets/heroes/${id}.jpg`} //static
            //src={batman} // import
            src={heroimages(`./${hero.id}.jpg`)}
            alt={hero.superhero} 
            className='img-thumbnail' />

      </div>
      <div className='col-8'>
        <h3>{hero.superhero}</h3>
        <ul className='list-group'>
            <li className="list-group-item"><b>Alter ego:</b> {hero.alter_ego}</li>
            <li className="list-group-item"><b>Publisher:</b> {hero.publisher}</li>
            <li className="list-group-item"><b>Primera Aparicion:</b> {hero.first_appearance}</li>
        </ul>

        <h5 className="mt-5">Characters</h5>
        <p>{hero.characters}</p>

        <button className='btn btn-outline-info' onClick={handleReturn}>Regresar</button>
      </div>
    </div>
  )
}

export default HeroPage