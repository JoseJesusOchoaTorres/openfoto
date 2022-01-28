// Local components
import { HeaderContainer, HeaderButton } from './style'

// Common componentes
import { SearchInput } from 'components/common/SearchInput'

// Grid components
import { Row, Column } from 'components/grid'

// Constants
import { IconsInterface } from 'utils/constants'
import { Routes } from 'utils/constants'

// Custom hooks
import { useIsFavorites } from 'hooks/useIsFavorites'

// Router
import { Link } from 'react-router-dom'

export const Header = ({ toggleMode, theme }) => {
  const isFavorite = useIsFavorites()

  return (
    <HeaderContainer>
      <Row className="vertical-center horizontal-between">
        <Column xs="12" sm="12" md="4" lg="4">
          <h1 className="h5 bold">
            <Link to="/" title="OpenFoto - Home">
              ▲ OpenFoto <span className='lighter'>/ {isFavorite ? 'Favorites' : 'Home'}</span>
            </Link>
          </h1>
        </Column>

        <Column xs="6" sm="6" md="6" lg="4">
          <SearchInput />
        </Column>

        <Column xs="6" sm="6" md="2" lg="4" className="text-right">
          <HeaderButton
            as="button"
            role="button"
            title="Theme color"
            aria-hidden="false"
            aria-label="Theme color"
            icon={IconsInterface[theme.name]}
            onClick={() => toggleMode()}
          />
          {isFavorite ? (
            <Link to={Routes.home}>
              <HeaderButton
                as="button"
                role="button"
                title="Go home"
                aria-hidden="false"
                aria-label="Go home"
                icon={IconsInterface.home}
              />
            </Link>
          ) : (
            <Link to={Routes.favorites}>
              <HeaderButton
                as="button"
                role="button"
                title="Go favorites"
                aria-hidden="false"
                aria-label="Go favorites"
                icon={IconsInterface.heart}
              />
            </Link>
          )}
        </Column>
      </Row>
    </HeaderContainer>
  )
}