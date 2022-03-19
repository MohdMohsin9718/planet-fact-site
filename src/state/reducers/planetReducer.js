import data from "../../data.json";

const planets = data;
let body = planets[2];

const reducer = (state = planets[2], action) => {
    for(let i = 0; i<planets.length; i++) {
        let planet = (planets[i].name);
        if (action.name === planet && action.type === "DISPLAY") {
             body = planets[i];
            return planets[i];
        }
    }        
    return state;
    
};

export default reducer;

export const descReducer = (state =0, action) => {
    if( action.type === 'DISPLAY' && action.name === 'structure' ) {
        return ({
            description: body.structure.content,
            photo: body.images.internal
        })
    } else if (  action.type === 'DISPLAY' && action.name === 'overview' ) {
        return ({
            description: body.overview.content,
            photo: body.images.planet
        })
    } else if (  action.type === 'DISPLAY' && action.name === 'geology' ) {
        return ({
            description: body.geology.content,
            photo: body.images.planet
        })
    
    } else {
        return ({
            description: body.overview.content,
            photo: body.images.planet
        });
    }
}

