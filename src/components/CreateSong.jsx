import { useState } from "react";
import { toast } from "react-toastify";
import Loader from "../pages/Loader";

export default function CreateSong() {
  const [loading, setLoading] = useState(false);
  const initialFormData = {
    songName: "",
    artistName: "",
  };
  const [formData, setFormData] = useState(initialFormData);
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      console.log(formData);
      if (!formData?.songName || !formData?.artistName) {
        toast.error("Please enter song and the artist name.");
        return;
      }
      setLoading(true);
      const res = await fetch(
        "https://track-tunes-backend.vercel.app/api/song/addSong",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      const data = await res.json();
      setLoading(false);
      if (data.success === false) {
        toast.error(data.message);
        return;
      }
      toast.success("Song added successfully.");
      setFormData(initialFormData);
    } catch (err) {
      toast.error(err.message);
    }
  };
  return (
    <>
      <div className="bg-gradient-to-r from-blue-400 to-purple-400 text-white  w-3/4 mx-auto lg:w-1/5 lg:h-auto border rounded-2xl p-6   transition-all duration-500 transform hover:scale-105 shadow-lg">
        <h1 className="text-xl">Add a Song?</h1>
        <h1 className="text-2xl font-semibold focus:border-collapse">
          Let`s do that.
        </h1>
        <div className="flex flex-col gap-2 md:flex-row lg:flex-col justify-between items-center  mt-4 md:px-20 ">
          <input
            type="text"
            className="w-28 md:w-32  lg:w-28  text-center text-gray-600  border p-1 border-white rounded-md transition duration-200 focus:scale-110"
            placeholder="add title"
            id="songName"
            onChange={handleChange}
            value={formData?.songName}
          ></input>
          <input
            type="text"
            className="w-28 md:w-32 lg:w-28   text-center text-gray-600  border p-1 border-white rounded-md transition duration-200 focus:scale-110 "
            placeholder="add artist"
            id="artistName"
            onChange={handleChange}
            value={formData?.artistName}
          ></input>
        </div>
        <div className="flex  items-center">
          <button
            onClick={handleSubmit}
            className="items-center mx-auto  mt-5 px-3 py-1 font-bold border-2 border-white  rounded-lg bg-gradient-to-r from-blue-400 to-purple-400 text-white transition-all duration-300 transform hover:scale-105 hover:bg-gradient-to-r hover:from-blue-400 hover:to-purple-400 hover:text-white"
          >
            Create Song
          </button>
        </div>
      </div>
      {loading && <Loader></Loader>}
    </>
  );
}
