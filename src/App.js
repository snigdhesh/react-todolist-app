import React,{Component} from 'react';
//import logo from './logo.svg';
import './App.css';
//import Todolist from './components/Todoitem';
import Tododata from './models/Tododata';
import Todoitem from './components/Todoitem';

class App extends Component {
  constructor(){
    super();
    this.state={
      tododata: Tododata
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(id){
    console.log("changed",id);
    this.setState(prevState=>{
      const tododatareplica=prevState.tododata.map(item=>{
        if(item.id===id){
          item.completed=!item.completed
        }
        return item
      })
      return {
        tododata:tododatareplica
      }
    })
  }

  render(){
    const todoreplica=Tododata.map(item=>{return <Todoitem key={item.id} item={item} handleChange={this.handleChange}/>})
    return (
      <div className="App">
        <div className="todo-box">
        <h2>To do list</h2><hr/>
        {todoreplica}</div>
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header> */}
      </div>
    );
  }
 
}

export default App;
