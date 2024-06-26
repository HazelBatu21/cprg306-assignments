"use client";

import { useState, useEffect } from "react";

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);
  const [selectedMeal, setSelectedMeal] = useState(null);

  const fetchMealIdeas = async (ingredient) => {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
    const data = await response.json();
    return data.meals;
  };

  //function to fetch meal details
  const fetchMealDetails = async (mealId) => {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`);
    const data = await response.json();
    return data.meals[0];
  };

  useEffect(() => {
    const loadMealIdeas = async () => {
      if (ingredient) {
        const meals = await fetchMealIdeas(ingredient);
        setMeals(meals || []);
      }
    };
    loadMealIdeas();
  }, [ingredient]);

  const handleMealClick = async (mealId) => { // function to handle meal click
    const meal = await fetchMealDetails(mealId);
    setSelectedMeal(meal);
  };

  return (
    <div className="bg-gray-300 p-6 max-w-lg w-full rounded-md shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-center">Meal Ideas</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {meals.map((meal) => (
          <div
            key={meal.idMeal}
            className="cursor-pointer"
            onClick={() => handleMealClick(meal.idMeal)}
          >
            <div className="font-bold text-center">{meal.strMeal}</div>
            <img src={meal.strMealThumb} alt={meal.strMeal} className="w-full h-auto mt-2" />
          </div>
        ))}
      </div>
      {selectedMeal && (
        <div className="mt-6">
          <h3 className="text-xl font-bold mb-2 text-center">{selectedMeal.strMeal}</h3>
          <img src={selectedMeal.strMealThumb} alt={selectedMeal.strMeal} className="w-full h-auto mb-4" />
          <h4 className="text-lg font-semibold mb-2">Ingredients:</h4>
          <ul>
            {Object.keys(selectedMeal)
              .filter((key) => key.startsWith("strIngredient") && selectedMeal[key])
              .map((key) => (
                <li key={key}>
                  {selectedMeal[key]} - {selectedMeal[`strMeasure${key.slice(13)}`]}
                </li>
              ))}
          </ul>
        </div>
      )}
    </div>
  );
}