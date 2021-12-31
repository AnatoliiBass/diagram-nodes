import * as React from 'react';
import createEngine, { DiagramModel, DefaultNodeModel } from '@projectstorm/react-diagrams';
import { CanvasWidget } from '@projectstorm/react-canvas-core';
import { DemoCanvasWidget } from './CanvasWidget.tsx';

const Diagram = ({ activeVPC, subnets }) => {
   const engine = createEngine();

   const model = new DiagramModel();

   const node1 = new DefaultNodeModel('VPC', 'rgb(255,99,66)');
   const port1 = node1.addOutPort(activeVPC);
   node1.setPosition(50, 200);

   let positionY = 50
   const nodes = []
   const ports = []
   const links = []

   if (subnets.length) {
      for (let i = 0; i < subnets.length; i++) {
         nodes.push(new DefaultNodeModel('SUBNET', 'rgb(192,255,0)'))
         nodes[i].setPosition(250, positionY)
         ports.push(nodes[i].addInPort(subnets[i]))
         links.push(port1.link(ports[i]))
         positionY += 100
      }
   }

   model.addAll(node1, ...nodes, ...links);

   engine.setModel(model);

   return (
      <DemoCanvasWidget>
         <CanvasWidget engine={engine} />
      </DemoCanvasWidget>
   )
}

export default Diagram
