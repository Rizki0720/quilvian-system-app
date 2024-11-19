import React, { useState } from "react";
import { Box, IconButton, VStack, Text, Image, Flex, Icon} from "@chakra-ui/react";
import {  FaHome } from "react-icons/fa";
import { BsThreeDots , BsThreeDotsVertical  } from "react-icons/bs";
import { 
  RiUserAddFill, 
  RiGroupFill,
  RiHospitalFill
 } from "react-icons/ri";
import Link from "next/link";
import { AccordionItemContent, AccordionItemTrigger, AccordionRoot, AccordionItem } from "@/components/ui/accordion";
import { color } from "framer-motion";
export default function SideItems({isMinimized}) {
    
    return (
        <VStack  
            spacing={4}
            align="stretch"
            p="4"
            pl={isMinimized ? "4" : "4"}
            mt="4"
            flex="1"
            gap={"20px"}
            display={"flex"}
            alignItems={isMinimized ? "center" : "flex-start"}
        >
            <AccordionRoot type="single" defaultValue="Admisi" collapsible color={"white"}>
              <AccordionItem 
                borderRadius={"2xl"} 
                px={isMinimized ? "3" : "1"}
                pt={"2"}
                value={"Admisi"} 
                transition="background-color 1.5s ease-in-out"
                bg={isMinimized ? "none" : "white"}
                _expanded={{ bg: "white", color: "teal.800" }}
                color={isMinimized ? "none" : "teal.800"} 
                borderBottom={"none"}
                
              >
                <AccordionItemTrigger>
                  {isMinimized 
                    ? <RiHospitalFill/> 
                    : <Flex gap={"10px"}>
                        <Icon fontSize={isMinimized ? "20px" : "20px"}>
                            <RiHospitalFill /> 
                        </Icon>
                        <Text  fontSize={"15px"}>Admisi</Text>
                      </Flex>
                  }
                </AccordionItemTrigger>
                <AccordionItemContent
                  transition="background-color 1.50s ease-in-out"  
                  pt={"2"}
                  fontSize={"15px"}
                >
                  {isMinimized 
                  ? <RiGroupFill/> 
                  : <Box>
                        <Flex p={"10px"}>
                        <Link href="/Pendaftaran">
                        <Text>Pendaftaran Pasien</Text>
                        </Link>
                    </Flex>
                    </Box> 
                  } 
                </AccordionItemContent>
              </AccordionItem>
            </AccordionRoot>
             <Link href="/Asuransi">
                {isMinimized 
                    ? <RiUserAddFill/> 
                    :  <Flex pl={"5px"} gap={"10px"}>
                            <RiUserAddFill size={isMinimized ? "20px" : "20px"} />
                            <Text fontSize={"15px"}>Asuransi</Text>
                       </Flex>
                }
            </Link>
            <Link href={"/Management Kesehatan"} >
                {isMinimized 
                    ? <RiHospitalFill/> 
                    : <Flex pl={"5px"} gap={"10px"}>
                        <RiHospitalFill size={isMinimized ? "20px" : "20px"} />
                        <Text fontSize={"15px"}>Kasir</Text>
                      </Flex>
                }
            </Link>
            <Link href={"/Management Kesehatan"} >
                {isMinimized 
                    ? <RiHospitalFill/> 
                    : <Flex pl={"5px"} gap={"10px"}>
                        <RiHospitalFill size={isMinimized ? "20px" : "20px"} />
                        <Text fontSize={"15px"}>Dokter</Text>
                      </Flex>
                }
            </Link>
            <Link href={"/Management Kesehatan"} >
                {isMinimized 
                    ? <RiHospitalFill/> 
                    : <Flex pl={"5px"} gap={"10px"}>
                        <RiHospitalFill size={isMinimized ? "20px" : "20px"} />
                        <Text fontSize={"15px"}>Rawat Jalan</Text>
                      </Flex>
                }
            </Link>
            <Link href={"/Management Kesehatan"} >
                {isMinimized 
                    ? <RiHospitalFill/> 
                    : <Flex pl={"5px"} gap={"10px"}>
                        <RiHospitalFill size={isMinimized ? "20px" : "20px"} />
                        <Text fontSize={"15px"}>Rawat Inap</Text>
                      </Flex>
                }
            </Link>
            <Link href={"/Management Kesehatan"} >
                {isMinimized 
                    ? <RiHospitalFill/> 
                    : <Flex pl={"5px"} gap={"10px"}>
                        <RiHospitalFill size={isMinimized ? "20px" : "20px"} />
                        <Text fontSize={"15px"}>Farmasi</Text>
                      </Flex>
                }
            </Link>
            <Link href={"/Management Kesehatan"} >
                {isMinimized 
                    ? <RiHospitalFill/> 
                    : <Flex pl={"5px"} gap={"10px"}>
                        <RiHospitalFill size={isMinimized ? "20px" : "20px"} />
                        <Text fontSize={"15px"}>IGD</Text>
                      </Flex>
                }
            </Link>
            <Link href={"/Management Kesehatan"} >
                {isMinimized 
                    ? <RiHospitalFill/> 
                    : <Flex pl={"5px"} gap={"10px"}>
                        <RiHospitalFill size={isMinimized ? "20px" : "20px"} />
                        <Text fontSize={"15px"}>ICU</Text>
                      </Flex>
                }
            </Link>
            <Link href={"/Management Kesehatan"} >
                {isMinimized 
                    ? <RiHospitalFill/> 
                    : <Flex pl={"5px"} gap={"10px"}>
                        <RiHospitalFill size={isMinimized ? "20px" : "20px"} />
                        <Text fontSize={"15px"}>CRM</Text>
                      </Flex>
                }
            </Link>
            
            <Text letterSpacing={"1px"}>Departemens</Text>

            <AccordionRoot type="single" defaultValue="Admisi" collapsible color={"white"}>
              <AccordionItem 
                borderRadius={"2xl"} 
                px={isMinimized ? "3" : "1"}
                pt={"2"}
                value={"Admisi"} 
                transition="background-color 1.5s ease-in-out"
                bg={isMinimized ? "none" : "white"}
                _expanded={{ bg: "white", color: "teal.800" }}
                color={isMinimized ? "none" : "teal.800"} 
                borderBottom={"none"}
                
              >
                <AccordionItemTrigger>
                  {isMinimized 
                    ? <RiHospitalFill/> 
                    : <Flex gap={"10px"}>
                        <Icon fontSize={isMinimized ? "20px" : "20px"}>
                            <RiHospitalFill /> 
                        </Icon>
                        <Text  fontSize={"15px"}>Pelayanan Medic</Text>
                      </Flex>
                  }
                </AccordionItemTrigger>
                <AccordionItemContent
                  transition="background-color 1.50s ease-in-out"  
                  pt={"2"}
                  fontSize={"15px"}
                >
                  {isMinimized 
                  ? <RiGroupFill/> 
                  : <Box>
                        <Flex p={"10px"}>
                            <Link href="/Pendaftaran">
                                <Text>Instalasi Rawat Intensif</Text>
                            </Link>
                        </Flex>
                        <Flex p={"10px"}>
                            <Link href="/Pendaftaran">
                                <Text>Instalasi Kamar Bedah</Text>
                            </Link>
                        </Flex>
                    </Box> 
                  } 
                </AccordionItemContent>
              </AccordionItem>
            </AccordionRoot>
            <AccordionRoot type="single" defaultValue="Admisi" collapsible color={"white"}>
              <AccordionItem 
                borderRadius={"2xl"} 
                px={isMinimized ? "3" : "1"}
                pt={"2"}
                value={"Admisi"} 
                transition="background-color 1.5s ease-in-out"
                bg={isMinimized ? "none" : "white"}
                _expanded={{ bg: "white", color: "teal.800" }}
                color={isMinimized ? "none" : "teal.800"} 
                borderBottom={"none"}
                
              >
                <AccordionItemTrigger>
                  {isMinimized 
                    ? <RiHospitalFill/> 
                    : <Flex gap={"10px"}>
                        <Icon fontSize={isMinimized ? "20px" : "20px"}>
                            <RiHospitalFill /> 
                        </Icon>
                        <Text  fontSize={"15px"}>Pelayanan Medic</Text>
                      </Flex>
                  }
                </AccordionItemTrigger>
                <AccordionItemContent
                  transition="background-color 1.50s ease-in-out"  
                  pt={"2"}
                  fontSize={"15px"}
                >
                  {isMinimized 
                  ? <RiGroupFill/> 
                  : <Box>
                        <Flex p={"10px"}>
                            <Link href="/Pendaftaran">
                                <Text>Instalasi Rawat Intensif</Text>
                            </Link>
                        </Flex>
                        <Flex p={"10px"}>
                            <Link href="/Pendaftaran">
                                <Text>Instalasi Kamar Bedah</Text>
                            </Link>
                        </Flex>
                    </Box> 
                  } 
                </AccordionItemContent>
              </AccordionItem>
            </AccordionRoot>
            
          <Text>Menu Item 3</Text>
        </VStack>
    )
}