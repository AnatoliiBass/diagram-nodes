import DiagramContainer from './Diagram/DiagramContainer'
import style from './Main.module.css'

const Main = () => {
   return (
      <main className={style.main} >
         <DiagramContainer />
      </main>
   )
}

export default Main