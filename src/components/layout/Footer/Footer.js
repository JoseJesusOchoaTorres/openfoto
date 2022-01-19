import { Column, Row } from "components/grid"
import { FooterContainer, Description } from "./style"

export const Footer = () => {
  return (
    <FooterContainer>
      <Row className="horizontal-center text-center">
        <Column>
          <Description className="h6">Ecommerce created during Wizeline’s Academy React Bootcamp</Description>
        </Column>
      </Row>
    </FooterContainer>
  )
}