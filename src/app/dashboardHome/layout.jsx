"use client";
import React, { useEffect, useRef, useState } from 'react'
import { Box, Flex, Text } from '@chakra-ui/react'
import Navbar from '@/components/features/Navbar/Navbar'
import { Footer } from '@/components/features/Footer/Footer';

function DashboardLayout({children}) {
  // const containerRef = useRef(null);
  const [isFixed, setIsFixed ] = useState(false);

  useEffect(() => {
    // const container = containerRef.current;
    const handleScroll = () => {
      if(window.scrollY>= 75){
        setIsFixed(true);
      }else{
        setIsFixed(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  },[]); 

  return (
    <Box 
      // ref={containerRef}
      bg={"teal.800"} 
      minW={"100%"} 
      minH={"100vh"} 
      border={"none"} 
      overflowY={"auto"} // Allow scrolling
      scrollBehavior={"smooth"}
      className='scrollable'
      sx={{
        "::-webkit-scrollbar": {
          width: "2px",   
        },
        "::-webkit-scrollbar-thumb": {
          background: "#2d3748",
          borderRadius: "2px",
        },
        "::-webkit-scrollbar-thumb:hover": {
          background: "#4a5568",
        },
        "::-webkit-scrollbar-track": {
          background: "#e2e8f0",
          borderRadius: "8px",
        },
      }}
    >
        <Flex 
          direction={"column"} 
          bg={"#eff7f8"}
          borderLeftRadius={"3xl"}
          minH={"100vh"}
          w={"100%"}
          pr={"40px"} 
        >
          <Navbar isFixed={isFixed} />
          <Box ml={"30px"} mt={"20px"} w={"100%"} border={"none"} shadow={"none"}>
            {children}
          </Box>
          <Box p={"20px"} textAlign={"center"}>
            <Footer />
          </Box>
      </Flex>
    </Box>
  )
}

export default DashboardLayout