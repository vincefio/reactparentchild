// Include React
import React from 'react';

// Here we include all of the sub-components
import Child1 from './children/Child1';
import Child2 from './children/Child2';
import Child3 from './children/Child3';

// This is the main component, AudreyII
class AudreyII extends React.Component {
  constructor(){
    super();

    // Here we set a generic state associated with the number of clicks
    this.state = {
      consumed: 0
    }
  }

  // componentDidUpdate is a lifecycle event which runs every time AudreyII's state is changed, in this case, whenever a child is clicked.
  // Here we have access to the the previous props and previous state from before the update
  componentDidUpdate(prevProps, prevState) {
    // Add code here to check if this.state.consumed is zero. If so, alert the user that AudreyII is full
    if(this.state.consumed === 0){
      alert('AudreyII is full');
    }
  }

  // Here we create a function for updating the AudreyII's consumed state based on clicks received by the child
  // We will then give the child access to this method
  feedAudreyII = (food) => {
    // If AudreyII's new consumed state is more than 500, reset AudreyII's consumed state to be zero.
    // Otherwise set AudreyII's consumed state to its current value plus the value of the `food` argument recieved.
    if(this.state.consumed > 500){
      this.setState({consumed: 0});
    }
    else{
      this.setState({
        consumed: this.state.consumed + food
      });
    }
  }

  // Here we describe our component's render method
  render() {
    return (
      <div className="container">

        <div className="row">

          <div className="jumbotron">
            <h2>Feed Me AudreyII!</h2>
            <p>
              <em>Click on AudreyII's Children to Feed Her</em>
            </p>
          </div>
          <div className="col-md-12">

            <div className="panel panel-default">
              <div className="panel-heading">
                <h3 className="panel-title text-center">AudreyII</h3>
              </div>
              <div className="panel-body text-center">

                <h1>
                  Food Consumed: {this.state.consumed}
                </h1>
                <img alt="AudreyII" src="https://media.giphy.com/media/pBj0EoGSYjGms/giphy.gif" />

              </div>
            </div>

          </div>

          <div className="col-md-4">

            {/* Rennder Child1 here, give it access to the feedAudreyII function */}
            <Child1 feedAudreyII={this.feedAudreyII} />
          </div>

          <div className="col-md-4">

            {/* Render Child2 here, give it access to the feedAudreyII function */}
            <Child2 feedAudreyII={this.feedAudreyII} />
          </div>

          <div className="col-md-4">

            {/* Render Child3 here, give it access to the feedAudreyII function */}
            <Child3 feedAudreyII={this.feedAudreyII} />
          </div>

        </div>

      </div>
    );
  }
};

// Export the component back for use in other files
export default AudreyII;
