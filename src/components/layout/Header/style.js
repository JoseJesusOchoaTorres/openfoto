import styled from 'styled-components'
import { Icon } from 'components/common/Icon'

export const HeaderContainer = styled.header`
  background-color: ${({ theme }) => theme.colors.body}80;
  backdrop-filter: blur(10px);
  padding: 1rem 2rem;
  position: sticky;
  top: 0;

  @supports not ((-webkit-backdrop-filter: none) or (backdrop-filter: none)) {
    background-color: ${({ theme }) => theme.colors.body}f0;
  }
`

/**
 * TODOS:
 * - It should be a button.
 * - It could be a reusable component in the common folder.
 */
export const FavoritesButton = styled(Icon)`
  background-color: transparent;
  border: 1px solid transparent;
  border-radius: 50%;
  cursor: pointer;
  padding: 0.5rem;

  transition: all 0.2s;

  :hover
  :focus {
    border-color: ${({ theme }) => theme.colors.text}20;
  }
`;