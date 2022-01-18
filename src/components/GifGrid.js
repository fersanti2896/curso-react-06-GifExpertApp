import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGif'
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {
    const {data: images, loading} = useFetchGifs(category);

    return (
        <>
            <h3>{ category }</h3>
            { loading ? <p>Loading</p> : null }
            <div className="card-grid">
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
