import React from "react";
//import Alert from 'react-bootstrap/Alert';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

//vamos a generar un componente en modo de funcion//

function UncontrolledExample() {
  return (
    <Tabs
      defaultActiveKey="profile"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab eventKey="home" title="Home">
        
      </Tab>
      <Tab eventKey="profile" title="Profile">
        
      </Tab>
      <Tab eventKey="contact" title="Contact" disabled>
        
      </Tab>
    </Tabs>
  );

}

export default UncontrolledExample;

