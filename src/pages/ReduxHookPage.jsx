import React from 'react'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import { useSelector, useDispatch } from '../YReact-redux'
function ReduxHookPage() {
  const count = useSelector(({ count }) => count)
  const dispatch = useDispatch()
  return (
    <Stack spacing={2} direction="row">
      <Button variant="text">{count}</Button>
      <Button
        variant="contained"
        onClick={() => dispatch({ type: 'ADD', payload: 100 })}
      >
        dispacth
      </Button>
      <Button
        variant="outlined"
        onClick={() => dispatch({ type: 'MINUS', payload: 100 })}
      >
        MINUS
      </Button>
    </Stack>
  )
}

export default ReduxHookPage
