import React, { useState, useEffect } from 'react';

function App() {

    const [image, setImage] = useState("")
    const [isLoaded, setIsLoaded] = useState(false)
    
    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
            .then(r => r.json())
            .then(data => setImage(data.message))
            .then(data => setIsLoaded(true))
        
    }, [])

    
    return (
        <div>
        {!isLoaded ? <p>Loading...</p> : <img alt="A Random Dog" src={image}></img>}
        </div>
    )
}

export default App;
