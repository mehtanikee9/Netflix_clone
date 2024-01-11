import React  from "react";
import Netflix from "./Netflix";
import Tv from "./Tv";
import "./global.css";
import Tv1 from "./Tv1";
import Tv2 from "./Tv2";
import Tv3 from "./Tv3";
import Tvbig from "./Tvbig";
import Last from "./Last";


const App=()=>{
    return(
       <div >
        <Netflix/>
        <Tv/>
        <Tv1/>
        <Tv2/>
        <Tv3/>
        <Tvbig/>
        <Last/>
       </div>
    )
}
export default App;