import './index.css'

const GameOver = props => {
  const {score, onReplay} = props
  return (
    <div className="game-over-bg-container">
      <div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png"
          alt="trophy"
          className="trophy"
        />
        <p className="score-a">YOUR SCORE</p>
        <p className="score-a">{score}</p>
        <div className="reset-btn-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png"
            alt="reset"
          />
          <button className="play-again-btn" onClick={onReplay} type="button">
            PLAY AGAIN
          </button>
        </div>
      </div>
    </div>
  )
}

export default GameOver
