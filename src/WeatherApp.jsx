import React,{useState,useEffect} from 'react';

const WeatherApp = () => {
    const [city, setCity] = useState(null);
    const [search, setSearch] = useState("mumbai");

    useEffect(() => {
        const fetchApi = async () =>{
            try {
                const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=e83c7b13ed6903d9e59232e610970dd6`;
                const res = await fetch(url);
                const resjson = await res.json();
            setCity(resjson.main);
            } catch (error) {
                console.log(error)
            }
            
        }
        fetchApi();
    }, [search])

    return (
        <>
            <h1>Weather App</h1>
            <input type="text" value={search} onChange={ (e) => {setSearch(e.target.value)} } />
        {
            city ? (
                <div className="main">
                
                <h2>{search}</h2>
                <h3>{city.temp}</h3>
                <p>min:{city.temp_min} max:{city.temp_max}</p>
                </div>
            ) : <h3>no data found</h3>
        }
            

        </>
    )
}

export default WeatherApp
