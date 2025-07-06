function Header({score, bestScore}) {
    return (
        <div className="header">
            <h1>Pokemon Memory Game</h1>
            <div className="scores">
                <p>{score}</p>
                <p>{bestScore}</p>
            </div>
        </div>

    )
}

export default Header