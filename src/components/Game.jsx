import "../css/Game.css";

const Game = ({ 
  FuncVerifyLetter, 
  pickedWord, 
  pickedCategory, 
  letters, 
  guessedLetters, 
  wrongLetters, 
  guesses, 
  points 
}) => {
  return (
    <div className="game">
      <p className="points">
        <span>Pontuação: {points} </span>
      </p>
      <h1>Adivinhe a palavra</h1>
      <h3 className="tip">
        Dica sobre a palavra: <span>{pickedCategory}</span>
      </h3>
      <p>Você ainda tem {guesses} tentativa (s)</p>
      <div className="wordContainer">
        <span className="letter">A</span>
        <span className="blankSquare"></span>
      </div>
      <div className="letterContainer">
        <p>Tente advinhar uma letra:</p>
        <form>
          <input type="text" name="letter" maxLength="1" required />
          <button>Jogar!</button>
        </form>
      </div>
      <div className="wrongLettersContainer">
        <p>Letras erradas:</p>
        <span>A, </span>
        <span>B,</span>
        <span>C,</span>
        <span>D,</span>
        <span>E</span>
      </div>
    </div>
  );
};

export default Game;
