import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-500 shadow-md">
      <div className="flex flex-row justify-between max-auto text-white items-center py-5 md:px-20 lg:px-32 px-5">
        <h1 className="font-bold text-xl md:text-2xl lg:text-3xl cursor-pointer flex items-center">
          TuneTracks{" "}
          <FontAwesomeIcon
            className="ml-2 lg:ml-6 w-6 items-center"
            icon={faMusic}
          />
        </h1>
        <ul className="flex gap-4 md:gap-6 lg:gap-14">
          <li className="cursor-pointer  hover:underline lg:text-xl transition duration-200 hover:scale-110 ">
            <Link to="/">Home</Link>
          </li>
          <li className="cursor-pointer   hover:underline lg:text-xl transition duration-200 hover:scale-110 ">
            About
          </li>
        </ul>
      </div>
    </div>
  );
}
