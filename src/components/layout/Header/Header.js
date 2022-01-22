// Local components
import { HeaderContainer, HeaderButton } from './style'

// Common componentes
import { TextInput } from 'components/common/Input'

// Grid components
import { Row, Column } from 'components/grid'

// Constants
import { IconsInterface } from 'utils/constants'

export const Header = ({ toggleMode, theme }) => {
  return (
    <HeaderContainer>
      <Row className="vertical-center horizontal-between">
        <Column>
          <h1 className="h5 bold">
            <a href="/" title="OpenFoto">
              ▲ OpenFoto
            </a>
          </h1>
        </Column>

        <Column>
          <TextInput
            type="search"
            placeholder="What can we help you find today?"
          />
        </Column>

        <Column className="text-right">
          <HeaderButton
            as="button"
            role="button"
            title="Theme color"
            aria-hidden="false"
            aria-label="Theme color"
            icon={IconsInterface[theme.name]}
            onClick={() => toggleMode()}
          />
          <HeaderButton
            as="button"
            role="button"
            title="Favorites"
            aria-hidden="false"
            aria-label="Favorites"
            icon={IconsInterface.heart}
          />
        </Column>
      </Row>
    </HeaderContainer>
  )
}