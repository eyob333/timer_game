import { useState, useRef } from "react";

export default function Player() {
  const playerName = useRef()
  const [username, setUsername] = useState(null)

    return (
      <section id="player">
        <h2>Welcome { username ?? 'unknown entity'} </h2>
        <p>
          <input type="text" ref={playerName} />
          <button onClick={ () => {setUsername(playerName.current.value),playerName.current.value = '';}}> Set Name</button>
        </p>
      </section>
    );
  }
