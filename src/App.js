import logo from './logo.svg';
import './App.css';
import Greeting from './components/pure/greeting';
import GreetingF from './components/pure/greetingF';
import TaskList from './components/container/task_list';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* Adjuntamos el componente greeting que creamos tipo clase greeting.jsx */}      
        {/*<Greeting name = "Alejo"></Greeting> */}
        {/* Adjuntamos el componente greeting que creamos tipo función greetingF.jsx */}   
        {/*<GreetingF name="Nathalia"></GreetingF>*/}
        <TaskList></TaskList>
      </header>
    </div>
  );
}

export default App;
