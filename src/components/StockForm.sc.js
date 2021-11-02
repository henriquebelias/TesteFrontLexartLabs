import styled from 'styled-components';

export const FormContainer = styled.main`
  align-items: center;
  display: flex;
  justify-content: center;
  min-height: 100vh;

  form {
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    padding: 3em 5em;
    width: 60%;

    label {
      font-size: 1.2rem;
    }

    input[type=text] {
      border: none;
      font-size: 1rem;
      padding: 1em;
    }

    input[type=checkbox] {
      margin-left: 1em;
      transform: scale(1.5);
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

      &:disabled {
        border: none;
        background-color: transparent;
        color: white;
      }
    }
  }
`;
