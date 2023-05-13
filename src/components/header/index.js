import React from "react";
import Alert from 'react-bootstrap/Alert';
//vamos a generar un componente en modo de funcion//
/*const header= () => {
    return(
        <div>
            <h1>Titulos</h1>
            
        </div>
    );
};*/
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

function UncontrolledExample() {
  return (
    <Tabs
      defaultActiveKey="profile"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab eventKey="home" title="Home">
        Tab content for Home
      </Tab>
      <Tab eventKey="profile" title="Profile">
        Tab content for Profile
      </Tab>
      <Tab eventKey="contact" title="Contact" disabled>
        Tab content for Contact
      </Tab>
    </Tabs>
  );
}

export default UncontrolledExample;
//export default header;