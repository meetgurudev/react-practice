import React, { Component } from 'react';

const asyncComponent = (importComponent) => {
    return class extends Component {
        // Set a new state
        state = {
            // where the component to be imported will sit.
            component: null
        }

        //On Mount...
        componentDidMount() {
            // Exec the import callack...
            importComponent().then(cmp => {
                console.log(cmp)
                // then set the state with the response...
                this.setState({ component: cmp.default });
            });
        }

        render() {
            // Store the state component.
            const C = this.state.component;

            // See if defined and then spread the props if any, else return null.
            return C ? <C {...this.props} /> : null;
        }
    }
}

export default asyncComponent;
