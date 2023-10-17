import { IoRestaurantOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <Link to={"/"}>
      <div className="flex items-center py-5  gap-3 mb-10">
        <IoRestaurantOutline className="text-3xl  text-pink-500" />
        <p className=" text-2xl ">Foodie</p>
      </div>
    </Link>
  );
};

export default Nav;
