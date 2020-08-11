import React, {Component} from "react";

/*
* WrappedComponent = original component
* With Counter = new component
* */
const withCounter = (WrappedComponent, incrementCount) => {

    class WithCounter extends Component {

        constructor(props) {
            super(props);
            this.state = {
                count: 0
            }
        }

        incrementCount = () => {
            this.setState(previousState => {
                return ({
                    count: previousState.count + incrementCount
                })
            })
        };

        render() {
            return <WrappedComponent
                count={this.state.count}
                incrementCount={this.incrementCount}
                {...this.props}
            />
        }
    }

    return WithCounter;
};

export default withCounter;

