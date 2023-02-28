import React from "react";
// import "../../App.css"
import "../Layout/style.css"
import { Button, Container } from "semantic-ui-react";
import videoBg from "../../assets/videoBg.mp4";
import { Link } from 'react-router-dom'


const Main = () => {
  return (
    <Container className="landingPage">
      <div className="main">
        <video src={videoBg} autoPlay loop muted />
        <div className="btnarea">
          <div className="buttonContainer" >
            <Link className="rmlinkprop" to={'/product'}><Button className="button ">Product Demonstration</Button></Link>
          </div>
          <div  className="buttonContainer">
            <Link className="rmlinkprop" to={'/features'}><Button className="button">Features</Button></Link>
          </div>
           <div className="buttonContainer">
            <Link className="rmlinkprop" to={'/techdetails'}><Button className="button">Technical Details</Button></Link>
           </div>
          <div className="buttonContainer">
            <Link className="rmlinkprop" to={'/support'}> <Button className="button">Support</Button></Link>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Main;
