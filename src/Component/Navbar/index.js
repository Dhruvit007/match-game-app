import './index.css'

const Navbar = props => {
  const {score, remainingTime} = props
  return (
    <ul className="navbar-container">
      <li className="website-logo-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
          alt="website logo"
          className="website-logo"
        />
      </li>
      <li className="navbar-score-container">
        <p className="navbar-score">
          Score: <span className="score">{score}</span>
        </p>
        <div className="navbar-timer-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
            alt="timer"
            className="timer-image"
          />
          <p className="timer-sec">{remainingTime} sec</p>
        </div>
      </li>
    </ul>
  )
}

export default Navbar
