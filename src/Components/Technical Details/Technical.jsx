import { Canvas } from "@react-three/fiber";
 import Experience from "../Experince/Experience";
import Button from "../Technical Details/Button"
// import Controlar from "./Components/Controlar/Orbitcontrol"
import "./App.css";
import { CustomizationProvider } from "../contexts/Customization";
import backarrow from '../../assets/back_arrow.png'
// import crossbtn from './assets/cross_btn.png'
import {Link} from 'react-router-dom'

function Technical() {
  return (
  <CustomizationProvider>
   <div className="App">
    <Link to='/'><button className="position_backarrow"><img src={backarrow} alt="back"/></button></Link>
    {/* <button className="position_crossbtn"><img src={crossbtn} alt="cross"/></button> */}
    <Canvas>
      <color attach="background" args={["#101010"]} />
      {/* <fog attach="fog" args={["#213547", 10, 20]} /> */}
     <Experience/> 
      {/* <Controlar />  */}
    </Canvas>
    <Button/>
  </div>
  </CustomizationProvider>
  );
}
export default Technical;