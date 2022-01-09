import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';

const GifExpertApp = () => {
    const [categories, setCategories] = useState(['One Punch', 'Pokemon', 'Dragon Ball']);

    // const handleAdd = () => {
    //     setCategories([...categories, 'Hunter']);
    //     /* Otra forma */
    //     // setCategories(cat => [...cat, 'Hunter']);
    // }

    return (
        <>
            <h2>GifExpert App</h2>
            <AddCategory/>
            <hr />
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