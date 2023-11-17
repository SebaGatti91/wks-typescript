import React from 'react';
import ReactDOM from 'react-dom';
import { useState } from 'react';

interface AppProps {
    title: string;
  }



  function App({title}: AppProps) {
    const [counter, setCounter] = useState(0);
   
    return (
     <div>
      <h3>Henry Workshop - {title}</h3>
      <hr></hr>
      <button onClick={() => setCounter(counter + 1)}>Increment</button>
      <button onClick={() => setCounter(counter - 1)}>Decrement</button>
      <br></br>
      <span>{counter}</span>
     </div>
    );
   }

ReactDOM.render(<App title="Prop title"  />, document.querySelector('#root'));