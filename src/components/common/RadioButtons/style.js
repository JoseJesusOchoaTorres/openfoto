import styled from 'styled-components'

export const RadioOption = styled.div`
  background-color: ${({ theme }) => theme.colors.body};
  border: 1px solid ${({ theme }) => theme.colors.text};
  color: ${({ theme }) => theme.colors.text};
  line-break: anywhere;
  padding: 1rem 1.5rem;
  text-align: center;
  margin: 0.5rem 0;
  user-select: none;
  min-width: 9rem;
  cursor: pointer;
  outline: 0;

  &.selected {
    background-color: ${({ theme }) => theme.colors.text};
    color: ${({ theme }) => theme.colors.body};
  }
  
  transition: all 0.2s;
`