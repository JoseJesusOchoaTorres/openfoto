import styled, { css } from "styled-components"
import { breakpoints } from "theme/breakpoints"

export const Column = styled.div`
  flex: 1;

  ${Object.keys(breakpoints?.device).map((breakpoint) =>
    props => props[breakpoint] && css`
      @media ${breakpoints.device[breakpoint]} {
        flex: 0 0 ${(props[breakpoint] * 100) / breakpoints.columns}%;
      }
    }`
  )}
`
