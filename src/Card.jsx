import { Link } from "react-router-dom";

const Card = (prop) => {
  return (
    <div
      className=" w-56 border-2  p-5 rounded-md relative h-[310px] flex  items-center flex-col transition 
     duration-200 hover:scale-105 hover:shadow-xl"
    >
      <img src={prop.meal.strMealThumb} className=" w-52 mx-auto rounded-md" />
      <h3 className="text-center my-2">{prop.meal.strMeal}</h3>
      <Link to={`/detail/${prop.meal.idMeal}`}>
        <button className=" bg-blue-800 text-white py-1 px-6 rounded-md absolute  right-[64px] bottom-2">
          Detail
        </button>
      </Link>
    </div>
  );
};

export default Card;
