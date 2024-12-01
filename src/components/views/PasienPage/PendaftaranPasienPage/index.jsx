import React from 'react'
import { Flex, Grid, GridItem, Text, Box } from '@chakra-ui/react'
import FormPendaftaranBaru from './FormPendaftaranBaru'
import CheckerPasien from './CheckerPasien'
import FormPendaftaranPeriksa from './FormPendaftaranPeriksa'

export default function PendaftaranPage() {
  return (
    <Grid templateColumns={{base: "repeat(1, 1fr)", lg: "repeat(2, 1fr)"}} mb={"20px"} gap={{base: "20px", md: "20px", lg: "20px"}}> 
    <GridItem colSpan={{base: 3, md: 1}} >
        <Box bg={"white"} p={"20px"} borderRadius={"2xl"} shadow={"md"} w={"100%"} h={"100%"}>
            <FormPendaftaranBaru />
       </Box>
    </GridItem>
    <GridItem colSpan={{base: 3, md: 1}} mx={"20px"}>
        <Box bg={"white"} p={"20px"} borderRadius={"2xl"} shadow={"md"} w={"100%"} h={"100%"}>
            <CheckerPasien />
       </Box>
    </GridItem>
    <GridItem colSpan={{base: 3, md: 3}} mx={"20px"} border={"1px solid red"}>
        <Box bg={"white"} p={"20px"} borderRadius={"2xl"} shadow={"md"} w={"100%"} h={"100%"}>
            <FormPendaftaranPeriksa/>
       </Box>
    </GridItem>
</Grid>
  )
}
