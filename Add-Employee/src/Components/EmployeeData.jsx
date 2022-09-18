import React from 'react'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper , Button} from '@mui/material';


export const EmployeeData = (props) => {
    return (
        <>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Full Name</TableCell>
                            <TableCell>Phone Number</TableCell>
                            <TableCell>Email</TableCell>
                            <TableCell>Address</TableCell>
                            <TableCell>Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            props.Employees?.map((emp) => {
                                return <TableRow key={emp.id}>
                                    <TableCell>{emp.name}</TableCell>
                                    <TableCell>{emp.phone}</TableCell>
                                    <TableCell>{emp.email}</TableCell>
                                    <TableCell>{`${emp.address.street} ${emp.address.suite} ${emp.address.city}`}</TableCell>
                                    <TableCell>
                                        <Button>View</Button>
                                        <Button>Edit</Button>
                                        <Button>Delete</Button>
                                    </TableCell>
                                </TableRow>
                            })
                        }

                    </TableBody>
                </Table>
                </TableContainer>
        </>
    )
}

