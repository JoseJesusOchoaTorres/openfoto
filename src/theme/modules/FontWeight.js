import { css } from 'styled-components'

export const FontWeight = css`
  ${({ theme }) => theme?.fontWeights.map((value) => (
    `.${value} {
        font-weight: ${value}
    }`
  ))};
`