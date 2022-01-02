import * as React from 'react';
import createEngine, { DiagramModel, DefaultNodeModel } from '@projectstorm/react-diagrams';
import { CanvasWidget } from '@projectstorm/react-canvas-core';
import { DemoCanvasWidget } from './CanvasWidget.tsx';

const Diagram = ({ activeVPC, subnets, ECs, SGs }) => {
   const engine = createEngine();

   const model = new DiagramModel();

   const nodeVPC = new DefaultNodeModel('VPC', 'rgb(255,99,66)');
   const portVPC = nodeVPC.addOutPort(activeVPC);
   nodeVPC.setPosition(50, 200);


   let positionY = 50
   const nodesSB = []
   const portsInSB = []
   const portsOutSB = []
   const linksSB = []

   if (subnets.length) {
      for (let i = 0; i < subnets.length; i++) {
         nodesSB.push(new DefaultNodeModel('SUBNET', 'rgb(192,255,0)'))
         nodesSB[i].setPosition(250, positionY)
         portsInSB.push(nodesSB[i].addInPort(subnets[i]))
         portsOutSB.push(nodesSB[i].addOutPort(''))
         linksSB.push(portVPC.link(portsInSB[i]))
         positionY += 100
      }
   }

   positionY = 50
   const nodesEC = []
   const portsInEC = []
   const portsOutEC = []
   const linksEC = []

   if (ECs.length && subnets.length) {
      for (let i = 0; i < ECs.length; i++) {
         nodesEC.push(new DefaultNodeModel('EC', 'rgb(0, 153, 255)'))
         nodesEC[i].setPosition(450, positionY)
         portsInEC.push(nodesEC[i].addInPort(ECs[i].reservId))
         portsOutEC.push(nodesEC[i].addOutPort(''))
         linksEC.push(portsOutSB[ECs[i].parendNum].link(portsInEC[i]))
         positionY += 100
      }
   }

   positionY = 50
   const nodesSG = []
   const portsInSG = []
   const linksSG = []

   if (SGs.length && ECs.length && subnets.length) {
      for (let i = 0; i < SGs.length; i++) {
         nodesSG.push(new DefaultNodeModel('Security Group', 'rgb(153, 0, 255)'))
         nodesSG[i].setPosition(650, positionY)
         portsInSG.push(nodesSG[i].addInPort(SGs[i].SGid))
         if (SGs[i].parendNum >= 0) {
            linksSG.push(portsOutEC[SGs[i].parendNum].link(portsInSG[i]))
         }
         positionY += 50
      }
   }

   model.addAll(nodeVPC, ...nodesSB, ...nodesEC, ...nodesSG, ...linksSB, ...linksEC, ...linksSG)

   engine.setModel(model)

   return (
      <DemoCanvasWidget >
         <CanvasWidget engine={engine} />
      </DemoCanvasWidget>
   )
}

export default Diagram
