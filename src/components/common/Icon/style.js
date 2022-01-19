import styled from 'styled-components'

export const Icon = styled.i.attrs(({ icon = 'question' }) => ({
  className: `fas fa-${icon}`
}))``;
