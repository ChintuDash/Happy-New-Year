import './App.css';
import img2 from './images/img2.png';
import React, { useEffect} from "react";
import {gsap} from "gsap";
import {TextPlugin} from 'gsap/TextPlugin';
gsap.registerPlugin(TextPlugin)

// import img1 from './images/img1.png';

function App() {
  // const imgRef=useRef(null);
  // imgRef.current ref={imgRef}
  useEffect(()=>{
    gsap.to(".App-logo",{
      rotation:360,
      duration:4,
      repeat:-1,
      ease:"linear"
    });
// let colors=["#ff0000", "#00ff00", "#0000ff"];
// let i=0;
//     gsap.to(".text",{
//       fontSize:"10px",
     
//       fontWeight:"bold",
//       duration:1,
//       repeat:-1,
//       yoyo:true,
//       onUpdate:()=>{
//         document.querySelector(".text").style.color=colors[i % colors.length];
//       }
//     })
// gsap.registerPlugin(TextPlugin)
gsap.to(".text",{
  duration:1,
  color:'yellow',  
  yoyo:true,
  repeat:-2,
})

gsap.to(".span",{
  duration: 5,
  text: "May Lord Jagannath Blessed You !",
  ease: "none",
  repeat:-2,  
  yoyo:true,
})
  },[]);

 
    

  return (
    <div className="App">
        <video  autoPlay muted loop controls> //autoPlay
          <source src="/bgvideo.mp4" type="video/mp4"/>
        
        </video>
        <img  src={img2} id="img2" className="App-logo" alt="Img Not Found"/>
        {/* <img  src={img2} id="img1" className="App-logo" alt="Img Not Found"/> */}
       <h1 className="text">Happy New Year 2025 </h1>
       <span className="span"></span>
       <marquee id="m1">Welcome to 2025!</marquee>
       <marquee id="m2" direction="right">Welcome to 2025!</marquee>

    </div>
  );
}

export default App;
