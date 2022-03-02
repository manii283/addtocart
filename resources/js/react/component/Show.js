import React from 'react'

const Show = (props) => {
   const clickhandeler=()=>{
    console.log("click");
       fetch("http://127.0.0.1:8000/api/cart/2")
       .then((response)=>{ return response.json()})
       .then((data)=>{
           console.log(data)} );

   }
  return (
    <div>
        <button onClick={clickhandeler}> show data</button>
    </div>
  )
}

export default Show
