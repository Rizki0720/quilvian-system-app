'use client'
import { Field } from "@/components/ui/field"
import { Box, Flex, Input, Text, Image } from "@chakra-ui/react"
import { RiSearchLine, RiFullscreenFill, RiNotification3Fill, RiMailOpenLine  } from "react-icons/ri"
import { Button } from "@/components/ui/button"
import {
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
} from "@/components/ui/menu"

const Navbar = () => {
    return (
        <Box borderRadius={"3xl"} shadow={"md"} w={"100%"} p={"15px"}>
            <Flex direction={"row"} justifyContent={"space-between"}>
                <Field w={"30%"}>
                    <Input 
                        placeholder='Type here to search...' 
                        p={"5px"} 
                        px={"10px"} 
                        borderRadius={"xl"} 
                        bg={"#ceebee"} 
                        position={"relative"}
                    />
                    <Box position={"absolute"} right={"10px"} top={"13px"}>
                        <RiSearchLine color="#089bab" />
                    </Box>
                </Field>
                <Box display={"flex"} gap={"20px"} mr={"40px"}>
                    <Button variant="outline" size="sm" border="none">
                        <RiFullscreenFill />
                    </Button>
                    <MenuRoot>
                        <MenuTrigger asChild p={"5px"}>
                            <Button variant="outline" size="sm" border="none">
                               <RiNotification3Fill />
                            </Button>
                        </MenuTrigger>
                        <MenuContent>
                            <MenuItem value="new-txt">New Text File</MenuItem>
                            <MenuItem value="new-file">New File...</MenuItem>
                            <MenuItem value="new-win">New Window</MenuItem>
                            <MenuItem value="open-file">Open File...</MenuItem>
                            <MenuItem value="export">Export</MenuItem>
                        </MenuContent>
                    </MenuRoot>
                    <MenuRoot>
                        <MenuTrigger asChild p={"20px"}>
                            <Button variant="outline" size="sm" border="none">
                                <RiMailOpenLine />
                            </Button>
                        </MenuTrigger>
                        <MenuContent>
                            <MenuItem value="new-txt">New Text File</MenuItem>
                            <MenuItem value="new-file">New File...</MenuItem>
                            <MenuItem value="new-win">New Window</MenuItem>
                            <MenuItem value="open-file">Open File...</MenuItem>
                            <MenuItem value="export">Export</MenuItem>
                        </MenuContent>
                    </MenuRoot>
                    <MenuRoot>
                        <MenuTrigger asChild >
                            <Box w={"150px"} mt={"-10px"}>
                                <Flex direction={"row"} gap={"5px"} justifyContent={"center"} alignItems={"center"}>
                                    <Image src="/Images/logo-quilvian-1.png" w={"50px"} h={"50px"} alt="Logo" />
                                    <Flex direction={"column"}>
                                        <Text>Quilvian</Text>
                                        <Text fontSize={"xs"}>Available</Text>
                                    </Flex>
                                </Flex>
                            
                            </Box>
                        </MenuTrigger>
                        <MenuContent>
                            <MenuItem value="new-txt">New Text File</MenuItem>
                            <MenuItem value="new-file">New File...</MenuItem>
                            <MenuItem value="new-win">New Window</MenuItem>
                            <MenuItem value="open-file">Open File...</MenuItem>
                            <MenuItem value="export">Export</MenuItem>
                        </MenuContent>
                    </MenuRoot>
                   
                </Box>
            </Flex>
        </Box>  
    )
}

export default Navbar