import React, {Component} from "react";

class PersonCard extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.person1.lastName}, {this.props.person1.firstName}</h1>
                <p>Age: {this.props.person1.age}</p>
                <p>Hair Color: {this.props.person1.hairColor}</p>

                <h1>{this.props.person2.lastName}, {this.props.person2.firstName}</h1>
                <p>Age: {this.props.person2.age}</p>
                <p>Hair Color: {this.props.person2.hairColor}</p>

                <h1>{this.props.person3.lastName}, {this.props.person3.firstName}</h1>
                <p>Age: {this.props.person3.age}</p>
                <p>Hair Color: {this.props.person3.hairColor}</p>

                <h1>{this.props.person4.lastName}, {this.props.person4.firstName}</h1>
                <p>Age: {this.props.person4.age}</p>
                <p>Hair Color: {this.props.person4.hairColor}</p>

            </div>
            

        )
    }
}

export default PersonCard;