import React, { useState, createContext } from "react";

export const RestaurantsContext = createContext();

export const RestaurantsContextProvider = (props) => {
    const [restaurants, setRestaurants] = useState([]) //  restaurants is the name of restaurants fetched from backend
    const [selectedRestaurant, setSelectedRestaurant] = useState(null)
    // setRestaurants is the function initially set to empty 
    const addRestaurants = (restaurant) => {
        setRestaurants([...restaurants, restaurant])
    }
    return (
        <RestaurantsContext.Provider value={{
            restaurants, setRestaurants, addRestaurants,
            selectedRestaurant, setSelectedRestaurant
        }}>
            {props.children}
        </RestaurantsContext.Provider>
    )
}