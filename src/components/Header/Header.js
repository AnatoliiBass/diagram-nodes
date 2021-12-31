import style from './Header.module.css'
import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
const Header = ({ titles, activeVPC, setCurrentVPC }) => {
   //const [vpc, setVpc] = React.useState(activeVPC)
   console.log(activeVPC)
   const handleChange = (event) => {
      //setVpc(event.target.value)
      setCurrentVPC(event.target.value)
   }
   const elements = titles.map(item => (
      <MenuItem value={item} key={item}>{item}</MenuItem>
   ))

   return (
      <header className={style.header}>
         <FormControl className={style.select}>
            <InputLabel id="demo-simple-select-label">VPC</InputLabel>
            <Select
               labelId="demo-simple-select-label"
               id="demo-simple-select"
               value={activeVPC}
               label="VPC"
               onChange={handleChange}
            >
               {elements}
            </Select>
         </FormControl>
      </header>
   )
}

export default Header