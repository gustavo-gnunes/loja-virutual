import styled from "styled-components";

export const Container = styled.input`
  /* margin-right: 0.5rem;
  border: none;
  padding: 0.2rem; */
  flex: 1; // o input ocupa todo espaço possível
  margin-right: 0.5rem;
  border: 0;
  border-radius: 0.5rem;
  color: var(--grey11);
  padding: 0.2rem;
  
  &::placeholder {
    color: var(--grey11);
    opacity: 0.5;
  }
`;
