import { useEffect, useState } from "react"
import { getGifs } from '../helpers/getGifs'

export const useFetchGifs = (category) => {
    const [state, setState] = useState({
        data: [], 
        loading: true
    });

    useEffect(() => {
        /* Se importa la función que llama a la API y devuelve una promesa */
        getGifs(category)
            .then(imgs => setState({
                data: imgs,
                loading: false
            }))
    }, [category]);
    
    return state;
}