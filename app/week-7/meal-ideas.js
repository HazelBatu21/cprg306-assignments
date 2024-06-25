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

  const handleMealClick = async (mealId) => {
    const meal = await fetchMealDetails(mealId);
    setSelectedMeal(meal);
  };

  return (
    <div className="bg-gray-300 p-6 max-w-full w-full rounded-md shadow-md flex flex-col items-center">
      <h2 className="text-2xl font-bold mb-4 text-center">Meal Ideas</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {meals.map((meal) => (
          <div key={meal.idMeal} className="p-2 cursor-pointer" onClick={() => handleMealClick(meal.idMeal)}>
            <div className="font-bold text-center">{meal.strMeal}</div>
            <img src={meal.strMealThumb} alt={meal.strMeal} className="w-full h-auto mt-2 rounded-md" />
          </div>
        ))}
      </div>
      {selectedMeal && (
        <div className="mt-4 w-full max-w-md">
          <h3 className="text-xl font-bold text-center">{selectedMeal.strMeal}</h3>
          <img src={selectedMeal.strMealThumb} alt={selectedMeal.strMeal} className="w-full h-auto mt-2 rounded-md" />
          <ul className="mt-2">
            {Object.keys(selectedMeal)
              .filter((key) => key.startsWith('strIngredient') && selectedMeal[key])
              .map((key) => (
                <li key={key} className="text-center">{selectedMeal[key]}</li>
              ))}
          </ul>
        </div>
      )}
    </div>
  );
}