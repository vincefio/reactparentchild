// Include React
import React from 'react';

// Create the Child1 Component
class Child1 extends React.Component {
  constructor(){
    super();

    // Child1 has a state that keeps track of it's food value
    this.state = {
      food: 25
    };
  }

  // Whenever the button is clicked we'll run the this.props.feedAudreyII function, passing in
  // this.state.food as an argument. (25 in this case)
  handleClick = () => {
    // Add an onClick listener to the img tag being rendered below.
    // Call the feedAudreyII method and pass in this component's food state.
    this.props.feedAudreyII(this.state.food);
  }

  render() {
    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title text-center">Mmm Mmm Good!</h3>
        </div>
        <div className="panel-body text-center">

          <h3>Human Flesh</h3>
          <img
            alt="Scared Girls"
            src="http://www.toxel.com/wp-content/uploads/2011/10/fear08.jpg"
            width="100%"
            onClick={this.handleClick}
          />
        </div>
      </div>
    );
  }
};

// Export the component back for use in other files
export default Child1;
