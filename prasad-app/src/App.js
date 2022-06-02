
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
import TeacherComponent from './components/TeacherComponent';
import StyleSheet from './components/StyleSheet';
import Inline from './components/Inline';
import Form from './components/Form';
import LifeCycleA from './components/LifeCycleA';
import FragmentDemo from './components/FragmentDemo';
import ClickCounter from './components/ClickCounter';
// import MemoComp from './components/MemoComp';
import PostList from './components/PostList';
import PostForm from './components/PostForm';



function App() {
  return (
    <div className="App">
      <Message/>
      
      <Counter></Counter>

      {/* <Hello name='Prasad' /> */}
      {/*<p>this is child</p>*/}
      
      {/*
      <Hello name='John' />
      <button>CLICK ME</button>
      
      <Hello name='Rocky' />
      <input type='text'/> */}
      
      {/* <Welcome name='Prasad'></Welcome>  */}

      {/* <FunctionClick></FunctionClick> */}

      {/* <ClassClick></ClassClick> */}

      {/* <EventBind></EventBind> */}
      
      {/* <ParentComponent></ParentComponent> */}

      {/* <UserGreeting></UserGreeting> */}

      {/* <NameList></NameList> */}

      <TeacherComponent></TeacherComponent>

      {/* <StyleSheet></StyleSheet> */}

      {/* <Inline></Inline> */}

      {/* <Form></Form> */}

      {/* <LifeCycleA></LifeCycleA> */}

      <FragmentDemo></FragmentDemo>

      {/* <MemoComp></MemoComp> */}

      <ClickCounter/>

      {/* <PostList></PostList> */}

      <PostForm></PostForm>

    </div>
  );
}

export default App;
