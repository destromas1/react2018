import React from "react";
import styled from "styled-components";

const StyledWidget = styled.div`
  padding-top: 10px;
  display: flex;
  color: red;
  font-weight: bold;
  justify-content: center;
  text-align: center;
  min-height: 130px;
  align-items: center;
`;

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }

  componentDidCatch(error, errorInfo) {
    console.log("compoentDidCatch Fired...");
    this.setState({ error });
  }

  render() {
    if (this.state.error) {
      return (
        <StyledWidget>
          Sorry - this shouldn't happen!
        </StyledWidget>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
