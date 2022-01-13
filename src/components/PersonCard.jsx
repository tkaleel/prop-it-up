import React, {Component} from "react";

class PersonCard extends Component {
    constructor(props){
        super(props);
        console.log(props);
        // const {firstName, lastName, age, hairColor} = this.props.person1;
        this.state = {
            age1: this.props.person1.age,
            age2: this.props.person2.age,
            age3: this.props.person3.age,
            age4: this.props.person4.age
        }
    }

    increaseAge1 = () => {
        this.setState({
            age1: this.state.age1 +1
        })
    }

    increaseAge2 = () => {
        this.setState({
            age2: this.state.age2 +1
        })
    }

    increaseAge3 = () => {
        this.setState({
            age3: this.state.age3 +1
        })
    }

    increaseAge4 = () => {
        this.setState({
            age4: this.state.age4 +1
        })
    }

    render() {
        return (
            <div>
                <h1>{this.props.person1.lastName}, {this.props.person1.firstName}</h1>
                <p>Age: {this.state.age1}</p>
                <p>Hair Color: {this.props.person1.hairColor}</p>
                <button onClick={() => this.increaseAge1()} >Birthday Button for {this.props.person1.firstName} {this.props.person1.lastName}</button>

                <h1>{this.props.person2.lastName}, {this.props.person2.firstName}</h1>
                <p>Age: {this.state.age2}</p>
                <p>Hair Color: {this.props.person2.hairColor}</p>
                <button onClick={() => this.increaseAge2()}>Birthday Button for {this.props.person2.firstName} {this.props.person2.lastName}</button>

                <h1>{this.props.person3.lastName}, {this.props.person3.firstName}</h1>
                <p>Age: {this.state.age3}</p>
                <p>Hair Color: {this.props.person3.hairColor}</p>
                <button onClick={() => this.increaseAge3()}>Birthday Button for {this.props.person3.firstName} {this.props.person3.lastName}</button>

                <h1>{this.props.person4.lastName}, {this.props.person4.firstName}</h1>
                <p>Age: {this.state.age4}</p>
                <p>Hair Color: {this.props.person4.hairColor}</p>
                <button onClick={() => this.increaseAge4()}>Birthday Button for {this.props.person4.firstName} {this.props.person4.lastName}</button>

            </div>
            

        )
    }
}

export default PersonCard;