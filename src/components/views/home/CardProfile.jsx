'use client'
import InstanceAxios from '@/lib/InstanceAxios'
import { Box, Image, Flex, Text, Button } from '@chakra-ui/react'

import React, { useEffect, useState } from 'react'

function CardProfile() {
    const [data, setData] = useState([])

    // useEffect(() => {
    //     const fetchData = async() => {
    //         const response = await InstanceAxios.get("/api/Doctor")
    //         console.log(response.data)
    //         setData(response.data)
    //     }
    //     fetchData()
    // },[])

  return (
     <Box w={{base:"300px",md:"550px"}} h={{base:"300px",md:"350px"}} ml={{base:0,md:"25px"}}  >
        <Flex direction={"column"} mt={"-50px"} mx={"30px"} gap={"20px"} justifyContent={"center"} alignItems={"center"} >
            <Box borderRadius={"full"} position={"relative"} bottom={"-70px"}>
                <Image src="/Images/Jamal.jpg" borderRadius={"full"} maxWidth={"120px"} alt='profile'/>
            </Box>
            {/* {data.map((item) => {
                console.log(item)
                return ( */}
                    <Box textAlign={"center"} shadow={"lg"} borderRadius={"2xl"} bg={"white"} w={"100%"} p={"10px"} h={"200px"}>
                    <Text></Text>
                    <Flex aliggnItems={"center"} justifyContent={"center"} pt={"60px"} direction={"column"}>
                        <Text fontSize={"xl"} fontWeight={"bold"}>
                             Dr. Rizki Gunawan
                         </Text>
                         <Text color={"gray.500"} fontSize={"12px"}>
                             Dokter Spesialis Mata
                         </Text>
                         <Box mt={"20px"} >
                             <Flex direction={"row"} gap={"20px"} justifyContent={"center"} alignItems={"center"}>
                                 <Button bg={"#089bab"} px={"40px"} color={"white"} borderRadius={"full"} variant={"subtle"} shadow={"md"}>Appointment</Button>
                                 <Button bg={"#fb923c"} px={"40px"} color={"white"} borderRadius={"full"} variant={"subtle"}  shadow={"md"}>Memo</Button>
                                 <Button bg={"red.500"} px={"40px"} color={"white"} borderRadius={"full"} variant={"subtle"}  shadow={"md"}>Absen</Button>
                             </Flex>
                         </Box>
                    </Flex>
                 </Box>
                {/* )
            })} */}
        </Flex>
    </Box>   
  )
}

export default CardProfile