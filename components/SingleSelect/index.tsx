import React, { useEffect, useState } from 'react'
import OutlinedInput from '@mui/material/OutlinedInput'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import { Button } from '@mui/material'

import Entity from '@models/Entity'

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

interface PropTypes<T extends Entity> {
  items: Array<T>
  fieldToDisplay: string
  placeholder: string
  linkText: string
  moveOnAddNew: string
  setItem: (value: T) => void
  nextClickCallback?: () => void
  selected?: T
}

const SingleSelect = <T extends Entity>(props: React.PropsWithChildren<PropTypes<T>>) => {
  const {
    items,
    placeholder,
    linkText,
    nextClickCallback,
    moveOnAddNew,
    fieldToDisplay,
    setItem,
    selected,
  } = props

  const [selectValue, setSelectValue] = useState<string>('')

  useEffect(() => {
    //@ts-ignore
    selected && selected.hasOwnProperty(fieldToDisplay) && setSelectValue(selected[fieldToDisplay])
  }, [selected, fieldToDisplay])

  const handleChange = (event: SelectChangeEvent<typeof selectValue>) => {
    const {
      target: { value },
    } = event
    setSelectValue(value)
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <FormControl sx={{ width: 300, mt: 3, mb: 2 }}>
        {items && (
          <Select
            value={selectValue}
            onChange={handleChange}
            input={<OutlinedInput />}
            renderValue={(selected) => (selected ? <>{selected}</> : <em>{placeholder}</em>)}
            sx={{ mb: 1 }}
            displayEmpty
            MenuProps={MenuProps}>
            <MenuItem disabled value=''>
              <em>{placeholder}</em>
            </MenuItem>

            {items.map((item: T) => (
              // @ts-ignore
              <MenuItem key={item.id} value={item[fieldToDisplay]} onClick={() => setItem(item)}>
                {/* @ts-ignore */}
                {item[fieldToDisplay]}
              </MenuItem>
            ))}
          </Select>
        )}

        {!items && <>Не маю жодного запису :&#40;</>}

        {selectValue && selectValue && nextClickCallback && (
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
