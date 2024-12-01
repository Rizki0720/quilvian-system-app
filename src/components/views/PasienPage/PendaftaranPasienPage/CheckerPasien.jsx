'use client'
import { Field } from '@/components/ui/field'
import { Box, Input,Table, TableScrollArea  } from '@chakra-ui/react'
import { Form, Formik } from 'formik'
import * as Yup from 'yup'
import React, { useState } from 'react'

export default function CheckerPasien() {
    const dataPasien = [
        { kodePasien: 'P001', namaPasien: 'John Doe', umur: 30, jenisKelamin: 'Laki-laki' },
        { kodePasien: 'P002', namaPasien: 'Jane Smith', umur: 25, jenisKelamin: 'Perempuan' },
        { kodePasien: 'P003', namaPasien: 'Alice Johnson', umur: 35, jenisKelamin: 'Perempuan' },
    ]

    const [isPasien, setIsPasien] = useState(null)
    const handleSearch = (values) => {
        const findPasien = dataPasien.find(pasien => pasien.kodePasien === values.kodePasien)
        if(findPasien){
            console.log(findPasien);
            setIsPasien(findPasien)
        }else{
            setIsPasien(null)
        }
    }

  return (
    <Box>
        <Formik 
            initialValues={{ kodePasien: "" }}
            validationSchema={Yup.object({
                kodePasien: Yup.string().required('Required'),
            })} 
            onSubmit={handleSearch}>
            {formik => (
                <Form>
                    <Field name="kodePasien" label="Kode Pasien">
                            <Input 
                                {...formik.getFieldProps('kodePasien')}
                                placeholder="Masukkan Kode Pasien"
                                mr={4}
                                onChange={(e) => {
                                    console.log(e.target.value);
                                    formik.handleChange(e);
                                }} 
                                value={formik.values.kodePasien}
                            />
                    </Field>
                    <button type="submit">Cari</button>
                </Form>
            )}
        </Formik>
        {isPasien && (
            <TableScrollArea borderWidth="1px" rounded="md" height="300px" border={"1px solid black"}>
            <Table.Root size="lg" striped>
                <Table.Header>
                    <Table.Row>
                    <Table.ColumnHeader>Kode Pasien</Table.ColumnHeader>
                    <Table.ColumnHeader>namaPasien</Table.ColumnHeader>
                    <Table.ColumnHeader>umur</Table.ColumnHeader>
                    <Table.ColumnHeader>jenisKelamin</Table.ColumnHeader>
                    </Table.Row>
                </Table.Header>
                <Table.Body>    
                    <Table.Row>
                        <Table.Cell>{isPasien.kodePasien}</Table.Cell>
                        <Table.Cell>{isPasien.namaPasien}</Table.Cell>
                        <Table.Cell>{isPasien.umur}</Table.Cell>
                        <Table.Cell>{isPasien.jenisKelamin}</Table.Cell>
                    </Table.Row>
                </Table.Body>
            </Table.Root>
        </TableScrollArea>
        )}
    </Box>
  )
}
