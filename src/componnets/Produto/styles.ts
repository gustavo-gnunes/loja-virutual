import styled from 'styled-components';

export const Container = styled.div`
  margin: 1rem;

  h1 {
    margin-bottom: 1rem;
    text-align: center;
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

        border: none;
        border-radius: 1rem;
        padding: 0.3rem 0.8rem;
        opacity: 0.9;
        font-size: 0.9rem;

        &:hover {
          opacity: 1;
        }
      }
    }
  }
`;