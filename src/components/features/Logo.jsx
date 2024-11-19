'use client';

import { Image, Box, Text, Flex } from '@chakra-ui/react';

const Logo = ({ src, alt }) => {
  return (
    <Box
        flex={1}
        display="flex"
        flexDirection="column"
        alignItems={{ base: "center", md: "flex-start" }}
        justifyContent="center"
        pl={{ base: 0, md: '32' }}
        h={"850px"}
        w={{ base: "750px", md: "1000px" }}
        position={"relative"}
       
    >
        <Flex direction={"column"} gap={"20px"}>
            <Image   
                src={src} 
                alt={alt} 
                maxWidth="450px"
                mt={"-100px"}
                border={"2px solid white"}
                bg={"white"}
                borderRadius={"4xl"}
            />
            <Text color={"white"} fontSize={"2xl"} fontWeight={"bold"}>Manage your Order</Text>
            <Text color={"white"}>It is a long established fact that a reader will be distracted by <br/> the readable content.</Text>
        </Flex>
    </Box>

  );
};

export default Logo;