import React, { useEffect, useState } from "react";

function RestaurantList() {
    const [restaurants, setRestaurants] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/restaurants")
            .then(res => res.json())
            .then(data => setRestaurants(data));
    }, []);

    return (
        <div>
            <h2>Restaurants</h2>
            <ul>
                {restaurants.map(restaurant => (
                    <li key={restaurant.id}>{restaurant.name}</li>
                ))}
            </ul>
        </div>
    );
}

export default RestaurantList;
