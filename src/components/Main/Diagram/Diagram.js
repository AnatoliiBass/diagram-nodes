import * as React from 'react';
import { action } from '@storybook/addon-actions';
import createEngine, { DiagramModel, DefaultNodeModel } from '@projectstorm/react-diagrams';
import { CanvasWidget } from '@projectstorm/react-canvas-core';
import { DemoCanvasWidget } from './DemoCanvasWidget.tsx';

const Diagram = () => {
   var engine = createEngine();

   var model = new DiagramModel();

   var node1 = new DefaultNodeModel('Node 1', 'rgb(255,99,66)');
   var port1 = node1.addOutPort('Out');
   node1.setPosition(100, 100);

   var node2 = new DefaultNodeModel('Node 2', 'rgb(192,255,0)');
   var port2 = node2.addInPort('In');
   node2.setPosition(400, 40);

   var node3 = new DefaultNodeModel('Node 3', 'rgb(128,99,255)');
   var port3 = node3.addInPort('In');
   node3.setPosition(300, 160);

   let link1 = port1.link(port2);
   let link2 = port1.link(port3);


   let models = model.addAll(node1, node2, node3, link1, link2);

   models.forEach((item) => {
      item.registerListener({
         eventDidFire: action('element eventDidFire')
      });
   });

   model.registerListener({
      eventDidFire: action('model eventDidFire')
   });

   engine.setModel(model);

   return (
      <DemoCanvasWidget>
         <CanvasWidget engine={engine} />
      </DemoCanvasWidget>
   )
}

export default Diagram
