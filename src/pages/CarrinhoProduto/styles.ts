import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
`;

export const Content = styled.div`
  /* width: 40rem; */
  flex: 1;
  padding: 1rem;

  div {
    h2 {
      text-align: center;
    }
    
    table {
      width: 100%;
      margin-top: 0.5rem;
      padding: 0.5rem;
      text-align: center;
      // retira a borda de uma coluna para outra
      border-spacing: 0;
      thead {
        background: darkgray;
        // para poder aplicar a borda arredondada
        /* border-collapse: collapse; */
        display: block;
        tr {
          th {
            padding: 0.1rem 0;
            width: 30%;
            // aplica somente no primeiro elemento do th
            &:first-child {
              border-radius: 0.25rem 0 0 0;
            }
            // aplica somente no segundo último elemento do th
            &:nth-last-child(2) {
              width: 3rem;
            }
            // aplica somente no último elemento do th
            &:last-child {
              width: 3rem;
              border-radius: 0 0.25rem 0 0;
            }
          }
        }
      }
      tbody {
        background: lightgray;
        display: block;
        overflow-y: scroll;
        height: 22rem;
        tr {
          width: 100%;
          td {
            border-top: 1.5px solid darkgray;
            padding: 0.2rem 0;
            width: 30%;

            // aplica somente no terceiro último elemento do th
            &:nth-last-child(3) {
              width: 3rem;
              padding-right: 0.4rem;
              /* background: red; */
            }

            // aplica somente no segundo último elemento do th
            &:nth-last-child(2) {
              width: 3rem;
            }
            // aplica somente no último elemento do th
            &:last-child {
              width: 3rem;
              border-radius: 0 0.25rem 0 0;
              padding-left: 0.5rem;
            }
          }
        }
      }
    }
  }
`;

export const Resumo = styled.div`
  width: 20rem;
  background: var(--silver);

  padding: 1rem;
  display: grid;

  > p {
    margin-top: 1rem;
  }

  div {
    display: flex;
    justify-content: space-between;
  }

  button {
    height: 3rem;
  }

  a {
    text-align: center;
    text-decoration: none;
    color: var(--grey11);

    height: 1.5rem;

    transition: filter 0.2s;

    &:hover {
      opacity: 0.8;
    }
  }
`;