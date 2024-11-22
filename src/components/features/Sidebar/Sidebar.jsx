"use client";

import React, { useState } from "react";
import { Box, IconButton,  Text, Image, Flex} from "@chakra-ui/react";
import {  FaHome } from "react-icons/fa";
import { BsThreeDots , BsThreeDotsVertical  } from "react-icons/bs";
import { 
  RiSpeedUpLine 
 } from "react-icons/ri";
import Link from "next/link";
import SideItems from "./SidebarItems";
// import { Button } from "@/components/ui/button";

const SideBar = () => {
  const [isMinimized, setIsMinimized] = useState(false);

  const toggleSidebar = () => {
    setIsMinimized(!isMinimized);
  };

  return (
    <Box>
      {/* Sidebar */}
      <Box
        position="relative"
        top="0"
        left="0"
        height="100vh"
        width={isMinimized ? "70px" : "265px"}
        transition="width 0.3s ease"
        bg={"teal.800"}
        color="white"
        zIndex="1000"
        shadow="lg"
        display="flex"
        flexDirection="column"
        className="scrollable"
        overflowY={"auto"}
        scrollBehavior={"smooth"}
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
        {/* Sidebar Header */}
        <Box
          display="flex"
          alignItems="center"
          justifyContent={isMinimized ? "center" : "space-between"}
          p="4"
        >
          <Box w={"3500px"}>
          {!isMinimized && <Image src="/Images/icon-dashboard.png" maxWidth={"500px"} h={"50px"}  alt="Logo" />}
          </Box>
          
          <IconButton
            onClick={toggleSidebar}
            size="sm"
            variant="unstyled"
            aria-label="Toggle Sidebar"
            color="white"
            i
          >
            {isMinimized ? <BsThreeDotsVertical size={"30px"}  /> : <BsThreeDots size={"30px"} />}
          </IconButton>
        </Box>
        <Box 
            display="flex" 
            alignItems={isMinimized ? "center" : "flex-start"}
            justifyContent={isMinimized ? "center" : "flex-start"}
            mt={"10px"} 
            mx={"10px"} 
            p={isMinimized ? "0" : "3"}
            px={isMinimized ? "0" : "4"} 
            bg={isMinimized ? "none" : "white"}  
            borderRadius={"4xl"}
            shadow={isMinimized ? "none" : "lg"}
          >
          <Link href="/login" > 
            {isMinimized 
            ? <FaHome /> 
            : <Flex gap={"10px"}> 
                <RiSpeedUpLine  color="#089bab" size={isMinimized ? "20px" : "20px"}/> 
                <Text color={isMinimized ? "white" : "#089bab"} letterSpacing={"1px"}>Dashboard</Text> 
              </Flex> }
            
          </Link>
        </Box>

        {/* Sidebar Content */}
        <Box>          
            {/* Menu nav Item Pendaftaran Pasien*/}
           <SideItems isMinimized={isMinimized} />
        </Box>
      </Box>
    </Box>
  );
};

export default SideBar;
