
import Navbar from "@/components/features/Navbar/Navbar";
import SideBar from "@/components/features/Sidebar/Sidebar";
import { Flex, Box, Text } from "@chakra-ui/react";

export default function Dashboard() {
    return (
        <Flex bg={"teal.800"}>
            <SideBar/>
            <Box flex={1} bg={"#eff7f8"} borderRadius={"2xl"} shadow={"lg"} border={"none"}>
                <Flex 
                    direction={"column"} 
                    justifyContent={"center"} 
                    alignItems={"center"} 
                    gap={"20px"} 
                    m={"20px"}
                    
                >
                    <Navbar/>
                    <Text>Hallo dua</Text>
                    
                </Flex>
            </Box>
        </Flex>
    )
}