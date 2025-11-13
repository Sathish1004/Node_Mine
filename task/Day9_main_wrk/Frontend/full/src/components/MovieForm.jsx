import { useState } from "react";
import axios from "axios";

const MovieForm = ({ onAdd }) => {
  const [movie, setMovie] = useState({
    title: "",
    genre: "",
    year: "",
    rating: ""
  });

  const handleChange = (e) => {
    setMovie({ ...movie, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:3000/api/auth/movies", movie);
      onAdd(res.data);
      setMovie({ title: "", genre: "", year: "", rating: "" });
      alert("Movie added successfully!");
    } catch (err) {
      console.error(err);
      alert("Error  while adding movie!");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-gray-100 rounded-lg shadow-md mb-4">
      <h2 className="text-xl font-semibold mb-2">Add Movie</h2>
      <input name="title" placeholder="Title" value={movie.title} onChange={handleChange} className="border p-2 w-full mb-2" />
      <input name="genre" placeholder="Genre" value={movie.genre} onChange={handleChange} className="border p-2 w-full mb-2" />
      <input name="year" placeholder="Year" value={movie.year} onChange={handleChange} className="border p-2 w-full mb-2" />
      <input name="rating" placeholder="Rating" value={movie.rating} onChange={handleChange} className="border p-2 w-full mb-2" />
      <button className="bg-blue-500 text-white px-4 py-2 rounded">Add</button>
    </form>
  );
};

export default MovieForm;
