import { css } from 'styled-components'

// Modules
import { FontSize } from './modules/FontSize'
import { FontWeight } from './modules/FontWeight'
import { TextAlign } from './modules/TextAlign'
import { Flexbox } from './modules/Flexbox'

export const FunctionalModules = css`
  ${true && FontSize}
  ${true && FontWeight}
  ${true && TextAlign}
  ${true && Flexbox}
`