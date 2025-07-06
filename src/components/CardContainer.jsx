import Card from "./Card.jsx"

function CardContainer({data, onClick}) {
    const shuffled = data.slice().sort(() => Math.random() - .5);

    return (
        <div className="card-container">
            {shuffled.map((pokemon) => (
            <Card key={pokemon.id} pokemon={pokemon} onClick={onClick} />
            ))}
        </div>
    );
}

export default CardContainer