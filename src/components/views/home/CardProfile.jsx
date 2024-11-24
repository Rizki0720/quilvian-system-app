'use client'
import { Box, Image, Flex, Text } from '@chakra-ui/react'
import React from 'react'

function CardProfile() {
  return (
     <Box border={"1px solid blue"} w={{base:"300px",md:"400px"}} p={{base:"10px",md:"20px"}}>
        <Flex direction={"column"} gap={"20px"} justifyContent={"center"} alignItems={"center"} >
            <Box borderRadius={"full"} border={"1px solid red"}>
                <Image src="/Images/Jamal.jpg" borderRadius={"full"} maxWidth={"120px"} alt='profile'/>
            </Box>
            <Box textAlign={"center"}>
                <Flex aliggnItems={"center"} justifyContent={"center"} direction={"column"}>
                    <Text fontSize={"xl"} fontWeight={"bold"}>
                        Dr. Jamaluddin 
                    </Text>
                    <Text color={"gray.500"} fontSize={"12px"}>
                        Dokter Spesialis Mata
                    </Text>
                </Flex>
            </Box>
        </Flex>
        <Text>HELLO</Text>
        <Text>HELLO</Text>
        <Text>HELLO</Text>
        <Text>HELLO</Text>
        <Text>HELLO</Text>
        <Text>HELLO</Text>
        <Text>HELLO</Text>
        <Text>HELLO</Text>
        <Text>HELLO</Text>
        <Text>HELLO</Text>
        <Text>HELLO</Text>
        <Text>HELLO</Text>
        <Text>HELLO</Text>
        <Text>HELLO</Text>
        <Text>HELLO</Text>
        <Text>HELLO</Text>
        <Text>HELLO</Text>
        <Text>HELLO</Text>
        <Text>HELLO</Text>
        <Text>HELLO</Text>
        <Text>HELLO</Text>
        <Text>HELLO</Text>
        <Text>HELLO</Text>
        <Text>HELLO</Text>
        <Text>HELLO</Text>
        <Text>HELLO</Text>
        <Text>HELLO</Text>
        <Text>HELLO</Text>
        <Text>HELLO</Text>
        <Text>HELLO</Text>
        <Text>HELLO</Text>
        <Text>HELLO</Text>
        <Text>HELLO</Text>
        <Text>HELLO</Text>
        <Text>HELLO</Text>
        <Text>HELLO</Text>
        <Text>HELLO</Text>
        <Text>HELLO</Text>
        <Text>HELLO</Text>
        <Text>HELLO</Text>
        <Text>HELLO</Text>
        <Text>HELLO</Text>
        <Text>HELLO</Text>
        <Text>HELLO</Text>
        <Text>HELLO</Text>
        <Text>HELLO</Text>
        <Text>HELLO</Text>
        <Text>HELLO</Text>
        <Text>HELLO</Text>
        <Text>HELLO</Text>
        <Text>HELLO</Text>
        <Text>HELLO</Text>
        <Text>HELLO</Text>
    </Box>   
  )
}

export default CardProfile