import React from 'react';
import { Carousel } from 'react-bootstrap';
import "../index.css";


function isDestaque(item, destaque){
  if(item.Destaque === "1") {
    destaque.push(item);
  }
}

const Destaques = (props) => {
  const destaque = []
  props.datas.map(item => isDestaque(item, destaque))
  return(
    <Carousel className="carousel">
      {destaque.map((item, i) => (
          <Carousel.Item>
          <Carousel.Caption className="caption">
            {item.Nome && 
              <h3>{item.Nome}</h3>
              }
          {item.Sobre && <p>{item.Sobre}</p>}
          </Carousel.Caption>
          </Carousel.Item>
      ))}
    </Carousel>
  )
}
   
export default Destaques;


