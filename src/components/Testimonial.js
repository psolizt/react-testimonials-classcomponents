import React, { Component } from 'react';
import parse from "html-react-parser";
import '../css/Testimonial.css';

class Testimonial extends Component {
  render() {
    return(
      <div className="testimonial">
        <img className="image" src={require(`../images/${this.props.imagen}.png`)} alt={`Foto de ${this.props.nombre}`}/>
        <div className="content-testimonial">
          <p className="name"><strong>{this.props.nombre}</strong> en {this.props.pais}</p>
          <p className="position">{this.props.cargo} en <strong>{this.props.empresa}</strong></p>
          <p className="description">"{parse(this.props.testimonio)}"</p>
        </div>
      </div>
    );
  }
}

export default Testimonial;

// import React from "react";
// import parse from "html-react-parser";
// import '../css/Testimonial.css';

// function Testimonial({imagen, nombre, pais, cargo, empresa, testimonio}) {
//   return(
//     <div className="testimonial">
//       <img className="image" src={require(`../images/${imagen}.png`)} alt={`Foto de ${imagen}`}/>
//       <div className="content-testimonial">
//         <p className="name"><strong>{nombre}</strong> en {pais}</p>
//         <p className="position">{cargo} en <strong>{empresa}</strong></p>
//         <p className="description">"{parse(testimonio)}"</p>
//       </div>
//     </div>
//   );
// }

// export default Testimonial;