import React,{useState} from 'react';


export default function TextForm() {
  const [text, setText] = useState('Enter text here');
  const handelONChange = (event) =>{
    //console.log("onchange.");
    setText(event.target.value);
  };
  const handelUpClick = () =>{
    //console.log("uppercase was clicked.");
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handellowClick = () =>{
    //console.log("uppercase was clicked.");
    let newText = text.toLowerCase();
    setText(newText);
  };
  
  return (
    <div className='m-3'>
        <div className="container">

            <h1>Textform </h1>
            <div className="form-floating mb-3">
            <textarea className="form-control" onChange={handelONChange} value={text} placeholder="Leave a comment here" id="floatingTextarea2" style={{ height: '400px' }}></textarea>
            <label for="floatingTextarea2">Comments</label>
            </div>
            <button className="btn btn-primary mx-2 " onClick={handelUpClick}>convert upper case</button>
            <button className="btn btn-primary mx-2 " onClick={handellowClick}>convert lower case</button>
        </div>
        <div className="container">
            <h2>Your text summary.</h2>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{text.split(" ").length * 0.08}</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
    </div>
  )
}
