import React from "react";
import "./../style/MemeForm.css"

export default function MemeForm(){
    function clicked(input){
        console.log(input);
        
    }
    return(
        <div className="meme-wrapper" >
            <form className="meme-form-wrapper">
                    
                    <input className="meme-form-wrapper-input-text"  type='text' placeholder="Top Text"></input>
                    <input className="meme-form-wrapper-input-text"  type='text' placeholder="Bottom Text"></input>
                  
     
                    <input onClick={function(){clicked("Item has been clicked but, not called automagically")}} className="meme-form-wrapper-input-button" type="button" value="Generate Meme"></input>
            </form>
        </div>
    )
}