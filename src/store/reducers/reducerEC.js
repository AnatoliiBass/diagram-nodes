const GET_STATE = 'GET_STATE'

const initState = {
   "Reservations": [
      {
         "Groups": [],
         "Instances": [
            {
               "AmiLaunchIndex": 0,
               "ImageId": "ami-01e24be29428c",
               "InstanceId": "i-0e64c0568298b",
               "InstanceType": "t2.nano",
               "KeyName": "base",
               "LaunchTime": "2021-09-05T15:52:10+00:00",
               "Monitoring": {
                  "State": "disabled"
               },
               "Placement": {
                  "AvailabilityZone": "us-west-2a",
                  "GroupName": "",
                  "Tenancy": "default"
               },
               "PrivateDnsName": "ip-172-30-1-56.us-west-2.compute.internal",
               "PrivateIpAddress": "172.30.1.56",
               "ProductCodes": [],
               "PublicDnsName": "ec2-34-211-35-165.us-west-2.compute.amazonaws.com",
               "PublicIpAddress": "58.200.90.122",
               "State": {
                  "Code": 16,
                  "Name": "running"
               },
               "StateTransitionReason": "",
               "SubnetId": "subnet-974675",
               "VpcId": "vpc-27f9f1",
               "Architecture": "x86_64",
               "BlockDeviceMappings": [
                  {
                     "DeviceName": "/dev/xvda",
                     "Ebs": {
                        "AttachTime": "2019-01-04T09:06:38+00:00",
                        "DeleteOnTermination": true,
                        "Status": "attached",
                        "VolumeId": "vol-06a268e4b8491"
                     }
                  }
               ],
               "ClientToken": "",
               "EbsOptimized": false,
               "EnaSupport": true,
               "Hypervisor": "xen",
               "NetworkInterfaces": [
                  {
                     "Association": {
                        "IpOwnerId": "123456789",
                        "PublicDnsName": "ec2-58-200-90-122.us-west-2.compute.amazonaws.com",
                        "PublicIp": "58.200.90.122"
                     },
                     "Attachment": {
                        "AttachTime": "2019-01-04T09:06:37+00:00",
                        "AttachmentId": "eni-attach-0748bfdc13837",
                        "DeleteOnTermination": true,
                        "DeviceIndex": 0,
                        "Status": "attached"
                     },
                     "Description": "Primary network interface",
                     "Groups": [
                        {
                           "GroupName": "OpenVPN SG",
                           "GroupId": "sg-0b8939414887c"
                        }
                     ],
                     "Ipv6Addresses": [],
                     "MacAddress": "06:9b:45:35:d0:96",
                     "NetworkInterfaceId": "eni-081e9d1ee5c77",
                     "OwnerId": "123456789",
                     "PrivateDnsName": "ip-172-30-1-56.us-west-2.compute.internal",
                     "PrivateIpAddress": "172.30.1.56",
                     "PrivateIpAddresses": [
                        {
                           "Association": {
                              "IpOwnerId": "123456789",
                              "PublicDnsName": "ec2-222.222.222.222.us-west-2.compute.amazonaws.com",
                              "PublicIp": "58.200.90.122"
                           },
                           "Primary": true,
                           "PrivateDnsName": "ip-172-30-1-56.us-west-2.compute.internal",
                           "PrivateIpAddress": "172.30.1.56"
                        }
                     ],
                     "SourceDestCheck": true,
                     "Status": "in-use",
                     "SubnetId": "subnet-974675",
                     "VpcId": "vpc-27f9f1",
                     "InterfaceType": "interface"
                  }
               ],
               "RootDeviceName": "/dev/xvda",
               "RootDeviceType": "ebs",
               "SecurityGroups": [
                  {
                     "GroupName": "OpenVPN SG",
                     "GroupId": "sg-0b8939414887c"
                  }
               ],
               "SourceDestCheck": true,
               "Tags": [
                  {
                     "Key": "Name",
                     "Value": "VPN"
                  }
               ],
               "VirtualizationType": "hvm",
               "CpuOptions": {
                  "CoreCount": 1,
                  "ThreadsPerCore": 1
               },
               "CapacityReservationSpecification": {
                  "CapacityReservationPreference": "open"
               },
               "HibernationOptions": {
                  "Configured": false
               },
               "MetadataOptions": {
                  "State": "applied",
                  "HttpTokens": "optional",
                  "HttpPutResponseHopLimit": 1,
                  "HttpEndpoint": "enabled"
               }
            }
         ],
         "OwnerId": "123456789",
         "ReservationId": "r-08c3ec89534ee"
      },
      {
         "Groups": [],
         "Instances": [
            {
               "AmiLaunchIndex": 0,
               "ImageId": "ami-0518bb0e75d36",
               "InstanceId": "i-011fdafa7248d",
               "InstanceType": "t3.micro",
               "KeyName": "internal-development",
               "LaunchTime": "2021-04-17T12:49:09+00:00",
               "Monitoring": {
                  "State": "disabled"
               },
               "Placement": {
                  "AvailabilityZone": "us-west-2a",
                  "GroupName": "",
                  "Tenancy": "default"
               },
               "PrivateDnsName": "ip-172-30-1-29.us-west-2.compute.internal",
               "PrivateIpAddress": "172.30.1.29",
               "ProductCodes": [],
               "PublicDnsName": "ec2-us-west-2.compute.amazonaws.com",
               "PublicIpAddress": "58.200.90.44",
               "State": {
                  "Code": 16,
                  "Name": "running"
               },
               "StateTransitionReason": "",
               "SubnetId": "subnet-974675",
               "VpcId": "vpc-27f9f1",
               "Architecture": "x86_64",
               "BlockDeviceMappings": [
                  {
                     "DeviceName": "/dev/xvda",
                     "Ebs": {
                        "AttachTime": "2021-04-17T11:17:13+00:00",
                        "DeleteOnTermination": true,
                        "Status": "attached",
                        "VolumeId": "vol-0fc8e9e8e59a6"
                     }
                  }
               ],
               "ClientToken": "",
               "EbsOptimized": true,
               "EnaSupport": true,
               "Hypervisor": "xen",
               "NetworkInterfaces": [
                  {
                     "Association": {
                        "IpOwnerId": "123456789",
                        "PublicDnsName": "ec2-us-west-2.compute.amazonaws.com",
                        "PublicIp": "5.20.50.11"
                     },
                     "Attachment": {
                        "AttachTime": "2021-04-17T11:17:12+00:00",
                        "AttachmentId": "eni-attach-05a148f00cc2a",
                        "DeleteOnTermination": true,
                        "DeviceIndex": 0,
                        "Status": "attached"
                     },
                     "Description": "Primary network interface",
                     "Groups": [
                        {
                           "GroupName": "docker-internal",
                           "GroupId": "sg-0b2a281130e1e"
                        }
                     ],
                     "Ipv6Addresses": [],
                     "MacAddress": "06:19:e0:9e:c8:0b",
                     "NetworkInterfaceId": "eni-0a19c1358765c",
                     "OwnerId": "123456789",
                     "PrivateDnsName": "ip-172-30-1-29.us-west-2.compute.internal",
                     "PrivateIpAddress": "172.30.1.29",
                     "PrivateIpAddresses": [
                        {
                           "Association": {
                              "IpOwnerId": "123456789",
                              "PublicDnsName": "ec2-54-189-188-111.us-west-2.compute.amazonaws.com",
                              "PublicIp": "5.1.1.1"
                           },
                           "Primary": true,
                           "PrivateDnsName": "ip-172-30-1-29.us-west-2.compute.internal",
                           "PrivateIpAddress": "172.30.1.29"
                        }
                     ],
                     "SourceDestCheck": true,
                     "Status": "in-use",
                     "SubnetId": "subnet-97467",
                     "VpcId": "vpc-27f9f1",
                     "InterfaceType": "interface"
                  }
               ],
               "RootDeviceName": "/dev/xvda",
               "RootDeviceType": "ebs",
               "SecurityGroups": [
                  {
                     "GroupName": "docker-internal",
                     "GroupId": "sg-0b2a281130e1e"
                  }
               ],
               "SourceDestCheck": true,
               "Tags": [
                  {
                     "Key": "Name",
                     "Value": "Redmine"
                  }
               ],
               "VirtualizationType": "hvm",
               "CpuOptions": {
                  "CoreCount": 1,
                  "ThreadsPerCore": 2
               },
               "CapacityReservationSpecification": {
                  "CapacityReservationPreference": "open"
               },
               "HibernationOptions": {
                  "Configured": false
               },
               "MetadataOptions": {
                  "State": "applied",
                  "HttpTokens": "optional",
                  "HttpPutResponseHopLimit": 1,
                  "HttpEndpoint": "enabled"
               }
            }
         ],
         "OwnerId": "123456789",
         "ReservationId": "r-0a97569811d52"
      }
   ]
}


const reducerEC = (state = initState, action) => {
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

export default reducerEC