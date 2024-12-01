"use client";
import { Box, Text, Tabs, Flex, Table, TableScrollArea } from '@chakra-ui/react'
import { LuCheckSquare, LuFolder, LuUser } from "react-icons/lu"
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
import { useEffect, useState } from 'react';
import InstanceAxios from '@/lib/InstanceAxios';

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const TableInfo = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const response = await InstanceAxios.get("/Doctor/doctor", {
                headers: {
                    Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJzdHJpbmciLCJqdGkiOiJjZDMxMmM5OC00ZDMzLTQ4ZGUtOTBkZi0wYjc0MTI1ZWNjYzQiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoic3RyaW5nIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvZW1haWxhZGRyZXNzIjoic3RyaW5nIiwiZXhwIjoxNzMyNzgxNTMzLCJpc3MiOiJNeUFwaUlzc3VlciIsImF1ZCI6Ik15QXBpQXVkaWVuY2UifQ._9X8bHN6hHLMdAhTAwgyvyEWk-9IivbX3wWhnrs-TbU`
                }
            });
            console.log(response.data);
            setData(response.data);
        }   
        fetchData();
    },[])
    
    const pw = "494221"

//     const dispatch = useDispatch();
//    const {data, loading, error} = useSelector((state) => state.getDataDokter)
//    useEffect(() => {
//     const token = localStorage.getItem("token");
//     if(token){
//         dispatch(getDataDokter(token))
//     }else{
//         dispatch(getDataDokter(null))
//     }
//    }, [dispatch])

//    console.log(data)

    const chartData = {
        labels: data.map((item) => item.namaLengkap),
        datasets: [
          {
            label: "Price (USD)",
            data: data.map((item) => item.kodeDokter),
            backgroundColor: "rgba(75, 192, 192, 0.5)",
            borderColor: "rgba(75, 192, 192, 1)",
            borderWidth: 1,
          },
        ],
      };
      
      // Chart options
      const chartOptions = {
        responsive: true,
        plugins: {
          legend: {
            position: "top",
          },
          title: {
            display: true,
            text: "Product Prices",
          },
        },
      };
    return (
        <Box>
            <Box>
                <Text fontSize={"2xl"}>Detail Page</Text>
                <Text  color={"gray.400"}>Nov. 2024</Text>
            </Box>
            <Box w={"100%"} h={"100%"}>
                <Flex direction={"row"} justifyContent={"space-between"} alignItems={"center"} >  
                    <Tabs.Root defaultValue="members" variant="plain" w={"100%"} >
                        <Tabs.List bg="white" rounded="l3" p={"20px"} right={{base:"0px",md:"-550px"}} >
                            <Tabs.Trigger value="members" p={"10px"} _selected={{color:"#089bab", bg:"#ceebee"}}>
                                <LuUser />
                                Dokter
                            </Tabs.Trigger>
                            <Tabs.Trigger value="projects" p={"10px"} _selected={{color:"#089bab", bg:"#ceebee"}}>
                                <LuFolder />
                                Pasien
                                </Tabs.Trigger>
                            <Tabs.Trigger value="tasks" p={"10px"} _selected={{color:"#089bab", bg:"#ceebee"}}>
                                <LuCheckSquare />
                                Lab/Radiologi
                            </Tabs.Trigger>
                            <Tabs.Indicator rounded="l2" />
                        </Tabs.List>
                        <Tabs.Content value="members" px={"20px"} >
                            <TableScrollArea borderWidth="1px" rounded="md" height="300px">
                                <Table.Root size="lg" striped>
                                    <Table.Header>
                                        <Table.Row>
                                        <Table.ColumnHeader>Kode Dokter</Table.ColumnHeader>
                                        <Table.ColumnHeader>Nama Lengkap</Table.ColumnHeader>
                                        <Table.ColumnHeader>Alamat Rumah</Table.ColumnHeader>
                                        <Table.ColumnHeader>Alamat Kantor</Table.ColumnHeader>
                                        <Table.ColumnHeader>Jenis Kelamin</Table.ColumnHeader>
                                        <Table.ColumnHeader>Tanggal Lahir</Table.ColumnHeader>
                                        </Table.Row>
                                    </Table.Header>
                                    <Table.Body>
                                        {data.map((item, index) => (
                                        <Table.Row key={index}>
                                            <Table.Cell>{item.kodeDokter}</Table.Cell>
                                            <Table.Cell>{item.namaLengkap}</Table.Cell>
                                            <Table.Cell>{item.alamatRumahLengkap}</Table.Cell>
                                            <Table.Cell>{item.alamatKantorLengkap}</Table.Cell>
                                            <Table.Cell>{item.jenisKelamin}</Table.Cell>
                                            <Table.Cell>{item.tanggalLahir}</Table.Cell>
                                        </Table.Row>
                                        ))}
                                    </Table.Body>
                                </Table.Root>
                            </TableScrollArea>
                            <Box mt={"20px"} p={"10px"} rounded={"md"}>
                                <Text fontSize={"lg"} mb={"10px"}>Price Distribution</Text>
                                <Bar data={chartData} options={chartOptions} />
                            </Box>
                        </Tabs.Content>
                        <Tabs.Content value="projects">
                            Manage your projects</Tabs.Content>
                        <Tabs.Content value="tasks">
                            Manage your tasks for freelancers
                        </Tabs.Content>
                    </Tabs.Root>
                </Flex>
            </Box>

        </Box>
    )
}

export default TableInfo