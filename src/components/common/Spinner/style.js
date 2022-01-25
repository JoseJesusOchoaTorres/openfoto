// External libraries
import styled, { css } from 'styled-components'

// Common components
import { Icon } from 'components/common/Icon'

const FlexCenter = css`
  justify-content: center;
  align-items: center;
  display: flex;
`

export const Spinner = styled(Icon)`
  animation: rotate 1s linear infinite;
  height: 100px;
  width: 100px;
  ${FlexCenter}

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }
`;

const Container = styled.div`
  padding: 5vw 1rem;
  ${FlexCenter}
`

Spinner.Container = Container
