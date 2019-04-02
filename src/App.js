import React, { Component } from 'react';
import './App.css';

const MyContext=React.createContext();
  
class MyProvider extends Component{
  state={
    name:'Raju',
    age:32,
  }
  
  render(){
    return(
      <MyContext.Provider value={{state:this.state,
     growYearOlder:()=>this.setState({
        age:this.state.age+1})}}>
        {this.props.children}
        
        })
      </MyContext.Provider>
    )
  }
}

const Family=(props)=>(
  <div className="family">
  <Person />
  </div>
)
 
class Person extends Component {
  render() { 
    return(
    <div className="Person">
   <MyContext.Consumer>
     {(context)=>(
       <React.Fragment>
       <h1>Age:{context.state.age}</h1>
       <button onClick={context.growYearOlder}>Grow</button>
       </React.Fragment>
     )

     }
   </MyContext.Consumer>
    </div>
    )
  }
}
 

class App extends Component {
  render() {
    return (
      <MyProvider>
      <div className="App">
     <Family/>
      </div>
      </MyProvider>
    );
  }
}

export default App;
