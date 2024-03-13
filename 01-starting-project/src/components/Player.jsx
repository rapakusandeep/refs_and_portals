import { useState,useRef } from "react";

// by using refs, we can remove the unneccessary states(commented in the below code), and also connect ref to the jsx elements to store its value in two way binding.
export default function Player() {
const playerName = useRef();

const [ enteredPlayerName, setEnteredPlayerName ] = useState('');
//const [ submitted, setSubmitted ] = useState(false);

// function handlePlayerName(event) {
//   setSubmitted(false);
//   setEnteredPlayerName(event.target.value);
// }

function handleClick() {
  setEnteredPlayerName(playerName.current.value);
  playerName.current.value = '';
}
// in the below code we can see the ternary exp for if condition in h2 tag
  return (
    <section id="player">
      {/* <h2>Welcome {enteredPlayerName ? enteredPlayerName : 'unknown entity'}</h2> */}
      
      <h2>Welcome {enteredPlayerName ?? 'unknown entity'}</h2> 
      <p>
        {/* <input type="text" onChange={handlePlayerName} value={enteredPlayerName} /> */}
        <input type="text" ref={playerName} />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
