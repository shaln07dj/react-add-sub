import React,{useState}
from 'react';

function Expo(props){
    const [sum,setSum]=useState(0)

        var f=props.value
        var s
        const btnAddStyle={
            backgroundColor:"#1782EC",
            color:"#fff",
            width:"20em",
            height:"3em", 
            borderStyle:"none",
            borderRadius:"10px",
           

        }
        const btnSubStyle={
            backgroundColor:"#F54646",
            color:"#fff",
            width:"20em",
            height:"3em", 
            borderStyle:"none",
            borderRadius:"10px",
           
    

        }
        

    function calculsAdd(){

        setSum(sum+f)
    
        
     
    }
    function calculsSub(){
        setSum(sum-f)

    }
    
    return(
        <diV>
    {/*<h1>{props.value}</h1>*/}
    
    <button style={btnAddStyle} onClick={calculsAdd}>Add +</button><br/><br/>
    <button style={btnSubStyle} onClick={calculsSub}>Substract -</button><br/>
    <div style={{ marginLeft:"25%"}}><h2 style={{fontWeight:"50"}}>Result : <h3 style={{display:"inline-block",TextDecoder:"bold"}}>{sum}</h3></h2></div>
    </diV>)
    
}
export default Expo;