import React from 'react';
import ReactDOM from 'react-dom';
import Show from './Show';
const HellowReact = () => {
  return (
    <div>HellowReact
        <Show/>
    </div>

  )
}

export default HellowReact
ReactDOM.render(<HellowReact/>,document.getElementById("react-app"));
