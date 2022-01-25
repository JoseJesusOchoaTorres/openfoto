import styled from "styled-components"

export const FooterContainer = styled.footer`
  padding: 4vw 1rem;
`

export const Description = styled.p`
  background-color: ${({ theme }) => theme.colors.body};
  padding: 1.5rem 5vw;
  line-height: 3rem;
  line-break: auto;
  display: inline;
  margin: 0;
`