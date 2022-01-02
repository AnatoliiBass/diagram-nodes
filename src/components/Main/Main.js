import DiagramContainer from './Diagram/DiagramContainer'
import style from './Main.module.css'

const Main = ({ setCurrentDiagram }) => {
   const handlerFunc = (e) => {
      switch (e.target.className) {
         case 'css-qcxco2': {
            setCurrentDiagram(e.target?.parentNode?.nextElementSibling?.outerText)
            break
         }
         case 'css-14ytlrw': {
            setCurrentDiagram(e.target?.childNodes[0]?.childNodes[0]?.childNodes[1]?.childNodes[0]?.textContent ??
               e.target?.childNodes[1]?.childNodes[0]?.childNodes[0]?.childNodes[0]?.textContent)
            break
         }
         case 'css-mtwhol': {
            setCurrentDiagram(e.target?.outerText)
            break
         }
         case 'css-11bc0l7': {
            setCurrentDiagram(e.target?.parentNode?.nextElementSibling?.outerText ??
               e.target?.parentNode?.parentNode?.parentNode?.previousSibling?.childNodes[0]?.childNodes[1]?.childNodes[0]?.textContent)
            break
         }
         default: {
            break
         }
      }
   }
   return (
      <main className={style.main} onClick={handlerFunc}>
         <DiagramContainer />
      </main>
   )
}

export default Main