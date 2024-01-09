import CreateSong from "../components/CreateSong";
import CreateArtist from "../components/CreateArtist";
import { useNavigate } from "react-router-dom";
export default function Home() {
  const navigate = useNavigate();
  const changePage = (e) => {
    e.preventDefault();
    if (e.target.id == "allSongs") {
      navigate("/allSongs");
    } else {
      navigate("/allArtists");
    }
  };
  return (
    <div className="mb-20">
      <div className="flex flex-col md:flex-auto lg:flex-row mt-14  lg:mt-20 gap-20 lg:gap-0">
        <div className="bg-gradient-to-r from-blue-400 to-purple-400 text-white w-3/4 mx-auto lg:w-1/5 lg:h-auto border rounded-2xl p-6  shadow-lg transition-all duration-500 transform hover:scale-105">
          <h1 className="text-xl">Do you want to list!</h1>
          <h1 className="text-2xl font-semibold">All Songs?</h1>
          <button
            id="allSongs"
            onClick={changePage}
            className="items-center mt-5 px-3 py-1 font-bold border-2 border-white  rounded-lg bg-gradient-to-r from-blue-400 to-purple-400 text-white transition-all duration-500 transform hover:scale-105 hover:bg-gradient-to-r hover:from-blue-400 hover:to-purple-400 hover:text-white"
          >
            Click Me
          </button>
        </div>
        <div className="bg-gradient-to-r from-blue-400 to-purple-400 text-white w-3/4 mx-auto lg:w-1/5 lg:h-auto border rounded-2xl p-6   transition-all duration-500 transform hover:scale-105 shadow-lg">
          <h1 className="text-xl">List Artists with their</h1>
          <h1 className="text-2xl font-semibold">Songs Count?</h1>
          <button
            id="allArtists"
            onClick={changePage}
            className="items-center mt-5 px-3 py-1 font-bold border-2 border-white  rounded-lg bg-gradient-to-r from-blue-400 to-purple-400 text-white transition-all duration-500 transform hover:scale-105 hover:bg-gradient-to-r hover:from-blue-400 hover:to-purple-400 hover:text-white"
          >
            Click here
          </button>
        </div>
        <div className=""></div>
      </div>
      <div className="flex flex-col md:flex-auto lg:flex-row mt-14  lg:mt-20 gap-20 lg:gap-0">
        <CreateSong></CreateSong>
        <CreateArtist></CreateArtist>
      </div>
    </div>
  );
}
