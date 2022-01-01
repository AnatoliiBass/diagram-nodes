import { connect } from "react-redux"
import Diagram from "./Diagram"


let mapStateToProps = (state) => {
   const activeVPC = state.VPC.activeVPC || state.VPC.Vpcs[0].VpcId.toUpperCase()
   const subnets = state.SN.Subnets.filter(item => item.VpcId.toUpperCase() === activeVPC).map(item => item.SubnetId)
   const ECs = state.EC.Reservations.map(item => {
      return {
         parendNum: subnets.indexOf(item.Instances[0].SubnetId),
         reservId: item.ReservationId
      }
   })
   const ECsGroupIds = state.EC.Reservations.map(item => item.Instances[0].SecurityGroups[0].GroupId)

   const SGs = state.SG.SecurityGroups.map(item => {
      return {
         SGid: item.GroupId,
         parendNum: ECsGroupIds.indexOf(item.GroupId)
      }
   })

   return {
      activeVPC,
      subnets,
      ECs,
      SGs
   }
}

let mapDispatchToProps = (dispatch) => {
   return {

   }
}


const DiagramContainer = connect(mapStateToProps, mapDispatchToProps)(Diagram)

export default DiagramContainer