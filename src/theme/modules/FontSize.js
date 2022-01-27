import { css } from 'styled-components'

export const FontSize = css`
  ${({ theme }) => theme?.fontSizes.map((size, index) => (
    `.h${++index} {
        font-size: ${size}rem
    }`
  ))};

  .h1.large {
    font-size: 5rem;
  }
`