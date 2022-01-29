// Extermal libraries
import styled from 'styled-components'

// Common components
import { BaseImage } from 'components/common/Image/style'

export const Container = styled.figure`
  background-color: ${({ theme }) => theme.colors.text};
  color: ${({ theme }) => theme.colors.body};
  position: relative;
  display: flex;
  height: 100%;
  margin: 0;

  image:hover {
    opacity: 0.2;
  }
`

export const AuthorContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.text}90;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  overflow: hidden;
  display: flex;
  opacity: 0;
  bottom: 0;
  right: 0;
  left: 0;
  top: 0;

  transition: all 0.2s;

  &:hover {
    -webkit-backdrop-filter: blur(5px);
    backdrop-filter: blur(5px);
    opacity: 1;
  }
`

export const ActionsContainer = styled.div`
  display: flex;
`

export const AuthorName = styled.figcaption`
  font-family: Helvetica, sans-serif;
  margin: 1rem 0.5rem;
`

export const AuthorImageProfile = styled(BaseImage)`
  border-radius: 50%;
  max-height: 80px;
  max-width: 80px;
  height: 15vw;
  width: auto;
`
