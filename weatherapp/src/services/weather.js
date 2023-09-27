let promise = getWeather();

const location = "Washington";


export async function getWeather(query = "Washington"){
    const FETCH_OPTIONS = {
        url : `https://visual-crossing-weather.p.rapidapi.com/forecast?aggregateHours=24&location=${query}&contentType=json&unitGroup=us&shortColumnNames=0`,
        options : {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '135d5b4671msh603420059cd5293p12e6fdjsne5dbac40c829',
                'X-RapidAPI-Host': 'visual-crossing-weather.p.rapidapi.com'
            }
        }
    };
    
    const response = await fetch(FETCH_OPTIONS.url,FETCH_OPTIONS.options);
    const result = await response.text();
    const data = JSON.parse(result);
    
    const {locations} = data;
    const {currentConditions, address} = locations[Object.keys(locations)[0]];
    const {
        icon,
        temp,
        datetime,
        precip,
        moonphase,
        dew,
        humidity,
    } = currentConditions

    if (response.ok) {
        return {
            address,
            icon,
            temp,
            datetime,
            precip,
            moonphase,
            dew,
            humidity,
        };
    } else {
        throw new Error(values);
    }
}

function handleClick() {
    promise = getWeather();
}