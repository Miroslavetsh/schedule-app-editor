import React from 'react'
import { CircularProgress, Typography } from '@mui/material'
import { Box } from '@mui/system'

import Entity from '@models/Entity'

type PropTypes<T extends Entity> = {
  items: Array<T>
  heading: string
  isLoading: boolean
}

const Block = <T extends Entity>({ items, heading, isLoading }: PropTypes<T>): JSX.Element => {
  return (
    <div>
      {isLoading ? (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <CircularProgress />
        </Box>
      ) : (
        items.length > 0 && (
          <>
            <Typography variant='h5' component='h5' fontWeight={700}>
              {heading}
            </Typography>

            <div style={{ marginTop: 16, display: 'flex', flexWrap: 'wrap' }}>
              {items.map((s) => (
                <Box sx={{ width: '33%' }} key={JSON.stringify(s)}>
                  {Object.values(s).map((v) => {
                    return (
                      <React.Fragment key={v.toString()}>
                        {v}
                        <br />
                      </React.Fragment>
                    )
                  })}

                  <br />
                  <br />
                </Box>
              ))}
            </div>
          </>
        )
      )}
    </div>
  )
}

export default Block
