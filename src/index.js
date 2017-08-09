//1. Using the ES6 import function, import react
import React from 'react';

//2. Using the ES6 import function, import react-dom
import ReactDom from 'react-dom';

//3. Import the Parent component
import Parent from './components/Parent'

ReactDom.render(<Parent />, document.getElementById("root"));