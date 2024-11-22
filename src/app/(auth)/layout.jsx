import { Box } from '@chakra-ui/react'
import React from 'react'

function AuthLayout({children}) {
  return (
    <Box>
        {children}
    </Box>
  )
}

export default AuthLayout