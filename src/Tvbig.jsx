import React from 'react'

const Tvbig = () => {
  return (
    <div className='tvbig'>
      <h1 className='tvh1'>Frequently Asked Questions</h1>
      <nav className="navbig">What is Netflix?    <div className='plus'><p className='pp'>+</p></div></nav>
      <nav className="navbig">How much does Netflix cost? <div className='plus'>+</div></nav>
      <nav className="navbig">Where can i watch? <div className="plus">+</div></nav>
      <nav className="navbig">How do i cancel? <div className="plus">+</div></nav>
      <nav className="navbig">What can i watch on Netflix? <div className="plus">+</div></nav>
      <nav className="navbig">Is netflix good for kids? <div className="plus">+</div></nav>
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

export default Tvbig
