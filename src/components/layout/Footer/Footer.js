import { Column, Row } from "components/grid"
import { FooterContainer, Description } from "./style"

export const Footer = () => {
  return (
    <FooterContainer>
      <Row className="horizontal-center text-center">
        <Column>
          <Description className="h6">Powered by creators everywhere</Description>
        </Column>
      </Row>
    </FooterContainer>
  )
}