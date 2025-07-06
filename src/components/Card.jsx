function Card({pokemon, onClick}) {
    const imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`;

    return (
        <div className="card" onClick={() => onClick(pokemon.id)}>
            <img src={imgUrl} alt={pokemon.name} />
            <br></br>
            <span>{pokemon.name}</span>
        </div>
    )

}

export default Card