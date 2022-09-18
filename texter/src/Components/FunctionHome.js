import React, { useState } from "react";
import UseEffectDemo from "./PracticePurpose/UseEffectDemo";

import "./Custom.css";

function FunctionHome(props, ref) {
  const [Text, setText] = useState("Insert Your Text Here");

  // const textRef=useRef()

  return (
    <div>
      <div className="container py-4">
        <UseEffectDemo />
        <h3>Function Based Component</h3>
        <h5 className="my-2">{props.heading}</h5>
        <div className="my-2">
          <textarea
            className="form-control"
            ref={props.myRef}
            rows="8"
            value={Text}
            placeholder="Enter Text Here"
            onChange={(event) => {
              //console.log("hello , i am changing");
              setText(event.target.value);
            }}
          ></textarea>
        </div>
        <div className="m-0">
          <button
            disabled={Text.length === 0}
            className={`btn btn-${props.buttons} m-2`}
            onClick={() => {
              setText(Text.toUpperCase());
              props.showAlert("Converted to UpperCase", "success");
            }}
          >
            To Uppercase
          </button>

          <button
            disabled={Text.length === 0}
            className={`btn btn-${props.buttons} m-2`}
            onClick={() => {
              setText(Text.toLowerCase());
              props.showAlert("Converted to LowerCase", "success");
            }}
          >
            To Lowercase
          </button>
          <button
            disabled={Text.length === 0}
            className={`btn btn-${props.buttons} m-2`}
            onClick={() => {
              // let arr = Text.split(/\s+/) ;
              // let x = arr.map((element)=>{
              //      return setText(element.charAt(0).toUpperCase() + element.slice(1))
              // })
              // console.log(x.join(" "));

              const arr = Text.split(/\s+/);

              for (var i = 0; i < arr.length; i++) {
                arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
              }
              const str2 = arr.join(" ");
              setText(str2);
              props.showAlert("Capitalized Successfully", "success");
            }}
          >
            To Capitalise
          </button>
          <button
            disabled={Text.length === 0}
            className={`btn btn-${props.buttons} m-2`}
            onClick={() => {
              let newText = Text.split(/[ ]+/);
              setText(newText.join(" "));
              props.showAlert("Xtra space Removed Successfully", "success");
            }}
          >
            Remove Xtra Spaces
          </button>
          <button
            disabled={Text.length === 0}
            className={`btn btn-${props.buttons} m-2`}
            onClick={() => {
              let x = props.myRef.current?.value;
              navigator.clipboard.writeText(x.value);
              props.myRef.current.select();

              props.showAlert("Text has been Copied to Clipboard", "success");
            }}
          >
            Copy Text
          </button>

          <button
            disabled={Text.length === 0}
            className={`btn btn-outline-${props.buttons} m-2`}
            onClick={() => {
              setText("");
              props.myRef.current.focus();
              props.showAlert("Textarea Cleared", "success");
            }}
          >
            Clear Text
          </button>
        </div>
      </div>
      <div className=" container py-2">
        <h2>Your Text summary</h2>
        <p>
          Word Count : '
          {
            Text.split(/\s+/).filter((elem) => {
              return elem.length !== 0;
            }).length
          }
          ' | Characters Count : ' {Text.length} ' | Line Count : '
          {Text.split("\n").length}'.
        </p>
        <p>
          it will take{" "}
          <strong>
            {(Text.split(/\s+/).filter((elem) => {
              return elem.length !== 0;
            }).length *
              6) /
              25}
          </strong>{" "}
          seconds Or{" "}
          <strong>
            {(
              Text.split(/\s+/).filter((elem) => {
                return elem.length !== 0;
              }).length * 0.008
            ).toFixed(3)}{" "}
          </strong>
          minutes to read.{" "}
        </p>

        {/* -------- preview part -------- */}
        <h2 className="mt-3">Preview</h2>

        <p>{Text.length > 0 ? Text : "Nothing to preview"}</p>
      </div>
    </div>
  );
}

export default React.forwardRef(FunctionHome);
