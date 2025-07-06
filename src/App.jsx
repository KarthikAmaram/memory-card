import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [data, setData] = useState(null)

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
            id: id
          }
        })
        setData(pokemonArray)
      } catch (err) {
        console.error("Fetch error:", err);
      }
    };

    fetchData();
  }, [])

}

export default App
