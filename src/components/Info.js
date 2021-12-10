import React, { useState, useEffect } from "react";
import axios from "axios";

const Info = props => {
  const [info, setInfo] = useState({});

  useEffect(() => {
    axios.get(props.currentId)
      .then(res => {
        console.log(res)
        setInfo(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [props.currentId])

  return (
    <>
      <button onClick={props.close}>CLOSE</button>
      {
        info &&
        <>
          <p>Gender: {info.gender}</p>
          <p>Height: {info.height}</p>
          <p>Weight: {info.mass}</p>
          <p>Born: {info['birth_year']}</p>
          <p>Eye Color: {info['eye_color']}</p>
          <p>Hair Color: {info['hair_color']}</p>
          <p>Skin Color: {info['skin_color']}</p>
        </>
      }
    </>
  )
}

export default Info;