import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import Character from './components/Character';
import Info from './components/Info';
import styled from 'styled-components';

const StyledDiv = styled.div`
  border-radius: 10px;
  background-color: white;
  display:flex;
  width:80%;
  margin-left:10%;
  margin-right:10%;
`

const StyledCharacters = styled.div`
  display:flex;
  flex-direction:column;
  width: 100%;

  h2 {
    color: #443e3e;
    text-shadow: 1px 1px 5px #fff;
  }
  
  button {
    color: #443e3e;
    background-color: white;
    border: none;
    padding: 10px 32px;
    cursor: pointer;

    &:hover {
      color: black;
    }
  }
`

const StyledInfo = styled.div`
  display:flex;
  flex-direction:column;
  padding:10px;

  button {
    color: white;
    background-color:#555555;
    border: none;
    padding: 10px 32px;
    cursor: pointer;

    &:hover {
      color: black;
      background-color: #e7e7e7;
    }
  }
`

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [characterData, setCharacterData] = useState([]);
  const [currentId, setCurrentId] = useState(null);

  const openInfo = id => {
    setCurrentId(id);
  }

  const closeInfo = () => {
    setCurrentId(null);
  }

  const generateKey = str => {
    return `${str}_${new Date().getTime()}`;
  }

  useEffect(() => {
    axios.get('https://swapi.dev/api/people')
    .then(res => {
      setCharacterData(res.data)
    })
    .catch(err => {
      console.log(err)
    })
  }, [])

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      <StyledDiv>

        <StyledCharacters>
        {
          characterData.map(char => {
            return <Character key={generateKey(char.name)} data={char} open={openInfo} />
          })
        }
        </StyledCharacters>

        <StyledInfo>
        {
          currentId && <Info currentId={currentId} close={closeInfo} />
        }
        </StyledInfo>

      </StyledDiv>
    </div>
  );
}

export default App;
