import { useState } from "react";
import { toast } from "react-toastify";

export default function CreateArtist() {
  const initialFormData = {
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
      if (!formData?.artistName) {
        toast.error("Please enter artist name.");
        return;
      }
      const res = await fetch(
        "https://track-tunes-backend.vercel.app/api/artist/addArtist",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      const data = await res.json();
      if (data.success === false) {
        toast.error(data.message);
        return;
      }
      toast.success("Artist added successfully.");
      setFormData(initialFormData);
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <div className="bg-gradient-to-r from-blue-400 to-purple-400 text-white w-3/4 mx-auto lg:w-1/5 lg:h-auto border rounded-2xl p-6   transition-all duration-500 transform hover:scale-105 shadow-lg">
      <h1 className="text-xl">Want to create Artist?</h1>
      <h1 className="text-2xl font-semibold">Let`s do that.</h1>
      <div className="flex justify-center">
        <input
          type="text"
          className="w-28 text-center text-gray-600 p-1 border rounded-md mt-4 transition duration-200 focus:scale-110"
          placeholder="artist name"
          id="artistName"
          value={formData?.artistName}
          onChange={handleChange}
        ></input>
      </div>
      <div className="flex justify-center">
        <button
          onClick={handleSubmit}
          className="items-center mt-5 px-3 py-1 font-bold border-2 border-white  rounded-md bg-gradient-to-r from-blue-400 to-purple-400 text-white transition-all duration-500 transform hover:scale-105 hover:bg-gradient-to-r hover:from-blue-400 hover:to-purple-400 hover:text-white"
        >
          Create Artist
        </button>
      </div>
    </div>
  );
}
