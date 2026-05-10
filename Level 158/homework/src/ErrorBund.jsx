import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
      showMessage: false,
    };
  }


  static getDerivedStateFromError(error) {
    return { hasError: true };
  }


  componentDidCatch(error, info) {
    console.log("Error:", error);
    console.log("Info:", info);


    setTimeout(() => {
      this.setState({ showMessage: true });
    }, 5000);
  }

  render() {
    if (this.state.hasError) {
      return (
        <>
          <h2>Error...</h2>

          {this.state.showMessage && (
            <h1 style={{ color: "red" }}>
              Error! გადაამოწმე კოდი
            </h1>
          )}
        </>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;