import { Flex, Text } from "@chakra-ui/react";
import { color } from "framer-motion";
import Link from "next/link";

export function Footer() {
    return (
        <Flex direction={"row"} justifyContent={"space-between"} bg={"white"} p={"20px"} borderRadius={"2xl"} shadow={"md"} alignItems={"center"}> 
            <Link href="/login" >
                <Text _hover={{color: "teal.700", transition: "all 0.2s ease-in-out"}}>Privacy Policy</Text>
            </Link>
            <Text>
                Copyright 2020 <Link href="/dashboard" color="teal.800">XRay</Link> All Rights Reserved.
            </Text>
        </Flex>
    )
}