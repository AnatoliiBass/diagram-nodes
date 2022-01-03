import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material"
import style from './DrowTable.module.css'

const DrowTable = ({ name, table }) => {
   let elements, heads
   const values = Object.values(table[0])
   const keys = Object.keys(table[0])
   const setSubelements = (item) => {
      return keys.map((el, i) => (<TableCell key={Date.now() * 20 + i} align="left">{item[el].toString()}</TableCell>))
   }
   if (table.length > 1) {
      heads = keys.map((item, index) => (<TableCell key={Date.now() * 10 + index} align="left">{item}</TableCell>))
      elements = table.map((item, index) => {

         return (<TableRow key={Date.now() * 100 + index}>
            <TableCell align="left">{index + 1}</TableCell>
            {setSubelements(item)}
         </TableRow>)
      }
      )
   } else {
      const tableData = []
      for (let i = 0; i < keys.length; i++) {
         tableData.push({
            key: keys[i],
            value: values[i].toString()
         })
         elements = tableData.map((item, index) => (
            <TableRow key={Date.now() + index}>
               <TableCell align="left">{item.key}</TableCell>
               <TableCell align="left">{item.value}</TableCell>
            </TableRow>
         ))
      }
   }
   return (
      <>
         {table.length > 1 ? <section className={style.extratable}>
            <Typography className={style.title} variant="h4" component="h1">{name}</Typography>
            <TableContainer component={Paper}>
               <Table aria-label="simple table">
                  <TableHead>
                     <TableRow>
                        <TableCell align="left">NO</TableCell>
                        {heads}
                     </TableRow>
                  </TableHead>
                  <TableBody>
                     {elements}
                  </TableBody>
               </Table>
            </TableContainer>
         </section> : <section className={style.extratable}>
            <Typography className={style.title} variant="h4" component="h1">{name}</Typography>
            <TableContainer component={Paper}>
               <Table aria-label="simple table">
                  <TableBody>
                     {elements}
                  </TableBody>
               </Table>
            </TableContainer>
         </section>}

      </>
   )
}

export default DrowTable