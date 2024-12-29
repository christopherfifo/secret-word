import "../css/StartScreen.css"

const StartScreen = ({FuncStartGame}) => {
  return (
    <div className="start">
        <h1>Secret Words</h1>
        <p>Clique no botão abaixo para começar a jogar</p>
        <button onClick={FuncStartGame}>Começar o Jogo</button>
    </div>
  )
}

export default StartScreen