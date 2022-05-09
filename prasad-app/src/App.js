
import './App.css';
import Hello from './components/Hello';
import Welcome from './components/Welcome';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';



function App() {
  return (
    <div className="App">
      <Message/>
      
      <Counter></Counter>

      <Hello name='Prasad' />
      {/*<p>this is child</p>*/}
      
      {/*
      <Hello name='John' />
      <button>CLICK ME</button>
      
      <Hello name='Rocky' />
      <input type='text'/> */}
      
      <Welcome name='Prasad'></Welcome> 

      <FunctionClick></FunctionClick>

      <ClassClick></ClassClick>

      <EventBind></EventBind>
      
      <ParentComponent></ParentComponent>

      <UserGreeting></UserGreeting>

      <NameList></NameList>

    </div>
  );
}

export default App;
