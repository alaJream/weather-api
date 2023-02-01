
function WeatherDisplay(props) {
    const { temp, feelsLike, description, cod, message } = props

    if (cod !== 200 ) {
        return (
            <small>{message}</small>
        )
    }

    return (
        <div>
            <h1>{temp}</h1>
            <small>Feels Like: {feelsLike}</small>
            <p>{description}</p>
        </div>
    )
}

export default WeatherDisplay