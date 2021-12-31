import { connect } from "react-redux"
import Diagram from "./Diagram"


let mapStateToProps = (state) => {
   const activeVPC = state.VPC.activeVPC || state.VPC.Vpcs[0].VpcId.toUpperCase()
   const subnets = state.SN.Subnets.filter(item => item.VpcId.toUpperCase() === activeVPC).map(item => item.SubnetId)

   console.log(subnets, activeVPC);
   return {
      activeVPC,
      subnets
   }
}

let mapDispatchToProps = (dispatch) => {
   return {

   }
}


const DiagramContainer = connect(mapStateToProps, mapDispatchToProps)(Diagram)

export default DiagramContainer