import styled from 'styled-components';

export const StockTableContainer = styled.main`
  h1 {
    text-align: center;
    margin-bottom: 1em;
  }

  table {
    border: 1px solid black;
    border-collapse: collapse;
    text-align: center;
    margin: 0 auto;
    width: 80%;

    th {
      background-color: black;
      color: white;
      border: 1px solid black;
      padding: 1em;
      text-align: center;
    }

    td {
      border: 1px solid black;
      padding: 0.5em;

      &:nth-child(5) {
        background-color: green;
        transition: 0.5s all ease-in-out;

        &:hover {
          background: lightgrey;
        }

        button {
          background-color: transparent;
          border: none;
          color: white;
          cursor: pointer;
          transition: 0.5s all ease-in-out;

          &:hover {
            color: green;
          }
        }
      }

      &:nth-child(6) {
        background-color: red;
        transition: 0.5s all ease-in-out;

        &:hover {
          background: lightgrey;
        }

        button {
          background-color: transparent;
          border: none;
          color: white;
          cursor: pointer;
          transition: 0.5s all ease-in-out;

          &:hover {
            color: red;
          }
        }
      }
    }
  }

  & > a {
    text-decoration: none;

    button {
      border: none;
      border-radius: 1em;
      background: black;
      cursor: pointer;
      color: white;
      display: block;
      margin: 1em auto;
      padding: 1em 2em;
      transition: 0.5s all ease-in-out;

      &:hover {
        border: 1px solid black;
        color: black;
        background-color: white;
      }
    }
  }
`;
