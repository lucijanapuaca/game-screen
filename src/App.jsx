import { useState } from 'react'
import Date from './components/Date'
import Timer from './components/Timer'
import hajdukLogo from './assets/hajduk-logo.png'
import dinamoLogo from './assets/dinamo-logo.png'
import './App.css'

function App() {
  const [counters, setCounters] = useState({ hajdukGoals: 0, dinamoGoals: 0 });
  const [currentDate, setCurrentDate] = useState(Date());
  const [shots, setShots] = useState({ hajdukShots: 0, dinamoShots: 0 });
  const [cards, setCards] = useState({ hajdukCards: 0, dinamoCards: 0 });
  const [offsides, setOffsides] = useState({ hajdukOffsides: 0, dinamoOffsides: 0 });
  const [corners, setCorners] = useState({ hajdukCorners: 0, dinamoCorners: 0 });

  function goalHajduk() {
    const goal = {
      hajdukGoals: counters.hajdukGoals + 1,
      dinamoGoals: counters.dinamoGoals
    }

    setCounters(goal)
  }

  function goalDinamo() {
    const goal = {
      hajdukGoals: counters.hajdukGoals,
      dinamoGoals: counters.dinamoGoals + 1
    }

    setCounters(goal)
  }

  function noGoalHajduk() {
    if (counters.hajdukGoals == 0)
      return;

    const goal = {
      hajdukGoals: counters.hajdukGoals - 1,
      dinamoGoals: counters.dinamoGoals
    }

    setCounters(goal)
  }

  function noGoalDinamo() {
    if (counters.dinamoGoals == 0)
      return;

    const goal = {
      hajdukGoals: counters.hajdukGoals,
      dinamoGoals: counters.dinamoGoals - 1
    }

    setCounters(goal)
  }

  function resetButton() {
    const goal = {
      hajdukGoals: 0,
      dinamoGoals: 0
    }

    setCounters(goal)
  }

  function shotHajduk() {
    const shot = {
      hajdukShots: shots.hajdukShots + 1,
      dinamoShots: shots.dinamoShots
    }

    setShots(shot)
  }

  function shotDinamo() {
    const shot = {
      hajdukShots: shots.hajdukShots,
      dinamoShots: shots.dinamoShots + 1
    }

    setShots(shot)
  }

  function noShotHajduk() {
    if (shots.hajdukShots == 0)
      return;

    const shot = {
      hajdukShots: shots.hajdukShots - 1,
      dinamoShots: shots.dinamoShots
    }

    setShots(shot)
  }

  function noShotDinamo() {
    if (shots.dinamoShots == 0)
      return;

    const shot = {
      hajdukShots: shots.hajdukShots,
      dinamoShots: shots.dinamoShots - 1
    }

    setShots(shot)
  }

  function cornerHajduk() {
    const corner = {
      hajdukCorners: corners.hajdukCorners + 1,
      dinamoCorners: corners.dinamoCorners
    }

    setCorners(corner)
  }

  function cornerDinamo() {
    const corner = {
      hajdukCorners: corners.hajdukCorners,
      dinamoCorners: corners.dinamoCorners + 1
    }

    setCorners(corner)
  }

  function noCornerHajduk() {
    if (corners.hajdukCorners == 0)
      return;

    const corner = {
      hajdukCorners: corners.hajdukCorners - 1,
      dinamoCorners: corners.dinamoCorners
    }

    setCorners(corner)
  }

  function noCornerDinamo() {
    if (corners.dinamoCorners == 0)
      return;

    const corner = {
      hajdukCorners: corners.hajdukCorners,
      dinamoCorners: corners.dinamoCorners - 1
    }

    setCorners(corner)
  }

  function cardHajduk() {
    const card = {
      hajdukCards: cards.hajdukCards + 1,
      dinamoCards: cards.dinamoCards
    }

    setCards(card)
  }

  function cardDinamo() {
    const card = {
      hajdukCards: cards.hajdukCards,
      dinamoCards: cards.dinamoCards + 1
    }

    setCards(card)
  }

  function noCardHajduk() {
    if (cards.hajdukCards == 0)
      return;

    const card = {
      hajdukCards: cards.hajdukCards - 1,
      dinamoCards: cards.dinamoCards
    }

    setCards(card)
  }

  function noCardDinamo() {
    if (cards.dinamoCards == 0)
      return;

    const card = {
      hajdukCards: cards.hajdukCards,
      dinamoCards: cards.dinamoCards - 1
    }

    setCards(card)
  }

  function offsideHajduk() {
    const offside = {
      hajdukOffsides: offsides.hajdukOffsides + 1,
      dinamoOffsides: offsides.dinamoOffsides
    }

    setOffsides(offside)
  }

  function offsideDinamo() {
    const offside = {
      hajdukOffsides: offsides.hajdukOffsides,
      dinamoOffsides: offsides.dinamoOffsides + 1
    }

    setOffsides(offside)
  }

  function noOffsideHajduk() {
    if (offsides.hajdukOffsides == 0)
      return;

    const offside = {
      hajdukOffsides: offsides.hajdukOffsides - 1,
      dinamoOffsides: offsides.dinamoOffsides
    }

    setOffsides(offside)
  }

  function noOffsideDinamo() {
    if (offsides.dinamoOffsides == 0)
      return;

    const offside = {
      hajdukOffsides: offsides.hajdukOffsides,
      dinamoOffsides: offsides.dinamoOffsides - 1
    }

    setOffsides(offside)
  }


  return (
    <>
      <div className='results-container'>
        <div className='date-container'>
          <h3>{currentDate}</h3>
          <h3>-</h3>
          <Timer />
        </div>
        <div className='center-container'>
          <div className='hajduk'>
            <img src={hajdukLogo} className='logo hajduk' alt='Hajduk logo' />
            <h2>Hajduk</h2>
          </div>
          <h1>{counters.hajdukGoals}:{counters.dinamoGoals}</h1>
          <div className='dinamo'>
            <img src={dinamoLogo} className='logo dinamo' alt='Dinamo logo' />
            <h2>Dinamo</h2>
          </div>
        </div>

        <div className='buttons-container'>
          <div className='hajduk-buttons'>
            <button onClick={goalHajduk}>+</button>
            <button onClick={noGoalHajduk}>-</button>
          </div>
          <button onClick={resetButton}>x</button>
          <div className='dinamo-buttons'>
            <button onClick={goalDinamo}>+</button>
            <button onClick={noGoalDinamo}>-</button>
          </div>
        </div>
      </div>
      <div className='containers'>
      <div className='stats-container'>
        <h3>Hajduk statistika</h3>
        <div className='stat'>
          <p>Udarci: {shots.hajdukShots}</p>
          <button onClick={shotHajduk}>+</button>
          <button onClick={noShotHajduk}>-</button>
        </div>
        <div className='stat'>
          <p>Kartoni: {cards.hajdukCards}</p>
          <button onClick={cardHajduk}>+</button>
          <button onClick={noCardHajduk}>-</button>
        </div>
        <div className='stat'>
          <p>Zaleđa: {offsides.hajdukOffsides}</p>
          <button onClick={offsideHajduk}>+</button>
          <button onClick={noOffsideHajduk}>-</button>
        </div>
        <div className='stat'>
          <p>Korneri: {corners.hajdukCorners}</p>
          <button onClick={cornerHajduk}>+</button>
          <button onClick={noCornerHajduk}>-</button>
        </div>
      </div>
      <div className='stats-container'>
        <h3>Dinamo statistika</h3>
        <div className='stat'>
          <p>Udarci: {shots.dinamoShots}</p>
          <button onClick={shotDinamo}>+</button>
          <button onClick={noShotDinamo}>-</button>
        </div>
        <div className='stat'>
          <p>Kartoni: {cards.dinamoCards}</p>
          <button onClick={cardDinamo}>+</button>
          <button onClick={noCardDinamo}>-</button>
        </div>
        <div className='stat'>
          <p>Zaleđa: {offsides.dinamoOffsides}</p>
          <button onClick={offsideDinamo}>+</button>
          <button onClick={noOffsideDinamo}>-</button>
        </div>
        <div className='stat'>
          <p>Korneri: {corners.dinamoCorners}</p>
          <button onClick={cornerDinamo}>+</button>
          <button onClick={noCornerDinamo}>-</button>
        </div>
      </div>
      </div>
    </>
  )
}

export default App
