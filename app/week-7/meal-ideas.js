import { useState, useEffect } from "react";


export default function MealIdeas ({ingredient}) {
    const [meals, setMeals] = useState ([]);

    const fetchMealIdeas = async (ingredient) => {
        const response = await fetch (`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
        const data = await response.json ();
        return data.meals;
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

    return (
        <div className="bg-gray-300 p-6 max-w-sm w-full rounded-md shadow-md">
          <h2 className="text-2xl font-bold mb-4 text-center">Meal Ideas</h2>
          <ul className="divide-y divide-gray-200 border border-gray-300 rounded-md p-4">
            {meals.map((meal) => (
              <li key={meal.idMeal} className="p-2">
                <div className="font-bold">{meal.strMeal}</div>
                <img src={meal.strMealThumb} alt={meal.strMeal} className="w-full h-auto mt-2" />
              </li>
            ))}
          </ul>
        </div>
    );
    
}