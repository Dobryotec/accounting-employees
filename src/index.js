import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/app/app';

// const elem = <h2>Hello World!</h2>;

// const elem = React.createElement("h2", { className: "true" }, "Hello World!");

// const text = "Hello World!";

// const elem = (
//   <div>
//     <h2 className="text">{text}</h2>
//     <input type="text"></input>
//     <button>Click</button>
//   </div>
// );
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
