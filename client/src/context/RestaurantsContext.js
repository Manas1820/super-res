import React, { useState, createContext } from "react";

export const RestaurantsContext = createContext();

export const RestaurantsContextProvider = (props) => {
    const [restaurants, setRestaurants] = useState([]) //  restaurants is the name of restaurants fetched from backend
    // setRestaurants is the function initially set to empty 
    const addRestaurants = (restaurant) => {
        setRestaurants([...restaurants, restaurant])
    }
    return (
        <RestaurantsContext.Provider value={{ restaurants, setRestaurants, addRestaurants }}>
            {props.children}
        </RestaurantsContext.Provider>
    )
}