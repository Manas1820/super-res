import React, { useEffect, useContext } from 'react'
import { useParams } from 'react-router'
import RestaurantFinder from '../api/restaurantFinder'
import StarRating from '../components/StarRating'
import { RestaurantsContext } from '../context/RestaurantsContext'


const Restaurants = () => {
    const { id } = useParams()
    console.log(id)
    const {selectedRestaurant, setSelectedRestaurant} = useContext(RestaurantsContext)
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await RestaurantFinder.get(`/${id}`)
                setSelectedRestaurant(response.data.restaurant)
                console.log(response.data.restaurant)
            }catch(e){console.log(e)}
        }
        fetchData()
    }, [])
    return (
        <div className="container">
            {selectedRestaurant && <StarRating rating={ 3.5 } />}
        </div>
    )
}

export default Restaurants
