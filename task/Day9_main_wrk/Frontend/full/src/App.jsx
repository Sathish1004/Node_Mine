import React, { useEffect, useState } from "react";
import axios from "axios";
import MovieForm from "./components/MovieForm";
import MovieTable from "./components/MovieTable";

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const res = await axios.get("http://localhost:3000/api/auth/movies");
        setMovies(Array.isArray(res.data) ? res.data : []);
      } catch (err) {
        console.error("Failed to fetch movies:", err);
        setMovies([]);
      }
    };

    fetchMovies();
  }, []);

  const handleAdd = (newMovie) => {
    setMovies((prev) => [...prev, newMovie]);
  };

  return (
    <div className="p-6">
      <MovieForm onAdd={handleAdd} />
      <MovieTable movies={movies} />
    </div>
  );
}

export default App;
import React, { useEffect, useState } from "react";
import axios from "axios";
import MovieForm from "./components/MovieForm";
import MovieTable from "./components/MovieTable";

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const res = await axios.get("http://localhost:3000/api/auth/movies");
        setMovies(Array.isArray(res.data) ? res.data : []);
      } catch (err) {
        console.error("Failed to fetch movies:", err);
        setMovies([]);
      }
    };

    fetchMovies();
  }, []);

  const handleAdd = (newMovie) => {
    setMovies((prev) => [...prev, newMovie]);
  };

  return (
    <div className="p-6">
      <MovieForm onAdd={handleAdd} />
      <MovieTable movies={movies} />
    </div>
  );
}

export default App;
import { useEffect, useState } from "react";
import axios from "axios";
import MovieForm from "./components/MovieForm";
import MovieTable from "./components/MovieTable";


function App() {
  const [movies, setMovies] = useState([]);

  const fetchMovies = async () => {
    try {
      const res = await axios.get("http://localhost:3000/api/auth/movies");
      setMovies(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  const handleAdd = (newMovie) => {
    setMovies((prev) => [...prev, newMovie]);
  };

  return (
    <div className="p-6">
      <MovieForm onAdd={handleAdd} />
      <MovieTable movies={movies} />
    </div>
  );
}

export default App;
