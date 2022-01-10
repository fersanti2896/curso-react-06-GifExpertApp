import React, {useState, useEffect} from 'react'
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {
    const [images, setImages] = useState([]);

    /* Ejecuta código de manera condicional - useEffect */
    useEffect(() => {
        getGifs();
    }, []);

    const getGifs = async() => {
        const url = 'https://api.giphy.com/v1/gifs/search?q=Shrek&limit=10&api_key=mIKmP6pvCvfLHB6anJ2yXEStStuSFt5W';
        const resp = await fetch(url);
        const { data } = await resp.json();

        /* Extrayendo solo las propiedades del data que nos interesa */
        const gifs = data.map(img => {
            return {
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url
            }
        });

        console.log(gifs);
        /* Enviando la respuesta al estado setImages */
        setImages(gifs);
    }

    return (
        <>
            <h3>{ category }</h3>
            {/* Enviando la coleccion images al componenten GifGridItem para mostrarlos */}
            {
                images.map(img => (
                    <GifGridItem 
                        key = {img.id}
                        { ...img }
                    />
                ))
            }
        </>
    )
}
