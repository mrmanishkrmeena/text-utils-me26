import React,{useState} from 'react'
export default function TextForm(props) {
    const handleUpClick = ()=>{
        // console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Upper case","success");
    }
    const handleLoClick = ()=>{
      // console.log("lowercase was clicked" + text);
      let newText = text.toLowerCase();
      setText(newText);
      props.showAlert("Converted to Lower case","success");
  }
  const handleClearClick = ()=>{
    // console.log("Uppercase was clicked" + text);
    let newText = '';
    setText(newText);
    props.showAlert("Text cleared","success");
}
    const handleOnChange = (event)=>{
        // console.log("On Change");
        setText(event.target.value)
    }
    const [text,setText] = useState('');
  return (
    <>
    <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
      <h1>{props.heading}</h1>
<div className="mb-3" >
 
  <textarea className="form-control" value={text}  onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#3c5c8a':'white',color:props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
</div>
<button className="btn btn-primary my-2 mx-2" onClick={handleUpClick}>Convert to UperCase</button>
<button className="btn btn-primary my-2 mx-2" onClick={handleLoClick}>Convert to LouerCase</button>
<button className="btn btn-primary my-2 mx-2" onClick={handleClearClick}>clear the tab</button>
    </div>
    <div className="container my-3" style={{color:props.mode==='dark'?'white':'#042743'}}>
      <h2>Your Text summary</h2>
      <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} charecters</p>
      <p>{0.008*text.split(/\s+/).filter((element)=>{return element.length!==0}).length} time taken to read this</p>
      <h2> Preview</h2>
      <p>{text.length>0?text:"Enter somthing to preview it here"}</p>
    </div>
    </>
    
  )
}
