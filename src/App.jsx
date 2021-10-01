import React from "react"
import { useState, useEffect } from "react"

const App = () => {
  const [userWeapon, setUserWeapon] = useState(null)
  const [computerWeapon, setComputerWeapon] = useState(null)
  const [result, setResult] = useState(null)
  const [endResult, setEndResult] = useState(null)
  const [userCounter, setUserCounter] = useState(0)
  const [computerCounter, setComputerCounter] = useState(0)
  const weapons = ["Rock", "Paper", "Scissors"]

  const click = (weapon) => {
    setUserWeapon(weapon)
    randomWeaponGenerator()
  }

  const randomWeaponGenerator = () => {
    const randomWeapon = weapons[Math.floor(Math.random() * weapons.length)]
    setComputerWeapon(randomWeapon)
  }

  useEffect(() => {
    switch (userWeapon + computerWeapon) {
      case "ScissorPaper":
      case "PaperRock":
      case "RockScissor":
        setResult("You Won!")
        setUserCounter(userCounter + 1)
        break
      case "PaperScissor":
      case "ScissorRock":
      case "RockPaper":
        setResult("Computer Won!")
        setComputerCounter(computerCounter + 1)
        break
      case "RockRock":
      case "PaperPaper":
      case "ScissorScissor":
        setResult("It is a draw! Try again!")
        break
    }

    if (userCounter == 5) {
      return setEndResult("You've reached five points first and won!")
    } else if (computerCounter == 5) {      
      return setEndResult("The computer reached 5 points first and you lost!")
    } else if (userCounter >= 5 || computerCounter >= 5) {
      setUserCounter((userCounter - userCounter))
      setComputerCounter((computerCounter - computerCounter))
      return setEndResult(" ")
    }
  }, [userWeapon, computerWeapon])

  return (
    <>
      <h1 data-cy="header">
        Let's play Rock Paper Scissors, first who get 5 points win!
      </h1>
      <div>
        <h1 data-cy="user">Your choice: {userWeapon}</h1>

        <h1 data-cy="computer">Computers choice: {computerWeapon}</h1>
        {weapons.map((value, index) => (
          <button
            className="weaponButton"
            data-cy={"buttonNr: ${index}"}
            key={index}
            onClick={() => click(value)}
          >
            {value}
          </button>
        ))}
        <h1 data-cy="results">
          Result: {result}
          <br />
          Your points: {userCounter}
          <br />
          Computers points: {computerCounter}
        </h1>
        <h1>The end result: {endResult}</h1>
        <button
          className="weaponButton"
          data-cy={"resetButton"}
          onClick={() => {
            setUserCounter((userCounter - userCounter))
            setComputerCounter((computerCounter - computerCounter))
            setEndResult(" ")
          }}
        >
          RESET
        </button>
      </div>
    </>
  )
}

export default App
