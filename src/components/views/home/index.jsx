import React from 'react'
import { Flex, Grid, GridItem, Text, Box } from '@chakra-ui/react'
import CardProfile from './CardProfile'
import { Card } from './Card'
import TableInfo from './TableInfo'
import { CardLayanan } from './CardLayanan'

function page() {
  return (
    <Grid templateColumns={{base: "repeat(1, 1fr)", md: "repeat(3, 1fr)"}} mb={"20px"}> 
        <GridItem colSpan={{base: 3, md: 1}} >
          <Flex direction={"column"}>
            <CardProfile />
            <Box p={"20px"}  w={"100%"} h={"100%"}>
              <CardLayanan />
            </Box>
          </Flex>     
        </GridItem>
        <GridItem colSpan={{base: 3, md: 2}} mx={"20px"} >
          <Flex direction={"column"}>
            <Card />
            <Box bg={"white"} p={"20px"} borderRadius={"2xl"} shadow={"md"} w={"100%"} h={"100%"}>
                <TableInfo  />
            </Box>
          </Flex>
        </GridItem>
    </Grid>
  )
}

export default page