// External libraries
import styled from "styled-components"

// Constants
import { PlaceholderImage } from "utils/constants"

export const LeadspaceContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.text};
  background: 
    radial-gradient(
      circle,
      ${({ theme }) => theme.colors.text} 0%,
      ${({ theme }) => theme.colors.text}20 100%
    ),
    url(${PlaceholderImage}) no-repeat center / cover;
  background-attachment: fixed;
  color: ${({ theme }) => theme.colors.body};
  padding: 20vh 1rem;
`

export const BrandName = styled.h2`
  font-size: calc(2rem + 3vw);
  margin: 0;
`

export const Description = styled.h3`
  font-family: Helvetica, sans-serif;
`