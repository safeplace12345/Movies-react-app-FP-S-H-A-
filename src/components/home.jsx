import React, {useContext,useRef, } from "react";
import moviesContext from '../contexts/movies'
import Carousel from "react-bootstrap/Carousel";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom" 
const Home = () => {
 const {movies} =  useContext(moviesContext)
  const data = [];
  movies.forEach((element) => {
    data.push(element.data());
  });
const carousel = useRef(null)
 return (
   <>
     <Carousel  >
       {data.map((item , index) => {
         return (
           <Carousel.Item
           interval={2000}
           ref={carousel}
             key={index}
             style={{ maxHeight: "70vh" }}
           >
             <img style={{ height: "100%", width: "100%" }} src={item.image} />
             <Carousel.Caption style={{ color: "black" }}>
               <h3>{item.title}</h3>
               <p >{item.info}</p>
             </Carousel.Caption>
           </Carousel.Item>
         );
       })}
     </Carousel>
     <div className="col-md-5 d-flex mt-4 mx-auto justify-content-between">
       <Button variant="outline-warning">
         <Link to="/components/signUp">Subscribe now....</Link>
       </Button>
       <Button variant="outline-dark" >
         <Link to="/components/movies">All Movies..</Link>
       </Button>
     </div>
   </>
 );
};


export default Home;
