import React, { useState, useContext } from 'react'
import RestaurantFinder from '../api/restaurantFinder'
import { RestaurantsContext } from "../context/RestaurantsContext";


const AddRestaurant = () => {
  const { addRestaurants } = useContext(RestaurantsContext);
  const [name, setName] = useState("")
  const [location,setLocation] = useState("")
  const [price, setPrice] = useState("Price Range")
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await RestaurantFinder.post("/", {
        name,
        location,
        price,
      });
      console.log(response.data);
      addRestaurants(response.data.restaurant);
    } catch (err) {
      console.log(err);
    }
  };

    return (
    <div className="mt-4 mb-4">
      <form action="">
        <div className="form-row">
          <div className="col">
              <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              className="form-control"
              placeholder="name"
            />
          </div>
          <div className="col">
              <input
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="form-control"
              type="text"
              placeholder="location"
            />
          </div>
          <div className="col">
              <select
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="custom-select mr-sm-2"
            >
              <option disabled>Price Range</option>
              <option value="1">$1</option>
              <option value="2">$2</option>
              <option value="3">$3</option>
              <option value="4">$4</option>
              <option value="5">$5</option>
            </select>
          </div>
            <button
            onClick={handleSubmit}
            type="submit"
            className="btn btn-primary"
          >
            Add
          </button>
        </div>
      </form>
    </div>

    );
}

export default AddRestaurant
