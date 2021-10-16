import styled from 'styled-components';

export const Container = styled.div`
  padding: 2rem;

  h2 {
    margin-bottom: 1rem;
    text-align: center;
  }
`;

export const Resumo = styled.div`
  width: 35rem;
  margin-left: auto;
  margin-right: auto;

  padding: 2rem;

  .resumo-content {
    display: flex;
    justify-content: space-between;
  }

  button {
    border: none;
    border-radius: 0.5rem;
    padding: 0.3rem 0.8rem;
    opacity: 0.9;
    font-size: 0.9rem;

    &:hover {
      opacity: 1;
    }
  }

`;

export const Content = styled.div`
  width: 90%;
  margin-left: auto;
  margin-right: auto;

  display: flex;
`;

export const ContentUser = styled.div`
  padding-top: 2rem;
  line-height: 2rem;
`;

export const ContentProduto = styled.div`
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
            width: 47%;
            // aplica somente no primeiro elemento do th
            /* &:first-child {
              border-radius: 0.25rem 0 0 0;
            }
            // aplica somente no segundo último elemento do th
            &:nth-last-child(2) {
              width: 3rem;
            } */
            // aplica somente no último elemento do th
            &:last-child {
              width: 3rem;
              border-radius: 0 0.25rem 0 0;
            }
          }
        }
      }
      tbody {
        background: var(--silver);
        display: block;
        overflow-y: scroll;
        height: 22rem;
        tr {
          /* width: 100%; */
          td {
            border-top: 1.5px solid darkgray;
            padding: 0.2rem 0;
            width: 47%;

            &:last-child {
              width: 3rem;
              border-radius: 0 0.25rem 0 0;
            }

            
          }
        }
        /* } */
      }
    }
  }
`;

