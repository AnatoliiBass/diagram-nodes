import DiagramContainer from './Diagram/DiagramContainer'
import style from './Main.module.css'

const Main = ({ setCurrentDiagram }) => {

   const handlerFunc = (e) => {
      if (e.target.className === 'css-qcxco2') {
         setCurrentDiagram(e.target.parentNode.nextElementSibling.outerText)
      } else {
         setCurrentDiagram(e.target.textContent)
      }
   }
   return (
      <main className={style.main} onClick={handlerFunc}>
         <DiagramContainer />
      </main>
   )
}

export default Main