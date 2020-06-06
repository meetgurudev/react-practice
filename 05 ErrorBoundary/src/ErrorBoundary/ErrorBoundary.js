import React, { Component } from 'react';

class ErrorBoundary extends Component {

    state = {
        hasError: false,
        errorMessage: ''
    }

    componentDidCatch = (error, info) => {
        this.setState({
            hasError: true,
            errorMessage: error
        })
    }

    render() {
        if (this.state.hasError) {

            // Show this error boundary
            return <h1>{this.state.errorMessage}</h1>
        } else {

            // Wrapped within error boundary
            return this.props.children;
        }
    }
}

export default ErrorBoundary;