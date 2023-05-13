import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import cebra from './imagenes/cebra.jpg';
import tigres from './imagenes/tigres.jpg';
import leones from './imagenes/leones.jpg';


function UncontrolledExample() {
    return (
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={cebra}
            alt="Cebra"
          />
          <Carousel.Caption>
            <h3></h3>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={tigres}
            alt="tigres"
          />
  
          <Carousel.Caption>
            <h3></h3>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={leones}
            alt="leones"
          />
  
          <Carousel.Caption>
            <h3></h3>
            <p>
              
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
  
  export default UncontrolledExample;

