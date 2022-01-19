import styled, { css } from 'styled-components'
import { Icon } from 'components/common/Icon'

export const InputContainer = styled.div`
  align-items: center;
  position: relative;
  display: flex;
`

export const Input = styled.input.attrs(props => ({
  placeholder: props.placeholder,
  type: props.type
}))`
  background-color: ${({ theme }) => theme.colors.body}80;
  border: 1px solid ${({ theme }) => theme.colors.body}80;
  color: ${({ theme }) => theme.colors.text};
  padding: 0.5rem 2.3rem;
  border-radius: 20px;
  font-size: 0.8rem;
  appearance: none;
  width: 100%;
  outline: 0;

  transition: border 0.2s;

  ::-webkit-search-cancel-button{
    display: none;
  }

  ::placeholder {
    color: ${({ theme }) => theme.colors.text}90;
    font-size: 0.8rem;
  }


  :hover,
  :focus {
    border: 1px solid ${({ theme }) => theme.colors.text}20;
  }
`;

const baseInputIcons = css`
  position: absolute;
  padding: 0.3rem;
  cursor: pointer;
`;

export const ClearIcon = styled(Icon)`
  ${baseInputIcons}
  right: 5px;
`;

export const InputIcon = styled(Icon)`
  ${baseInputIcons}
  left: 5px;
`;