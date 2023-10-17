import axios from "axios";
import { useEffect, useState } from "react";
import Card from "./Card";
import Loader from "./Loader";

const Meals = () => {
  const [meals, setMeals] = useState([]);
  const [loading, isLoading] = useState(true);

  const getMeals = () => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
      .then((res) => {
        setMeals(res.data.meals);
        isLoading(false);
      });
  };

  useEffect(() => {
    getMeals();
  }, []);

  return (
    <>
      {loading ? (
        <Loader/>
      ) : (
        <div className="flex flex-wrap gap-4 justify-center">
          {meals && meals.map((meal) => <Card key={meal.idMeal} meal={meal} />)}
        </div>
      )}
    </>
  );
};

export default Meals;
