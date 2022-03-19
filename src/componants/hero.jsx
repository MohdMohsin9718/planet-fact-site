import Stats from './stats'
import { useSelector, useDispatch  } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../state/index"




const Hero = () => {

    const planet = useSelector((state) => state.planet);
    const desc = useSelector((state) => state.desc);
    const dispatch = useDispatch();

    // const { displayPlanet } = bindActionCreators(actionCreators, dispatch)
    const { displayDesc } = bindActionCreators(actionCreators, dispatch)


    return (
        
        <div>
            <div className="hero">
            <div className="left-col">
                <img className='planet-img' src={desc.photo} alt="Earth" />
                <img  className='planet-geo'  src={planet.images.geology} alt="" />
            </div>
            <div className='right-col'>
                <div>
                    <h1>{planet.name}</h1>
                    <p>{desc.description}
                        <br />
                    </p>
                    <p>    
                        <span>Source</span>
                        <a href={planet.overview.source}>Wikipedia</a>
                    </p>
                </div>
                <form className='form'>
                <input type="radio" name='features' id='overview' value='overview' />
                <label htmlFor='overview' onClick={() => {
                    displayDesc('overview')
                    document.querySelector('.planet-geo').classList.remove('active')
                    }}><span>01</span>OVERVIEW</label>
                <input type="radio" name='features' id='structure'value='structure' />
                <label htmlFor='structure' onClick={() => {
                    displayDesc('structure')
                    document.querySelector('.planet-geo').classList.remove('active')
                    }}><span>02</span><span className='extra'>INTERNAl</span> STRUCTURE</label>
                <input type="radio" name='features' id='geology' value='geology' />
                <label htmlFor='geology' onClick={() => {
                    displayDesc('geology')
                    document.querySelector('.planet-geo').classList.add('active')
                    }}><span>03</span><span className='extra'>SURFACE</span> GEOLOGY</label>
                </form>

            </div>
        </div>

        <div className='features'>
            <Stats name="ROTATION TIME" value={planet.rotation} />
            <Stats name="REVOLUTION TIME" value={planet.revolution} />
            <Stats name="RADIUS" value={planet.radius} />
            <Stats name="AVERAGE TEMP" value={planet.temperature} />
        </div>

        </div>

    )

}

export default Hero;