import React from 'react';




function Stories (props) {
    console.log(props)
    const splitAndDisplayText = (str) => {
        const  sentences = str.split(".")
        console.log(sentences)
          return (sentences.map((sentence) => {
              return(
            <div className="sentence">
                  <p > {sentence}.</p>
              </div>
              )
              
          
          }
          ))
      }
    const displayCatFacts = (array) => {
       
        return (array.map((animal) => {
            return (
                <div className="stories">
                    <img src={animal.img} alt ={animal.species} width ="300" height ="300"/>
                    {splitAndDisplayText(animal.text)}
                </div>
            )
        }))
    }
  
    return (
        
        <div >
            {displayCatFacts(props.cats)}
        </div>
    )
}

export default Stories;