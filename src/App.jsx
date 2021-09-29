import React from "react";
import { useState, useEffect } from "react";

const App = () => {
  const [userChoice, setUserChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState(null);
  const choices = ["rock", "paper", "scissors"];

  const click = (choice) => {
    setUserChoice(choice);
    computerRandomChoice();
  };

  const computerRandomChoice = () => {
    const randomChoice = choices[Math.floor(Math.random() * choices.length)];
    setComputerChoice(randomChoice);
  };

  useEffect(() => {       
    switch(userChoice + computerChoice) {          
      case "scissorpaper":
      case "paperrock":
      case "rockscissor":            
        setResult("You Won!");
        break;
      case "paperscissor":
      case "scissorrock":
      case "rockpaper":
        setResult("Computer Won!");
        break;
      case "rockrock":
      case "paperpaper":
      case "scissorscissor":
        setResult("It is a draw! Try again!");
        break;
    }    
  }, [userChoice, computerChoice]);

 

  return (
    <div>
      <h1>You chose: {userChoice}</h1>
      
      <h1>Computer chose: {computerChoice}</h1>
      {choices.map((choice) => (
        <button key={choice} onClick={() => click(choice)}>
          {choice}
        </button>
      ))}
      <h1>Result: {result}</h1>
    </div>
  );
};

export default App;
