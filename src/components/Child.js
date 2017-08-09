// Include React
var React = require("react");

// Create the Child Component
class Child extends React.Component {

  // Child has a state that follows the number of clicks
  constructor() {
    super();

    this.state = {
      number: 0
    };
  }

  // Whenever the button is clicked we'll add to the child's click count.
  // Then use the parent's setParent function to set that as well.
  handleClick = () => {
    // this.setState is ansynchronous for performance reasons. To ensure that the
    // setParent function get the updated number in time we will pass it the newNumber variable
    var newNumber = this.state.number + 1;
    this.setState({
      number: newNumber
    });
    this.props.setParent(newNumber);
  }

  // Whenever the button is clicked we'll use setState to reset the clickCounter.
  // This will reset the clicks -- and it will be passed upward to the parent as well.
  resetClick = () => {
    this.setState({
      number: 0
    });

    this.props.setParent(0);
  }

  render() {
    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title">Child</h3>
        </div>
        <div className="panel-body text-center">
          <p>
            {/*
              Here we create a button with an onClick event listener.
              Note how we have an onClick event associated with our handleClick function.
            */}
            <button className="btn btn-primary btn-lg" onClick={this.handleClick}>CLICK ME!!!!</button>
            {/* Here we create a button for resetting the clickCounter */}
            <button className="btn btn-danger btn-lg" onClick={this.resetClick}>Reset</button>
          </p>
        </div>
      </div>
    );
  }
};

// Export the component back for use in other files
export default Child;
