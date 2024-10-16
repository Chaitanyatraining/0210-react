import './App.css';
import ClassComp from './ClassComp';
import Counter from './Components/Counter';
import Listskeys from './Components/Listskeys';
import Navbar from './Components/Navbar';
import Pagination from './Components/Pagination';
import Routing from './Components/Routing/Routing';
import StylingsComp from './Components/Stylings/StylingsComp';
import UserData from './Components/UserData';
import FuncComp from './FuncComp';

function App() {  
  // props is nothing but an object
  // it is used to pass data from one component to another
  const duration = '3Months'

  // state
  // state is an object
  // state is to update the data within the component

  return (
    <div className="App">
      <Navbar />
      <Routing />
      {/* <FuncComp courseName='Reactjs' duration={duration} /> */}
      {/* <ClassComp courseName='Reactjs' duration={duration} /> */}
      {/* <Counter /> */}
      {/* <Listskeys /> */}
      {/* <StylingsComp /> */}
      {/* <UserData /> */}
      {/* <Pagination /> */}
    </div>
  );
}

export default App;
