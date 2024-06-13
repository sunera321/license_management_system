import * as React from 'react'
import Box from '@mui/material/Box'

import CircularProgress, {
  circularProgressClasses,
} from '@mui/material/CircularProgress'

function PageLoader() {
  return (
    <Box
      sx={{
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        marginTop: '15%',
        marginBottom: '15%',
      }}
    >
      <CircularProgress
        variant='determinate'
        sx={{
          color: (theme) =>
            theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
        }}
        size={40}
        thickness={4}
        value={100}
      />
      <CircularProgress
        variant='indeterminate'
        disableShrink
        sx={{
          color: (theme) =>
            theme.palette.mode === 'light' ? '#2e4955' : '#578aa1',
          animationDuration: '550ms',
          position: 'relative',
          right: 40,
          [`& .${circularProgressClasses.circle}`]: {
            strokeLinecap: 'round',
          },
        }}
        size={40}
        thickness={4}
      />
    </Box>
  )
}

export default PageLoader
