import { useEffect, useState } from "react";

export default function FoodDetails({ foodId }) {
  const [food, setFood] = useState({});
  const URL = `https://api.spoonacular.com/recipes/${foodId}/information`;
  const API_KEY = "34ac3495e5ba42a3b5882efd42ec84d5";

  useEffect(() => {
    async function fetchFood() {
      const response = await fetch(`${URL}?apiKey=${API_KEY}`);
      const data = await response.json();
      // console.log(data);
      setFood(data);
    }

    fetchFood();
  }, [foodId]);

  return (
    <div>
      Food Details {foodId}
      {food.title}
      <img src={food.image} />
    </div>
  );
}
