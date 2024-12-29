import'../css/GameOver.css'

const GameOver = ({FuncRetry}) => {
  return (
    <div>
      <h1>Game Over</h1>

      <button onClick={FuncRetry}>Restart</button>
      </div>
  )
}

export default GameOver