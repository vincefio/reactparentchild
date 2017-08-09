// Include React
import React from 'react';

// Create the Child2 Component
class Child2 extends React.Component {
  constructor(){
    super();

    // Child2 has a state that keeps track of it's food value
    this.state = {
      food: 12
    };
  }
  
  // Whenever the button is clicked we'll run the this.props.feedAudreyII function, passing in
  // this.state.food as an argument. (12 in this case)
  handleClick = () => {
    // Add an onClick listener to the img tag being rendered below.
    // Call the feedAudreyII method and pass in this component's food state.
    this.props.feedAudreyII(this.state.food);
  }

  render() {
    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title text-center">Tasty Treats</h3>
        </div>
        <div className="panel-body text-center">
          <h3>Frog Livers</h3>
          <img
            alt="Frog"
            src="http://www.cellphonetaskforce.org/wp-content/uploads/2012/01/frog-left.jpg"
            width="100%"
            onClick={this.handleClick}
          />
        </div>
      </div>
    );
  }
};

// Export the component back for use in other files
export default Child2;
