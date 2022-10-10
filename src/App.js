
import { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  useEffect(()=>{
    // const webgazer = window.webgazer
    // webgazer.setGazeListener((data,clock)=>{
    //   console.log(data,clock)
    // }).begin()
    var flag=0;
    const webgazer = window.webgazer
    webgazer.setGazeListener(function(data, elapsedTime) {
      if (data == null) {
          return;
      }
      var xprediction = data.x; //these x coordinates are relative to the viewport
      var yprediction = data.y; //these y coordinates are relative to the viewport
      //console.log(xprediction,yprediction); //elapsed time is based on time since begin was called
      //console.log(data);

      if(yprediction < 100)
      {
        window.setTimeout(() => {
        }, 20000);
        // if((flag%20)==0)
        // {
          scrollUp();//window.scrollY(window.screenY-20);
        // }
        // flag++;
      }
      if(yprediction > (window.innerHeight-100))
      {
        window.setTimeout(() => {
        }, 20000);
        // if((flag%20)==0)
        // {
          scrollDown();//window.scrollY(window.screenY+20);
        // }
        // flag++;
      }

      console.log(flag);
      // var currentElement = document.elementFromPoint(xprediction,yprediction);

      // currentElement.click();

  }).begin();
  

  },[])


function scrollDown() {
  window.setTimeout(() => {
  }, 5000);
  window.scrollBy(0, 75);
  console.log("down");
  //alert("pageXOffset: " + window.scrollX + ", scrollY: " + window.scrollY);
}

function scrollUp() {
  window.scrollBy(0, -75);
  //alert("pageXOffset: " + window.scrollX + ", scrollY: " + window.scrollY);
  console.log("up");
  window.setTimeout(() => {
  }, 5000);
}

  return (
    <div className="App">
    </div>
  );
}


export default App;

