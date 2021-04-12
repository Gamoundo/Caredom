import React from 'react';
import Links from './links';
import Stories from './Stories';





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
       
    catStories = [
        {"species" : "cat",
        "img" : "https://animalpath.org/wp-content/uploads/2020/05/My-Cat-Is-So-Skinny-I-Can-Feel-Her-Bones.jpg",
        "text" : "People go in half-cocked about getting a pet. Not really thinking about what it means. It is not something you do for fun. Your fun should definitely not come at a cost to them."
        },
        {
            "species" : "cat",
            "img" : "https://care4catsibiza.org/wp-content/uploads/2016/09/maxresdefault-1-1030x579.jpg",
            "text" : "Quick to abandon things when it gets tough? Don't get a pet."
        }
    ]


    render(){
      
       
  
        console.log(this.state.catFacts)
        return (
            <div>
                <div className="factDisplay">
                {this.displayCatFacts(this.state.catFacts)}
            </div>
            <div>
                <Stories cats={this.catStories} name="cats"/>
                <Links />
            </div>
            </div>
            
        )
    }
    
}

export default Cats;