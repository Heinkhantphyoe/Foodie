import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BsYoutube } from "react-icons/bs";
import Loader from "./Loader";

const Detail = () => {
  const { id } = useParams();
  const [meal, setMeal] = useState("");
  const [Loading, isLoading] = useState(true);

  const getSingleMeal = () => {
    axios
      .get(`https://themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((res) => {
        setMeal(res.data.meals[0]);
        isLoading(false)
      });
  };

  useEffect(() => {
    getSingleMeal();
  }, []);

  return (
    <>
      {Loading ? (
        <Loader />
      ) : (
        <div className=" rounded-md p-3">
          <img src={meal.strMealThumb} className=" w-72 rounded-md " />
          <p className=" bg-red-500 text-white w-20 rounded-md text-center my-3">
            {meal.strCategory}
          </p>
          <p className="font-bold">{meal.strMeal}</p>
          <div className="mt-2">
            <h2 className="text-gray-900">Instruction</h2>
            <p className="mt-1 text-gray-700 tracking-wide">
              {meal.strInstructions}
            </p>
          </div>
          <div className="flex items-center my-3 gap-3">
            <a href={meal.strYoutube} target="_blank ">
              <BsYoutube className=" text-red-500 text-5xl" />
            </a>
            <p className=" text-gray-700">Watch on Youtube</p>
          </div>
        </div>
      )}
    </>
  );
};

export default Detail;
