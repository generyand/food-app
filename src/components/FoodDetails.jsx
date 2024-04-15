import { useEffect, useState } from "react";

export default function FoodDetails({ foodId }) {
  const [food, setFood] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const URL = `https://api.spoonacular.com/recipes/${foodId}/information`;
  const API_KEY = "34ac3495e5ba42a3b5882efd42ec84d5";

  useEffect(() => {
    async function fetchFood() {
      const response = await fetch(`${URL}?apiKey=${API_KEY}`);
      const data = await response.json();
      // console.log(data);
      setFood(data);
      console.log(data);
      setIsLoading(false);
    }
    fetchFood();
  }, [foodId]);

  return (
    <div>
      <div>
        <h1>{food.title}</h1>

        <img src={food.image} />
        <div>
          <span>
            <strong>⌚ {food.readyInMinutes} Minutes</strong>
          </span>
          <span>👪 Serves {food.servings} </span>
          <span>{food.vegetarian ? "🥕 Vegetarian" : "🥩 Non-Vegetarian"}</span>
          <span>{food.vegan ? "🐮 Vegan" : ""}</span>
        </div>
        <div>
          $ <span>{food.pricePerServing / 100} Per Serving</span>
        </div>
      </div>

      <div>
        <h2>Instructions</h2>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          food.analyzedInstructions[0].steps.map((steps) => (
            <li key={steps.number}>{steps.step}</li>
          ))
        )}
      </div>
    </div>
  );
}
