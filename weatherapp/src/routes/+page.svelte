<script>
    import {getWeather} from "../services/weather.js";
    const weatherPromise = getWeather("BuenosAires");
</script>


{#await weatherPromise}
	<p>...waiting</p>
{:then resp}
    <section>
        <h1>{resp.address.split(",")[0]}</h1>
        <h2>{resp.temp}</h2>
        <p>day: {resp.icon}</p>
        <p>datetime: {resp.datetime}</p>
        <p>precip: {resp.precip}</p>
        <p>moonphase: {resp.moonphase}</p>
        <h3>dew: {resp.dew}</h3>
        <p>humidity: {resp.humidity}</p>
    </section>
{:catch error}
	<p style="color: red">{error.message}</p>
{/await}

<style>
    section{
        padding: 16px;
    }
    h1{
        font-weight: 300;
        color: #333;
        text-transform: uppercase;
        padding: 16px 0 0 0;
    }
    h2{
        font-weight: 300;
        font-size: 120px;
        color: #333;
        text-transform: uppercase;
        padding: 0;
    }
    h3{
        font-weight: 400;
        transform: rotate(-90deg);
        position:absolute;
        top: 125px;
        right: 0px;
    }
</style>


