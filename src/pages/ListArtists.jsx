import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Loader from "./Loader";

export default function ListArtists() {
  const [artists, setArtists] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchArtists = async () => {
      try {
        setLoading(true);
        const res = await fetch(
          "https://track-tunes-backend.vercel.app/api/artist/getArtistsSongsCount",
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
        setArtists([...data]);
      } catch (err) {
        toast.error(err.message);
      }
    };
    fetchArtists();
  }, []);
  console.log(artists);
  return (
    <div>
      {!loading ? (
        <div>
          <h1 className="flex justify-center  text-2xl md:text-3xl lg:text-4xl font-semibold items-center mx-auto    text-blue-700 px-6 mt-10 md:mt20">
            Artists with their songs count.
          </h1>
          <div className="flex flex-col gap-4 md:justify-between mt-10 mx-4 lg:mx-10 md:flex-row md:flex-wrap ">
            {artists.map((artist, cnt) => {
              return (
                <div
                  key={cnt}
                  className="flex flex-row justify-between items-center bg-gradient-to-r from-blue-500 to-purple-500 shadow-md rounded-md p-2 text-white cursor-pointer transition duration-300 hover:scale-105 md:w-1/4 lg:w-2/7 py-2 px-6"
                >
                  <h1 className="text-lg font-semibold">{`${artist.name
                    .charAt(0)
                    .toUpperCase()}${artist.name.slice(1)}`}</h1>
                  <h1 className="text-lg font-semibold">{artist.songsCount}</h1>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <>
          {/* <p className="flex justify-center  text-2xl md:text-3xl lg:text-4xl font-semibold items-center mx-auto    text-blue-700 px-6 mt-10 md:mt20">
            Loading please wait.
          </p> */}
          <Loader></Loader>
        </>
      )}
    </div>
  );
}
