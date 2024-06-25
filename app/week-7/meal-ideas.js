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
    <div className="bg-gray-300 p-6 max-w-sm w-full rounded-md shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-center">Meal Ideas</h2>
      <ul className="divide-y divide-gray-200 border border-gray-300 rounded-md p-4">
        {meals.map((meal) => (
          <li key={meal.idMeal} className="p-2 cursor-pointer" onClick={() => handleMealClick(meal.idMeal)}>
            <div className="font-bold">{meal.strMeal}</div>
            <img src={meal.strMealThumb} alt={meal.strMeal} className="w-full h-auto mt-2" />
          </li>
        ))}
      </ul>
      {selectedMeal && (
        <div className="mt-4">
          <h3 className="text-xl font-bold">{selectedMeal.strMeal}</h3>
          <img src={selectedMeal.strMealThumb} alt={selectedMeal.strMeal} className="w-full h-auto mt-2" />
          <ul className="mt-2">
            {Object.keys(selectedMeal)
              .filter((key) => key.startsWith('strIngredient') && selectedMeal[key])
              .map((key) => (
                <li key={key}>{selectedMeal[key]}</li>
              ))}
          </ul>
        </div>
      )}
    </div>
  );
}
