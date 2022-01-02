import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import style from './Sidebar.module.css'

const Sidebar = ({ id, tableInfo }) => {

   const values = Object.values(tableInfo)
   const keys = Object.keys(tableInfo)
   const tableData = []
   for (let i = 0; i < keys.length; i++) {
      tableData.push({
         key: keys[i],
         value: values[i].toString()
      })
   }

   const elements = tableData.map((item, index) => (
      <TableRow key={Date.now() + index}>
         <TableCell align="left">{item.key}</TableCell>
         <TableCell align="left">{item.value}</TableCell>
      </TableRow>
   ))

   return (
      <aside className={style.sidebar}>
         <Typography variant="h4" component="h1">{id}</Typography>
         <TableContainer component={Paper}>
            <Table sx={{ maxWidth: 350 }} aria-label="simple table">
               <TableHead>
                  <TableRow>
                     <TableCell align="left">Keys</TableCell>
                     <TableCell align="left">Values</TableCell>
                  </TableRow>
               </TableHead>
               <TableBody>
                  {elements}
               </TableBody>
            </Table>
         </TableContainer>
      </aside>
   )
}

export default Sidebar