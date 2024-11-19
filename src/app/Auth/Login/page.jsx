'use client';

import { Box, Container, Flex,Link} from '@chakra-ui/react';
import SignInForms from '@/components/features/SignInForms';
import Logo from '@/components/features/Logo';



export default function Login() {

  return (
    <Box bg="#eff7f8" minW="100vw" minH="100vh" display="flex" justifyContent="center" alignItems="center">
      <Container maxW="container.xl" minW="100vw" minH="100vh" padding={10}>
        <Flex 
            direction={{ base: "column", md: "row" }} 
            px={11} 
            justifyContent="center" 
            alignItems="center"
        >
          {/* Left Section */}
          <Box 
            flex={1} 
            textAlign="center" 
            left={{base:0,md:"250px"}} 
            position={"relative"} 
            bg={"#089bab"} 
            borderRadius="4xl" 
            mb={{ base: 6, lg: 0 }} 
          >
            <Logo src={"/Images/logo-quilvian-1.png"} alt="Logo" />
          </Box>

          {/* Right Section */}
          <Box flex={1} 
            position="relative" 
            zIndex={{ base: 2, md: "auto" }} 
            left={{ base: 0, md: "-80px" }}
            p={{ base: 4, md: 0 }} // Padding on mobile
            
          >
            <SignInForms />
            {/* Social Media Links */}
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

