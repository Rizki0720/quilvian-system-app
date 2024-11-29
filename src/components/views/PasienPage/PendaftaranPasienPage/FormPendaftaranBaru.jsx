import { Box, Input, Text, Grid, GridItem, Textarea, Button} from '@chakra-ui/react'
import { Field } from '@/components/ui/field'
import { Formik } from 'formik'
import * as Yup from 'yup'
import React from 'react'

export default function FormPendaftaranBaru() {
  return (
    // <Formik 
    //     initialValues={{
    //         namaLengkap:"", 
    //         nomorIdentitas:"", 
    //         tanggalLahir:"", 
    //         jenisKelamin:"",
    //         alamat:"",
    //         nomorTelepon:"",
    //     }}
    //     validationSchema={Yup.object({
    //         namaLengkap: Yup.string().required('Required'),
    //         nomorIdentitas:Yup.number().max(25).required('Required'),
    //         tanggalLahir:Yup.date().required('Required'),
    //         jenisKelamin:Yup.string().required('Required'),
    //         alamat:Yup.string().required('Required'),
    //         nomorTelepon:Yup.number().max(25).required('Required'),
    //     })}
    //     onSubmit={(values) =>{
    //         console.log(values);
    //     }}
    // >
    //     {formik => (
    //         <Box>
    //             <Text>Hais</Text>
    //         </Box>
    //     )}

    // </Formik>
    <Box>
        <Box w={"100%"} mb={"20px"}>
            <Text fontWeight={"semibold"} fontSize={"2xl"}>Form pendaftaran pasien baru </Text>
        </Box>
        <Box mt={"20px"}>
            <Grid templateColumns={{base: "repeat(1, 1fr)", md: "repeat(1, 1fr)", lg:"repeat(2, 1fr)"}} gap={"20px"} mb={"20px"}>
                <GridItem colSpan={{base: 3, md: 1}} >
                  <Field 
                    label="Nama Lengkap: *" 
                    type="text" 
                    name="namaLengkap" 
                    placeholder="Masukkan Nama Lengkap" >
                    <Input 
                      type="text" 
                      name="namaLengkap" 
                      placeholder="Masukkan Nama Lengkap" 
                      p={"20px"}
                    />
                  </Field>
                </GridItem>
                <GridItem colSpan={{base: 3, md: 1}} >
                  <Field 
                    label="No Identitas: *" 
                    type="text" 
                    name="noIdentitas" 
                    placeholder="Masukkan Nomor Identitas" >
                    <Input 
                      type="text" 
                      name="noIdentitas" 
                      placeholder="Masukkan Nomor Identitas"
                      p={"20px"} 
                    />
                  </Field>
                </GridItem>
                <GridItem colSpan={{base: 3, md: 1}} >
                  <Field 
                    label="Tanggal Lahir: *" 
                    type="date" 
                    name="birthDate" 
                    placeholder="Masukkan Tanggal Lahir" >
                    <Input 
                      type="date" 
                      name="birthDate" 
                      placeholder="Masukkan Tanggal Lahir"
                      p={"20px"} 
                    />
                  </Field>
                </GridItem>
                <GridItem colSpan={{base: 3, md: 1}} >
                  <Field 
                    label="Jenis Kelamin: *" 
                    type="text" 
                    name="gender" 
                    placeholder="Masukkan Jenis Kelamin" >
                    <Input 
                      type="text" 
                      name="gender" 
                      placeholder="Masukkan Jenis Kelamin"
                      p={"20px"} 
                    />
                  </Field>
                </GridItem>
                <GridItem colSpan={{base: 3, md: 1}} >
                  <Field 
                    label="Nomor Telepon: *" 
                    type="text" 
                    name="gender" 
                    placeholder="Masukkan Nomor Telepon" >
                    <Input 
                      type="text" 
                      name="gender" 
                      placeholder="Masukkan Nomor Telepon"
                      p={"20px"} 
                    />
                  </Field>
                </GridItem>
                <GridItem colSpan={{base: 3, md: 2}} >
                  <Field 
                    label="Alamat: *" 
                    type="text" 
                    name="gender" 
                    placeholder="Masukkan Alamat" 
                  >
                    <Textarea p={"20px"} variant="outline" />
                  </Field>
                </GridItem>
            </Grid>
            <Box>
              <Button type='submit' _hover={{bg:"blue.500", color:"white"}} bg={"blue.400"} color={"white"} w={"100%"} borderRadius={"xl"} shadow={"md"} mt={"20px"}>Simpan</Button>
            </Box>
        </Box>
    </Box>
  )
}
