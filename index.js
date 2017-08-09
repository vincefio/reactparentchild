//TODO
//1. Using the ES6 import function, import react
import React from 'react';

//2. Using the ES6 import function, import react-dom
import ReactDom from 'react-dom';

//3. Import the Parent component
import Parent from './components/Parent';

//4. Using React-Dom, render the Header component to the element with the id "root"
//*Hint* Use your Google-Foo to check the docs for the react-dom render function

ReactDom.render(<Parent />, document.getElementById("root"));