import { Paper, Table, TableBody, TableCell, TableContainer, TableRow, Typography } from '@mui/material';
import style from './Sidebar.module.css'

const Sidebar = ({ id, tableInfo }) => {

   const values = Object.values(tableInfo)
   const keys = Object.keys(tableInfo)
   let elements
   if (keys.length) {
      const tableData = []
      for (let i = 0; i < keys.length; i++) {
         tableData.push({
            key: keys[i],
            value: values[i].toString()
         })
      }

      elements = tableData.map((item, index) => (
         <TableRow key={Date.now() + index}>
            <TableCell align="left">{item.key}</TableCell>
            <TableCell align="left">{item.value}</TableCell>
         </TableRow>
      ))
   }
   return (
      <aside className={style.sidebar}>
         {keys.length > 0 ? <>
            <Typography variant="h4" component="h1">{id}</Typography>
            <TableContainer component={Paper}>
               <Table sx={{ maxWidth: 350 }} aria-label="simple table">
                  <TableBody>
                     {elements}
                  </TableBody>
               </Table>
            </TableContainer>
         </> : <></>}
      </aside>
   )
}

export default Sidebar