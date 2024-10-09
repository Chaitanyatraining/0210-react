import './App.css';
import ClassComp from './ClassComp';
import Counter from './Components/Counter';
import Listskeys from './Components/Listskeys';
import StylingsComp from './Components/Stylings/StylingsComp';
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
      {/* <FuncComp courseName='Reactjs' duration={duration} /> */}
      {/* <ClassComp courseName='Reactjs' duration={duration} /> */}
      {/* <Counter /> */}
      {/* <Listskeys /> */}
      <StylingsComp />
    </div>
  );
}

export default App;
