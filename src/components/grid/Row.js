import styled, { css } from "styled-components"

export const Row = styled.div`
  flex-wrap: wrap;
  display: flex;

  ${(props) => !props.fullWidth && css`
    margin-right: auto;
    margin-left: auto;
    max-width: 1540px;
  `}
`