import { Routes , Route } from "react-router-dom"
import { Navbar } from "../components/ui/Navbar"
import DcPage from '../components/Dc/DcPage'
import MarvelPage from '../components/marvel/MarvelPage'
import SearchPage from '../components/search/SearchPage'
import HeroPage from "../components/hero/HeroPage"


const Dashboardroutes = () => {
    return (
        <div>
            <Navbar />
           <div className="container">
                <Routes>
                    <Route path='/' element={<MarvelPage />} />
                    <Route path='/marvel' element={<MarvelPage />} />
                    <Route path='/dc' element={<DcPage />} />
                    <Route path='/hero/:id' element={<HeroPage/>} />
                    <Route path='/search' element={<SearchPage />} />
                </Routes>
           </div>
        </div>
    )
}

export default Dashboardroutes