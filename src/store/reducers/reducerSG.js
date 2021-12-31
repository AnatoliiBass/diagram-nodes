const GET_STATE = 'GET_STATE'

const initState = {
   "SecurityGroups": [
      {
         "Description": "launch-wizard-2 created 2021-08-20T13:26:01.418+03:00",
         "GroupName": "launch-wizard-2",
         "IpPermissions": [
            {
               "FromPort": 22,
               "IpProtocol": "tcp",
               "IpRanges": [
                  {
                     "CidrIp": "58.200.90.122/32",
                     "Description": ""
                  }
               ],
               "Ipv6Ranges": [],
               "PrefixListIds": [],
               "ToPort": 22,
               "UserIdGroupPairs": []
            }
         ],
         "OwnerId": "123456789",
         "GroupId": "sg-0262b49f90d64",
         "IpPermissionsEgress": [
            {
               "IpProtocol": "-1",
               "IpRanges": [
                  {
                     "CidrIp": "0.0.0.0/0"
                  }
               ],
               "Ipv6Ranges": [],
               "PrefixListIds": [],
               "UserIdGroupPairs": []
            }
         ],
         "VpcId": "vpc-27f9f1"
      },
      {
         "Description": "VPC Security Group",
         "GroupName": "awseb-e-pc42qfpsph-stack-AWSEBSecurityGroup-WG6JCFKN79JZ",
         "IpPermissions": [],
         "OwnerId": "123456789",
         "GroupId": "sg-033a998287",
         "IpPermissionsEgress": [],
         "Tags": [
            {
               "Key": "aws:cloudformation:stack-name",
               "Value": "awseb-e-pc42qfpsph-stack"
            },
            {
               "Key": "aws:cloudformation:logical-id",
               "Value": "AWSEBSecurityGroup"
            },
            {
               "Key": "aws:cloudformation:stack-id",
               "Value": "arn:aws:cloudformation:us-west-2:123456789:stack/awseb-e-pc42qfpsph-stack/dc138320-e94d-11e8-a26d-0a97e291c068"
            }
         ],
         "VpcId": "vpc-27f9f1"
      },
      {
         "Description": "launch-wizard-1 created 2021-08-16T14:04:15.286+03:00",
         "GroupName": "launch-wizard-1",
         "IpPermissions": [
            {
               "FromPort": 22,
               "IpProtocol": "tcp",
               "IpRanges": [
                  {
                     "CidrIp": "58.200.90.122/32",
                     "Description": ""
                  }
               ],
               "Ipv6Ranges": [],
               "PrefixListIds": [],
               "ToPort": 22,
               "UserIdGroupPairs": []
            },
            {
               "FromPort": 8787,
               "IpProtocol": "tcp",
               "IpRanges": [
                  {
                     "CidrIp": "58.200.90.122/32",
                     "Description": "RStudio"
                  }
               ],
               "Ipv6Ranges": [],
               "PrefixListIds": [],
               "ToPort": 8787,
               "UserIdGroupPairs": []
            }
         ],
         "OwnerId": "123456789",
         "GroupId": "sg-0725ef2a3caee",
         "IpPermissionsEgress": [
            {
               "IpProtocol": "-1",
               "IpRanges": [
                  {
                     "CidrIp": "0.0.0.0/0"
                  }
               ],
               "Ipv6Ranges": [],
               "PrefixListIds": [],
               "UserIdGroupPairs": []
            }
         ],
         "VpcId": "vpc-27f9f1"
      },
      {
         "Description": "launch-wizard-6 created 2019-12-27T19:00:18.296+02:00",
         "GroupName": "launch-wizard-6",
         "IpPermissions": [
            {
               "FromPort": 80,
               "IpProtocol": "tcp",
               "IpRanges": [
                  {
                     "CidrIp": "0.0.0.0/0"
                  }
               ],
               "Ipv6Ranges": [
                  {
                     "CidrIpv6": "::/0"
                  }
               ],
               "PrefixListIds": [],
               "ToPort": 80,
               "UserIdGroupPairs": []
            },
            {
               "FromPort": 22,
               "IpProtocol": "tcp",
               "IpRanges": [
                  {
                     "CidrIp": "0.0.0.0/0"
                  }
               ],
               "Ipv6Ranges": [
                  {
                     "CidrIpv6": "::/0"
                  }
               ],
               "PrefixListIds": [],
               "ToPort": 22,
               "UserIdGroupPairs": []
            },
            {
               "FromPort": 443,
               "IpProtocol": "tcp",
               "IpRanges": [
                  {
                     "CidrIp": "0.0.0.0/0"
                  }
               ],
               "Ipv6Ranges": [
                  {
                     "CidrIpv6": "::/0"
                  }
               ],
               "PrefixListIds": [],
               "ToPort": 443,
               "UserIdGroupPairs": []
            }
         ],
         "OwnerId": "123456789",
         "GroupId": "sg-09fb95ec80ac1",
         "IpPermissionsEgress": [
            {
               "IpProtocol": "-1",
               "IpRanges": [
                  {
                     "CidrIp": "0.0.0.0/0"
                  }
               ],
               "Ipv6Ranges": [],
               "PrefixListIds": [],
               "UserIdGroupPairs": []
            }
         ],
         "VpcId": "vpc-27f9f1"
      },
      {
         "Description": "used for internal usage, Redmine, etc.",
         "GroupName": "docker-internal",
         "IpPermissions": [
            {
               "FromPort": 80,
               "IpProtocol": "tcp",
               "IpRanges": [
                  {
                     "CidrIp": "0.0.0.0/0"
                  }
               ],
               "Ipv6Ranges": [],
               "PrefixListIds": [],
               "ToPort": 80,
               "UserIdGroupPairs": []
            },
            {
               "FromPort": 22,
               "IpProtocol": "tcp",
               "IpRanges": [
                  {
                     "CidrIp": "58.200.90.122/32"
                  }
               ],
               "Ipv6Ranges": [],
               "PrefixListIds": [],
               "ToPort": 22,
               "UserIdGroupPairs": []
            },
            {
               "FromPort": 443,
               "IpProtocol": "tcp",
               "IpRanges": [
                  {
                     "CidrIp": "0.0.0.0/0"
                  }
               ],
               "Ipv6Ranges": [],
               "PrefixListIds": [],
               "ToPort": 443,
               "UserIdGroupPairs": []
            }
         ],
         "OwnerId": "123456789",
         "GroupId": "sg-0b2a281130e1e",
         "IpPermissionsEgress": [
            {
               "IpProtocol": "-1",
               "IpRanges": [
                  {
                     "CidrIp": "0.0.0.0/0"
                  }
               ],
               "Ipv6Ranges": [],
               "PrefixListIds": [],
               "UserIdGroupPairs": []
            }
         ],
         "VpcId": "vpc-27f9f1"
      },
      {
         "Description": "this is used to manage access to VPN server",
         "GroupName": "OpenVPN SG",
         "IpPermissions": [
            {
               "FromPort": 1194,
               "IpProtocol": "udp",
               "IpRanges": [
                  {
                     "CidrIp": "0.0.0.0/0"
                  }
               ],
               "Ipv6Ranges": [
                  {
                     "CidrIpv6": "::/0"
                  }
               ],
               "PrefixListIds": [],
               "ToPort": 1194,
               "UserIdGroupPairs": []
            }
         ],
         "OwnerId": "123456789",
         "GroupId": "sg-0b8939414887c",
         "IpPermissionsEgress": [
            {
               "IpProtocol": "-1",
               "IpRanges": [
                  {
                     "CidrIp": "0.0.0.0/0"
                  }
               ],
               "Ipv6Ranges": [],
               "PrefixListIds": [],
               "UserIdGroupPairs": []
            }
         ],
         "Tags": [
            {
               "Key": "Name",
               "Value": "VPN"
            }
         ],
         "VpcId": "vpc-27f9f1"
      },
      {
         "Description": "default VPC security group",
         "GroupName": "default",
         "IpPermissions": [
            {
               "IpProtocol": "-1",
               "IpRanges": [
                  {
                     "CidrIp": "172.30.0.0/16"
                  },
                  {
                     "CidrIp": "172.17.0.0/16"
                  }
               ],
               "Ipv6Ranges": [],
               "PrefixListIds": [],
               "UserIdGroupPairs": []
            }
         ],
         "OwnerId": "123456789",
         "GroupId": "sg-936491",
         "IpPermissionsEgress": [
            {
               "IpProtocol": "-1",
               "IpRanges": [
                  {
                     "CidrIp": "172.30.0.0/16"
                  },
                  {
                     "CidrIp": "172.17.0.0/16"
                  }
               ],
               "Ipv6Ranges": [],
               "PrefixListIds": [],
               "UserIdGroupPairs": []
            }
         ],
         "VpcId": "vpc-27f9f1"
      }
   ]
}


const reducerSG = (state = initState, action) => {
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

export default reducerSG