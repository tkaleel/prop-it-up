import logo from './logo.svg';
import './App.css';
import PersonCard from './components/PersonCard';

const person1 = {
  firstName: "Jane",
  lastName: "Doe",
  age: 45,
  hairColor: "Black"
}

const person2 = {
  firstName: "John",
  lastName: "Smith",
  age: 88,
  hairColor: "Brown"
}

const person3 = {
  firstName: "Millard",
  lastName: "Fillmore",
  age: 50,
  hairColor: "Brown"
}

const person4 = {
  firstName: "Maria",
  lastName: "Smith",
  age: 62,
  hairColor: "Brown"
}

function App() {
  return (
    <div className="App">
      <PersonCard person1={person1} person2={person2} person3={person3} person4={person4}/>
    </div>
  );
}

export default App;
