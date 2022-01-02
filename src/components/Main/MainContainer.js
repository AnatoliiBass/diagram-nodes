import { connect } from "react-redux"
import { setActiveDiagramCreator } from "../../store/reducers/reducerVPC"
import Main from "./Main"


let mapStateToProps = (state) => {
   return {}
}

let mapDispatchToProps = (dispatch) => {
   return {
      setCurrentDiagram: (diagram) => {
         dispatch(setActiveDiagramCreator(diagram))
      }
   }
}

const MainContainer = connect(mapStateToProps, mapDispatchToProps)(Main)

export default MainContainer