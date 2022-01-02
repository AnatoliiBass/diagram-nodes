const SET_ACTIVE_VPC = 'SET_ACTIVE_VPC'
const SET_ACTIVE_DIAGRAM = 'SET_ACTIVE_DIAGRAM'

const initState = {
   "Vpcs": [
      {
         "CidrBlock": "172.30.0.0/16",
         "DhcpOptionsId": "dopt-06db6b",
         "State": "available",
         "VpcId": "vpc-006d9f54",
         "OwnerId": "123456789",
         "InstanceTenancy": "default",
         "CidrBlockAssociationSet": [
            {
               "AssociationId": "vpc-cidr-assoc-362d4",
               "CidrBlock": "172.30.0.0/16",
               "CidrBlockState": {
                  "State": "associated"
               }
            }
         ],
         "IsDefault": false,
         "Tags": [
            {
               "Key": "Name",
               "Value": "Internal"
            }
         ]
      },
      {
         "CidrBlock": "172.30.0.0/16",
         "DhcpOptionsId": "dopt-06db6b",
         "State": "available",
         "VpcId": "vpc-0027f9f1",
         "OwnerId": "123456789",
         "InstanceTenancy": "default",
         "CidrBlockAssociationSet": [
            {
               "AssociationId": "vpc-cidr-assoc-52138",
               "CidrBlock": "172.30.0.0/16",
               "CidrBlockState": {
                  "State": "associated"
               }
            }
         ],
         "IsDefault": false,
         "Tags": [
            {
               "Key": "Name",
               "Value": "Public"
            }
         ]
      }
   ],
   "activeVPC": "",
   "activeDiagram": ""
}


const reducerVPC = (state = initState, action) => {
   switch (action.type) {
      case SET_ACTIVE_VPC: {
         return {
            ...state,
            activeVPC: action.value
         }
      }
      case SET_ACTIVE_DIAGRAM: {
         return {
            ...state,
            activeDiagram: action.diagram
         }
      }
      default: {
         return state
      }
   }
}

export const setActiveVPCCreator = (value) => ({ type: SET_ACTIVE_VPC, value })
export const setActiveDiagramCreator = (diagram) => ({ type: SET_ACTIVE_DIAGRAM, diagram})

export default reducerVPC