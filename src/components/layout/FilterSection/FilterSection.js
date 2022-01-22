// External libraries
import { useState } from 'react'

// Local components
import { FilterSection as Section } from './style'

// Common components
import { RadioButtons } from 'components/common/RadioButtons'

// Valid filter options
import { FilterOptions } from 'utils/constants'

export const FilterSection = ({
  filter = FilterOptions[0].value
}) => {
  const [filterSelected, setFilterSelected] = useState(filter)

  return (
    <Section.Container>
      <Section.Keyword className="h2 bold text-center">This is the filter keyword</Section.Keyword>
      
      <Section.Filters>
        <RadioButtons.Container groupId="filter">
          <RadioButtons
            selectedOption={filterSelected}
            onChange={setFilterSelected}
            options={FilterOptions}
          />
        </RadioButtons.Container>
      </Section.Filters>
    </Section.Container>
  )
}