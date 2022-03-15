const Stats = (props) => {
    return (
        <div className="stats">
            <p>{props.name}</p>
            <h1>{props.value}</h1>
        </div>
    )
}

export default Stats;