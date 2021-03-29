import React from 'react';





class Cats extends React.Component{
    
    state = {
        catFacts: []
    }
    
    componentDidMount() {
        fetch("https://cat-fact.herokuapp.com/facts")
        .then(resp => resp.json())
        .then(catFacts => this.setState({ catFacts}))
        
      }
      displayCatFacts = (array) => {
        return (array.map((catFact) => {
            return (
                <div className="facts">
                    <p>{catFact.text}</p>
                </div>
            )
        }))
    }
       


    render(){
      
       

        console.log(this.state.catFacts)
        return (
            <div className="factDisplay">
                {this.displayCatFacts(this.state.catFacts)}
            </div>
        )
    }
    
}

export default Cats;