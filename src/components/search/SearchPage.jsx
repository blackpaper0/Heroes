import React  , {useMemo} from 'react'
import {useNavigate , useLocation} from 'react-router-dom'
import queryString from 'query-string'
import HeroCard from '../ui/HeroCard'
import { heroes } from '../../data/heroes'
import { useForm } from '../../hooks/useForm'
import { getHeroesByName } from '../selectors/getHeroesByName'

const SearchPage = () => {

  const navigate = useNavigate()
  const location = useLocation();
  const {q = ''} = queryString.parse(location.search);

  const [values , handleInput , reset] = useForm({
    texto:''
  })

  const handleSearch = (e) => {
    e.preventDefault();
    console.log(values.texto);
    navigate(`?q=${values.texto}`)
    
  }

  const aa = useMemo(()=>getHeroesByName(q) , [q]);

  return (
    <div>
      <h1>Busquedas</h1>
      <hr />

      <div className="row">
        <div className="col-5">
          <h4>buscar</h4>
          <hr />

          <form onSubmit={handleSearch}>
            <label htmlFor="texto">buscar:
              <input type="text"
                placeholder="Buscar un heroe"
                className="form-control"
                name="texto"
                autoComplete='off'
                value= {values.texto}
                onChange={handleInput}
              /></label>
            <button type="submit" className="btn btn-primary">submit</button>
          </form>
        </div>
        <div className="col-7">
            <h4>resultados</h4>
            <hr />

            {
              (q=== '' || aa.length==0) ? <div className="alert alert-warning">no hay heroes con ese nombre</div>:
              aa.map(hero=>(
                <HeroCard key={hero.id} {...hero}/>
              ))

            }
          </div>
      </div>
    </div>
  )
}

export default SearchPage