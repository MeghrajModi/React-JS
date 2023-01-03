import React  from 'react';
import ReactDOM from 'react-dom';
import Card from './Cards';
import "./index.css";
import Sdata from './Sdata';


// function ncard(val){
//   console.log(val);
// }


ReactDOM.render(
  <>
    <h1 className="heading">
      List of top 6 movies in 2022 </h1>
       {Sdata.map(function ncard(val) {
        return (
          <Card
          sname={val.sname}
          imgsrc={val.imgsrc}
          title={val.title}
          link={val.link}
           />
        )
       })}
     
  </>,
  document.getElementById('root')
);


  // function myname (a,b){
    // return a+b;
  // }

  // Fat arrow function
  // const myname = (a,b) 


