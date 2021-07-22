import React, { useState } from "react";
import { spicyFoods, getNewSpicyFood } from "../data";

function SpicyFoodList() {
  const [foods, setFoods] = useState(spicyFoods);
  const [cuisine, setCuisine] = useState("All")

  function handleAddFood() {
    const newFood = getNewSpicyFood();
    const newArray = [newFood, ...foods]
    setFoods(newArray)
  }

  function handleClick(id){
    const newArray = foods.map((food) => {
      if(food.id === id){
        return {...food, heatLevel: food.heatLevel + 1}
      }
      return food
    })
    console.log(newArray)
    setFoods(newArray)
  }

  function handleChange(event){
    setCuisine(event.target.value)
  }
  const filteredFoodsList = cuisine === "All" ? foods : foods.filter( (food) => food.cuisine === cuisine)

  const foodsList = filteredFoodsList.map((food) => {
    return <li key = {food.id} onClick={()=>handleClick(food.id)}>{food.name}</li>
  })
  return (
    <div>
      <button onClick={handleAddFood}>Add New Food</button>
      <select name="filter" onChange={handleChange}>
        <option value="All">All</option>
        <option value="American">American</option>
        <option value="Sichuan">Sichuan</option>
        <option value="Thai">Thai</option>
        <option value="Mexican">Mexican</option>
      </select>
      <ul>{foodsList}
      </ul>
    </div>
  );
}

export default SpicyFoodList;
