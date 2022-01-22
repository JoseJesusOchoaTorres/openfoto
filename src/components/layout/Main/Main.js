// General components
import { Row, Column } from "components/grid"

// Local components
import { MainContainer } from "./style"

export const Main = ({ children }) => {
  return (
    <Row>
      <Column>
        <MainContainer>
          {children}
        </MainContainer>
      </Column>
    </Row>
  )
}