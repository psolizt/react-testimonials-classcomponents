import React, { Component } from 'react';
import Testimonial from './Testimonial';

class Testimonials extends Component {
  constructor() {
    super();
    this.state = {
      testimonials: []
    };
  }

  componentDidMount() {
    const testimonialsData = require("../utils/data.json");
    this.setState({ testimonials: testimonialsData });
  }

  render() {
    const { testimonials } = this.state;
    return (
      <>
        {testimonials.map((testimonial, index) => (
          <Testimonial key={index} imagen={testimonial.imagen} nombre={testimonial.nombre} pais={testimonial.pais} cargo={testimonial.cargo} empresa={testimonial.empresa} testimonio={testimonial.testimonio} />
        ))}
      </>
    );
  }
}

export default Testimonials;

// import React, { useEffect, useState } from 'react';
// import Testimonial from './Testimonial';

// function Testimonials() {
//     const [testimonios, setTestimonios] = useState([]);

//     useEffect(() => {
//     const testimoniosData = require("../utils/data.json");
//         setTestimonios(testimoniosData);
//     }, []);
    
//     return (
//         <>
//             {testimonios.map((testimonio,index)=> (
//                 <Testimonial key={index} imagen={testimonio.imagen} nombre={testimonio.nombre} pais={testimonio.pais} cargo={testimonio.cargo} empresa={testimonio.empresa} testimonio={testimonio.testimonio}/>
//             ))}
//         </>
//     );
// }

// export default Testimonials;
