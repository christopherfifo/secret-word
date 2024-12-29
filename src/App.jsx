//? css
import "./App.css";

//| react
import { useCallback, useEffect, useState } from "react";

//$ data
import { wordsList } from "./data/WordsList";

//! components
import StartScreen from "./components/StartScreen";
import Game from "./components/Game";
import GameOver from "./components/GameOver";

const stages = [
  { id: 1, name: "start" },
  { id: 2, name: "game" },
  { id: 3, name: "end" },
];

function App() {
  const [gameStage, setGameStage] = useState(stages[0].name);
  const [words] = useState(wordsList);

  const [pickedWord, setPickedWord] = useState("");
  const [pickedCategory, setPickedCategory] = useState("");
  const [letters, setLetters] = useState([]);

  const [guessedLetters, setGuessedLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [guesses, setGuesses] = useState(3);
  const [points, setPoints] = useState(0);

  const pickedWordAndCategory = () => {
    // pick a random word and category
    const categorias = Object.keys(words); //['carros', 'frutas', 'animais'] -  pega as chaves do objeto words e coloca em um array
    const randomCategory =
      categorias[Math.floor(Math.random() * categorias.length)]; // escolhe um entre as chaves do objeto, carros
    console.log(randomCategory);
    // pick a random word from the category
    const word =
      words[randomCategory][
        Math.floor(Math.random() * words[randomCategory].length)
      ]; // [carros] => ['Motor', 'Porta', 'capo'] faz um array associativo e pega um valor aleatório
    console.log(word);

    return { word, randomCategory };
  };

  //- função para começar o jogo
  const startGame = () => {
    const { word, randomCategory } = pickedWordAndCategory();

    // criando um array de letras
    let wordLetters = word.split("");
    wordLetters = wordLetters.map((letter) => letter.toLowerCase());

    setPickedWord(word);
    setPickedCategory(randomCategory);
    setLetters(wordLetters);

    setGameStage(stages[1].name);
  };

  //- process the letter input
  const verifyletter = () => {
    setGameStage(stages[2].name);
  };

  //- restarts the game
  const retry = () => {
    setGameStage(stages[0].name);
  };

  return (
    <>
      <div className="App">
        {gameStage === "start" && <StartScreen FuncStartGame={startGame} />}
        {gameStage === "game" && <Game 
        FuncVerifyLetter={verifyletter} 
        pickedWord= {pickedWord} 
        pickedCategory={pickedCategory} 
        letters = {letters}
        guessedLetters = {guessedLetters}
        wrongLetters = {wrongLetters}
        guesses = {guesses}
        points = {points}
        />}
        {gameStage === "end" && <GameOver FuncRetry={retry} />}
      </div>
    </>
  );
}

export default App;
