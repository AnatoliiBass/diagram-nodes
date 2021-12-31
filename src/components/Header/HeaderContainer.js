import { connect } from "react-redux"
import { setActiveVPCCreator } from "../../store/reducers/reducerVPC"
import Header from "./Header"


let mapStateToProps = (state) => {

   return {
      titles: state.VPC.Vpcs.map(item => item.VpcId.toUpperCase()),
      activeVPC: state.VPC.activeVPC || state.VPC.Vpcs[0].VpcId.toUpperCase()
   }
}

let mapDispatchToProps = (dispatch) => {
   return {
      setCurrentVPC: (value) => {
         dispatch(setActiveVPCCreator(value))
      }
   }
}

const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(Header)

export default HeaderContainer