import styled from 'styled-components';

export const Container = styled.div`
  width: 25rem;
  margin-left: auto;
  margin-right: auto;

  padding: 2rem;

  h2 {
    margin-bottom: 1rem;
    text-align: center;
  }
`;

export const Content = styled.div`
  input {
    display: block;
    width: 100%;

    border-radius: 0.5rem;
  }

  input + input {
    margin-top: 0.5rem;
  }

  button {
    width: 100%;
    margin-top: 1rem;
  }
`;