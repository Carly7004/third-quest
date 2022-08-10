import LiftingState from "./components/LiftStateUp/LiftingState";
import CreatingNew from "./components/NoteApp/CreatingNew";
import LiftUpState from "./LiftUpState";
import './App.css';
import DisplayEmployee from "./components/FetchDataApi/DisplayEmployee";
import { useState } from "react";
import axios from "axios";



function App() {
  const [employee, setEmployee] = useState(null);

  const getEmployee = () => {
    axios.get("https://randomuser.me/api?nat=en")
    .then((res) => res.data)
    .then((data) => {
      setEmployee(data.results[0]);
      console.log(data)
    })

  }

  // const sampleEmployee = {
  //   gender: 'male',
  //   name: {
  //     first: 'Charlie',
  //     last: 'Thompson',
  //   },
  //   location: {
  //     street: {
  //       number: 761,
  //       name: 'Tay Street',
  //     },
  //     city: 'Timaru',
  //     postcode: 76111,
  //   },
  //   email: 'charlie.thompson@example.com',
  //   picture: {
  //     medium: 'https://randomuser.me/api/portraits/med/men/40.jpg',
  //   },
  // };

  return (
    <div className="App">

      <LiftingState />
      <br/>
      <CreatingNew />
      <br/>
      <LiftUpState />
      <DisplayEmployee employee={employee}/>
      <br/>
      <button type="button" onClick={getEmployee}>Get employee</button>

    </div>
  );
}

export default App;
