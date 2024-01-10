import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export default function ListSongs() {
  const [songs, setSongs] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchSongs = async () => {
      try {
        setLoading(true);
        const res = await fetch(
          "https://track-tunes-backend.vercel.app/api/song/getAllSongs",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const data = await res.json();
        setLoading(false);
        if (data.success === false) {
          toast.error(data.message);
          return;
        }
        setSongs([...data]);
      } catch (err) {
        toast.error(err.message);
      }
    };
    fetchSongs();
  }, []);
  console.log(songs);
  return (
    <div>
      {loading ? (
        <p className="flex justify-center  text-2xl md:text-3xl lg:text-4xl font-semibold items-center mx-auto    text-blue-700 px-6 mt-10 md:mt20">
          Loading please wait.
        </p>
      ) : (
        <div>
          <h1 className="flex justify-center  text-2xl md:text-3xl lg:text-4xl font-semibold items-center mx-auto    text-blue-700 px-6 mt-10 md:mt20">
            Songs with their composed artists.
          </h1>
          <div className="flex flex-col gap-4 md:justify-between mt-10 mx-4 lg:mx-10 md:flex-row md:flex-wrap ">
            {songs.map((song, cnt) => {
              return (
                <div
                  key={cnt}
                  className="flex flex-row justify-between items-center bg-gradient-to-r from-blue-500 to-purple-500 shadow-md rounded-md p-2 text-white cursor-pointer transition duration-300 hover:scale-105 md:w-1/4 lg:w-2/7 py-2 px-6"
                >
                  <h1 className="text-lg font-semibold">{`${song.name
                    .charAt(0)
                    .toUpperCase()}${song.name.slice(1)}`}</h1>
                  <h1 className="text-lg font-semibold">{song.artist}</h1>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
