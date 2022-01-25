// External libraries
import styled from 'styled-components'

// Common components
import { Icon } from 'components/common/Icon'

export const HeaderContainer = styled.header`
  border-bottom: 1px solid ${({ theme }) => theme.colors.text}20;
  background-color: ${({ theme }) => theme.colors.body}80;
  backdrop-filter: blur(10px);
  padding: 1rem 2rem;
  position: sticky;
  z-index: 1;
  top: 0;

  @supports not ((-webkit-backdrop-filter: none) or (backdrop-filter: none)) {
    background-color: ${({ theme }) => theme.colors.body}f0;
  }
`

export const HeaderButton = styled(Icon)`
  background-color: transparent;
  border: 1px solid transparent;
  border-radius: 50%;
  margin: 0 0.5rem;
  padding: 0.5rem;
  cursor: pointer;
  outline: 0;

  transition: all 0.2s;

  :hover {
    border-color: ${({ theme }) => theme.colors.text}40;
  }

  :focus {
    border-color: ${({ theme }) => theme.colors.text}90;
  }
`;