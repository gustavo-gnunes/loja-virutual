import styled from 'styled-components';

export const Container = styled.div`
  margin: 1rem;
  
  .topo {
    display: flex;
    justify-content: space-between;
  }


  h1 {
    margin-bottom: 1rem;
    text-align: center;
  }

  a {
    text-decoration: none;
    border-radius: 1rem;
    font-size: 0.9rem;
    background: var(--grey11);
    color: var(--lightGrey);
    padding: 0.7rem;
    margin-top: 0.5rem;

    opacity: 0.9;

    transition: filter 0.2s;

    &:hover {
      opacity: 1;
    }
  }
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(
    3,
    1fr
  ); // vai ter 3 colunas do mesmo tamanho
  gap: 1rem; // espaçamento entre eles


  > div {
    margin: 0.5rem;
    padding: 0.5rem;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);

    display: flex;

    .desc {
      margin-top: auto;
      margin-bottom: auto;

      padding: 0.5rem;

      p + p {
        line-height: 2rem;
      }

      input {
        width: 2.5rem;
        text-align: center;
      }

      button {
        margin-top: 1rem;
      }
    }
  }
`;