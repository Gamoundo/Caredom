import React from 'react';




function Stories (props) {
    console.log(props)
    const displayCatFacts = (array) => {
        return (array.map((animal) => {
            return (
                <div className="stories">
                    <img src={animal.img} alt ={animal.species} width ="300" height ="300"/>
                    <p>{animal.text}</p>
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