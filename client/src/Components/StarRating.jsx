import React from 'react'

const StarRating = ({ rating }) => {
    const stars = []
    for (let i = 0; i < 5; i++){
        if (i <= rating-1)
            stars.push(<i class="fas fa-star"></i>)
        else if (i === Math.ceil(rating)-1 && !Number.isInteger(rating)) 
            stars.push(<i class="fas fa-star-half-alt"></i>)         
        else
            stars.push(<i class="far fa-star"></i>)
    }
    return (
        <>
            {stars}
        </>
    )
}

export default StarRating
