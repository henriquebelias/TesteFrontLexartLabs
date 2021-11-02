import styled from 'styled-components';

export const MainContainer = styled.main`
  align-items: center;
  display: flex;
  justify-content: center;
  min-height: 100vh;

  div {
    align-items: center;
    border: 1px solid black;
    box-shadow: 2px 2px 2px black;
    display: flex;
    flex-direction: column;
    padding: 2em 2.5em;

    h1 {
      margin: 1.5em;
    }

    button {
      background-color: black;
      border: none;
      border-radius: 1em;
      color: white;
      font-size: 1rem;
      padding: 1em 1.5em;
      margin: 0.5em;
      min-width: 15em;
      transition: 0.5s all ease-in-out;

      &:hover {
        border: 1px solid black;
        background-color: white;
        color: black;
      }
    }
  }
`;
