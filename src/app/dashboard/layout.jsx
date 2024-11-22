import React from 'react'
import { Box, Flex } from '@chakra-ui/react'
import Navbar from '@/components/features/Navbar/Navbar'

function DashboardLayout({children}) {
  return (
    <Flex bg={"teal.800"} minH={"100vh"} direction={"column"} overflow="hidden">
        
      <Box
        flex={1}
        bg={"#eff7f8"}
        borderRadius={"3xl"}
        shadow={"lg"}
        border={"none"}
        overflowY={"auto"} // Allow scrolling
        scrollBehavior={"smooth"}
        sx={{
          "::-webkit-scrollbar": {
            width: "6px",   
          },
          "::-webkit-scrollbar-thumb": {
            background: "#2d3748",
            borderRadius: "4px",
          },
          "::-webkit-scrollbar-thumb:hover": {
            background: "#4a5568",
          },
          "::-webkit-scrollbar-track": {
            background: "#e2e8f0",
            borderRadius: "8px",
          },
        }}
      >
        <Flex
          direction={"column"}
          justifyContent={"center"}
          alignItems={"center"}
          gap={"20px"}
          m={"20px"}
        >
          <Navbar />
          <Box w={"100%"}>
            {children}
          </Box>
        </Flex>
      </Box>
    </Flex>
  )
}

export default DashboardLayout