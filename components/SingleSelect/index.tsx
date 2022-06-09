import * as React from 'react'
import OutlinedInput from '@mui/material/OutlinedInput'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import { Button } from '@mui/material'

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
  linkText: string
  nextClickCallback: () => void
  moveOnAddNew: string
}

const SingleSelect: React.FC<PropTypes> = (props) => {
  const { items, placeholder, linkText, nextClickCallback, moveOnAddNew } = props
  const [selectValue, setSelectValue] = React.useState<string>('')

  const handleChange = (event: SelectChangeEvent<typeof selectValue>) => {
    const {
      target: { value },
    } = event
    setSelectValue(value)
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <FormControl sx={{ width: 300, mt: 3, mb: 2 }} required>
        <Select
          sx={{ mb: 1 }}
          displayEmpty
          value={selectValue}
          onChange={handleChange}
          input={<OutlinedInput />}
          renderValue={(selected) => (selected.length === 0 ? <em>{placeholder}</em> : selected)}
          MenuProps={MenuProps}>
          <MenuItem disabled value=''>
            <em>{placeholder}</em>
          </MenuItem>

          {items.map((item) => (
            <MenuItem key={item} value={item}>
              {item}
            </MenuItem>
          ))}
        </Select>

        {selectValue && (
          <Button onClick={nextClickCallback} variant='contained'>
            Підтвердити
          </Button>
        )}
      </FormControl>

      <Button href={moveOnAddNew} variant='text'>
        {linkText}
      </Button>
    </div>
  )
}

export default SingleSelect
