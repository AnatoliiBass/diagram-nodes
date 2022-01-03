import { Typography } from '@mui/material'
import DrowTable from './DrowTable/DrowTable'
import style from './ExtraTables.module.css'

//function Flatten is making simple Array for next operations
const flatDeep = (arr, d = 1) => {
   return d > 0 ? arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flatDeep(val, d - 1) : val), []) : arr.slice()
}
//function isEmpty return true if json has empty objects or array, 
//return false if json is not empty and remove empty elements inside array
// and return new array
const isEmpty = (obj = {}) => {
   let isEmpty, count = 0, returnObj
   const deleteEmptyItems = (obj, count) => {
      obj.splice(count, 1)
   }
   if (Array.isArray(obj)) {
      returnObj = flatDeep(obj, Infinity)
      const copy = [...returnObj]
      if (Object.keys(copy).length === 0) {
         isEmpty = true
      } else {
         isEmpty = true
         copy.forEach(item => {
            if (Object.keys(item).length > 0) {
               isEmpty = false
               count += 1
            } else {
               deleteEmptyItems(returnObj, count)
            }
         })
      }
   } else if (obj instanceof Object) {
      if (Object.keys(obj).length === 0) {
         isEmpty = true
      } else {
         isEmpty = false
      }
   }
   return {
      empty: isEmpty,
      newData: returnObj ? returnObj : [obj]
   }
}


const ExtraTables = ({ tableInfo }) => {
   const tableData = []
   const createTablesObj = (tableInfo) => {
      const values = Object.values(tableInfo)
      const keys = Object.keys(tableInfo)
      if (keys.length) {
         for (let i = 0; i < keys.length; i++) {
            if (values[i] instanceof Object) {
               const { empty, newData } = isEmpty(values[i])
               if (!empty && (newData[0] instanceof Object)) {
                  tableData.push({
                     name: keys[i],
                     table: newData
                  })
                  createTablesObj(values[i])
               }
            }
         }
      }
   }
   createTablesObj(tableInfo)
   const newTableData = tableData.filter(item => !Number.isInteger(+item.name))
   const names = [...new Set(newTableData.map(item => item.name))]
   let uniqTable = []
   for (let i = 0; i < names.length; i++) {
      const current = newTableData.filter(item => item.name === names[i])
      if (current.length > 1) {
         const concatObj = { name: names[i], table: [].concat(...current.map(item => item.table)) }
         uniqTable.push(concatObj);
      } else {

         uniqTable.push({
            name: names[i],
            table: current
         })
      }
   }
   const elements = uniqTable.map((item, index) => (<DrowTable key={Date.now() + index} name={item.name} table={item.table} />))

   return (
      <section className={style.extra}>
         <Typography variant="h4" component="h2">Extra Tables</Typography>
         {elements}
      </section>
   )
}

export default ExtraTables