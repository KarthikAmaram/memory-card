import "../styles/Header.css"

function Header({score, bestScore}) {
    return (
        <div className="header">
            <h1>Pokemon Memory Game</h1>
            <div className="scores">
                <p>Score: {score}</p>
                <p>Best Score: {bestScore}</p>
            </div>
        </div>

    )
}

export default Header