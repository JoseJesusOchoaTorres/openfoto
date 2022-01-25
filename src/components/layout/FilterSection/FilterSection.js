// External libraries
import { useContext } from 'react'

// Local components
import { FilterSection as Section } from './style'

// Common components
import { RadioButtons } from 'components/common/RadioButtons'

// Valid filter options
import { FilterOptions } from 'utils/constants'

// Context
import { FilterContext } from 'context/FilterProvider'

export const FilterSection = () => {
  const [filter, setFilter] = useContext(FilterContext)

  return (
    <Section.Container>
      <Section.Keyword className="h2 bold text-center">This is the filter keyword</Section.Keyword>
      
      <Section.Filters>
        <RadioButtons.Container groupId="filter">
          <RadioButtons
            options={FilterOptions}
            selectedOption={filter}
            onChange={setFilter}
          />
        </RadioButtons.Container>
      </Section.Filters>
    </Section.Container>
  )
}