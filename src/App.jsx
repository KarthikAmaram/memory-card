import { useEffect, useState } from 'react'
import Header from "./components/Header.jsx"
import './App.css'

function App() {
  const [data, setData] = useState(null)
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=12");
        const json = await res.json();
        const pokemonArray = json.results.map((pokemon) => {
          const url = pokemon.url;
          const parts = url.split("/");
          const id = parts[parts.length - 2];
          return {
            name: pokemon.name,
            id: id,
            clicked: false
          }
        })
        setData(pokemonArray)
      } catch (err) {
        console.error("Fetch error:", err);
      }
    };

    fetchData();
  }, [])

  return (
    <Header score={score} bestScore={bestScore}/>

  )


}

export default App
