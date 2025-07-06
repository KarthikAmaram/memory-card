import { useEffect, useState } from 'react'
import Header from "./components/Header.jsx"
import CardContainer from "./components/CardContainer.jsx"
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

  function onClick(clickedId) {
    const clickedPokemon = data.find(pokemon => pokemon.id === clickedId);
    if (clickedPokemon.clicked === false) {
      const updatedData = data.map(pokemon =>
        pokemon.id === clickedId
          ? { ...pokemon, clicked: true }
          : pokemon
      );
      setData(updatedData);
      setScore(prev => prev + 1);
    } else {
      if (score > bestScore) {
        setBestScore(score);
      }
      const resetData = data.map(pokemon => ({
        ...pokemon,
        clicked: false
      }));
      setScore(0);
      setData(resetData);
    }
  }

  if (!data) return <p>Loading...</p>;

  return (
    <div className='container'>
      <Header score={score} bestScore={bestScore}/>
      <CardContainer data={data} onClick={onClick} />
    </div>
  )


}

export default App
