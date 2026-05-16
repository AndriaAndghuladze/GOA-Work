import React from "react";

class CartErrorBoundary extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError(error) {
    return {
      hasError: true,
    };
  }

  handleReset = () => {
    this.setState({
      hasError: false,
    });

    this.props.resetCart();
  };

  render() {
    if (this.state.hasError) {
      return (
        <div>
          <h2>კალათის ჩატვირთვა ვერ მოხერხდა.</h2>

          <button onClick={this.handleReset}>
            კალათის გასუფთავება (Reset)
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default CartErrorBoundary;