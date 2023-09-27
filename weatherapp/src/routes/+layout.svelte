<div>
    <slot/>
</div>

<style>
    :global(body){
        background: #fdfdfd;
        display: grid;
        place-content:center;
        min-height: 100vh;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
        Ubuntu, Cantarell,
        "Open Sans", "Helvetica Neue", sans-serifS
    }
    :global(h1,h2,h3,h4,h5){
        margin:0;
    }
    div{
        aspect-ratio: 9 / 16;
        max-width: 500px;
        width: 100%;
        display:block;
        border: 1px solid ;
        box-shadow: 0 0 100px rgba(0,0,0,0.1);
        border-radius: 8px;
        position:relative;
    }
</style>