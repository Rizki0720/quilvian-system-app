import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import { RiAndroidLine, RiGroupFill, RiHospitalFill, RiHospitalLine, RiNurseFill, RiStethoscopeFill } from 'react-icons/ri'
export const Card = () => {
    return (
        <Box w={"100%"} pt={"20px"} h={{base:"300px",md:"200px"}}>
            <Box>
                <Text color={"gray.400"}>10 Nov. 2024 </Text>
            </Box>
            <Flex direction={{base:"column",md:"row"}} gap={"20px"} m={"20px"}>
                <Box shadow={"md"} p={"20px"} w={"300px"} bg={"#ceebee"} borderRadius={"2xl"}>
                    <Flex direction={"row"} justifyContent={"space-between"} justifyItems={"center"}>
                    <Box bg={"#089bab"} h={"60px"}  borderRadius={"full"} p={"15px"} shadow={"md"}>
                        <RiStethoscopeFill size={"30px"} color='white' />
                    </Box>
                    <Box>
                        <Text fontSize={"4xl"}>
                            Hello
                        </Text>
                        <Text>
                            Hello
                        </Text>
                    </Box>
                    </Flex>
                </Box>
                <Box shadow={"md"} p={"20px"} w={"300px"} bg={"orange.100"} borderRadius={"2xl"}>
                    <Flex direction={"row"} justifyContent={"space-between"} justifyItems={"center"}>
                    <Box bg={"#fb923c"} h={"60px"}  borderRadius={"full"} p={"15px"} shadow={"md"}>
                        <RiNurseFill size={"30px"} color='white' />
                    </Box>
                    <Box>
                        <Text fontSize={"4xl"}>
                            Hello
                        </Text>
                        <Text>
                            Hello
                        </Text>
                    </Box>
                    </Flex>
                </Box>
                <Box shadow={"md"} p={"20px"} w={"300px"} bg={"red.100"} borderRadius={"2xl"}>
                    <Flex direction={"row"} justifyContent={"space-between"} justifyItems={"center"}>
                    <Box bg={"red.500"} h={"60px"} borderRadius={"full"} p={"15px"} shadow={"md"}>
                        <RiGroupFill size={"30px"} color='white' />
                    </Box>
                    <Box>
                        <Text fontSize={"4xl"}>
                            Hello
                        </Text>
                        <Text>
                            Hello
                        </Text>
                    </Box>
                    </Flex>
                </Box>
                <Box shadow={"md"} p={"20px"} w={"300px"} bg={"cyan.100"} borderRadius={"2xl"}>
                    <Flex direction={"row"} justifyContent={"space-between"} justifyItems={"center"}>
                    <Box bg={"cyan.400"} h={"60px"} borderRadius={"full"} p={"15px"} shadow={"md"}>
                        <RiHospitalLine size={"30px"} color='white' />
                    </Box>
                    <Box>
                        <Text fontSize={"4xl"}>
                            8
                        </Text>
                        <Text>
                            Hello
                        </Text>
                    </Box>
                    </Flex>
                </Box>
                
            </Flex>
        </Box>
    )
}