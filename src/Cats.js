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




    render(){
        console.log(this.state.catFacts)
        return (
            <div>
                <p> ...</p>
            </div>
        )
    }
    
}

export default Cats;