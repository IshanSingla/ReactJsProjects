import {useState} from 'react'


export default function TextForm(props) {
    const handleUpClick = ()=>{
        // console.log("Uppercase was clicked: " +  text);
        let newText = text.toUpperCase();
        setText(newText)
    }

    const handleOnChange = (event)=>{
        // console.log("On change");
        setText(event.target.value)
    }
    const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
      }
    const handleReverse = (event) => {
        let strArr = text.split("");
        strArr = strArr.reverse();
        let newText = strArr.join("");
        setText(newText);
      };
    const handletextExtract =()=>{
        const regex = /[0-9/A-Z/a-z/ /]/g;

        const letters = text.match(regex);
        const res1 = letters.join('');
        setText(res1)
    }

    const [text, setText] = useState('Enter text here2'); 
    // text = "new text"; // Wrong way to change the state
    // setText("new text"); // Correct way to change the state
    return (
        <div> 
            <h1>{props.heading}</h1>
            <div className="mb-3"> 
            <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-warning mx-2 my-2" onClick={speak} >Speak</button>
            <button className="btn btn-warning mx-2 my-2" onClick={handleReverse} >Reverce Of Words</button>
            <button className="btn btn-warning mx-2 my-2" onClick={handletextExtract} >Symbols</button>
            <button className="btn btn-warning mx-2 my-2" onClick={handleReverse} >Reverce Of Words</button>
            <button className="btn btn-warning mx-2 my-2" onClick={handleReverse} >Reverce Of Words</button>
        </div>
    )
}
