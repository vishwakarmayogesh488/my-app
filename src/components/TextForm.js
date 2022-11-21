import React,{useState} from 'react'
export default function TextForm(props) {
  const handleUpclick = () =>{
    // console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert("covert to uppercase","success")
  }
  const handlelowclick = () =>{
    // console.log("Uppercase was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText)
    props.showAlert("covert to lowercase","success")

  }
  const handlecleaerclick = () =>{
    // console.log("Uppercase was clicked" + text);
    let newText = '';
    setText(newText)
    props.showAlert(" clear text","success")

  }
  const handlecopy = () =>{
     console.log("i am copy");
    let text = document.getElementById('MyBox')
    text.select();
    navigator.clipboard.writeText (text.value);
    props.showAlert("copy to clipboard","success")

  }
  const handleOnChange = (event) =>{
    // console.log('On change');
    setText(event.target.value);
  }
  const[text, setText] = useState('Enter text here');
  // setText("new text");
  return (
    <>
    <div className='container'  style={{color:props.mode==='dark'?' white':'black'}}>
    <h1>{props.heading}</h1>
<div className="mb-3">
  <textarea className="form-control" value={text} onChange={handleOnChange}
   style={{backgroundColor:props.mode==='dark'?' gray':'white',color:props.mode==='dark'?' white':'black'}} id="MyBox" rows="8"></textarea>
</div>
 
<button className="btn btn-primary mx-2" onClick={handleUpclick}>Convert to Uppercase</button>
<button className="btn btn-primary mx-2" onClick={handlelowclick}>Convert to lowercase</button>
<button className="btn btn-primary mx-2" onClick={handlecleaerclick}>Clear Text </button>
<button className="btn btn-primary" onClick={handlecopy}>copy to clipbord</button>



      
    </div>
    <div className="container my-3"  style={{color:props.mode==='dark'?' white':'black'}}>
      <h1>your text summry</h1>
      <p>{text.split(" ").length} word and {text.length} 4532324 characters</p>
      <p>{0.008 * text.split(" ").length} Minutes read</p>
      <h2>preview</h2>
      <p>{text.length>0?text:"Enter something to preview it here"}</p>
    </div>
    </>
  )
}
