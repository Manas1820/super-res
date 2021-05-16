import React from 'react'
import { useParams } from 'react-router'

function UpdateRestaurant() {

    const test = useParams();
    return (
        <div>
            <h1>{test.id}</h1>
        </div>
    )
}

export default UpdateRestaurant
