import React from 'react'
import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material"
import { Box, Collapse, IconButton, TableBody, TableCell, Table, TableHead, TableRow, Typography } from "@mui/material"
import { useState } from "react"

function TableItem({ row }) {
    const [open, setOpen] = useState(false)
    const { name, score, correspondingSkills, location, email } = row;
    console.log(row)
    return (
        <>
            <TableRow sx={{backgroundColor:'#ECEEF2'}} >
                <TableCell>
                    <IconButton
                        size='small'
                        onClick={() => setOpen(!open)}>
                            { open ? <KeyboardArrowUp/> : <KeyboardArrowDown/>}
                    </IconButton>
                </TableCell>
                <TableCell component='th' scope='row'>
                    {name}
                </TableCell>
                <TableCell component='th' scope='row'>
                    {score}%
                </TableCell>
                <TableCell component='th' scope='row'>
                    {location}
                </TableCell>
                <TableCell component='th' scope='row'>
                    {email}
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0, backgroundColor:'#E1E4EA' }} colSpan={6}>
                    <Collapse in={open} timeout='auto' unmountOnExit>
                        <Box sx={{margin:1}}>
                            <Table>
                                <TableHead sx={{fontWeight:'700'}}>
                                    Skills
                                </TableHead>
                                <TableBody>
                                    {
                                        correspondingSkills.map((skill) => <TableRow><TableCell sx={{paddingBottom:0}}>{skill}</TableCell></TableRow>)
                                    }
                                </TableBody>
                            </Table>
                        
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </>
    )
}

export default TableItem