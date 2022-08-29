import React, { Component } from 'react'

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const data = [
    {id: 1, firstName: 'Juan', lastName: 'Perez', age: 15},
    {id: 2, firstName: 'Jorge', lastName: 'Gomez', age: 20},
    {id: 3, firstName: 'Maria', lastName: 'Sanchez', age: 19},
    {id: 4, firstName: 'Estefania', lastName: 'Ramirez', age: 10},
    {id: 5, firstName: 'Mark', lastName: 'Thompson', age: 35},
]

type Props = {}

type State = {}

class PersonList extends Component<Props, State> {
  state = {
    data: data
  }

  render() {
    return (
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell align="right">Nombre</TableCell>
              <TableCell align="right">Apellido</TableCell>
              <TableCell align="right">Edad</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <TableRow
                key={row.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.id}
                </TableCell>
                <TableCell align="right">{row.firstName}</TableCell>
                <TableCell align="right">{row.lastName}</TableCell>
                <TableCell align="right">{row.age}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    )
  }
}

export default PersonList