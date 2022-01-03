import { connect } from "react-redux"
import ExtraTables from "./ExtraTables"

let obj = {}

let mapStateToProps = (state) => {

   const id = state.VPC.activeDiagram?.toLowerCase()
   if (id?.includes('vpc')) {
      obj = { ...state.VPC.Vpcs.filter(item => item.VpcId === id)[0] }

   } else if (id.includes('subnet')) {
      obj = { ...state.SN.Subnets.filter(item => item.SubnetId === id)[0] }
   } else if (id.includes('r')) {
      obj = { ...state.EC.Reservations.filter(item => item.ReservationId === id)[0] }
   } else if (id.includes('sg')) {
      obj = { ...state.SG.SecurityGroups.filter(item => item.GroupId === id)[0] }
   }

   return {
      tableInfo: obj
   }
}

let mapDispatchToProps = (dispatch) => {
   return {

   }
}

const ExtraTablesContainer = connect(mapStateToProps, mapDispatchToProps)(ExtraTables)

export default ExtraTablesContainer