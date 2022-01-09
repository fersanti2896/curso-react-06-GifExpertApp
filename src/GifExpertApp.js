import React, { useState } from 'react'

const GifExpertApp = () => {
    // const categories = ['One Punch', 'Pokemon', 'Dragon Ball'];
    const [categories, setCategories] = useState(['One Punch', 'Pokemon', 'Dragon Ball']);

    const handleAdd = () => {
        setCategories([...categories, 'Hunter']);
        /* Otra forma */
        // setCategories(cat => [...cat, 'Hunter']);
    }

    return (
        <>
            <h2>GifExpert App</h2>
            <hr />
            <button onClick={handleAdd}>Agregar</button>
            <ol>
                {
                    categories.map(category => {
                        return <li key = {category}> {category} </li>
                    })
                }
            </ol>
        </>
    );
}

export default GifExpertApp;