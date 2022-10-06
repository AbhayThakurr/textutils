import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    console.log("Uppercase was Clicked" + Text);
    let newText = Text.toUpperCase();
    setText(newText);
  };
  const handleLoClick = () => {
    console.log("Lowercase was Clicked" + Text);
    let newText = Text.toLowerCase();
    setText(newText);
  };
    const handleClearClick = () => {
      
      let newText = ('');
      setText(newText);
    };
     const handleCopy = () => {
      var Text = document.getElementById("exampleFormControlTextarea1");
      Text.select();
      
      navigator.clipboard.writeText(Text.value);
     };
     
  const handleOnChange = (event) => {
    console.log("on change");
    setText(event.target.value);
  };
    const handleExtraSpaces = (event) => {
     let newText= Text.split(/[ ]+/);
     setText(newText.join(" "))

    };

  const [Text, setText] = useState("");
  return (
    <>
      <div
        className="container"
        style={{
          color: props.mode === "dark" ? "white" : "#0a0b1e",
        }}
      >
        <h1>{props.heading}</h1>
        <form>
          <div className="mb-3">
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              onChange={handleOnChange}
              value={Text}
              style={{
                backgroundColor: props.mode === "dark" ? "gray" : "white",
                color: props.mode === "dark" ? "white" : "#0a0b1e",
              }}
              rows="8"
            ></textarea>
          </div>
        </form>

        <button
          type="button"
          className="btn btn-primary mx-1"
          onClick={handleUpClick}
        >
          Convert to Uppercase
        </button>
        <button
          type="button"
          className="btn btn-primary mx-1"
          onClick={handleLoClick}
        >
          Convert to Lowercase
        </button>
        <button
          type="button"
          className="btn btn-primary mx-1"
          onClick={handleClearClick}
        >
          Clear Text
        </button>
        <button
          type="button"
          className="btn btn-primary mx-1"
          onClick={handleCopy}
        >
          Copy Text
        </button>
        <button
          type="button"
          className="btn btn-primary mx-1"
          onClick={handleExtraSpaces}
        >
          Remove Extra Space
        </button>
      </div>
      <div
        className="container my-3"
        style={{
          color: props.mode === "dark" ? "white" : "#0a0b1e",
        }}
      >
        <h2>Your Text Summary</h2>
        <p>
          {Text.split(" ").length} words and {Text.length} characters
        </p>
        <p>{0.008 * Text.split(" ").length} Minutes to read</p>
        <h3>Preview</h3>
        <p>{Text.length>0?Text :"Enter Something in the text box to preview it here." }</p>
      </div>
    </>
  ); 

}
