import { Column, Row } from "components/grid"
import { LeadspaceContainer, BrandName, Description } from "./style"

export const Leadspace = () => {
  return (
    <LeadspaceContainer>
      <Row className="horizontal-center text-center">
        <Column>
          <BrandName className="bold">OpenFoto</BrandName>
          <Description className="h4 lighter">The photography open source world</Description>
        </Column>
      </Row>
    </LeadspaceContainer>
  )
}