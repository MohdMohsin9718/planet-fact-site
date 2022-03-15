export const displayPlanet = (name) => {
    return (dispatch) => {
        dispatch({
            type: "DISPLAY",
            name: name
        });
    }
}

export const displayDesc = (name) => {
    return (dispatch) => {
        dispatch({
            type: "DISPLAY",
            name: name
        });
    }
}
