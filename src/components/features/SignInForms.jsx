'use client'

import { Box, Flex, Input, Text, Link, VStack, Icon, Separator } from '@chakra-ui/react';
import { Button } from '../ui/button';
import { Checkbox } from '../ui/checkbox';
import { Field } from '../ui/field';
import * as Yup from 'yup';
import { Formik, Form } from 'formik';
import { PasswordInput } from '../ui/password-input';
import { FaInstagram } from "react-icons/fa";


const SignInForms = () => {
    
    return (
        <Formik 
            initialValues={{ email: "", password: "" }}
            validationSchema={Yup.object({
                email: Yup.string().email('Invalid email').required('Required'),
                password: Yup.string().required('Required').max(20, 'Must be 20 characters or less'),
            })}
            onSubmit={(values) => {
                console.log(values)
            }}
        >
            {formik => (
                <Box px={'16'} py={'8'} bg={{sm: 'transparent', md: 'white'}} position={'relative'} color={'black'} w="650px" h="650px" borderRadius="4xl" shadow="md">
                    <Text fontSize="5xl" fontWeight="light" >
                        Sign in
                    </Text>
                    <Text fontSize="sm" mb={6}>
                        Enter your email address and password to access admin panel.
                    </Text>
                    <Form>
                        <VStack spacing={4}>
                            <Field 
                                label="Email"
                                mb={4}
                                helperText="We'll never share your email with anyone else."
                                errorText={formik.touched.email && formik.errors.email} // Show error only after field is touched
                            >
                                <Input 
                                    border="none" 
                                    borderBottom={"1px solid black"} 
                                    p={"10px"} 
                                    name="email" 
                                    placeholder="Email"
                                    type="email"
                                    onChange={(e) => {
                                        console.log(e.target.value);
                                        formik.handleChange(e);
                                    }} 
                                />
                            </Field>

                            <Field 
                                label="Password"
                                helperText="We'll never share your password with anyone else."
                                errorText={formik.touched.password && formik.errors.password}
                            >
                                <PasswordInput p={"10px"} border="none" borderBottom={"1px solid black"} name="password" placeholder="Password" />
                            </Field>
                        </VStack>
                        <Flex justify="space-between" mt={10} mb={4}>
                            <Checkbox>Remember me</Checkbox>
                            {/* <Link href="/forgot-password" color="blue.500">
                            Forgot password?
                            </Link> */}
                            <Button type="submit" borderRadius="lg" p="10px" bg={"#089bab"} >Sign in</Button>
                        </Flex>
                    </Form>
                    <Separator/>
                    <Box mt={4}>
                        <Flex justify="space-between">
                            <Text mt={4}>
                                Dont have an account?{' '}
                                <Link href="/sign-up" color="blue.500">
                                    Sign up
                                </Link>
                            </Text>
                            <Flex justify="center" mt={4}>
                                <Link href="https://www.instagram.com/" color="blue.500" mx={2}>
                                <Icon size={"md"}>
                                    <FaInstagram />
                                </Icon>
                                </Link>
                            
                            </Flex>
                        </Flex>
                    </Box>
                    
                </Box>
            )}
        </Formik>
    )
}

export default SignInForms;