import React, { useEffect, useContext } from 'react'
import { useParams } from 'react-router'
import RestaurantFinder from '../api/restaurantFinder'
import AddReview from '../components/AddReview'
import Review from '../components/Review'
import { RestaurantsContext } from '../context/RestaurantsContext'


const Restaurants = () => {
    const { id } = useParams()
    console.log(id)
    const {selectedRestaurant, setSelectedRestaurant} = useContext(RestaurantsContext)
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await RestaurantFinder.get(`/${id}`)
                setSelectedRestaurant(response.data)
                console.log(response.data)
            }catch(e){console.log(e)}
        }
        fetchData()
    }, [])
    return (
        <div className="container">{selectedRestaurant && (
            <>
                <h1>{selectedRestaurant.restaurant.name}</h1>
                <div className="mt-3">
                    <Review reviews={ selectedRestaurant.reviews }/>
                </div >
                
                <div className="mt-3">
                    <AddReview />
                </div>
            </>
        )}
            
        </div>)
}

export default Restaurants
