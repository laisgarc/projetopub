import React from 'react';
import { Carousel } from 'react-bootstrap';
import "../index.css";


function isDestaque(item, destaque){
  if(item.Destaque === "1") {
    destaque.push(item);
  }
}

function getTransitionEndEventName() { 
  var transitions = { "transition" : "transitionend", 
  "OTransition" : "oTransitionEnd",
  "MozTransition" : "transitionend",
  "WebkitTransition": "webkitTransitionEnd" 
  } 
  let bodyStyle = document.body.style;
  for(let transition in transitions) {
    if(bodyStyle[transition] !== undefined) {
        return transitions[transition];
    } 
  }
} 

function callback(card) {
  setTimeout(function () {
    card.classList.remove("animation");
  }, 1000);
} 

function goToCard(id){
  const card = document.getElementById(id);
  card.scrollIntoView();
  card.classList.add('animation');
  let transitionEndEventName = getTransitionEndEventName();
  card.addEventListener(transitionEndEventName, callback(card));
}

const Destaques = (props) => {
  const destaque = []
  props.datas.map(item => isDestaque(item, destaque))
  return(
    <Carousel className="carousel">
      {destaque.map((item, i) => (
          <Carousel.Item key={i}>
          <Carousel.Caption className="caption">
            {item.Nome && 
              <h3>{item.Nome}</h3>
            }
            {item.Sobre && <p>{item.Sobre}</p>}
            <button className="button-carousel" onClick={() => goToCard(item.Nome)} >Conheça</button>
          </Carousel.Caption>
          </Carousel.Item>
      ))}
    </Carousel>
  )
}
   
export default Destaques;


