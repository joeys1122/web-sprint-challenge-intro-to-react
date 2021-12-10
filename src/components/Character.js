// Write your Character component here
import React from "react";

const Character = props => {
  return (
    <>
      <h2>{props.data.name}<button onClick={() => props.open(props.data.url)}>SHOW INFO</button></h2>
    </>
  )
}

export default Character;