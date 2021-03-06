// External libraries
import PropTypes from 'prop-types'
import { useContext } from 'react'

// Local components
import { FilterSection as Section } from './style'

// Common components
import { RadioButtons } from 'components/common/RadioButtons'

// Valid filter options
import { FilterOptions } from 'utils/constants'

// Context
import { FilterContext } from 'context/FilterProvider'
import { SearchContext } from 'context/SearchProvider'

export const FilterSection = ({ noFilterOptions = false }) => {
  const [filter, setFilter] = useContext(FilterContext)
  const { searchQuery } = useContext(SearchContext)

  return (
    <Section.Container>
      {!!searchQuery && <Section.Keyword className="h2 bold text-center">{searchQuery}</Section.Keyword>}
      
      {!noFilterOptions &&
        <Section.Filters>
        <RadioButtons.Container groupId="filter">
          <RadioButtons
            options={FilterOptions}
            selectedOption={filter}
            onChange={setFilter}
          />
        </RadioButtons.Container>
      </Section.Filters>
      }
    </Section.Container>
  )
}

FilterSection.propTypes = {
  noFilterOptions: PropTypes.bool
}