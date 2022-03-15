import {  useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../state/index"


const Navbar = () => {
    const planets = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune']
    const dispatch = useDispatch();

    const { displayPlanet } = bindActionCreators(actionCreators, dispatch)
    return (
        <div className="navbar">
            <div className="logo"> THE PLANETS</div> 
            <div className="nav">
                <ul className="planets">
                    {planets.map( (planet, x) => <li key={x} onClick={() =>{
                        displayPlanet(planet);
                        document.querySelector('.planet-geo').classList.remove('active')
                        }}>{planet}</li> )}
                    
                </ul>
            </div>
        </div>
    )
}

export default Navbar;