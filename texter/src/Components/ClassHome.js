import React, { Component } from "react";
import CompDidMount from "./CompDidMount";

class ClassHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Text: "Enter Text Here",
      show: true,
    };
  }
  render() {
    return (
      <div className="container my-4">
          <CompDidMount />
        <h2>Class Based Component</h2>
        <h3 className="my-2">{this.props.heading}</h3>
        <div className="m-2">
          <textarea
            className="form-control"
            ref={this.props.myRef}
            rows="8"
            placeholder="Enter Text Here"
            value={this.state.Text}
            onChange={(event) => {
              //  console.log("hello , i am changing");
              this.setState({ Text: event.target.value });
            }}
          ></textarea>
        </div>
        {/* ----- logical part -------- */}
        <button
          disabled={this.state.Text.length === 0}
          className={`btn btn-${this.props.buttons} m-2`}
          onClick={() => {
            let newText = this.state.Text.toUpperCase();
            this.setState({ Text: newText });
          }}
        >
          To Uppercase
        </button>

        <button
          disabled={this.state.Text.length === 0}
          className={`btn btn-${this.props.buttons} m-2`}
          onClick={() => {
            let newText = this.state.Text.toLowerCase();
            this.setState({ Text: newText });
          }}
        >
          To Lowercase
        </button>

        <button
          disabled={this.state.Text.length === 0}
          className={`btn btn-${this.props.buttons} m-2`}
          onClick={() => {
            let newText = this.state.Text.split(/[ ]+/);
            this.setState({ Text: newText.join(" ") });
            this.props.showAlert("Xtra space Removed Successfully", "success");
          }}
        >
          Remove Xtra Spaces
        </button>

        <button
          disabled={this.state.Text.length === 0}
          className={`btn btn-${this.props.buttons} m-2`}
          onClick={() => {
            let x = this.props.myRef.current;
            navigator.clipboard.writeText(x.value);
            x.select();

            console.log("clipboard clicked");
          }}
        >
          Copy to Clipboard
        </button>

        <button
          disabled={this.state.Text.length === 0}
          className={`btn btn-${this.props.buttons} m-2`}
          onClick={() => {
            // let arr = Text.split(/\s+/) ;
            // let x = arr.map((element)=>{
            //      return setText(element.charAt(0).toUpperCase() + element.slice(1))
            // })
            // console.log(x.join(" "));

            const arr = this.state.Text.split(/\s+/);

            for (var i = 0; i < arr.length; i++) {
              arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
            }
            const str2 = arr.join(" ");
            this.setState({ Text: str2 });
            this.props.showAlert("Capitalized Successfully", "success");
          }}
        >
          To Capitalise
        </button>

        <button
          disabled={this.state.Text.length === 0}
          className={`btn btn-outline-${this.props.buttons} m-2`}
          onClick={() => {
            this.setState({ Text: "" });
            this.props.myRef.current.focus();
            // console.log(this.myref);
          }}
        >
          Clear Textbox
        </button>

        {/* ---- summary part ------- */}
        <div className="py-2">
          <h2>Your Text summary</h2>
          <p>
            Word Count : '{" "}
            {
              this.state.Text.split(/\s+/).filter((elem) => {
                return elem.length !== 0;
              }).length
            }{" "}
            ' | Characters Count : ' {this.state.Text.length} ' | Line Count : '
            {this.state.Text.split("\n").length}'.
          </p>
          <p>
            it will take{" "}
            <strong>
              {(this.state.Text.split(/\s+/).filter((elem) => {
                return elem.length !== 0;
              }).length *
                60) /
                250}
            </strong>{" "}
            seconds Or{" "}
            <strong>
              {this.state.Text.split(/\s+/).filter((elem) => {
                return elem.length !== 0;
              }).length * 0.008}{" "}
            </strong>
            minutes to read.{" "}
          </p>

          {/* -------- preview part -------- */}
          <h2 className="mt-3">Preview</h2>
          <p>
            {this.state.Text.length > 0
              ? this.state.Text
              : "Nothing to preview"}
          </p>
        </div>
      </div>
    );
  }
}

export default ClassHome;
