import {  useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../state/index"


const Navbar = () => {
    const planets = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune']
    const dispatch = useDispatch();

    const { displayPlanet } = bindActionCreators(actionCreators, dispatch)
    return (
        <div className="navbar"> <div className="nav-left">
            <div className="logo">THE PLANETS</div> 
            <img src=".\assets\icon-hamburger.svg" alt="open" className="open" onClick={() => {
                document.querySelector('.nav').classList.add('display')
            }}/>
            
        </div>
            <div className="nav">
            <img src=".\assets\icon-close.svg" alt="close" className="close" onClick={() => {
                document.querySelector('.nav').classList.remove('display')
            }}/>
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