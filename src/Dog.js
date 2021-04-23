import React from 'react';
import Links from './links';
import Stories from './Stories';


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

       dogVideos = {
           
       }
       dogStories = [
        {"species" : "dog",
        "img" : "https://assets3.thrillist.com/v1/image/2705269/381x254/scale;jpeg_quality=65.jpg",
        "text" : "They are man's best friend. Make sure you are a faithful friend to them. Make them happy, because they only want you to be happy."
        },
        {
            "species" : "dog",
            "img" : "https://149366112.v2.pressablecdn.com/wp-content/uploads/2020/04/shutterstock_1371275822.jpg",
            "text" : "They won't survive. Don't abandon them."
        }
    ]
       
       render(){
           console.log(this.state.dogFacts)
        return (
            <div>
                <div className="factDisplay">
                 {this.state.dogFacts && this.displaydogFacts(this.state.dogFacts)}
            </div>
            <div>
                <Stories dogs={this.dogStories} name="dogs"/>
                <Links />
            </div>
            </div>
            
        )
       }
           

}




export default Dog;