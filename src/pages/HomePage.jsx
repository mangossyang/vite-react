import React from 'react'
import Button from '@mui/material/Button'
import { useState } from 'react'
const HomePage = () => {
  const [count, setCount] = useState(0)
  return (
    <>
      <Button
        variant="outlined"
        color="error"
        onClick={() => setCount(count + 1)}
      >
        Count{count}
      </Button>
    </>
  )
}
export default HomePage
