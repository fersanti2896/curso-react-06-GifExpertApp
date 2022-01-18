import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = () => {
    const [categories, setCategories] = useState(['Dr. House']);

    // const handleAdd = () => {
    //     setCategories([...categories, 'Hunter']);
    //     /* Otra forma */
    //     // setCategories(cat => [...cat, 'Hunter']);
    // }

    return (
        <>
            <h2>GifExpert App</h2>
            <AddCategory setCategories = {setCategories}/>
            <hr />
            <ol>
                {
                    categories.map(category => (
                        <GifGrid 
                            key = {category}
                            category = {category}
                        />
                    ))
                }
            </ol>
        </>
    );
}

export default GifExpertApp;