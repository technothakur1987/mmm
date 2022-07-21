
import React,{useState} from 'react'

export default function TextForm(props) {
function handleonchange(e){
    console.log("handleonchange")
    setText(e.target.value)
}
function handleupclick(){
    console.log(`you have clicked `+ text.toUpperCase())
    setText(text.toUpperCase())
    //setText("you have changed the state")
    document.getElementById("myalert").style.display = "block";
   document.getElementById("myalert").innerText = `Congrats The Text Entered is Converted into Uppercase`
   document.getElementById("myalert").style.backgroundColor = 'yellow'
   document.getElementById("myalert").style.textAlign = 'center'
   document.getElementById("myalert").style.paddingTop = '3vh'
   document.getElementById("myalert").style.paddingBottom = '3vh'
   setTimeout(() => {
    document.getElementById("myalert").style.display = "none";
    
   }, 1000);
    

}
function handleloclick(){
    console.log(`converting to lowercase`+text);
    setText(text.toLowerCase())
    document.getElementById("myalert").style.display = "block";
    document.getElementById("myalert").innerText = `Congrats The Text Entered is Converted into Lowercase`
    document.getElementById("myalert").style.backgroundColor = 'yellow'
    document.getElementById("myalert").style.textAlign = 'center'
    document.getElementById("myalert").style.paddingTop = '3vh'
   document.getElementById("myalert").style.paddingBottom = '3vh'
   setTimeout(() => {
    document.getElementById("myalert").style.display = "none";
    
   }, 1000);

    
    
    

}
    const [text, setText] = useState("Enter Text Here");
    const [myStyle, setMyStyle] = useState({
        
        paddingTop: `30vh`,
        paddingBottom: `5vh`


    });
   // setText("you have changed the state")-- correct way to change the state 
    return (
        <div className={'bg-${props.bodycolor}'}>
            <div className={`container pt-3 bg-${props.bodycolor}`}>
            <div className="mb-3">
            <label forhtml="myBox" className={`form-label text-${props.color}`}>{props.heading}</label>
            <textarea className="form-control" id="myBox" row="8"  value={text} onChange={handleonchange}></textarea>
            </div>
            <button className={`btn btn-${props.color} mx-2 my-2 text-${props.mode}`} onClick={handleupclick}>{props.btnh}</button>
            <button className={`btn btn-${props.color} mx-2  my-2 text-${props.mode}`} onClick={handleloclick}>{props.btnhh}</button>   
        </div>
        <div className={`container bg-${props.bodycolor} text-${props.color}`} style={myStyle}>
            <h1>Your text summary here</h1>
            <p> {text.split(" ").length} words and {text.length} characters</p>
            <p>{(1.5*text.split(" ").length)/60} min to read</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
        </div>
    )
}
