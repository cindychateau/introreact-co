import React, {useState, useEffect} from 'react';

const ComponenteApi = () => {

    const [imagen, setImagen] = useState('');

    const [clicks, setClicks] = useState(0);
    const [clicks2, setClicks2] = useState(0);

    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
            .then(response => response.json())
            .then(responseJson =>{
                let img = responseJson.message;
                setImagen(img);
            })
    }, [clicks])

    const hizoClick = () => {
        setClicks(clicks+1);
    }

    const hizoClick2 = () => {
        setClicks2(clicks2+1);
    }

    return(
        <div>
            <img src={imagen} className='img-fluid' alt="perrito" />
            Haz pedido un nuevo perrito {clicks} veces
            <button className='btn btn-primary' onClick={hizoClick}>Nuevo Perrito</button>
            <button className='btn btn-danger' onClick={hizoClick2}>Nuevo Perrito</button>
        </div>
    )

}

export default ComponenteApi;