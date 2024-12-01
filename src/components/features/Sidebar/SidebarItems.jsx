'use client'
import { Box,VStack, Text,  Flex} from "@chakra-ui/react";
import { 
  RiUserAddFill, 
  RiGroupFill,
  RiHospitalFill,
  RiFileListLine,
  RiMoneyDollarBoxLine,
  RiShieldCheckLine,
  RiStethoscopeFill,
  RiDossierLine,
  RiHotelBedFill,
  RiStethoscopeLine,
  RiPulseLine,
  RiHeartPulseFill,
  RiTeamLine
 } from "react-icons/ri";
import Link from "next/link";
import { AccordionItemContent, AccordionItemTrigger, AccordionRoot, AccordionItem } from "@/components/ui/accordion";
import { useState } from "react";
export default function SideItems({isMinimized}) {
  const [activeItems, setActiveItems] = useState({
    Admisi: false,
    PelayananMedis: false,
    PenunjangMedis: false,
  });

  const toggleItem = (item) => {
    setActiveItems((prevState) => ({
      ...prevState,
      [item]: !prevState[item],
    }));
  };
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
                borderRadius={"3xl"}
                px={isMinimized ? "3" : "1"}
                py={"2"}
                value={"Admisi"}
                bg={isMinimized ? (activeItems.Admisi ? "teal.800" : "teal.800") : (activeItems.Admisi ? "white" : "teal.800")}
                color={isMinimized ? (activeItems.Admisi ? "white" : "white") : (activeItems.Admisi ? "teal.800" : "white")}
                transition="background-color 1.5s ease-in-out"
                borderBottom={"none"}
              >
                <AccordionItemTrigger
                  pt={"2"} 
                  onClick={() => toggleItem("Admisi")}
                >
                  {isMinimized 
                    ? <RiFileListLine/> 
                    : <Flex gap={"10px"}>
                        <RiFileListLine size={isMinimized ? "20px" : "20px"} />
                        <Text fontSize={"15px"}>Admisi</Text>
                      </Flex>
                  }
                </AccordionItemTrigger>
                <AccordionItemContent
                  transition="all 1.5s ease-in-out"
                  pt={"2"}
                  fontSize={"15px"}
                >
                  {isMinimized 
                    ? <RiUserAddFill/> 
                    : <Box>
                        <Flex gap={"10px"} p={"10px"}>
                          <RiUserAddFill size={isMinimized ? "20px" : "20px"}/> 
                          <Link href="/PendaftaranPasien">
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
                    ? <RiShieldCheckLine/> 
                    :  <Flex pl={"5px"} gap={"10px"}>
                            <RiShieldCheckLine size={isMinimized ? "20px" : "20px"} />
                            <Text fontSize={"15px"}>Asuransi</Text>
                       </Flex>
                }
            </Link>
            <Link href={"/Management Kesehatan"} >
                {isMinimized 
                    ? <RiMoneyDollarBoxLine/> 
                    : <Flex pl={"5px"} gap={"10px"}>
                        <RiMoneyDollarBoxLine size={isMinimized ? "20px" : "20px"} />
                        <Text fontSize={"15px"}>Kasir</Text>
                      </Flex>
                }
            </Link>
            <Link href={"/Management Kesehatan"} >
                {isMinimized 
                    ? <RiStethoscopeFill/> 
                    : <Flex pl={"5px"} gap={"10px"}>
                        <RiStethoscopeFill size={isMinimized ? "20px" : "20px"} />
                        <Text fontSize={"15px"}>Dokter</Text>
                      </Flex>
                }
            </Link>
            <Link href={"/Management Kesehatan"} >
                {isMinimized 
                    ? <RiDossierLine/> 
                    : <Flex pl={"5px"} gap={"10px"}>
                        <RiDossierLine size={isMinimized ? "20px" : "20px"} />
                        <Text fontSize={"15px"}>Rawat Jalan</Text>
                      </Flex>
                }
            </Link>
            <Link href={"/Management Kesehatan"} >
                {isMinimized 
                    ? <RiHotelBedFill/> 
                    : <Flex pl={"5px"} gap={"10px"}>
                        <RiHotelBedFill size={isMinimized ? "20px" : "20px"} />
                        <Text fontSize={"15px"}>Rawat Inap</Text>
                      </Flex>
                }
            </Link>
            <Link href={"/Management Kesehatan"} >
                {isMinimized 
                    ? <RiStethoscopeLine/> 
                    : <Flex pl={"5px"} gap={"10px"}>
                        <RiStethoscopeLine size={isMinimized ? "20px" : "20px"} />
                        <Text fontSize={"15px"}>Farmasi</Text>
                      </Flex>
                }
            </Link>
            <Link href={"/Management Kesehatan"} >
                {isMinimized 
                    ? <RiPulseLine/> 
                    : <Flex pl={"5px"} gap={"10px"}>
                        <RiPulseLine size={isMinimized ? "20px" : "20px"} />
                        <Text fontSize={"15px"}>IGD</Text>
                      </Flex>
                }
            </Link>
            <Link href={"/Management Kesehatan"} >
                {isMinimized 
                    ? <RiHeartPulseFill/> 
                    : <Flex pl={"5px"} gap={"10px"}>
                        <RiHeartPulseFill size={isMinimized ? "20px" : "20px"} />
                        <Text fontSize={"15px"}>ICU</Text>
                      </Flex>
                }
            </Link>
            <Link href={"/Management Kesehatan"} >
                {isMinimized 
                    ? <RiTeamLine/> 
                    : <Flex pl={"5px"} gap={"10px"}>
                        <RiTeamLine size={isMinimized ? "20px" : "20px"} />
                        <Text fontSize={"15px"}>CRM</Text>
                      </Flex>
                }
            </Link>
            
            <Text letterSpacing={"1px"}>Departemens</Text>

            <AccordionRoot type="single" defaultValue="PelayananMedis" collapsible color={"white"}>
              <AccordionItem 
                borderRadius={"2xl"} 
                px={isMinimized ? "3" : "1"}
                pt={"2"}
                value={"PelayananMedis"} 
                bg={isMinimized ? (activeItems.PelayananMedis ? "teal.800" : "teal.800") : (activeItems.PelayananMedis ? "white" : "teal.800")}
                color={isMinimized ? (activeItems.PelayananMedis ? "white" : "white") : (activeItems.PelayananMedis ? "teal.800" : "white")}
                transition={activeItems.PelayananMedis ? "background-color 1.5s ease-in-out" : "background-color 1.5s ease-in-out"}
                borderBottom={"none"}
                
              >
                <AccordionItemTrigger 
                onClick={() => toggleItem("PelayananMedis")}>
                  {isMinimized 
                    ? <RiHospitalFill/> 
                    : <Flex gap={"10px"}>
                        <RiHospitalFill size={isMinimized ? "20px" : "20px"} /> 
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
            
            <AccordionRoot type="single" defaultValue="PenunjangMedis" collapsible color={"white"}>
              <AccordionItem 
                borderRadius={"2xl"} 
                px={isMinimized ? "3" : "1"}
                pt={"2"}
                value={"PenunjangMedis"} 
                bg={isMinimized ? (activeItems.PenunjangMedis ? "teal.800" : "teal.800") : (activeItems.PenunjangMedis ? "white" : "teal.800")}
                color={isMinimized ? (activeItems.PenunjangMedis ? "white" : "white") : (activeItems.PenunjangMedis ? "teal.800" : "white")}
                transition={activeItems.PenunjangMedis ? "background-color 1.5s ease-in-out" : "background-color 1.5s ease-in-out"}
                borderBottom={"none"}
                
              >
                <AccordionItemTrigger 
                onClick={() => toggleItem("PenunjangMedis")}>
                  {isMinimized 
                    ? <RiHospitalFill/> 
                    : <Flex gap={"10px"}>
                        <RiHospitalFill size={isMinimized ? "20px" : "20px"} /> 
                        <Text  fontSize={"15px"}>Penunjang Medic</Text>
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