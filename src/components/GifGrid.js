import React, {useState, useEffect} from 'react'
import { GifGridItem } from './GifGridItem';
import { getGifs } from '../helpers/getGifs';

export const GifGrid = ({ category }) => {
    const [images, setImages] = useState([]);

    /* Ejecuta código de manera condicional - useEffect */
    useEffect(() => {
        getGifs(category).then(imgs => setImages(imgs));
    }, [category]);

    return (
        <>
            <h3>{ category }</h3>
            <div className="card-grid">
                {/* Enviando la coleccion images al componenten GifGridItem para mostrarlos */}
                {
                    images.map(img => (
                        <GifGridItem 
                            key = {img.id}
                            { ...img }
                        />
                    ))
                }
            </div>
        </>
    )
}
