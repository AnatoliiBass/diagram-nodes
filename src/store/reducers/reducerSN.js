const GET_STATE = 'GET_STATE'

const initState = {
   "Subnets": [
      {
         "AvailabilityZone": "us-west-2a",
         "AvailabilityZoneId": "usw2-az2",
         "AvailableIpAddressCount": 247,
         "CidrBlock": "172.30.1.0/24",
         "DefaultForAz": false,
         "MapPublicIpOnLaunch": true,
         "MapCustomerOwnedIpOnLaunch": false,
         "State": "available",
         "SubnetId": "subnet-974675",
         "VpcId": "vpc-0027f9f1",
         "OwnerId": "123456789",
         "AssignIpv6AddressOnCreation": false,
         "Ipv6CidrBlockAssociationSet": [],
         "Tags": [
            {
               "Key": "Name",
               "Value": "Public A zone"
            }
         ],
         "SubnetArn": "arn:aws:ec2:us-west-2:123456789:subnet/subnet-974675"
      },
      {
         "AvailabilityZone": "us-west-2b",
         "AvailabilityZoneId": "usw2-az1",
         "AvailableIpAddressCount": 249,
         "CidrBlock": "172.30.0.0/24",
         "DefaultForAz": false,
         "MapPublicIpOnLaunch": true,
         "MapCustomerOwnedIpOnLaunch": false,
         "State": "available",
         "SubnetId": "subnet-86b5aa",
         "VpcId": "vpc-0027f9f1",
         "OwnerId": "123456789",
         "AssignIpv6AddressOnCreation": false,
         "Ipv6CidrBlockAssociationSet": [],
         "Tags": [
            {
               "Key": "Name",
               "Value": "Public B zone"
            }
         ],
         "SubnetArn": "arn:aws:ec2:us-west-2:123456789:subnet/subnet-86b5aa"
      },
      {
         "AvailabilityZone": "us-west-2c",
         "AvailabilityZoneId": "usw2-az3",
         "AvailableIpAddressCount": 249,
         "CidrBlock": "172.30.2.0/24",
         "DefaultForAz": false,
         "MapPublicIpOnLaunch": true,
         "MapCustomerOwnedIpOnLaunch": false,
         "State": "available",
         "SubnetId": "subnet-53054d",
         "VpcId": "vpc-0027f9f1",
         "OwnerId": "123456789",
         "AssignIpv6AddressOnCreation": false,
         "Ipv6CidrBlockAssociationSet": [],
         "Tags": [
            {
               "Key": "Name",
               "Value": "Public C zone"
            }
         ],
         "SubnetArn": "arn:aws:ec2:us-west-2:123456789:subnet/subnet-53054d0a"
      }
   ]
}


const reducerSN = (state = initState, action) => {
   switch (action.type) {
      case GET_STATE: {
         return { ...state }
      }
      default: {
         return state
      }
   }
}

export const getStateCreator = () => ({ type: GET_STATE })

export default reducerSN