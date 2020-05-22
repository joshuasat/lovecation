import React, { Component } from "react";
import Button from "elements/Button/index";

export default class NotFound extends Component {
  render() {
    return (
      <div className="container">
        <div
          className="row align-items-center justify-content-center text-center"
          style={{ height: "100vh" }}
        >
          <div className="col-3">
            In Developing Process
            <div>
              <Button
                className="btn mt-5"
                type="button"
                onClick={() => this.props.history.goBack()}
                isLight
              >
                Back To Home
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
