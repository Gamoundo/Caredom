import React from 'react';


class Dog extends React.Component{

    state = {
        dogFacts: []
       }
       
       componentDidMount() {
           fetch("https://dog-facts-api.herokuapp.com/api/v1/resources/dogs/?number=5")
           .then(resp => resp.json())
           .then(dogFacts => this.setState({ dogFacts}))
           
         }
         displaydogFacts = (array) => {
           return (array.map((dogFact) => {
               return (
                   <div className="facts">
                       <p>{dogFact.fact}</p>
                   </div>
               )
           }))
       }
       
       render(){
           console.log(this.state.dogFacts)
        return (
            <div className="factDisplay">
                 {this.displaydogFacts(this.state.dogFacts)}
            </div>
        )
       }
           

}




export default Dog;