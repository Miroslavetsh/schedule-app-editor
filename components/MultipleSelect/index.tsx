import * as React from 'react'
import { Theme, useTheme } from '@mui/material/styles'
import OutlinedInput from '@mui/material/OutlinedInput'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select, { SelectChangeEvent } from '@mui/material/Select'

const ITEM_HEIGHT = 48
const ITEM_PADDING_TOP = 8
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
}

type PropTypes = {
  items: Array<string>
  placeholder: string
}

function getStyles(name: string, personName: readonly string[], theme: Theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  }
}

const MultipleSelect: React.FC<PropTypes> = ({ items, placeholder }) => {
  const theme = useTheme()
  const [personName, setPersonName] = React.useState<string[]>([])

  const handleChange = (event: SelectChangeEvent<typeof personName>) => {
    const {
      target: { value },
    } = event
    setPersonName(typeof value === 'string' ? value.split(',') : value)
  }

  return (
    <div>
      <FormControl sx={{ m: 1, width: 300, mt: 3 }} required>
        <Select
          multiple
          displayEmpty
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput />}
          renderValue={(selected) => {
            if (selected.length === 0) {
              return <em>{placeholder}</em>
            }

            return selected.join(', ')
          }}
          MenuProps={MenuProps}>
          <MenuItem disabled value=''>
            <em>{placeholder}</em>
          </MenuItem>

          {items.map((item) => (
            <MenuItem key={item} value={item} style={getStyles(item, personName, theme)}>
              {item}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  )
}

export default MultipleSelect
