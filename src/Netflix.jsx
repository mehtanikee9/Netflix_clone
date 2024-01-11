import React  from "react";
import LOGO from "../src/resource/nficon2016.png"
const Netflix=()=>{
    return(
        <div className="div1">
            <div className="woke">
            <div className="mainclass">
        <nav><img src={LOGO}></img></nav>
        <nav className="main">
            <select><option>English</option>
            <option>Hindi</option></select>
            <nav style={{backgroundColor:"red"}}><h1 className="hello" style={{color:"white"}}><button className="sigin"> SignIn</button></h1></nav>
            </nav>
        </div> </div>
       <div className="incen"><h1 className="big">Unlimited movies, TV shows and more</h1>
       <h1 className="watch">Watch anywhere. Cancel anytime.</h1>
       </div>
       <div className="labe">
      <nav className="ready">  Ready? to Watch? Enter your email to create or restart your membership</nav>
      <br></br>
        <div  className="last">
            
        <input type="text" placeholder="Email address"></input>
      <button className="getstarted">Get Started  </button>
      
        </div>
        
        
       </div>
     
      </div>
      
  
    
    
    )
}
export default Netflix;