import * as React from 'react';
import createEngine, { DiagramModel, DefaultNodeModel } from '@projectstorm/react-diagrams';
import { CanvasWidget } from '@projectstorm/react-canvas-core';
import { DemoCanvasWidget } from './CanvasWidget.tsx';

const Diagram = ({ activeVPC, subnets, ECs, SGs, setCurrentDiagram }) => {
   const engine = createEngine();

   const model = new DiagramModel();


   const nodeVPC = new DefaultNodeModel('VPC', 'rgb(255,99,66)');
   nodeVPC.registerListener({
      selectionChanged: e => setCurrentDiagram(Object.keys(e.entity.ports)[0].toLowerCase())
   })
   const portVPC = nodeVPC.addOutPort(activeVPC);
   nodeVPC.setPosition(50, 200);

   portVPC.registerListener({
      nodesUpdated: e => console.log("nodesUpdated", e),
      linksUpdated: e => console.log("linksUpdated", e),
      zoomUpdated: e => console.log("zoomUpdated", e),
      gridUpdated: e => console.log("gridUpdated", e),
      offsetUpdated: e => {
         e.stopPropagation(() => { e.firing = true })
         console.log("offsetUpdated", e)
      },
      entityRemoved: e => console.log("entityRemoved", e),
      selectionChanged: e => console.log("selectionChanged", e),
      sourcePortChanged: e => console.log("sourcePortChanged", e),
      targetPortChanged: e => console.log("targetPortChanged", e)
   })


   let positionY = 50
   const nodesSB = []
   const portsInSB = []
   const portsOutSB = []
   const linksSB = []

   if (subnets.length) {
      for (let i = 0; i < subnets.length; i++) {
         nodesSB.push(new DefaultNodeModel('SUBNET', 'rgb(192,255,0)'))
         nodesSB[i].setPosition(250, positionY)
         nodesSB[i].registerListener({
            selectionChanged: e => setCurrentDiagram(Object.keys(e.entity.ports)[0].toLowerCase())
         })
         portsInSB.push(nodesSB[i].addInPort(subnets[i]))
         portsOutSB.push(nodesSB[i].addOutPort(''))
         linksSB.push(portVPC.link(portsInSB[i]))
         positionY += 100
      }
   }
   // linksSB[0]?.registerListener({
   //    entityRemoved: e => console.log("entityRemoved", e),
   //    selectionChanged: e => console.log("selectionChanged", e),
   //    sourcePortChanged: e => console.log("sourcePortChanged", e),
   //    targetPortChanged: e => console.log("targetPortChanged", e)
   // })

   positionY = 50
   const nodesEC = []
   const portsInEC = []
   const portsOutEC = []
   const linksEC = []

   if (ECs.length && subnets.length) {
      for (let i = 0; i < ECs.length; i++) {
         nodesEC.push(new DefaultNodeModel('EC2', 'rgb(0, 153, 255)'))
         nodesEC[i].setPosition(450, positionY)
         nodesEC[i].registerListener({
            selectionChanged: e => setCurrentDiagram(Object.keys(e.entity.ports)[0].toLowerCase())
         })
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
         nodesSG[i].registerListener({
            selectionChanged: e => setCurrentDiagram(Object.keys(e.entity.ports)[0].toLowerCase())
         })
         portsInSG.push(nodesSG[i].addInPort(SGs[i].SGid))
         if (SGs[i].parendNum >= 0) {
            linksSG.push(portsOutEC[SGs[i].parendNum].link(portsInSG[i]))
         }
         positionY += 50
      }
   }

   model.addAll(nodeVPC, ...nodesSB, ...nodesEC, ...nodesSG, ...linksSB, ...linksEC, ...linksSG)


   // model.registerListener({
   //    nodesUpdated: e => console.log("nodesUpdated", e),
   //    linksUpdated: e => console.log("linksUpdated", e),
   //    zoomUpdated: e => console.log("zoomUpdated", e),
   //    gridUpdated: e => console.log("gridUpdated", e),
   //    offsetUpdated: e => {
   //       e.stopPropagation((e) => { e.firing = true })
   //       console.log("offsetUpdated", e)
   //    },
   //    entityRemoved: e => console.log("entityRemoved", e),
   //    selectionChanged: e => console.log("selectionChanged", e),
   //    sourcePortChanged: e => console.log("sourcePortChanged", e),
   //    targetPortChanged: e => console.log("targetPortChanged", e)
   // })

   engine.setModel(model)

   return (
      <DemoCanvasWidget >
         <CanvasWidget engine={engine} />
      </DemoCanvasWidget>
   )
}

export default Diagram
