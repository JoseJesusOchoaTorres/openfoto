// External libraries
import styled from 'styled-components'

// Common components
import { Icon } from 'components/common/Icon'

export const ButtonBase = styled.button`
  background-color: ${({ theme }) => theme.colors.body};
  border: 1px solid ${({ theme }) => theme.colors.body};
  color: ${({ theme }) => theme.colors.text};
  cursor: pointer;
  padding: 0.8rem;
  outline: 0;
  opacity: 0.8;

  transition: all 0.2s;

  :hover {
    opacity: 1;
  }

  :focus {
    opacity: 1;
  }
`;

export const ButtonIcon = styled(Icon)``;
