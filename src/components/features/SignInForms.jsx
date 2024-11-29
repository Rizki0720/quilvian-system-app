'use client';

import { Box, Flex, Input, Text, Link, VStack, Icon, Separator } from '@chakra-ui/react';
import { Button } from '../ui/button';
import { Checkbox } from '../ui/checkbox';
import { Field } from '../ui/field';
import * as Yup from 'yup';
import { Formik, Form } from 'formik';
import { PasswordInput } from '../ui/password-input';
import { useDispatch, useSelector } from 'react-redux';
// import { useRouter } from 'next/router';
import { LoginUser } from '@/lib/state/slice/loginUserSlice';


const SignInForms = () => {
    const dispatch = useDispatch();
    // const router = useRouter();

    // const {loading, error} = useSelector(state => state.loginUser);

    const handleLogin = (values) => {
        dispatch(LoginUser(values))
        .then((result) => {
            if(result.payload){
                console.log(result.payload);
            }
        })
        .catch((error) => {
            console.log(error);
        })
    }
   
    return (
        <Formik 
            initialValues={{ username: "", password: "" }}
            validationSchema={Yup.object({
                username: Yup.string().required('username tidak boleh kosong'),
                password: Yup.string().required('password tidak boleh kosong').max(20, 'Must be 20 characters or less'),
            })}
            onSubmit={handleLogin}
        >
            {formik => (
                <Box px={'16'} py={'8'} bg={{sm: 'transparent', md: 'white'}} position={'relative'} color={'black'} w="650px" h="650px" borderRadius="4xl" shadow="md">
                    <Text fontSize="5xl" fontWeight="light" >
                        Sign in
                    </Text>
                    <Text fontSize="sm" mb={6}>
                        Enter your username address and password to access admin panel.
                    </Text>
                    <Form>
                        <VStack spacing={4}>
                            <Field 
                                label="username"
                                mb={4}
                                helperText="We'll never share your username with anyone else."
                                errorText={formik.touched.username && formik.errors.username}
                                invalid={formik.touched.username && formik.errors.username}
                                 // Show error only after field is touched
                            >
                                <Input 
                                    border="none" 
                                    borderBottom={"1px solid black"} 
                                    p={"10px"} 
                                    name="username" 
                                    placeholder="username"
                                    type="username"
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
                                invalid={formik.touched.username && formik.errors.username}
                            >
                                <PasswordInput 
                                    p={"10px"} 
                                    border="none" 
                                    borderBottom={"1px solid black"} 
                                    name="password" 
                                    placeholder="Password" 
                                    onChange={formik.handleChange} 
                                />
                            </Field>
                        </VStack>
                            {/* {loading && <Text>Loading...</Text>}
                            {error && <Text color="red.500">{error}</Text>} */}

                        <Flex justify="space-between" mt={10} mb={4}>
                            <Checkbox>Remember me</Checkbox>
                            {/* <Link href="/forgot-password" color="blue.500">
                            Forgot password?
                            </Link> */}
                            <Button type="submit" borderRadius="lg"  p="10px" bg={"#089bab"} >Sign In</Button>
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
                            {/* <Flex justify="center" mt={4}>
                                <Link href="https://www.instagram.com/" color="blue.500" mx={2}>
                                <Icon size={"md"}>
                                    <FaInstagram />
                                </Icon>
                                </Link>
                            
                            </Flex> */}
                        </Flex>
                    </Box>
                    
                </Box>
            )}
        </Formik>
    )
}

export default SignInForms;