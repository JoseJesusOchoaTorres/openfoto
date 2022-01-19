import { HeaderContainer, FavoritesButton } from './style'
import { TextInput } from 'components/common/Input'
import { Row, Column } from 'components/grid'

import { IconsInterface } from 'utils/constants'


export const Header = () => {
  return (
    <HeaderContainer>
      <Row className="vertical-center horizontal-between">
        <Column>
          <h1 className="h6 bold">
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
          <FavoritesButton
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