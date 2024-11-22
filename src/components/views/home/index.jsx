import React from 'react'
import { Grid, GridItem, Text } from '@chakra-ui/react'
import CardProfile from './CardProfile'

function page() {
  return (
    <Grid templateColumns="repeat(3, 1fr)"> 
        <GridItem colSpan={{base: 3, md: 2}}>
            <CardProfile />
        </GridItem>
        <GridItem colSpan={{base: 3, md: 1}}>
          <Text>Hallo</Text>
        </GridItem>
    </Grid>
  )
}

export default page